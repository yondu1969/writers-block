import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Send from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import dummyContents from 'enl-api/dummy/dummyContents';
import Type from 'enl-styles/Typography.scss';
import { injectIntl } from 'react-intl';
import MessageField from './MessageField';
import ChatHeader from './ChatHeader';
import styles from './chatStyle-jss';
import messages from './messages';

function ChatRoom(props) {
  const field = useRef(null);
  const [message, setMessage] = useState('');

  const handleWrite = (e, value) => {
    setMessage(value);
  };

  const resetInput = () => {
    const ctn = document.getElementById('roomContainer');
    setMessage('');
    field.current.value = '';
    setTimeout(() => {
      ctn.scrollTo(0, ctn.scrollHeight);
    }, 300);
  };

  const sendMessageByEnter = (event, msg) => {
    const { sendMessage } = props;
    if (event.key === 'Enter' && event.target.value !== '') {
      sendMessage(msg.__html);
      resetInput();
    }
  };

  const sendMessage = msg => {
    props.sendMessage(msg.__html);
    resetInput();
  };

  const html = { __html: message };
  const {
    classes,
    dataChat,
    chatSelected,
    dataContact,
    showMobileDetail,
    remove,
    hideDetail,
    intl
  } = props;

  const getChat = dataArray => dataArray.map(data => {
    const renderHTML = { __html: data.message };
    return (
      <li className={data.from === 'contact' ? classes.from : classes.to} key={data.id}>
        <time dateTime={data.date + ' ' + data.time}>{data.date + ' ' + data.time}</time>
        {data.from === 'contact' ? (
          <Avatar alt="avatar" src={dataContact[chatSelected].avatar} className={classes.avatar} />
        ) : (
          <Avatar alt="avatar" src={dummyContents.user.avatar} className={classes.avatar} />
        )}
        <div className={classes.talk}>
          <p><span dangerouslySetInnerHTML={renderHTML} /></p>
        </div>
      </li>
    );
  });

  return (
    <div className={classNames(classes.root, classes.content, showMobileDetail ? classes.detailPopup : '')}>
      <ChatHeader
        dataContact={dataContact}
        chatSelected={chatSelected}
        remove={remove}
        showMobileDetail={showMobileDetail}
        hideDetail={hideDetail}
      />
      <ul className={classes.chatList} id="roomContainer">
        {dataChat.length > 0 ? getChat(dataChat) : (<Typography display="block" variant="caption" className={Type.textCenter}>{'You haven\'t made any conversation yet'}</Typography>)}
      </ul>
      <Paper className={classes.writeMessage}>
        <MessageField
          onChange={handleWrite}
          passedRef={field}
          placeholder={intl.formatMessage(messages.placeholder)}
          fieldType="input"
          value={message}
          onKeyPress={(event) => sendMessageByEnter(event, html)}
        />
        <Tooltip id="tooltip-send" title={intl.formatMessage(messages.send)}>
          <div>
            <IconButton mini="true" color="secondary" disabled={message === ''} onClick={() => sendMessage(html)} aria-label="send" className={classes.sendBtn}>
              <Send />
            </IconButton>
          </div>
        </Tooltip>
      </Paper>
    </div>
  );
}

ChatRoom.propTypes = {
  classes: PropTypes.object.isRequired,
  dataChat: PropTypes.array.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  chatSelected: PropTypes.number.isRequired,
  dataContact: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(ChatRoom));

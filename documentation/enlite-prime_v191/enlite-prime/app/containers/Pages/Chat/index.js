import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { ContactList, ChatRoom } from 'enl-components';
import styles from 'enl-components/Contact/contact-jss';
import {
  fetchChatAction,
  showChatAction,
  sendAction,
  hideDetailAction,
  deleteAction
} from './reducers/chatActions';
import { fetchAction, searchAction } from '../../SampleApps/Contact/reducers/contactActions';
import contactData from '../../SampleApps/Contact/api/contactData';
import chatData from './api/chatData';

function Chat(props) {
  // Redux State
  const dataContact = useSelector(state => state.contact.contactList);
  const dataChat = useSelector(state => state.chat.activeChat);
  const chatSelected = useSelector(state => state.chat.chatSelected);
  const showMobileDetail = useSelector(state => state.chat.showMobileDetail);
  const keyword = useSelector(state => state.contact.keywordValue);

  // Dispatcher
  const fetchContactData = useDispatch();
  const fetchChatData = useDispatch();
  const hideDetail = useDispatch();
  const showDetail = useDispatch();
  const search = useDispatch();
  const sendMessage = useDispatch();
  const remove = useDispatch();

  useEffect(() => {
    fetchChatData(fetchChatAction(chatData));
    fetchContactData(fetchAction(contactData));
  }, []);

  const title = brand.name + ' - Chat App';
  const description = brand.desc;
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div className={classes.root}>
        <ContactList
          total={dataContact.length}
          itemSelected={chatSelected}
          dataContact={dataContact}
          showDetail={(payload) => showDetail(showChatAction(payload))}
          search={(payload) => search(searchAction(payload))}
          keyword={keyword}
        />
        <ChatRoom
          showMobileDetail={showMobileDetail}
          dataChat={dataChat}
          chatSelected={chatSelected}
          dataContact={dataContact}
          sendMessage={(payload) => sendMessage(sendAction(payload))}
          remove={() => remove(deleteAction)}
          hideDetail={() => hideDetail(hideDetailAction)}
        />
      </div>
    </div>
  );
}

Chat.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chat);

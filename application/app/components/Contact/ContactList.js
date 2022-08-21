import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import Add from '@material-ui/icons/Add';
import Star from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import PlaceLoader from './PlaceLoader';
import styles from './contact-jss';

function ContactList(props) {
  const {
    classes,
    dataContact,
    itemSelected,
    showDetail,
    search,
    keyword,
    clippedRight,
    addContact,
    addFn, total,
    loading, intl
  } = props;
  const [filter, setFilter] = useState('all');
  const handleChange = (event, value) => setFilter(value);

  const favoriteData = dataContact.filter(item => item.favorited === true);
  const getItem = dataArray => dataArray.map(data => {
    const index = dataContact.indexOf(data);
    if (data.name.toLowerCase().indexOf(keyword) === -1) {
      return false;
    }
    return (
      <ListItem
        button
        key={data.key}
        className={index === itemSelected ? classes.selected : ''}
        onClick={() => showDetail(data)}
      >
        <ListItemAvatar>
          <Avatar alt={data.name} src={data.avatar} className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText primary={data.name} secondary={data.title} />
      </ListItem>
    );
  });

  return (
    <Fragment>
      <Drawer
        variant="permanent"
        anchor="left"
        open
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <div className={classNames(classes.toolbar, clippedRight && classes.clippedRight)}>
            <div className={classes.flex}>
              <div className={classes.searchWrapper}>
                <div className={classes.search}>
                  <SearchIcon />
                </div>
                <input className={classes.input} onChange={(event) => search(event)} placeholder={intl.formatMessage(messages.search)} />
              </div>
              {addFn && (
                <Tooltip title={intl.formatMessage(messages.add_contacts)}>
                  <IconButton className={classes.buttonAdd} onClick={() => addContact()} color="secondary" aria-label="Delete">
                    <Add />
                  </IconButton>
                </Tooltip>
              )}
            </div>
          </div>
          <div className={classes.total}>
            {total}
            &nbsp;
            <FormattedMessage {...messages.contacts} />
          </div>
          {loading
            ? <PlaceLoader loop={6} />
            : (
              <List className={classes.contactList}>
                {filter === 'all' ? getItem(dataContact) : getItem(favoriteData)}
              </List>
            )
          }
        </div>
      </Drawer>
      <BottomNavigation value={filter} onChange={handleChange} className={classes.bottomFilter}>
        <BottomNavigationAction value="all" label={intl.formatMessage(messages.all)} icon={<PermContactCalendar />} />
        <BottomNavigationAction value="favorites" label={intl.formatMessage(messages.favorites)} icon={<Star />} />
      </BottomNavigation>
    </Fragment>
  );
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  dataContact: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
  itemSelected: PropTypes.number.isRequired,
  addContact: PropTypes.func,
  addFn: PropTypes.bool,
  showDetail: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  clippedRight: PropTypes.bool,
  loading: PropTypes.bool,
  intl: PropTypes.object.isRequired
};

ContactList.defaultProps = {
  clippedRight: false,
  addContact: () => {},
  addFn: false,
  loading: false,
};

export default withStyles(styles)(injectIntl(ContactList));

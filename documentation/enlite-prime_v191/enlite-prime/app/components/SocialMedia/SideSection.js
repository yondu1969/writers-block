import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import imgApi from 'enl-api/images/photos';
import avatarApi from 'enl-api/images/avatars';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import PapperBlock from '../PapperBlock/PapperBlock';
import NewsCard from '../CardPaper/NewsCard';
import ProfileCard from '../CardPaper/ProfileCard';
import styles from './jss/socialMedia-jss';

const slideData = [
  {
    label: 'How to be happy :)',
    imgPath: imgApi[49],
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: imgApi[17],
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: imgApi[34],
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: imgApi[10],
  },
  {
    label: '4. And contribute to Material-UI :D',
    imgPath: imgApi[40]
  },
];

function SideSection(props) {
  const [activeStepSwipe, setActiveStepSwipe] = useState(0);
  const { classes, theme, intl } = props;

  const handleNextSwipe = () => {
    setActiveStepSwipe(swipe => swipe + 1);
  };

  const handleBackSwipe = () => {
    setActiveStepSwipe(swipe => swipe - 1);
  };

  const handleStepChangeSwipe = swipe => {
    setActiveStepSwipe(swipe);
  };

  const maxStepsSwipe = slideData.length;
  return (
    <div>
      {/* Profile */}
      <ProfileCard
        cover={imgApi[43]}
        avatar={avatarApi[6]}
        name="John Doe"
        title="UX designer"
        connection={10}
        btnText={intl.formatMessage(messages.my_profile)}
        isVerified
      />
      <Divider className={classes.divider} />
      {/* ----------------------------------------------------------------------*/}
      {/* News Or Ads Section */}
      <Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStepSwipe}
          onChangeIndex={handleStepChangeSwipe}
          enableMouseEvents
          className={classes.sliderWrap}
        >
          {slideData.map((slide, index) => (
            <div className={classes.figure} key={index.toString()}>
              <NewsCard
                image={slide.imgPath}
                title="slide.label"
                className={classes.sliderContent}
              >
                <Typography gutterBottom className={classes.title} variant="h5" component="h2">
                  {slide.label}
                </Typography>
              </NewsCard>
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="dots"
          steps={maxStepsSwipe}
          position="static"
          activeStep={activeStepSwipe}
          className={classes.mobileStepper}
          nextButton={(
            <Button size="small" onClick={handleNextSwipe} disabled={activeStepSwipe === maxStepsSwipe - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          )}
          backButton={(
            <Button size="small" onClick={handleBackSwipe} disabled={activeStepSwipe === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </Paper>
      {/* ----------------------------------------------------------------------*/}
      {/* People */}
      <PapperBlock
        title={intl.formatMessage(messages.people)}
        icon="account_circle"
        whiteBg
        noMargin
        desc=""
      >
        <List component="nav" dense className={classes.profileList}>
          <ListItem button className={classes.listPeople}>
            <ListItemAvatar>
              <Avatar className={classNames(classes.avatar, classes.orangeAvatar)}>H</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Harry Wells" secondary={`2 ${intl.formatMessage(messages.mutual_connection)}`} />
            <Button color="secondary" size="small">
              <FormattedMessage {...messages.connect} />
            </Button>
          </ListItem>
          <ListItem button className={classes.listPeople}>
            <ListItemAvatar>
              <Avatar className={classNames(classes.avatar, classes.purpleAvatar)}>J</Avatar>
            </ListItemAvatar>
            <ListItemText primary="John Doe" secondary={`12 ${intl.formatMessage(messages.mutual_connection)}`} />
            <Button color="secondary" size="small">
              <FormattedMessage {...messages.connect} />
            </Button>
          </ListItem>
          <ListItem button className={classes.listPeople}>
            <ListItemAvatar>
              <Avatar className={classNames(classes.avatar, classes.pinkAvatar)}>V</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Victor Wanggai" secondary={`7 ${intl.formatMessage(messages.mutual_connection)}`} />
            <Button color="secondary" size="small">
              <FormattedMessage {...messages.connect} />
            </Button>
          </ListItem>
          <ListItem button className={classes.listPeople}>
            <ListItemAvatar>
              <Avatar className={classNames(classes.avatar, classes.greenAvatar)}>H</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Baron Phoenix" secondary={`5 ${intl.formatMessage(messages.mutual_connection)}`} />
            <Button color="secondary" size="small">
              <FormattedMessage {...messages.connect} />
            </Button>
          </ListItem>
        </List>
        <Divider className={classes.divider} />
        <Grid container justifyContent="center">
          <Button color="secondary" className={classes.button}>
            <FormattedMessage {...messages.see_all} />
          </Button>
        </Grid>
      </PapperBlock>
      <Divider className={classes.divider} />
      {/* ----------------------------------------------------------------------*/}
      {/* Trending */}
      <PapperBlock title={intl.formatMessage(messages.trend)} icon="flash_on" whiteBg desc="">
        <List dense className={classes.trendingList}>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Lorem ipsum dolor</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.post)}`} />
          </ListItem>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Aliquam venenatis</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.post)}`} />
          </ListItem>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Nam sollicitudin</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.post)}`} />
          </ListItem>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Cras convallis</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.connection)}`} />
          </ListItem>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Aenean sit amet</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.connection)}`} />
          </ListItem>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Quisque</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.connection)}`} />
          </ListItem>
          <ListItem className={classes.noPadding}>
            <a href="#" className={classes.link}>#Lorem ipusm dolor</a>
            <ListItemText secondary={`123 ${intl.formatMessage(messages.connection)}`} />
          </ListItem>
        </List>
      </PapperBlock>
    </div>
  );
}

SideSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(injectIntl(SideSection));

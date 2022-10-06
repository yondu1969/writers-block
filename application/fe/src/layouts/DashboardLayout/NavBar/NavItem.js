import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify-icons/eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify-icons/eva/arrow-ios-downward-fill';
import { alpha, makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    ...theme.typography.body2,
    height: 48,
    textTransform: 'capitalize',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary
  },
  subIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      width: 4,
      height: 4,
      content: "''",
      display: 'block',
      borderRadius: '50%',
      backgroundColor: theme.palette.text.disabled,
      transition: theme.transitions.create('transform')
    }
  },
  isActiveListItem: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    '&:before': {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      position: 'absolute',
      backgroundColor: theme.palette.primary.main
    }
  },
  isActiveListItemSub: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    '& $subIcon:before': {
      transform: 'scale(2)',
      backgroundColor: theme.palette.primary.main
    }
  }
}));

// ----------------------------------------------------------------------

NavItem.propTypes = {
  level: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  info: PropTypes.element,
  icon: PropTypes.element,
  open: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

function NavItem({
  level,
  title,
  href,
  info,
  icon,
  open = false,
  children,
  className,
  ...other
}) {
  const classes = useStyles();
  const [show, setShow] = useState(open);
  const isSubItem = level > 0;

  const handleShow = () => {
    setShow((show) => !show);
  };

  if (children) {
    return (
      <>
        <ListItem
          button
          disableGutters
          onClick={handleShow}
          className={clsx(
            classes.listItem,
            {
              [classes.isActiveListItem]: open
            },
            className
          )}
          {...other}
        >
          <ListItemIcon>{icon && icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            component={Icon}
            icon={show ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItem>

        <Collapse in={show}>{children}</Collapse>
      </>
    );
  }

  return (
    <ListItem
      button
      to={href}
      exact={open}
      disableGutters
      component={RouterLink}
      activeClassName={
        isSubItem ? classes.isActiveListItemSub : classes.isActiveListItem
      }
      className={clsx(classes.listItem, className)}
      isActive={(match, location) => {
        if (!match) {
          return false;
        }
        const { url } = match;
        const { pathname } = location;
        const isMatch = url === pathname;

        if (!isSubItem) {
          return url.length && pathname.includes(url);
        }

        return isMatch;
      }}
      {...other}
    >
      <ListItemIcon className={classes.listItemIcon}>
        {isSubItem ? <span className={classes.subIcon} /> : icon}
      </ListItemIcon>
      <ListItemText disableTypography primary={title} />

      {info && info}
    </ListItem>
  );
}

export default NavItem;

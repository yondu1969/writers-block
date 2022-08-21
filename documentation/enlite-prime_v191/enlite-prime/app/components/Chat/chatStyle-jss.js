import { alpha } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: theme.palette.text.primary,
    maxHeight: 540,
  },
  chatList: {
    padding: `${theme.spacing(6)}px ${theme.spacing(3)}px`,
    overflow: 'auto',
    minHeight: 'calc(100% - 100px)',
    marginTop: 95,
    borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[300]}`,
    background: theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      marginTop: 100,
      background: theme.palette.type === 'dark' ? alpha(theme.palette.grey[800], 0.75) : alpha(theme.palette.background.paper, 0.95),
    },
    '& li': {
      marginBottom: theme.spacing(6),
      display: 'flex',
      position: 'relative',
      '& time': {
        position: 'absolute',
        top: -20,
        color: theme.palette.grey[500],
        fontSize: 11
      }
    },
  },
  content: {
    flexGrow: 1,
    transition: 'left 0.4s ease-out, opacity 0.4s ease-out',
    [theme.breakpoints.down('xs')]: {
      left: '100%',
      top: 0,
      opacity: 0,
      position: 'absolute',
      zIndex: 10000,
      width: '100%',
      height: '100%',
    }
  },
  detailPopup: {
    [theme.breakpoints.down('xs')]: {
      left: 0,
      opacity: 1,
    }
  },
  talk: {
    flex: 1,
    '& p': {
      marginBottom: 10,
      position: 'relative',
      '& span': {
        padding: 10,
        borderRadius: 10,
        display: 'inline-block'
      }
    }
  },
  avatar: {},
  from: {
    '& time': {
      left: 60,
    },
    '& $avatar': {
      marginRight: 20
    },
    '& $talk': {
      '& > p': {
        '& span': {
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: theme.shadows[1],
          color: theme.palette.common.white
        },
        '&:first-child': {
          '& span': {
            borderTopLeftRadius: 0,
          },
          '&:after': {
            content: '""',
            borderRight: `10px solid ${theme.palette.secondary.dark}`,
            borderBottom: '15px solid transparent',
            position: 'absolute',
            left: -9,
            top: 0
          },
        }
      }
    }
  },
  to: {
    flexDirection: 'row-reverse',
    '& time': {
      right: 60,
    },
    '& $avatar': {
      marginLeft: 20
    },
    '& $talk': {
      textAlign: 'right',
      '& > p': {
        '& span': {
          textAlign: 'left',
          backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
          boxShadow: theme.shadows[1]
        },
        '&:first-child': {
          '& span': {
            borderTopRightRadius: 0,
          },
          '&:after': {
            content: '""',
            borderLeft: theme.palette.type === 'dark' ? `10px solid ${theme.palette.primary.dark}` : `10px solid ${theme.palette.primary.light}`,
            borderBottom: '15px solid transparent',
            position: 'absolute',
            right: -9,
            top: 0
          },
        }
      }
    }
  },
  messageBox: {
    border: 'none',
    padding: 0,
    outline: 'none',
    width: '100%',
    '&:after, &:before': {
      display: 'none'
    }
  },
  writeMessage: {
    bottom: theme.spacing(8),
    display: 'flex',
    minHeight: 55,
    margin: '0 16px',
    alignItems: 'center',
    padding: '0 10px',
    borderRadius: 50,
    boxShadow: theme.shadows[2],
    border: `1px solid ${theme.palette.primary.main}`,
    position: 'relative',
    '& > div:first-child': {
      height: '100%',
      flex: 1,
    },
    '& input': {
      color: theme.palette.text.primary,
      background: 'transparent',
      width: '100%',
      height: '100%',
      margin: 0,
      padding: '2px 20px 2px 2px',
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }
  },
});

export default styles;

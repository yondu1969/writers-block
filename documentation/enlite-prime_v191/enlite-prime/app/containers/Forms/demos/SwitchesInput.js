import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: `${theme.spacing(1)}px 0`,
  },
  switchBase: {
    color: green[50],
    '&$checked': {
      color: green[500],
      '& + $bar': {
        backgroundColor: green[500],
      },
    },
  },
  bar: {},
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
});

function RadioButton(props) {
  const { classes } = props;
  const [dataState, setDataState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    gilad: true,
    jason: false,
    antonie: true
  });

  const handleChange = name => event => {
    setDataState({
      ...dataState,
      [name]: event.target.checked
    });
  };

  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="space-around"
        direction="row"
        spacing={3}
      >
        <Grid
          item
          md={3}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Basic usage</Typography>
          <div>
            <Switch
              checked={dataState.checkedA}
              onChange={handleChange('checkedA')}
              value="checkedA"
            />
            <Switch
              checked={dataState.checkedB}
              onChange={handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
            <Switch value="checkedC" />
            <Switch disabled value="checkedD" />
            <Switch disabled checked value="checkedE" />
            <Switch defaultChecked value="checkedF" color="default" />
          </div>
        </Grid>
        <Grid
          item
          md={4}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Switch with label</Typography>
          <Typography className={classes.divider}>Switch can also be used with a label description thanks to the FormControlLabel component.</Typography>
          <div>
            <FormGroup row>
              <FormControlLabel
                control={(
                  <Switch
                    checked={dataState.checkedA}
                    onChange={handleChange('checkedA')}
                    value="checkedA"
                  />
                )}
                label="Secondary"
              />
              <FormControlLabel
                control={(
                  <Switch
                    checked={dataState.checkedB}
                    onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                )}
                label="Primary"
              />
              <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" />
              <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" />
              <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" />
              <FormControlLabel
                control={(
                  <Switch
                    checked={dataState.checkedF}
                    onChange={handleChange('checkedF')}
                    value="checkedF"
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.checked,
                      track: classes.bar,
                    }}
                  />
                )}
                label="Custom color"
              />
            </FormGroup>
          </div>
        </Grid>
        <Grid
          item
          md={5}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Switch in Form Group</Typography>
          <Typography className={classes.divider}>FormGroup is a helpful wrapper used to group selection controls components that provides an easier API. However, we encourage you to use a Checkbox instead.</Typography>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">Assign responsibility</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={(
                    <Switch
                      checked={dataState.gilad}
                      onChange={handleChange('gilad')}
                      value="gilad"
                    />
                  )}
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={(
                    <Switch
                      checked={dataState.jason}
                      onChange={handleChange('jason')}
                      value="jason"
                    />
                  )}
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={(
                    <Switch
                      checked={dataState.antonie}
                      onChange={handleChange('antonie')}
                      value="antonie"
                    />
                  )}
                  label="Antoine Llorca"
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButton);

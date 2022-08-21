import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import imgData from 'enl-api/images/imgData';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Type from 'enl-styles/Typography.scss';
import 'enl-styles/vendors/slick-carousel/slick-carousel.css';
import 'enl-styles/vendors/slick-carousel/slick.css';
import 'enl-styles/vendors/slick-carousel/slick-theme.css';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import Rating from '../Rating/Rating';
import styles from './product-jss';

const getThumb = imgData.map(a => a.thumb);

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductDetail(props) { // eslint-disable-line
  const [qty, setQty] = useState(1);
  const {
    classes,
    open,
    close,
    detailContent,
    productIndex,
    handleAddToCart,
    intl
  } = props;

  const handleQtyChange = event => {
    setQty(event.target.value);
  };

  const submitToCart = itemAttr => {
    handleAddToCart(itemAttr);
    close();
  };

  const itemAttr = (item) => {
    if (item !== undefined) {
      return {
        id: detailContent[productIndex].id,
        name: detailContent[productIndex].name,
        thumbnail: detailContent[productIndex].thumbnail,
        price: detailContent[productIndex].price,
        quantity: qty
      };
    }
    return false;
  };

  const settings = {
    customPaging: (i) => (
      <a>
        <img src={getThumb[i]} alt="thumb" />
      </a>
    ),
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={close}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => close()} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.detailContainer}>
        <Grid container className={classes.root} spacing={3}>
          <Grid item md={5} sm={12} xs={12}>
            <div className="container thumb-nav">
              <Slider {...settings}>
                {imgData.map((item, index) => {
                  if (index >= 5) {
                    return false;
                  }
                  return (
                    <div key={index.toString()} className={classes.item}>
                      <img src={item.img} alt={item.title} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </Grid>
          <Grid item md={7} sm={12} xs={12}>
            <section className={classes.detailWrap}>
              <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
                {detailContent[productIndex].name}
              </Typography>
              <div className={classes.price}>
                <Typography variant="h5">
                  <span>
                    $
                    {detailContent[productIndex].price}
                  </span>
                </Typography>
                {detailContent[productIndex].discount !== '' && (
                  <Fragment>
                    <Typography variant="caption" component="h5">
                      <span className={Type.lineThrought}>
                        $
                        {detailContent[productIndex].prevPrice}
                      </span>
                    </Typography>
                    <Chip label={'Discount ' + detailContent[productIndex].discount} className={classes.chipDiscount} />
                  </Fragment>
                )}
                {detailContent[productIndex].soldout && (
                  <Chip label={intl.formatMessage(messages.sold_out)} className={classes.chipSold} />
                )}
              </div>
              <div className={classes.ratting}>
                <Rating value={detailContent[productIndex].ratting} max={5} readOnly />
              </div>
              <Typography component="p" className={classes.desc}>
                {detailContent[productIndex].desc}
              </Typography>
              {!detailContent[productIndex].soldout && (
                <div className={classes.btnArea}>
                  <Typography variant="subtitle1">
                    Quantity :
                  </Typography>
                  <TextField
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    margin="none"
                    value={qty}
                    className={classes.quantity}
                    onChange={handleQtyChange}
                  />
                  <Button
                    variant="contained"
                    onClick={() => submitToCart(itemAttr(detailContent))}
                    color="secondary"
                    disabled={qty < 1}
                  >
                    <AddShoppingCart />
                    &nbsp;
                    <FormattedMessage {...messages.add_to_cart} />
                  </Button>
                </div>
              )}
            </section>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  detailContent: PropTypes.array.isRequired,
  productIndex: PropTypes.number,
  intl: PropTypes.object.isRequired
};

ProductDetail.defaultProps = {
  productIndex: undefined
};

export default withStyles(styles)(injectIntl(ProductDetail));

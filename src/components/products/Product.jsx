import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import useStyles from './styles'

const Product = ({ product }) => {
  const classes =useStyles();
    return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title="product.name" />
      <CardContent className={classes.CardContent}>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

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
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <section id="tickets">
<div className="upcoming-title">
    <h1 className="tickets-title">Upcoming Events</h1>
</div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="product.name"
        />
        <CardContent className={classes.CardContent}>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">{product.price}</Typography>
          </div>
          <Typography variant=" body2" color="textSecondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </section>
  );
};

export default Product;

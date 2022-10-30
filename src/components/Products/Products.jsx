import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css"
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <div>
      <div className="upcoming-title">
        <h1 className="tickets-title">Upcoming Events</h1>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Products;

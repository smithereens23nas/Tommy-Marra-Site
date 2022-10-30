import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import './styles.css';

const products = [
  { id: 1, name: "Urban Country Jam", description: "Running Shoes.", price: "$25", image: './TM-Guitar.png' },
]

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

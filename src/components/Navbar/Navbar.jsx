import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import "./Navbar.css";
import useStyles from "./styles";
import { FaGuitar } from 'react-icons/fa'

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className="navbar-pos">
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography>
            <FaGuitar className="guitar-icon" />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit" fontSize='32px'>
              <Badge badgeContent={5}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import MenuItemIcon from "@material-ui/icons/Menu";

import { useDispatch } from "react-redux";

import { toggleShowSidebar } from "../store/interface/actions";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

export const Navbar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton
          onClick={() => dispatch(toggleShowSidebar())}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuItemIcon />
        </IconButton>
        <Typography variant="h6">Magnifique</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

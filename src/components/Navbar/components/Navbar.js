import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Card,CardContent} from '@material-ui/core';
import {InputAdornment} from '@material-ui/core';
import { IconButton,Icon,Badge } from '@material-ui/core';
import { Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@material-ui/core';

import { useState } from 'react';

const useStyles = makeStyles(() =>({
    layoutRoot: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Righteous',
      color:'#01014a',
      fontSize:'35px',
    },
    searchBox:{
        // marginLeft:'100px',
        width:'500px',
        height:'50px',
        
    },
    root:{
      justifyContent:'space-between'
    },
    circleContainer:{
      display:'flex'
    },
    circle:{
      // border:'2px solid black',
      height:50,
      width:50,
      borderRadius:'50%',
      marginRight:10,
      backgroundColor:'#f5f5f5',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    icon:{
      color:'#807e7e',
      fontSize:30
    }
  }),
);


const Navbar = () => {
    const classes = useStyles();
    const [searchTerm,setSearchTerm ] = useState('')

    const onClickOpen = ()=>{
      console.log('user profile');
    }

    return (
        <div className={classes.layoutRoot}>
            <AppBar position="static" style={{backgroundColor:'#fefefe'}}>
                <Toolbar classes={{root:classes.root}}>                    
                    <div><Typography variant="h6" className={classes.title}>bazar</Typography></div>
                    <TextField
                      onChange={(e)=>setSearchTerm(e.target.value)} 
                      className={classes.searchBox} 
                      variant="outlined"
                      placeholder='Searching for...'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon>search</Icon>
                          </InputAdornment>
                        ),
                      }}
                    />                  
                    <div className={classes.circleContainer}>
                      <div className={classes.circle}>
                        <IconButton onClick={onClickOpen}>
                        <Icon className={classes.icon}>person_outline</Icon>
                        </IconButton>
                      </div>
                      <div className={classes.circle}>
                        <Badge badgeContent={4} color="secondary">
                          <Icon className={classes.icon}>shopping_cart</Icon>
                        </Badge>
                      </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

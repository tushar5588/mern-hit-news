import {useState, useEffect} from 'react';
import axios from "axios";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Cards from '../cards/Cards';
import "./Header.css"

const Header = () => {

    const [news, setNews]= useState([]);


    useEffect(()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=d2289b4953cc4a27afcc82a96ddefa6d")
        .then((res)=>{
            setNews(res.data.articles)
        })
    },[])
  return(
      <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar color="success" enableColorOnDark position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <HomeIcon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hit-News
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  <Cards News={news}/>
  </>
  )
};

export default Header;

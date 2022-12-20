import React, { useState } from 'react'
import { AppBar, Tab ,Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from "react-router-dom";
const Header = () => {
    const [value, setvalue] = useState();
  return (
    <div>
    <AppBar sx={{backgroundColor: "#232F3D"}} position="sticky">
    <Toolbar>
    <Typography>
    <LibraryBooksIcon/>
    </Typography>
    <Tabs sx={{ml: "auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val)=> setvalue(val)} >
    <Tab LinkComponent={NavLink} to= "/" label="Home" />
        <Tab LinkComponent={NavLink} to= "/add" label="Add Book" />
        <Tab LinkComponent={NavLink} to= "/books" label="See All Books" />
        <Tab LinkComponent={NavLink} to= "/login" label="Logout" />
    </Tabs>
    </Toolbar>
    </AppBar>
    </div>
  )
}

export default Header;
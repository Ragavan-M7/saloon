import React from 'react';
import {Link } from 'react-router-dom';

function Nav(){
    return(
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/" exact activeClassName="active" style={{ margin: '10px' }}>
        Home
      </Link>
      <Link to="/Ourservices" activeClassName="active" style={{ margin: '10px' }}>
        Services
      </Link>
      <Link to="/Pricing" activeClassName="active" style={{ margin: '10px' }}>
        Pricing
      </Link>
      <Link to="/Blog" activeClassName="active" style={{ margin: '10px' }}>
        Blog
      </Link>
      <Link to="/Aboutus" activeClassName="active" style={{ margin: '10px' }}>
        Aboutus
      </Link>
    </nav>  
    )
};
export default Nav;
import React, { Fragment } from 'react'
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {signOut} from '../../redux/auth/auth.action'
import './Navbar.scss'

const { Header } = Layout;



function Navbar(props) {
  const { auth } = props;
  console.log(auth);
  
    return (
      <Fragment >
<Header className="container">
      <div style={{color:'white'}}>LOGO</div>
      <Menu theme="dark" mode="horizontal">
        
        <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/upload">upload</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/videos">Videos</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>

       
      </Menu>
      
      {auth.isEmpty ? <React.Fragment>
        <Menu theme="dark" mode="horizontal">
        <Menu.Item><NavLink to="/login">Login</NavLink></Menu.Item>
      <Menu.Item><NavLink to="/signup">Signup</NavLink></Menu.Item></Menu></React.Fragment>: (
         <Menu theme="dark" mode="horizontal">
        <Menu.Item><NavLink to="/" onClick={props.signOut}>Logout</NavLink></Menu.Item>
        </Menu>
        )
      }
        
        
    </Header>
    </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)

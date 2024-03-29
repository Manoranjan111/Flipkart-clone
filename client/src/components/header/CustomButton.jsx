import { React, useState, useContext } from 'react';
import { Box, Button, Typography, Badge, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile'; 

const Wrapper = styled(Box)(({theme})  => ({
    display: 'flex',
    margin: '0 3% 0 auto', 
    '& > button, & > p, & > div':{
        marginRight: 40,
        fontSize: 16,
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

const Contaienr = styled(Link)(({theme}) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    }
  }));

const LoginButton = styled(Button)`
    color: #2874f0;
    background-color: #fff;
    text-transform: none !important;
    padding: 5px 40px;
    border-radius:2px;
    box-shadow: none !important;
    font-weight: 600;
    height: 32px;
`;


const CustomButton = () => {

  const [open, setOpen] = useState(false);

  const {account, setAccount} = useContext(DataContext);

  const { cartItems } = useSelector(state => state.cart);

  const openDialog = () =>{
    setOpen(true);
  };

  return (
    <Wrapper>
      {
          account ? <Profile account = {account} setAccount={setAccount}/>
        :
          <LoginButton variant="contained" onClick={ () => openDialog() }>Login</LoginButton>
      }
      
      <Typography style={{marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{marginTop: 3 }}>More</Typography>

      <Contaienr to='/cart'>
        <Badge badgeContent = { cartItems?.length } color="secondary" >
          <ShoppingCart/>
        </Badge>
        <Typography  style={{marginLeft: 5 }} >Cart</Typography>
      </Contaienr>
      <LoginDialog  open = {open} setOpen = {setOpen}/>
    </Wrapper>
  )
}

export default CustomButton

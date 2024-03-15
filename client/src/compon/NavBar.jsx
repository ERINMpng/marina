import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter} from '../utils/const'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Flex
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        padding={'10px 50px'}
        backgroundColor='#040404'
        >
            <Flex>
                <Link to={ShopRouter}>
                <Button colorScheme='blackAlpha'>Shop</Button>
                </Link>
                <Button colorScheme='blackAlpha'>About</Button>
                <Button colorScheme='blackAlpha'>Product</Button>
            </Flex>
            <Link to={HomeRouter}>
            <Heading color='white'>Potashop</Heading></Link>
            <Flex
                justify={'space-between'}
                width={'90px'}
            >
                <Link to={AuthRouter}>
                <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M11 0H5v2H3v6h2v2h6V8H5V2h6zm0 2h2v6h-2zM0 14h2v4h12v2H0zm2 0h12v-2H2zm14 0h-2v6h2zM15 0h4v2h-4zm4 8h-4v2h4zm0-6h2v6h-2zm5 12h-2v4h-4v2h6zm-6-2h4v2h-4z"/>
                </svg>
                </Link>
            <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M22 4H2v6h2v10h16V10h2zM6 10h12v8H6zm14-4v2H4V6zm-5 6H9v2h6z"/>
            </svg>
            </Flex>
        </Flex>
    );
  }
  
  export default NavBar;
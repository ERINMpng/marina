import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
const NavBar = () => {
    return (
        <Flex
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
        borderRadius={'8px'}
        padding={'10px 50px'}
        >
            <Heading>Potashop</Heading>
            <Flex>
                <Button margin='10px' colorScheme='teal' variant='outline'>Shop</Button>
                <Button margin='10px' colorScheme='teal' variant='outline'>About</Button>
                <Button margin='10px' colorScheme='teal' variant='outline'>Product</Button>
            </Flex>
            <Flex
                justify={'space-between'}
                width={'70px'}
            >
            <svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M11 0H5v2H3v6h2v2h6V8H5V2h6zm0 2h2v6h-2zM0 14h2v4h12v2H0zm2 0h12v-2H2zm14 0h-2v6h2zM15 0h4v2h-4zm4 8h-4v2h4zm0-6h2v6h-2zm5 12h-2v4h-4v2h6zm-6-2h4v2h-4z"/>
            </svg>
            <svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M22 4H2v6h2v10h16V10h2zM6 10h12v8H6zm14-4v2H4V6zm-5 6H9v2h6z"/>
            </svg>
            </Flex>
        </Flex>
    );
  }
  
  export default NavBar;
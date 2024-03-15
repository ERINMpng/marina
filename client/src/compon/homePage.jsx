
import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import NavBar from './NavBar';
import FooterPage from './foter';
import TopButton from './TopButton';
import Main from './main';

const HomePage = () =>{
    return(
        <Box>
        <NavBar />
        <Main />
        <Flex 
            width={"100%"} 
            justify={'center'}> 
            <TopButton />
            <FooterPage />
        </Flex>
        </Box>
    )
}

export default HomePage;
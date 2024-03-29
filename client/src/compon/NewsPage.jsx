import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Image,AspectRatio,Card, FormControl,FormLabel,HStack,Radio,RadioGroup} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter} from '../utils/const'
import NavBar from './NavBar';
import News from './News';
import FooterPage from './foter';
import TopButton from './TopButton';

const NewsP = () => {
    return (
        <Box>
            <NavBar />
            <Flex justify='center' flexDirection='column' padding={'100px 0px 0px 0px'}>
                <News />
                <News />
                <News />
                <News />
                <News />
            </Flex>
            <TopButton />
            <FooterPage />
        </Box>
    )}

    export default NewsP;
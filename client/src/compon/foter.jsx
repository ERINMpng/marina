import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter} from '../utils/const'
import color from './color.jsx';

const FooterPage = () =>{
    const colorPalet = color();
    const {green, hex} = colorPalet;

    return(
        <Flex
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        borderRadius={'8px'}
        height={'200px'}>
            <Box
            width='100%'
            backgroundColor='#171211'
            height='200px'
            display={'flex'}
            justify={'space-between'}>
                <Box>
                <Link to={HomeRouter}>
                <Heading color={'white'} margin='30px 0px 0px 50px' fontSize='50px'>Potashop</Heading></Link>
                <Text color={'#9e716c'} margin='10px 0px 0px 100px'><Link to={HelpRouter}>Hyshna help?</Link></Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default FooterPage;
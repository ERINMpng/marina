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
        height={'200px'}
        margin='100px 0px 0px 0px'>
            <Box
            width='100%'
            backgroundColor='#171211'
            height='200px'
            display={'flex'}
            justify={'space-between'}>
                <Box>
                <Link to={HomeRouter}>
                <Heading color={'white'} margin='30px 0px 0px 50px' fontSize='50px'>Potashop</Heading></Link>
                </Box>
                <Box margin='60px 0px 0px 50px'>
                    <lu>
                        <li><Link to={HelpRouter}>Hyshna help?</Link></li>
                        <li><Link to={HelpRouter}>Hyshna help?</Link></li>
                        <li><Link to={HelpRouter}>Hyshna help?</Link></li>
                        <li><Link to={HelpRouter}>Hyshna help?</Link></li>
                        <li><Link to={HelpRouter}>Hyshna help?</Link></li>
                    </lu>
                </Box>
            </Box>
        </Flex>
    )
}

export default FooterPage;
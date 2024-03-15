import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter} from '../utils/const'
import potato from '../img/potatomain.PNG'


const Main = () => {
    return (
        <Box>
            <Flex
                align={'center'}
                justify={'space-between'}
                width={'100%'}
                padding={'10px 50px'}
                height='100vh'
                backgroundImage={potato}
                backgroundSize={'cover'}
                >
                    <Box width={'600px'}>
                        <Text color='#f7e3df' fontSize={'70px'}>Spicy with Steam and Starch</Text>
                        <Link to={ShopRouter}><Button colorScheme='whiteAlpha' width={'100%'} height={'100px'} fontSize={'50px'} margin={'30px 0px 0px 0px'}>BUY POTATOES SSS CLASS</Button></Link>
                    </Box>
                </Flex>
        </Box>
    )}

    export default Main;
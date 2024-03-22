import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Image,AspectRatio} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {ShopRouter, HomeRouter, RegisterRouter, AuthRouter, HelpRouter} from '../utils/const'
import potato from '../img/potatomain.PNG'
import batat from '../img/batat.jpg'
import pole from '../img/pole.jpg'
import CartItem from './CartItem';


const Main = () => {
    return (
        <Box backgroundColor={'#fcfbfa'}>
            <Flex
                align={'center'}
                justify={'space-between'}
                width={'100%'}
                padding={'10px 50px'}
                height='100vh'
                backgroundImage={potato}
                backgroundSize={'cover'}
                >
                    <Box width={'600px'} >
                        <Text color='#f7e3df' fontSize={'70px'}>Spicy with Steam and Starch</Text>
                        <Link to={ShopRouter}><Button colorScheme='whiteAlpha' width={'100%'} height={'100px'} fontSize={'50px'} margin={'30px 0px 0px 0px'}>BUY POTATOES SSS CLASS</Button></Link>
                    </Box>
                </Flex>
                <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'50px 0px 50px 0px'}>
                    <Text fontSize={'40px'} color={'#332821'}>Our potatoes...</Text>
                    <Text fontSize={'20px'}>THERE IS NO more tragic vegetable than the potato. Originating in the Peruvian Andes, it was first domesticated by the Quechua-speaking peoples, who could not help but become reliant on a highly nutritional foodstuff that could be grown in large quantities on small plots in regions inhospitable to grains. It enabled the Quechua to maintain strong bodies while suffering the deprecations of the Incas (and their system of forced labor).</Text>
                </Flex>
                <Image src={pole} width={'100%'}></Image>
                <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'50px 0px 50px 0px'}>
                    <Text fontSize={'40px'} color={'#332821'}>Belarusians will approve:</Text>
                </Flex>
                <Flex
                    justify={'center'}
                    align={'center'}
                    flexWrap={'wrap'}
                    gap={'35px'}
                    mt={'50px'}
                    margin={'0px 0px 50px 0px'}
                >
                   <Link to={ShopRouter}> <CartItem /></Link>
                    <Link to={ShopRouter}><CartItem /></Link>
                    <Link to={ShopRouter}><CartItem /></Link>
                    <Link to={ShopRouter}><CartItem /></Link>
                    </Flex>
                    <Flex padding={'10px 50px'} flexDirection={'column'} justifyContent={'center'} margin={'30px 0px 20px 0px'}>
                        <Text fontSize={'40px'} color={'#332821'}>Where are your potatoes?</Text>
                        <AspectRatio ratio={16 / 9} width={"100%"} h={500} >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38946.80405791186!2d23.81995275841609!3d52.403499904577785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4720559c6df3f967%3A0x2cc7ba71f743e569!2z0JrQsNC80LXQvdC10YYsINCR0YDQtdGB0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1711123453690!5m2!1sru!2sby"  ></iframe>
                        </AspectRatio>
                    </Flex>
                    </Box>
    )}

    export default Main;
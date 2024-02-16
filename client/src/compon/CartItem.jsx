import '../App.css';
import {Text, Box, Flex, Grid, Input, Heading, Center, Card, Image} from '@chakra-ui/react';
import batat from '../img/batat.jpg'

const CartItem = () =>{
    return(
        <Card
        width={'400px'}
        height={'400px'}
        boxShadow='xl' p='6' rounded='md' bg='white'
        >
            <Image
                borderRadius={'5px'}
                src={batat}
            ></Image>
    <Box
        width={'100%'}
        textAlign={'center'}
    >
        <Heading fontSize={'30px'}>European sweet potato</Heading>
    </Box>
    <Box>
        <Text>
            fuhgfjkg
        </Text>
    </Box>
        </Card>
    )
}
export default CartItem;
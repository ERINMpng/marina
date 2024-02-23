import '../App.css';
import CartItem from './CartItem';
import { Flex  } from '@chakra-ui/react';
import NavBar from './NavBar';

const ShopPage = () =>{
    return(
    <Flex justify='center' flexDirection='column'>
        <NavBar />
        <Flex
        justify={'center'}
        align={'center'}
        flexWrap={'wrap'}
        gap={'35px'}
        mt={'50px'}
    >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
    </Flex>
    </Flex>
    )
   
}

export default ShopPage;
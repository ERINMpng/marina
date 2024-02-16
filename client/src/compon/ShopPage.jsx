import '../App.css';
import CartItem from './CartItem';
import { Flex  } from '@chakra-ui/react';

const ShopPage = () =>{
    return(
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
    )
   
}

export default ShopPage;
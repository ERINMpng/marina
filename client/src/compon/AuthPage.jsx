import '../App.css';
import CartItem from './CartItem';
import { Flex  } from '@chakra-ui/react';
import NavBar from './NavBar';

const AuthPage = () =>{
    return(
        <Flex
            width='100%'
            flexWrap={'wrap'}
            justify={'center'}
        >
            <NavBar />
            <Flex
                width={'90%'}
                justify={'center'}
                align={'center'}
                height={'70hv'}
                mt={'100px'}
            >
                <Flex
                    width={'300px'}
                    height={'300px'}
                    boxShadow='2xl' p='6' rounded='md' bg='white'
                >

                </Flex>
            </Flex>
        </Flex>
    )
}

export default AuthPage;
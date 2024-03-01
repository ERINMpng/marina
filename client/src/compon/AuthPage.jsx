import '../App.css';
import {Text, Box, Flex, Grid, Input,Heading,InputGroup, InputLeftElement, Stack, Button} from '@chakra-ui/react';
import NavBarSh from './NavBarSh';
import { Link } from 'react-router-dom';
import { RegisterRouter } from '../utils/const';


const AuthPage = () =>{
    return(
        <Flex
            width='100%'
            flexWrap={'wrap'}
            justify={'center'}
        >
            <NavBarSh />
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
                    <Box padding='20px'>
                        <Text textAlign='center' fontSize='35px'>Sing In</Text>
                        <Box>
                        <Stack spacing={4} margin='10px 0px 10px 0px'>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="undefined" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5 2H3v20h18V2H5zm14 18H5V4h14v16zM17 6H7v4h10V6zM7 12h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z"/>
                                </svg>
                                </InputLeftElement>
                                <Input type='tel' placeholder='Phone number' />
                            </InputGroup>
                            </Stack>
                            <Stack spacing={4} margin='10px 0px 20px 0px'>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="undefined" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M0 7h2v2H0V7zm4 4H2V9h2v2zm4 2v-2H4v2H2v2h2v-2h4zm8 0H8v2H6v2h2v-2h8v2h2v-2h-2v-2zm4-2h-4v2h4v2h2v-2h-2v-2zm2-2v2h-2V9h2zm0 0V7h2v2h-2z"/>
                                </svg>
                                </InputLeftElement>
                                <Input type='password' placeholder='Password' />
                            </InputGroup>
                            </Stack>
                            <Button width='200px' colorScheme='teal' variant='solid' fontSize='20px'>
                                Sing in
                            </Button>
                            <Link to={RegisterRouter}>
                            <Button width='200px' colorScheme='teal' variant='link' fontSize='10px'>
                                ай дон хэв акаунт
                            </Button></Link>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AuthPage;
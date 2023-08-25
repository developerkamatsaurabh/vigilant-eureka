
import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
    return (
      <HStack justifyContent='space-between' padding={'10px'}>
      {/* 
      
      <HStack justifyContent='space-between' padding='10px'> 
       we can use padding in this way also
      */} 
        <Image src={logo} boxSize='60px' />
        <ColorModeSwitch />
      </HStack>
    )
}

export default NavBar;
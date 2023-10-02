import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo } from 'react-icons/si';
  import { BsGlobe } from 'react-icons/bs';
  import { HStack, Icon } from "@chakra-ui/react";
  import { Platform } from "../hooks/useGames";
  import { IconType } from "react-icons";

/* 
This is the case where we mapped array data
*/

// const PlatformIconList = (props:any) => {
//     const iconMap: { [key: string]: IconType } = { 
//         pc: FaWindows,
//         playstation: FaPlaystation,
//         xbox: FaXbox,
//         nintendo: SiNintendo,
//         mac: FaApple,
//         linux: FaLinux, 
//         android: FaAndroid,
//         ios: MdPhoneIphone,
//         web: BsGlobe
//       }
//     console.log('props',props.game.map((item:any)=> item));
//   return (
//     <HStack marginY={1}>
//         {props.game.map((item:any)=> <Icon as={iconMap[item.platform.slug]}/> )}
//     </HStack>
//   )
// }

/* 
This is the case of getting maped data
*/
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({platforms}:Props) => {
  const iconMap: { [key: string]: IconType } = { 
      pc: FaWindows,
      playstation: FaPlaystation,
      xbox: FaXbox,
      nintendo: SiNintendo,
      mac: FaApple,
      linux: FaLinux, 
      android: FaAndroid,
      ios: MdPhoneIphone,
      web: BsGlobe
    }
  // console.log('props',platforms.map((item:any)=> item));
  return (
  <HStack marginY={1}>
      {platforms.map((platform)=> <Icon as={iconMap[platform.slug]}/> )}
  </HStack>
)
}

export default PlatformIconList

import React from 'react'
import {Box,Text,Heading,Image, Flex,Button,Wrap,Icon,Link} from "@chakra-ui/react"
import {FaHandPointRight} from "react-icons/fa"
import { useMediaQuery } from '@chakra-ui/react'
const skillimage=[{id:1,link:"https://cdn-icons-png.flaticon.com/512/174/174854.png"},
{id:2,link:"https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png"},
{id:3,link:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"},
{id:4,link:"https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"},
{id:5,link:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"},
{id:6,link:"https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"},
{id:7,link:"https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"},
{id:8,link:"https://www.pngitem.com/pimgs/m/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png"},
{id:9,link:"https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"},
]
const Homepage = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 800px)')

  return (
    <div>
      {isLargerThan1000?<Flex width="95%" margin="auto"  marginTop="30px" fontFamily="'Noto Sans', sans-serif;">
        <Box width="50%" margin="auto" textAlign={"start"}>
            <Text fontSize="48px" fontWeight={"600"} >Piyush Khurana</Text>
            <Text color="#7f8daa" fontSize={"24px"} fontWeight="500">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</Text>
            <Flex gap="20px" marginTop="20px">
           <Link href="https://github.com/piyushkhurana8744"><Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="80px"></Image></Link> 
            <Image src="https://cdn-icons-png.flaticon.com/512/179/179330.png" width="80px"></Image>
            </Flex>
        <Link href="https://drive.google.com/file/d/1vqWuq5cA26_WRNHWpiq4sFmVZNfMgVBA/view?usp=share_link" textDecoration="none"><Button padding="30px 60px 30px 60px"  marginTop="30px" fontSize={"34px"} fontWeight="600" backgroundColor="red.400" borderRadius={"20px"} color="#fff" textDecoration="none">Resume</Button></Link>
            </Box>
        <Box width="30%" margin="auto" >
            <Image src="https://i.postimg.cc/c44cMrvP/IMG-20180417-103044-HDR-1.jpg" borderRadius={"50%"} ></Image>
        </Box>
      </Flex>:<Box width="95%" margin="auto"  marginTop="30px" fontFamily="'Noto Sans', sans-serif;">
        <Box width="50%" margin="auto" textAlign={"start"}>
            <Text fontSize="48px" fontWeight={"600"} >Piyush Khurana</Text>
            <Text color="#7f8daa" fontSize={"24px"} fontWeight="500">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</Text>
            <Flex gap="20px" marginTop="20px">
           <Link href="https://github.com/piyushkhurana8744"><Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="80px"></Image></Link> 
            <Image src="https://cdn-icons-png.flaticon.com/512/179/179330.png" width="80px"></Image>
            </Flex>
        <Link href="https://drive.google.com/file/d/1vqWuq5cA26_WRNHWpiq4sFmVZNfMgVBA/view?usp=share_link" textDecoration="none"><Button padding="30px 60px 30px 60px"  marginTop="30px" fontSize={"34px"} fontWeight="600" backgroundColor="red.400" borderRadius={"20px"} color="#fff" textDecoration="none">Resume</Button></Link>
            </Box>
        <Box width="30%" margin="auto" >
            <Image src="https://i.postimg.cc/c44cMrvP/IMG-20180417-103044-HDR-1.jpg" borderRadius={"50%"} ></Image>
        </Box>
      </Box>}
      <Box marginTop={"30px"}width="95%" margin="auto" padding="40px">
        <Text fontSize="48px" fontWeight={"600"}>What I Do</Text>

        <Flex marginTop={"30px"} gap="50px">
            <Box width="45%" marginTop="20px" >
                <Image src="https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif" borderLeftRadius={"20px"} borderRightRadius="20px"></Image>
            </Box>
            <Box width="47%" textAlign={"start"}>
                <Text fontSize={"48px"} fontWeight="500">Full Stack Development</Text>
                <Wrap spacing='40px' marginTop="20px">
                    {skillimage.map(el=><Image key={el.id} src={el.link} width="50px" height="50px"/>)}
                </Wrap>
               <Flex fontSize={"24px"} gap="20px" marginTop={"20px"}>
                <Icon as={FaHandPointRight} w={8} h={20}/>
                <Text color="#7f8daa" fontWeight={"500"}>Building responsive website frontend using React and React-Redux</Text>
               </Flex>
               <Flex fontSize={"24px"} gap="20px" marginTop={"20px"}>
                <Icon as={FaHandPointRight} w={8} h={20}/>
                <Text color="#7f8daa" fontWeight={"500"}> Designing highly attractive user interface for mobile and web applications</Text>
               </Flex>
               <Flex fontSize={"24px"} gap="20px" marginTop={"20px"}>
                <Icon as={FaHandPointRight} w={8} h={20}/>
                <Text color="#7f8daa" fontWeight={"500"}> Creating application backend in Node, Express & MongoDB</Text>
               </Flex>
            </Box>
        </Flex>
      </Box>
    </div>
  )
}

export default Homepage

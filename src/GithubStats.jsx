import React from 'react'
import {Box,Text,Image, Flex,Center,useColorMode} from "@chakra-ui/react"
const GithubStats = () => {
    const { colorMode} = useColorMode()
    const darkcolor={
       color:"#6d28d9"
    }
    const lightcolor={
        color:"#e53e3e"
    }
  return (
    <div>
      <Box marginTop="20px">
        <Text fontSize={{base:"18px",md:"23px",lg:"28px"}} fontWeight="Bold">GITHUB <span style={colorMode=="dark"?darkcolor:lightcolor}> STATISTICS</span> </Text>
           <Text fontSize={"20px"}>My overall statistics and contribution</Text>
          <Center>
          <Flex gap="30px" marginTop="20px">
            {colorMode=="dark"?<Image src="https://github-stats-alpha.vercel.app/api?username=Kuldeepsingh921&cc=000&tc=fff&ic=fff&bg=fff"></Image>:<Image src="https://github-stats-alpha.vercel.app/api?username=Kuldeepsingh921"></Image>}
           {colorMode=="dark"?<Image src="https://github-readme-streak-stats.herokuapp.com?user=Kuldeepsingh921&theme=dark&hide_border=true"></Image>:<Image src="https://github-readme-streak-stats.herokuapp.com?user=piyushkhurana8744&hide_border=false"></Image>}
            
            </Flex></Center> 
        </Box>
    </div>
  )
}

export default GithubStats

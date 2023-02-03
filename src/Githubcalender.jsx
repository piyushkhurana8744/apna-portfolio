import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import {Box,Text,Center,useColorMode} from "@chakra-ui/react"
import GithubStats from './GithubStats'
const Githubcalender = () => {
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
        <Text fontSize={{base:"18px",md:"23px",lg:"28px"}} fontWeight="Bold">GITHUB CONTRIBUTION <span style={colorMode=="dark"?darkcolor:lightcolor}>CALENDER</span> </Text>
        <Box marginTop="20px">
        <Center><GitHubCalendar username="Kuldeepsingh921" blockSize={16} blockMargin={6}/></Center>
        </Box>
        <GithubStats />
        </Box>
        
    </div>
  )
}
export default Githubcalender

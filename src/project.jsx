import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "./Project.module.css"
import {MdOutlineFavorite} from "react-icons/md"
import {BsFillCameraVideoFill,BsFillEyeFill,BsGithub} from "react-icons/bs"
export const Projects = () => {
  return (
    <Box>
       <Box  className={styles.intro}>
       <Box>
       </Box>
        <Box>
        <h1 className={styles.project}>Project Section</h1>
        </Box>
       </Box>
       {/* mid-section */}
       <Box className={styles.mid_sec}>
        <Box className={styles.child}>
          <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/4400366/screenshots/15917760/media/21dd5982b34f1e95353b3a8089862f83.png?compress=1&resize=400x300" alt="expedia" />
           <h3 className={styles.proName}>Expedia</h3>

           <p className={styles.proPara}>Expedia is one of the biggest online travel websites out there. It can be used to search for and book all sorts of travel, including hotels, airfare, rental cars, cruises, activities, attractions and vacation packages.</p>

           <p style={{fontSize:"12px"}}><span style={{color:"blue",fontWeight:"bold"}}>Tech Stack:-</span>HTML,CSS and JavaScript</p>
          
          <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"20px"}}>
            <Box className={"styles.icons:hover"}> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Box>
            <Box><a href='https://shimmering-stroopwafel-bf250f.netlify.app/index.html'><BsFillEyeFill /></a></Box>
            <Box><a href='https://github.com/Kuldeepsingh921/judicious-rice-4024'><BsGithub /></a></Box>
          </Box>

        </Box>
        <Box className={styles.child}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/2839013/screenshots/12187646/41.gif" alt="" />

        <h3 className={styles.proName}>Nike</h3>

           <p className={styles.proPara}>Nike, Inc. is an American multinational corporation that is engaged in the design, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.</p>

           <p style={{fontSize:"12px"}}><span style={{color:"blue",fontWeight:"bold"}}>Tech Stack:-</span>React Js Chakra UI </p>
          
          <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"20px"}}>
          <Box> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Box>
            <Box><a href='https://spectacular-bombolone-133d78.netlify.app/'><BsFillEyeFill /></a></Box>
            <Box><a href='https://github.com/Kuldeepsingh921/--hurt-transport-4569/tree/main/mynike'><BsGithub /></a></Box>
          </Box>
        </Box>
        <Box className={styles.child}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://www.videoamigo.com/blog/wp-content/uploads/2019/11/youtube-redesign.gif" alt="" />

<h3 className={styles.proName}>YouTube</h3>

   <p className={styles.proPara}>YouTube is a global online video sharing and social media platform. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim.</p>

   <p style={{fontSize:"12px"}}><span style={{color:"blue",fontWeight:"bold"}}>Tech Stack:-</span>HTML, CSS, and JavaScript</p>
  
  <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"20px"}}>
  <Box> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Box>
    <Box><a href='https://calm-khapse-ebab04.netlify.app/'><BsFillEyeFill /></a></Box>
    <Box><a href='https://github.com/masai-course/kuldeep_singh_fw21_0501/tree/master/unit-3/sprint-3/day-3/you/YOUTUBE%20APP'><BsGithub /></a></Box>
  </Box>
        </Box>
        <Box className={styles.child}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://wpforms.com/wp-content/uploads/2020/08/Toggl-track.png" alt="" />

<h3 className={styles.proName}>Toggle Track</h3>

   <p className={styles.proPara}>Toggl Track is a time tracking software operated by Toggl OÜ, headquartered in Tallinn, Estonia, that offers online time tracking and reporting services through their website along with mobile and desktop applications. </p>

   <p style={{fontSize:"12px"}}><span style={{color:"blue",fontWeight:"bold"}}>Tech Stack:-</span>HTML,CSS and JavaScript</p>
  
  <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"20px"}}>
  <Box> <a href="https://www.linkedin.com/in/kuldeep-singh-a50672196/"><BsFillCameraVideoFill /></a> </Box>
    <Box><a href='https://resplendent-squirrel-f3053d.netlify.app/'><BsFillEyeFill /></a></Box>
    <Box><a href='https://github.com/Kuldeepsingh921/devout-teeth-4903'><BsGithub /></a></Box>
  </Box>
        </Box>
        <Box className={styles.child}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/2839013/screenshots/12187646/41.gif" alt="" />

<h3 className={styles.proName}>Expedia</h3>

   <p className={styles.proPara}>Expedia is one of the biggest online travel websites out there. It can be used to search for and book all sorts of travel, including hotels, airfare, rental cars, cruises, activities, attractions and vacation packages.</p>

   <p style={{fontSize:"12px"}}><span style={{color:"blue",fontWeight:"bold"}}>Tech Stack:-</span>HTML,CSS and JavaScript</p>
  
  <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"20px"}}>
    <Box><BsFillCameraVideoFill /></Box>
    <Box><BsFillEyeFill /></Box>
    <Box><BsGithub /></Box>
  </Box>
        </Box>
        <Box className={styles.child}>
        <img style={{height:"50%",width:"100%",borderTopRightRadius:"10px",borderTopLeftRadius:"10px"}} src="https://cdn.dribbble.com/users/2839013/screenshots/12187646/41.gif" alt="" />

<h3 className={styles.proName}>Expedia</h3>

   <p className={styles.proPara}>Expedia is one of the biggest online travel websites out there. It can be used to search for and book all sorts of travel, including hotels, airfare, rental cars, cruises, activities, attractions and vacation packages.</p>

   <p style={{fontSize:"12px"}}><span style={{color:"blue",fontWeight:"bold"}}>Tech Stack:-</span>HTML,CSS and JavaScript</p>
  
  <Box style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"70px",fontSize:"20px",marginTop:"20px"}}>
    <Box><BsFillCameraVideoFill /></Box>
    <Box><BsFillEyeFill /></Box>
    <Box><BsGithub /></Box>
  </Box>
        </Box>
        
       </Box>
       
       <Box style={{marginTop:"50px",color:"color: rgb(127, 141, 170);"}}>
        <p>Made With <MdOutlineFavorite style={{color:"red"}} /> By Kuldeep Singh</p></Box>
    </Box>
  )
}
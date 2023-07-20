import React, { useEffect, useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, GridItem, HStack, interactivity } from "@chakra-ui/react";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import ProjectsSection from "./ProjectsSection";
import { ref } from "yup";





const socials = [
  {
    icon: faEnvelope,
    url: "mailto: gizemayazyegul@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/gizemayegul",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gayazyegul/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const socialList = socials.map((item,index)=>{
  return <Box key ={index} size="2px">
    <ul className="social-icons">
      <li>
          <a href={item.url}>
            <FontAwesomeIcon icon={item.icon} size ="2x" />
          </a>
      </li>
    </ul> 
  </Box>
})

const menu = [
  {
    anchor: "projects",
    url: "#projects",
    name: "Projects"
  },
  {
    anchor: "contactme",
    url: "#contact-me",
    name: "Contact Me"
  },
];





const Header = () => {

  const [pageY,setpageYOffset] = useState(window.pageYOffset);
  const prevPageYRef = useRef();

  const handleScroll = () =>{
    setpageYOffset(window.pageYOffset)
  }

  const direction = pageY > prevPageYRef.current ? "down" : "up";
  useEffect(() => {
      prevPageYRef.current =pageY;
      window.addEventListener('scroll', handleScroll)
    
    return ()=>{
        window.removeEventListener('scroll', handleScroll)
    }
  }, [pageY]);



  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuList = menu.map((item,index)=>{
    return <Box key ={index} size="2px">
      <ul>
        <li className="menu">
          <a href={item.url} onClick={handleClick(item.anchor)}>{item.name}</a>
        </li>
      </ul> 
    </Box>
  })

  return (
    <Box 
      position="fixed"
      top={direction === "down" ? -24 : 0}
      left={0}
      right={0}
      translateY = {direction === "down" ? -200 : 0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap" 
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing='24px'>
              {socialList}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
                {menuList}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

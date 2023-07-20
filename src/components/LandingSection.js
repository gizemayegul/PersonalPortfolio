import React from "react";
import { Avatar, Heading, WrapItem } from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Gizem!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.


const LandingSection = () => (
    <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">
      
      <Avatar size='4xs' src=""/>
      <p>{greeting}</p>
      <Heading>
        {bio1}
      </Heading>
      <Heading>
        {bio2}
      </Heading>
    
  </FullScreenSection>


  

);

export default LandingSection;

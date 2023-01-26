import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";
const Card = ({ title, description, imageSrc }) => {

  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="card">
      <div className="image">
        <img className="image"src= {imageSrc}/>
        <div className="description">
          <p className="title">{title}</p>
          <p className="sdescription">{description}</p>
          <p className="seemore">See More                    <FontAwesomeIcon icon={faArrowRight} size="1x" /></p>
          
        </div>
      </div>
    </div>

  )
};

export default Card;

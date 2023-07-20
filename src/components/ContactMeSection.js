import React, { useEffect, useRef, useState } from "react";
import { useFormik, validateYupSchema, useFormikContext } from "formik";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import * as yup from 'yup';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Field, Form, Formik } from 'formik';
import { type } from "@testing-library/user-event/dist/type";




const LandingSection = () => {


  const {
    isLoading,
    response,
    submit
  } = useSubmit();
  const {
    isOpen,
    onClose,
    onOpen,
  } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: (values) => {
      submit('url', values)
      onOpen(response.type, response.message)
      if (response.type === "success") {
        formik.resetForm();
      }


    },
    validationSchema: Yup.object().shape({
      firstName: yup.string("This is not string").min(5, "minimum 5 character").required("This field is required"),
      email: yup.string().email("Please enter a valid email address").required("This field is required"),
      type: '',
      comment: yup.string().min(25, "minimum 25 character").required("This field is required"),
    }),
  });


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      flexWrap="wrap"
    >
      <VStack w="1024px" p={32} alignItems="flex-start" >
        <Box p={6} rounded="md" w="100%" >
          <form className="form" onSubmit={formik.handleSubmit} flexWrap="wrap">
            <h1 id="contactme-section" >Contact me</h1>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  id="firstName"
                  name="firstName"
                  type="text"
                  {...formik.getFieldProps('firstName')}


                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                //disabled ={!formik.touched.comment || formik.errors.comment ? true : false}
                isLoading={isLoading ? true : false}
                loadingText="Submitting"
                type="submit"
                colorScheme="purple"
                width="full"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;

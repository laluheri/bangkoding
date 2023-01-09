import { Link, Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as ReachLink } from "react-router-dom";

const Navigasi = () => {
  const login = localStorage.getItem("login");
  return (
    <Flex bg="teal.500" justify="space-between" align="center" p={4}>
      <Box as="nav" bg="teal.500" color="white">
        <Link as={ReachLink} p={2} color="white" to="/home">
          Home
        </Link>
        <Link as={ReachLink} p={2} color="white" to="/project">
          Projects
        </Link>
        <Link as={ReachLink} p={2} color="white" to="/about">
          About
        </Link>
        <Link as={ReachLink} p={2} color="white" to="/contact">
          Contact
        </Link>
        <Link as={ReachLink} p={2} color="white" to="/dashboard">
          Dashboard
        </Link>
      </Box>
      <Box>
        {!login ? (
          <Button
            as={ReachLink}
            to="/login"
            variant="outline"
            bg="white"
            ml={4}
            color="teal.500"
          >
            Login
          </Button>
        ) : (
          <Button
            as={ReachLink}
            to="/login"
            variant="outline"
            ml={4}
            color="teal.500"
            bg="white"
            onClick={() => localStorage.clear()}
          >
            Logout
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Navigasi;

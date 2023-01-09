import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import Auth from "./Auth";

const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([
    {
      username: "admin",
      password: "password",
    },
    {
      username: "admin2",
      password: "password2",
    },
  ]);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExist = user.some(
      (u) => u.username === form.username && u.password === form.password
    );
    if (userExist) {
      setauthenticated(true);
      const obj = JSON.stringify(form);
      localStorage.setItem("authenticated", obj);
      localStorage.setItem("login", true);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <Auth />

      <Flex justify="center" mt={10}>
        <Box border={"1px"} borderColor="gray.300" p={4}>
          <Heading as="h3" fontSize="lg" mb={4}>
            Login
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button mt={4} variant="solid" colorScheme="teal" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </div>
  );
};

export default Login;

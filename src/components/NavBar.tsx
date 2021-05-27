import React from "react";
import { Box, Link, Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  //data is loading
  if (fetching) {
    // user not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link color="black" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="black" mr={2}>
            Register
          </Link>
        </NextLink>
      </>
    );
    // user logged in
  } else {
      body = (
          <Flex>
            <Box mr={2}>{data.me.username}</Box>
            <Button variant="link">logout</Button>
          </Flex>
      )
  }

  return (
    <Flex p={4} ml={"auto"} bg="tan">
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};

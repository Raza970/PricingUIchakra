"use client"

import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Pricing from './pricing';
import Feature from "./Feature";

export default function Home() {
  return (
  <ChakraProvider>
    <Header/>
    <Pricing/>
    <Feature/>
  </ChakraProvider>
  )
}

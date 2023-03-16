import { Box,Heading,Text} from '@chakra-ui/react'
import React from 'react';

export default function Header() {
  return (
<Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl="15px"
      bg="#2D3748"
      pt="90px"
      pb="250px"
      color="white"
    >
      <Heading>Simple pricing for your business</Heading>
      <Text pt="10px" color="#CBD5E0">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  )
}

import * as React from "react";

const HomePage = () => {
  return(
    <Container maxW='xl' centerContent>
      <Heading as={'h1'} m={5}>#100daysofcode</Heading>
      <Stack spacing={8}>
        <Box p={5} shadow={'md'} borderWidth={'1px'}>
           <Heading as={'h2'}>Hey there</Heading>
           <Text mt={4}>
             <span dangerouslySetInnerHTML={{__html: '<p>this is an exceprt</p>'}} />

         </Text> 
         <Link as={GatsbyLink} to={#}>Read more</Link>
        </Box>
        <Box p={5} shadow={'md'} borderWidth={'1px'}>
           <Heading as={'h2'}>Hey there 2</Heading>
           <Text mt={4}>
             <span dangerouslySetInnerHTML={{__html: '<p>this is an new exceprt</p>'}} />

         </Text> 
         <Link as={GatsbyLink} to={#}>Read more</Link>
        </Box>
        </Stack> 
    </Container>
  )
}

export default HomePage;

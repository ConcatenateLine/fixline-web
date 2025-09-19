import HeaderBar from "@app/components/headerBar";
import HeroSection from "@app/components/heroSection";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box height="100vh" bg="bg-canvas" gap="section">
      <Box position="absolute" width="100vw" height="100vh">
        <Box
          height="30vh"
          width="30vw"
          filter="blur(64px)"
          position="absolute"
          top="10vh"
          left="10vw"
          bg="secondary-accent"
          rounded="full"
        />
        <Box
          height="60vh"
          width="60vw"
          filter="blur(64px)"
          position="absolute"
          bottom="10vh"
          right="10vw"
          bg="secondary-accent"
          rounded="full"
        />
        <Box
          bg="linear-gradient(90deg, cream.50 2%, red.400 100%)"
          height="100vh"
          width="100%"
          position="absolute"
          top="1/2"
          left="1/2"
          transform="translate(-50%, -50%)"
          filter="blur(64px)"
        />
      </Box>
      <HeaderBar />
      <HeroSection />
      {/* <Features />
      <Pricing />
      <Testimonials />
      <Footer /> */}
    </Box>
  );
}

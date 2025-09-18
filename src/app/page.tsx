import HeaderBar from "@app/components/headerBar";
import HeroSection from "@app/components/heroSection";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box height="100vh" bg="bg-canvas">
      <HeaderBar />
      <HeroSection />
      {/* <Features />
      <Pricing />
      <Testimonials />
      <Footer /> */}
    </Box>
  );
}

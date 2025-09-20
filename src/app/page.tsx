import BannerAction from "@app/components/bannerAction";
import BannerSupport from "@app/components/bannerSupport";
import Features from "@app/components/features";
import Footer from "@app/components/footer";
import HeaderBar from "@app/components/headerBar";
import HeroSection from "@app/components/heroSection";
import Pricing from "@app/components/pricing";
import Testimonials from "@app/components/testimonials";
import { Box, Container } from "@chakra-ui/react";
import ScrollIndicator from "@components/interactions/ScrollIndicator";

export default function Home() {
  return (
    <Box minHeight="100vh" bg="bg-canvas">
      <HeaderBar />
      <Container direction="column" spaceY="page">
        <HeroSection />
        <Features />
        <BannerAction />
        <Testimonials />
        <BannerSupport />
        <Pricing />
        <Footer />
      </Container>
      <ScrollIndicator />
    </Box>
  );
}

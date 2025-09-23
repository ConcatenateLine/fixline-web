import BannerAction from "@app/components/bannerAction";
import BannerSupport from "@app/components/bannerSupport";
import Companies from "@app/components/companies";
import Features from "@app/components/features";
import Footer from "@app/components/footer";
import HeaderBar from "@app/components/headerBar";
import HeroSection from "@app/components/heroSection";
import Pricing from "@app/components/pricing";
import Testimonials from "@app/components/testimonials";
import { Container } from "@chakra-ui/react";
import ScrollIndicator from "@components/interactions/ScrollIndicator";
import BaseContainer from "@components/ui/baseContainer";
import BaseLayout from "@components/ui/baseLayout";

export default function Page() {
  return (
    <BaseLayout headerBar={<HeaderBar />}>
      <BaseContainer props={{ paddingInline: "unset" }}>
        <Container direction="column" spaceY="page">
          <HeroSection />
          <Features />
          <BannerAction />
          <Testimonials />
        </Container>
        <BannerSupport />
        <Container direction="column" spaceY="page">
          <Pricing />
          <Companies />
          <Footer />
        </Container>
        <ScrollIndicator />
      </BaseContainer>
    </BaseLayout>
  );
}

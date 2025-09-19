import HeroActions from "@app/components/heroActions";
import { Container, Stack } from "@chakra-ui/react";
import ImprovementCards from "@components/brand/improvementCards";
import MessagePill from "@components/text/MessagePill";
import MessageSecondary from "@components/text/MessageSecondary";
import TitleBicolor from "@components/text/TitleBicolor";

export default function HeroSection() {
  return (
    <Container>
      <Stack gap="section" justifyContent="center" alignItems="center">
        <MessagePill message="Trusted by 50,000+ companies worldwide" />
        <TitleBicolor
          primaryText="Transform your"
          secondaryText="Customer Support"
        />
        <MessageSecondary message="Streamline your ticket management with our intelligent platform. Resolve issues faster, delight customers, and scale your support operations effortlessly." />
        <HeroActions />
        <ImprovementCards />
      </Stack>
    </Container>
  );
}

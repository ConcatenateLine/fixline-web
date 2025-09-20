import HeroActions from "@app/components/heroActions";
import { Container, Stack } from "@chakra-ui/react";
import DoneSvg from "@components/brand/done.svg";
import ImprovementCards from "@components/brand/improvementCards";
import MessagePill from "@components/text/MessagePill";
import MessageSecondary from "@components/text/MessageSecondary";
import TitleBicolor from "@components/text/TitleBicolor";
import BackgroundBlur from "@components/ui/backgroundBlur";

export default function HeroSection() {
  return (
    <Container position="relative" padding="containerPadding" zIndex="0">
      <BackgroundBlur
        colorCircleTop="secondary-accent"
        colorCircleBottom="secondary-accent"
      />
      <Stack gap="section" justifyContent="center" alignItems="center">
        <MessagePill
          message="Trusted by 50,000+ companies worldwide"
          icon={<DoneSvg stroke="var(--chakra-colors-text-primary)" />}
        />
        <TitleBicolor
          primaryText="Transform your"
          secondaryText="Customer Support"
          fontSize="7xl"
        />
        <MessageSecondary message="Streamline your ticket management with our intelligent platform. Resolve issues faster, delight customers, and scale your support operations effortlessly." />
        <HeroActions />
        <ImprovementCards />
      </Stack>
    </Container>
  );
}

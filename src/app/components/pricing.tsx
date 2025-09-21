import { Container, HStack, Stack } from "@chakra-ui/react";
import PricingCard from "@components/cards/pricingCard";
import MessagePill from "@components/text/MessagePill";
import MessageSecondary from "@components/text/MessageSecondary";
import TitleBicolor from "@components/text/TitleBicolor";
import {
  LucideBuilding,
  LucideBuilding2,
  LucideCalendarCheck,
  LucideMedal,
} from "lucide-react";

export default function Pricing() {
  return (
    <Container padding="containerPadding" spaceY="page">
      <Stack gap="page" alignItems="center">
        <MessagePill
          message="Explore our plans"
          icon={
            <LucideCalendarCheck color="var(--chakra-colors-text-primary)" />
          }
        />
        <TitleBicolor
          primaryText="Powerful support for your team"
          secondaryText="One ticket, one solution"
          fontSize="5xl"
        />
        <MessageSecondary message="Plans for teams of every size — from start-up to enterprise." />
      </Stack>
      <HStack justifyContent="space-between">
        <PricingCard
          name="Starter"
          icon={<LucideMedal />}
          price="0"
          unit="month"
          description="Up to 5 users"
          buttonText="Get Started"
          features={[
            "Up to 5 users",
            "1 ticket per month",
            "1 priority response",
          ]}
        />
        <PricingCard
          mostPopular
          name="Pro"
          icon={<LucideBuilding />}
          price="50"
          unit="month"
          description="Up to 10 users"
          buttonText="Get Started"
          features={[
            "Up to 10 users",
            "2 tickets per month",
            "2 priority responses",
          ]}
        />
        <PricingCard
          name="Enterprise"
          icon={<LucideBuilding2 />}
          price="85"
          unit="month"
          description="Up to 25 users"
          buttonText="Get Started"
          features={[
            "Up to 25 users",
            "5 tickets per month",
            "5 priority responses",
          ]}
        />
      </HStack>
    </Container>
  );
}

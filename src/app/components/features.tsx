import { Box, Grid, Stack } from "@chakra-ui/react";
import BasicCard from "@components/cards/basicCard";
import MessagePill from "@components/text/MessagePill";
import MessageSecondary from "@components/text/MessageSecondary";
import TitleBicolor from "@components/text/TitleBicolor";
import BackgroundBlur from "@components/ui/backgroundBlur";
import {
  LucideBot,
  LucideChartColumn,
  LucideClock,
  LucideGlobe,
  LucideShield,
  LucideUsers,
  LucideZap,
  Route,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <Route stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "Smart Ticket Routing",
    description:
      "Automatically route tickets to the right team members based on expertise, workload, and priority levels.",
    color: "#2b7fff",
  },
  {
    icon: <LucideChartColumn stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your support performance with real-time dashboards and comprehensive reporting.",
    color: "#ad46ff",
  },
  {
    icon: <LucideUsers stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "Team Collaboration",
    description:
      "Enable seamless collaboration with internal notes, @mentions, and shared ticket ownership.",
    color: "#00c951",
  },
  {
    icon: <LucideZap stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast response times with our optimized infrastructure and smart caching.",
    color: "#efb100",
  },
  {
    icon: <LucideShield stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, SSO integration, and compliance certifications.",
    color: "#fb2c36",
  },
  {
    icon: <LucideGlobe stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "Multi-Channel Support",
    description:
      "Manage tickets from email, chat, social media, and phone calls in one unified platform.",
    color: "#615fff",
  },
  {
    icon: <LucideClock stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "24/7 Availability",
    description:
      "Round-the-clock support with automated responses and intelligent escalation workflows.",
    color: "#00bba7",
  },
  {
    icon: <LucideBot stroke="var(--chakra-colors-text-primary-alt)" />,
    title: "AI-Powered Automation",
    description:
      "Leverage AI to automate repetitive tasks, suggest responses, and predict customer needs.",
    color: "#8e51ff",
  },
];

export default function Features() {
  return (
    <Box padding="containerPadding">
      <Stack gap="section" justifyContent="center" alignItems="center">
        <MessagePill
          message="Powerful Features"
          icon={<Zap stroke="var(--chakra-colors-text-primary)" />}
        />
        <TitleBicolor
          primaryText="Everything You Need to"
          secondaryText="Excel at Support"
          fontSize="5xl"
        />
        <MessageSecondary message="Our comprehensive suite of tools empowers your team to deliver exceptional customer experiences at scale." />

        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="section"
          justifyContent="center"
          alignItems="center"
        >
          {features.map((feature) => (
            <BasicCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}

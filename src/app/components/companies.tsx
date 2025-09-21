import { Container, Grid, Text } from "@chakra-ui/react";

const companiesData = [
  "TechFlow",
  "CloudVision",
  "DataSync",
  "InnovateLab",
  "SecureNet",
  "StartupHub",
  "GlobalTech",
  "NextGen",
  "FutureWorks",
  "DigitalEdge",
  "SmartSolutions",
  "ProActive",
];

export default function Companies() {
  return (
    <Container padding="containerPadding" textAlign="center" spaceY="page">
      <Text fontSize="2xl" fontWeight="bold" color="text-primary">
        Trusted by industry leaders
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" gap="page">
        {companiesData.map((company) => (
          <Text key={company} fontSize="lg" color="text-secondary">
            {company}
          </Text>
        ))}
      </Grid>
    </Container>
  );
}

import { Box, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { LucideCheckCircle2 } from "lucide-react";

interface PricingCardProps {
  name: string;
  icon: React.ReactNode;
  price: string;
  unit: string;
  description: string;
  buttonText: string;
  features: string[];
  mostPopular?: boolean;
}

function ListItem({ name }: { name: string }) {
  return (
    <HStack>
      <Icon size="md" color="var(--chakra-colors-primary-accent)">
        <LucideCheckCircle2 />
      </Icon>
      <Text color="text-secondary">{name}</Text>
    </HStack>
  );
}

export default function PricingCard({
  name,
  icon,
  price,
  unit,
  description,
  buttonText,
  features,
  mostPopular,
}: PricingCardProps) {
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      bg="bg-surface"
      padding="cardPadding"
      width="full"
      shadow="lg"
      position="relative"
    >
      <Stack gap="section">
        <HStack>
          <Box
            rounded="full"
            padding="iconPadding"
            bg="bg-canvas"
            shadow="inner"
          >
            <Icon size="md" color="var(--chakra-colors-primary-accent)">
              {icon}
            </Icon>
          </Box>
          <Text fontWeight="bold" color="text-primary">
            {name}
          </Text>
        </HStack>
        <Stack gap="listItem">
          <Text fontSize="7xl" fontWeight="bold" color="text-primary">
            ${price}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="text-primary">
            {unit}
          </Text>
          <Text color="text-secondary">{description}</Text>
        </Stack>

        <Button borderRadius="lg">{buttonText}</Button>
        <Stack gap="stack">
          {features.map((feature) => (
            <ListItem key={feature} name={feature} />
          ))}
        </Stack>
      </Stack>
      {mostPopular && (
        <Box position="absolute" top="0" right="0" padding="cardPadding">
          <Text fontSize="xs" fontWeight="bold" color="primary-accent" border="2px solid var(--chakra-colors-primary-accent)" borderRadius="lg" paddingX="iconText">
            Most Popular
          </Text>
        </Box>
      )}
    </Box>
  );
}

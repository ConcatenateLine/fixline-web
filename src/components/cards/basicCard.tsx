import { Box, Icon, Stack, Text } from "@chakra-ui/react";

interface BasicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function BasicCard({
  icon,
  title,
  description,
  color = "var(--chakra-colors-secondary-accent)",
}: BasicCardProps) {
  return (
    <Box
      border="border-subtle"
      rounded="lg"
      padding="cardPadding"
      height="full"
      transition="background-color 0.2s ease-in-out, shadow 0.2s ease-in-out,
      transform 0.2s ease-in-out"
      shadow="sm"
      _hover={{
        shadow: "lg",
        bg: `color-mix(in srgb, ${color} 8%, transparent)`,
        transform: "translateY(-5px)",
        "&:hover .icon": {
          transform: "scale(1.1)",
        },
        "&:hover .title": {
          color: "var(--chakra-colors-primary-accent)",
        },
      }}
    >
      <Stack gap="iconText" justifyContent="center" align="start">
        <Box
          bg={`linear-gradient(to right bottom, ${color} 0%, color-mix(in srgb, ${color} 60%, transparent) 100%)`}
          rounded="md"
          p="iconPadding"
          transition="transform 0.3s ease-in-out"
          className="icon"
        >
          <Icon size="lg">{icon}</Icon>
        </Box>
        <Text
          fontSize="lg"
          fontWeight="bold"
          color="var(--chakra-colors-text-primary)"
          className="title"
        >
          {title}
        </Text>
        <Text fontSize="md" color="var(--chakra-colors-text-secondary)">
          {description}
        </Text>
      </Stack>
    </Box>
  );
}

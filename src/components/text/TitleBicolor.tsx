import { Stack, Text } from "@chakra-ui/react";

interface TitleBicolorProps {
  primaryText: string;
  secondaryText: string;
  fontSize?: string;
}

export default function TitleBicolor({
  primaryText,
  secondaryText,
  fontSize = "7xl",
}: TitleBicolorProps) {
  return (
    <Stack gap="paragraph" alignItems="center">
      <Text fontSize={fontSize} fontWeight="bold" color="text-primary">
        {primaryText}
      </Text>
      <Text fontSize={fontSize} fontWeight="bold" color="link">
        {secondaryText}
      </Text>
    </Stack>
  );
}

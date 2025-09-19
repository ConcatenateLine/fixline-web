import { Box, Stack, Text } from "@chakra-ui/react";
import MessagePill from "@components/text/MessagePill";
import { Zap } from "lucide-react";

export default function Features() {
  return (
    <Box>
      <Stack gap="section" justifyContent="center" alignItems="center">
        <MessagePill
          message="Powerful Features"
          icon={<Zap stroke="var(--chakra-colors-text-primary)" />}
        />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          metus vel ante vestibulum facilisis. Nullam nec metus vel ante
          vestibulum facilisis.
        </Text>
      </Stack>
    </Box>
  );
}

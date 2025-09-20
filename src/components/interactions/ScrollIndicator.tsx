import { Box, Icon, Portal } from "@chakra-ui/react";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <Portal>
      <Box position="absolute" height="100vh" top="0" padding="layoutPadding">
        <Icon
          animation="bounce 1s infinite"
          color="text-primary"
          bottom="0"
          position="absolute"
        >
          <Mouse />
        </Icon>
      </Box>
    </Portal>
  );
}

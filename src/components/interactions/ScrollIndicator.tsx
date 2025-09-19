import { Box, Icon } from "@chakra-ui/react";
import { Mouse } from "lucide-react";

interface ScrollIndicatorProps {
  bottom?: string;
}

export default function ScrollIndicator({
  bottom = "-10",
}: ScrollIndicatorProps) {
  return (
    <Box
      position="absolute"
      left="50%"
      transform="-translate-x-50%"
      bottom={bottom}
    >
      <Icon animation="bounce 1s infinite" color="text-primary">
        <Mouse />
      </Icon>
    </Box>
  );
}

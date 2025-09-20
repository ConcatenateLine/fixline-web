import { Box } from "@chakra-ui/react";

interface BackgroundBlurProps {
  colorCircleTop: string;
  colorCircleBottom: string;
}

export default function BackgroundBlur({
  colorCircleTop,
  colorCircleBottom,
}: BackgroundBlurProps) {
  return (
    <Box
      position="absolute"
      width="100%"
      height="100%"
      pointerEvents="none"
      zIndex="-1"
    >
      <Box
        height="30%"
        width="30%"
        filter="blur(64px)"
        position="absolute"
        top="10%"
        left="10%"
        bg={colorCircleTop}
        rounded="full"
      />
      <Box
        height="60%"
        width="60%"
        filter="blur(64px)"
        position="absolute"
        bottom="10%"
        right="10%"
        bg={colorCircleBottom}
        rounded="full"
      />
      <Box
        bg="linear-gradient(90deg, cream 2%, red 100%)"
        height="100%"
        width="100%"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        filter="blur(64px)"
      />
    </Box>
  );
}

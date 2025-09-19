import { Button, HStack } from "@chakra-ui/react";
import { BookOpen } from "lucide-react";

export default function HeroActions() {
  return (
    <HStack gap="stack">
      <Button colorScheme="primary" variant="solid" size="2xl" rounded="xl">
        Get Started
      </Button>
      <Button colorScheme="primary" variant="outline" size="2xl" rounded="xl">
        <BookOpen />
        Learn More
      </Button>
    </HStack>
  );
}

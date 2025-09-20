import {
  Avatar,
  Card,
  HStack,
  Icon,
  RatingGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LucideQuote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  rating: number;
  testimonial: string;
  caracteristic: string;
  value: string;
}

const baseRating = 5;

function RatingComponent({ rating }: { rating: number }) {
  return (
    <RatingGroup.Root
      readOnly
      count={baseRating}
      value={rating}
      size="md"
      colorPalette="yellow"
    >
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.Root>
  );
}

export default function TestimonialCard({
  name,
  position,
  company,
  rating,
  testimonial,
  caracteristic,
  value,
}: TestimonialCardProps) {
  return (
    <Card.Root shadow="sm">
      <Card.Header>
        <Icon
          position="absolute"
          top="cardPadding"
          right="cardPadding"
          size="xl"
          color="var(--chakra-colors-primary-accent)"
          opacity="0.2"
        >
          <LucideQuote />
        </Icon>
        <HStack gap="4">
          <Avatar.Root size="lg" shape="full">
            <Avatar.Image src="https://picsum.photos/200/300" />
            <Avatar.Fallback name="Nue Camp" />
          </Avatar.Root>
          <Stack gap="0" lineHeight="1">
            <Card.Title fontSize="md">{name}</Card.Title>
            <Text fontSize="sm" color="var(--chakra-colors-text-secondary)">
              {position}
            </Text>
            <Text fontSize="sm" color="var(--chakra-colors-primary-accent)">
              {company}
            </Text>
          </Stack>
        </HStack>
      </Card.Header>
      <Card.Body gap="4">
        <RatingComponent rating={rating} />
        <Card.Description
          color="var(--chakra-colors-text-secondary)"
          fontSize="md"
        >
          "{testimonial}"
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <HStack
          width="full"
          padding="2"
          justifyContent="space-between"
          backgroundColor="var(--chakra-colors-bg-surfaceb)"
        >
          <Text fontSize="sm">{caracteristic}</Text>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="var(--chakra-colors-primary-accent)"
          >
            {value}
          </Text>
        </HStack>
      </Card.Footer>
    </Card.Root>
  );
}

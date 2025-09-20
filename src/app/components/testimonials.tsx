import { Container, Grid, Stack } from "@chakra-ui/react";
import TestimonialCard from "@components/cards/testimonialCard";
import MessagePill from "@components/text/MessagePill";
import MessageSecondary from "@components/text/MessageSecondary";
import TitleBicolor from "@components/text/TitleBicolor";
import { LucideStar } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    position: "Head of Customer Success",
    company: "TechFlow Inc.",
    image: "https://via.placeholder.com/150",
    rating: 1,
    testimonial:
      "TicketFlow transformed our support operations completely. Response times dropped by 60% and customer satisfaction scores hit an all-time high.",
    caracteristic: "Response",
    value: "60% faster",
  },
  {
    name: "Marcus Rodriguez",
    position: "Support Manager",
    company: "CloudVision",
    image: "https://via.placeholder.com/150",
    rating: 5,
    testimonial:
      "The AI-powered routing is incredible. Tickets automatically go to the right person every time, and our team productivity has never been higher.",
    caracteristic: "Team Productivity",
    value: "45% increase",
  },
  {
    name: "Emily Watson",
    position: "VP of Operations",
    company: "DataSync Solutions",
    image: "https://via.placeholder.com/150",
    rating: 2,
    testimonial:
      "Implementation was seamless and the analytics dashboard gives us insights we never had before. ROI was evident within the first month.",
    caracteristic: "ROI",
    value: "1 month",
  },
  {
    name: "David Kim",
    position: "Customer Experience Lead",
    company: "InnovateLab",
    image: "https://via.placeholder.com/150",
    rating: 5,
    testimonial:
      "Our customers love the multi-channel support. Whether they reach out via email, chat, or phone, everything is perfectly synchronized.",
    caracteristic: "Customer Satisfaction",
    value: "92% rating",
  },
  {
    name: "Lisa Thompson",
    position: "IT Director",
    company: "SecureNet Corp",
    image: "https://via.placeholder.com/150",
    rating: 5,
    testimonial:
      "Security was our top concern, and TicketFlow exceeded all expectations. Enterprise-grade security with incredible ease of use.",
    caracteristic: "Security Compliance",
    value: "100% certified",
  },
  {
    name: "Alex Johnson",
    position: "Founder & CEO",
    company: "StartupHub",
    image: "https://via.placeholder.com/150",
    rating: 3,
    testimonial:
      "As a growing startup, we needed something that could scale with us. TicketFlow has been the perfect partner in our journey.",
    caracteristic: "Scalability",
    value: "10x growth",
  },
];

export default function Testimonials() {
  return (
    <Container padding="containerPadding">
      <Stack gap="section" alignItems="center">
        <MessagePill
          message="Customer Stories"
          icon={<LucideStar color="var(--chakra-colors-text-primary)" />}
        />
        <TitleBicolor
          primaryText="Loved by Support Teams"
          secondaryText="Around the World"
          fontSize="5xl"
        />
        <MessageSecondary message="See how companies of all sizes are transforming their customer support with TicketFlow." />

        <Grid templateColumns="repeat(3, 1fr)" gap="section">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

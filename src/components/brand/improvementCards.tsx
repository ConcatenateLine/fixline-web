import { Grid } from "@chakra-ui/react";
import SquareCard from "@components/cards/squareCard";
import { Shield, Users, Zap } from "lucide-react";

export default function ImprovementCards() {
  return (
    <Grid templateColumns="repeat(3,minmax(0,1fr))" gap="stack" width="full" maxWidth="3xl">
      <SquareCard icon={<Users />} value="50K+" label="Happy Customers" />
      <SquareCard icon={<Zap />} value="99.9%" label="Uptime" />
      <SquareCard icon={<Shield />} value="24/7" label="Support" />
    </Grid>
  );
}

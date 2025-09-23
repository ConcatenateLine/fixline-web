import {
  Box,
  Button,
  Field,
  Grid,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import BackgroundBlur from "@components/ui/backgroundBlur";
import BaseContainer from "@components/ui/baseContainer";

export default function RegisterPage() {
  return (
    <BaseContainer
      props={{
        width: "full",
        height: "full",
        zIndex: "0",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <BackgroundBlur
        colorCircleTop="secondary-accent"
        colorCircleBottom="secondary-accent"
      />
      <VStack alignItems="start" gap="stack" width="xl">
        <Text color="text-primary" fontSize="5xl">
          Create an account
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" width="full" gap="listItem">
          <Button variant="outline" width="full" colorScheme="light">
            GitHub
          </Button>
          <Button variant="outline" width="full">
            GitLab
          </Button>
          <Button variant="outline" width="full">
            Bitbucket
          </Button>
          <Button variant="outline" width="full">
            Google
          </Button>
        </Grid>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="full"
        >
          <Text color="text-primary">or</Text>
        </Box>
        <VStack as="form" width="full" alignItems="start" gap="stack">
          <Field.Root required>
            <Field.Label color="text-primary">
              Email
              <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="me@example.com" color="text-primary" />
          </Field.Root>
          <Field.Root required>
            <Field.Label color="text-primary">
              Password
              <Field.RequiredIndicator />
            </Field.Label>
            <Input placeholder="me@example.com" color="text-primary" />
          </Field.Root>
        </VStack>
        <VStack alignItems="start">
          <HStack>
            <Text color="text-primary">
              By signing up you agree to our{" "}
              <Link color="link">terms of service</Link> and{" "}
              <Link color="link">privacy policy</Link>.
            </Text>
          </HStack>
          <Button type="submit">Sign Up</Button>
          <HStack>
            <Text color="text-primary">Already have an account?</Text>
            <Link href="/signIn" color="link">
              Sign In
            </Link>
          </HStack>
        </VStack>
        <Text color="text-secondary">
          This site is protected by hCaptcha. Its Privacy Policy and Terms of
          Service apply.
        </Text>
      </VStack>
    </BaseContainer>
  );
}

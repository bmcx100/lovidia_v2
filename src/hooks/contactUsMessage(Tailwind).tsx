import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/components";

type contactUsMessageProps = {
  topic: string;
  emailAddress: string;
  name: string;
  message: string;
};

export default function contactUsMessage({ topic, emailAddress, name, message }: contactUsMessageProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {emailAddress} via the Lovidia Contact Us Form</Preview>
      <Tailwind>
        <Body>
          <Container className="bg-brandDark px-20 py-12">
            <Section className="bg-brandLight px-5 py-8">
              {/* <Heading as="h1">You received the following message from the contact form</Heading> */}
              <Text className="text-3xl">You received the following message from the contact form</Text>
              <Text>From: {name}</Text>
              <Text>Email Address: {emailAddress}</Text>
              <Text>Re: {topic}</Text>
              <Hr />
              <Text>Message: {message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

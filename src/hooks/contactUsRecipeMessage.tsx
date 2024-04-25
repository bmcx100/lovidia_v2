import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import React from "react";
// import { Tailwind } from "@react-email/components";

type contactUsRecipeMessageProps = {
  name: string;
  emailAddress: string;
  recipe_title: string;
  recipe_description: string;
  recipe_serves: string;
  recipe_prepttime: string;
  recipe_cooktime: string;
  recipe_totaltime: string;
  recipe_ingredients: string;
  recipe_directions: string;
  recipe_glutenFree: string;
  recipe_dairyFree: string;
  recipe_sugarFree: string;
  recipe_notes: string;
};

export default function contactUsRecipeMessage({
  name,
  emailAddress,
  recipe_title,
  recipe_description,
  recipe_serves,
  recipe_prepttime,
  recipe_cooktime,
  recipe_totaltime,
  recipe_ingredients,
  recipe_directions,
  recipe_glutenFree,
  recipe_dairyFree,
  recipe_sugarFree,
  recipe_notes,
}: contactUsRecipeMessageProps) {
  function FormatLineBreaks({ text }: { text: string }) {
    return (
      <div>
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <Html>
      <Head />
      <Preview>New message from {emailAddress} via the Lovidia Contact Us Form</Preview>
      {/* <Tailwind> */}
      <Body>
        <Container>
          <Section>
            {/* <Heading as="h1">You received the following message from the contact form</Heading> */}
            <Text>You received the following message from the contact form</Text>
            <Text>From: {name}</Text>
            <Text>Email Address: {emailAddress}</Text>
            <Text>Re: {recipe_title}</Text>
            <Hr />
            <Text>name: {name}</Text>
            <Text>emailAddress: {emailAddress}</Text>
            <Text>recipe_title: {recipe_title}</Text>
            <Text>recipe_description:</Text>
            <FormatLineBreaks text={recipe_description} />
            <Text>recipe_serves: {recipe_serves}</Text>
            <Text>recipe_prepttime: {recipe_prepttime}</Text>
            <Text>recipe_cooktime: {recipe_cooktime}</Text>
            <Text>recipe_totaltime: {recipe_totaltime}</Text>
            <Text>recipe_ingredients:</Text>
            <FormatLineBreaks text={recipe_ingredients} />
            <Text>recipe_directions:</Text>
            <FormatLineBreaks text={recipe_directions} />
            <Text>recipe_glutenFree: {recipe_glutenFree}</Text>
            <Text>recipe_dairyFree: {recipe_dairyFree}</Text>
            <Text>recipe_sugarFree: {recipe_sugarFree}</Text>
            <Text>recipe_notes:</Text>
            <FormatLineBreaks text={recipe_notes} />
          </Section>
        </Container>
      </Body>
      {/* </Tailwind> */}
    </Html>
  );
}

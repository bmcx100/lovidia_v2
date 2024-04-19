import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
// import { Tailwind } from "@react-email/components";

import { SurveyFormSchema, SurveyFormDataType } from "./surveyData";
type sendSurveyMessageProps = {
  formData: SurveyFormDataType;
};

export default function sendSurveyMessage({ formData }: sendSurveyMessageProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New message from ${formData.emailAddress} via the Lovidia Survey Form`}</Preview>
      <Body>
        <Container>
          <Section>
            <Text></Text>
            <Text>You received the following message from the lovidia.net survey</Text>
            <Text></Text>
            <Text>Personal Info</Text>
            <Text>name: {formData.name}</Text>
            <Text>emailAddress: {formData.emailAddress}</Text>
            <Text>age: {formData.age}</Text>
            <Text>location: {formData.location}</Text>
            <Text></Text>
            <Text>Symptoms Info</Text>
            <Text>symptomsMonth: {formData.symptomsMonth}</Text>
            <Text>symptomsYear: {formData.symptomsYear}</Text>
            <Text>symptomsSevere: {formData.symptomsSevere}</Text>
            <Text>symptomsMinor: {formData.symptomsMinor}</Text>
            <Text>symptomsComments: {formData.symptomsComments}</Text>
            <Text></Text>
            <Text>Treatments Info</Text>
            <Text>treatmentsImpact: {formData.treatmentsImpact}</Text>
            <Text>treatmentsHelpful: {formData.treatmentsHelpful}</Text>
            <Text>treatmentComments: {formData.treatmentComments}</Text>
            <Text></Text>
            <Text>Consents Info</Text>
            <Text>newsletter: {formData.newsletter?.toString()}</Text>
            <Text>followup: {formData.followup?.toString()}</Text>
            <Text>community: {formData.community?.toString()}</Text>
            <Text>conclusionComments: {formData.conclusionComments}</Text>
          </Section>
        </Container>
      </Body>
      {/* </Tailwind> */}
    </Html>
  );
}

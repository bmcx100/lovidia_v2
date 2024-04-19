import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/components";

import { SurveyFormSchema, SurveyFormDataType } from "./surveyData";
type sendSurveyMessageProps = {
  formData: SurveyFormDataType;
};

export default function sendSurveyMessage({ formData }: sendSurveyMessageProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New message from ${formData.emailAddress} via the Lovidia Contact Us Form`}</Preview>
      <Tailwind>
        <Body className="w-full">
          <Container className="w-full bg-brandDark px-20 py-12">
            <Section className="w-full bg-brandLight px-5 py-8">
              <Text className="text-3xl">You received the following message from the lovidia.net survey</Text>
              <Text className="text-3xl">Personal Info</Text>
              <Text>name: {formData.name}</Text>
              <Text>emailAddress: {formData.emailAddress}</Text>
              <Text>age: {formData.age}</Text>
              <Text>location: {formData.location}</Text>
              <Text className="text-3xl">Symptoms Info</Text>
              <Text>symptomsMonth: {formData.symptomsMonth}</Text>
              <Text>symptomsYear: {formData.symptomsYear}</Text>
              <Text>symptomsSevere: {formData.symptomsSevere}</Text>
              <Text>symptomsMinor: {formData.symptomsMinor}</Text>
              <Text>symptomsComments: {formData.symptomsComments}</Text>
              <Text className="text-3xl">Treatments Info</Text>
              <Text>treatmentsImpact: {formData.treatmentsImpact}</Text>
              <Text>treatmentsHelpful: {formData.treatmentsHelpful}</Text>
              <Text>treatmentComments: {formData.treatmentComments}</Text>
              <Text className="text-3xl">Consents Info</Text>
              <Text>newsletter: {formData.newsletter}</Text>
              <Text>followup: {formData.followup}</Text>
              <Text>community: {formData.community}</Text>
              <Text>conclusionComments: {formData.conclusionComments}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

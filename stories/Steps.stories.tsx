import React from "react";
import Steps from "../app/javascript/shared/Steps";
import ObtainCredStep from "../app/javascript/shared/ObtainCredStep";

export default {
  title: "Shared/Steps",
  component: Steps,
  argTypes: {
    title: { control: "text" },
  },
};

const Template = (args) => <Steps {...args} />;

export const Primary = Template.bind({});

export const OneStep = Template.bind({});
OneStep.args = {
  title: "Some Title",
  steps: [
    {
      id: "obtain-creds",
      title: "Obtain Credentials",
      component: ObtainCredStep,
    },
  ],
};

export const ManySteps = Template.bind({});
ManySteps.args = {
  title: "Client Credentials",
  steps: [
    {
      id: "obtain-creds",
      title: "Obtain Credentials",
      component: ObtainCredStep,
    },
    {
      id: "obtain-creds",
      title: "Redirect to Auth",
      component: ObtainCredStep,
    },
    {
      id: "obtain-creds",
      title: "Obtian Consent",
      component: ObtainCredStep,
    },
    {
      id: "Fetch Token",
      title: "Obtain Credentials",
      component: ObtainCredStep,
    },
  ],
};

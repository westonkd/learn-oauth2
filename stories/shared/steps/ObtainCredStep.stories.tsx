import React from "react";
import ObtainCredStep from "../../../app/javascript/shared/ObtainCredStep";

export default {
  title: "Shared/StepComponents/CreateCredentials",
  component: ObtainCredStep,
  argTypes: {},
};

const Template = (args) => <ObtainCredStep {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

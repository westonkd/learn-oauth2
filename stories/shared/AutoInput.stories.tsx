import React from "react";
import AutoInput from "../../app/javascript/shared/AutoInput";

export default {
  title: "Shared/AutoInput",
  component: AutoInput,
  argTypes: {
    hiddenValue: { control: "text" },
    label: { control: "text" },
  },
};

const Template = (args) => <AutoInput {...args} />;

export const Primary = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  hiddenValue: "wdrans@gmail.com",
};

export const WithValueAndLabel = Template.bind({});
WithValueAndLabel.args = {
  hiddenValue: "wdrans@gmail.com",
  label: "Email address",
};

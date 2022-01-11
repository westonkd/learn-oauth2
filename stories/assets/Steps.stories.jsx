import React from "react";
import Steps from "../../app/javascript/shared/Steps";

export default {
  title: "Shared/Steps",
  component: Steps,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <Steps {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}

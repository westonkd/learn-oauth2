import React from "react";
import Browser from "../../app/javascript/shared/Browser";

export default {
  title: "Shared/Browser",
  component: Browser,
  argTypes: {
    url: { control: "text" },
  },
};

const Template = (args) => <Browser {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "https://www.better.dev/",
};

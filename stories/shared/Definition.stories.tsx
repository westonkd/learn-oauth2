import React from "react";
import Definition, { Terms } from "../../app/javascript/shared/Definition";

export default {
  title: "Shared/Definition",
  component: Definition,
  argTypes: {},
};

const Template = (args) => (
  <p>
    Send the <Definition {...args} /> in the next request.
  </p>
);

export const Primary = Template.bind({});
Primary.args = {
  term: Terms.ClientId,
};

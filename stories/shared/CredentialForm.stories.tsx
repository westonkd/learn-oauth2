import React from "react";
import CredentialForm from "../../app/javascript/shared/CredentialForm";

export default {
  title: "Shared/CredentialForm",
  component: CredentialForm,
  argTypes: {
    redirectUri: { control: "text" },
    secret: { control: "text" },
    clientId: { control: "text" },
  },
};

const Template = (args) => <CredentialForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  redirectUri: "https://www.myredirect.com",
  secret: "Lf7GO7O1q1DCpXy9b0rI",
  clientId: "a1b2c3",
};

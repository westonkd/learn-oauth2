import React from "react";
import SoundStream from "../../app/javascript/shared/SoundStream";

export default {
  title: "Shared/SoundStream",
  component: SoundStream,
};

const Template = () => (
  <SoundStream>
    <h1>test</h1>
  </SoundStream>
);

export const Primary = Template.bind({});

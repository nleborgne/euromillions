import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Ball } from "./Ball";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example / Ball",
  component: Ball,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Ball>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Ball> = (args) => <Ball {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isSelected: false,
  number: 1,
};

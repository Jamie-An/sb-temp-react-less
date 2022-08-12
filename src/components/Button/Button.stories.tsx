import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  primary: true,
  label: "Button",
};

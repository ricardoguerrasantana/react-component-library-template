import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SampleButton } from 'component-lib';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SampleButton',
  component: SampleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SampleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SampleButton> = (args) => <SampleButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'SampleButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'SampleButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'SampleButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'SampleButton',
};

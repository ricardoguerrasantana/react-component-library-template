import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SampleHeader } from 'component-lib';

export default {
  title: 'Example/SampleHeader',
  component: SampleHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SampleHeader>;

const Template: ComponentStory<typeof SampleHeader> = (args) => <SampleHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

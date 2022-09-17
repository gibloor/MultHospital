import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouterWithRedux from 'tests/helpers/RouterWithRedux'

export default {
  title: 'Main',
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof RouterWithRedux>;

const Template: ComponentStory<typeof RouterWithRedux> = () => <RouterWithRedux route='/' />;

export const MainPage = Template.bind({});
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RouterWithRedux from 'tests/helpers/RouterWithRedux'
import multfilms from './data/multfilms'

export default {
  title: 'Multfilms',
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof RouterWithRedux>


const Template: ComponentStory<typeof RouterWithRedux> = (args) => <RouterWithRedux  {...args} />

export const NotAuthorized = Template.bind({})

NotAuthorized.args = {
  route: '/multfilms',
  initialState: {}
}

export const Authorized = Template.bind({})

Authorized.args = {
  route: '/multfilms',
  initialState: {
    user: {
      name: 'user',
      test_passed: true,
      level: 1,
    },
    multfilms: {
      multfilms: multfilms
    }
  }
}
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RouterWithRedux from 'tests/helpers/RouterWithRedux'
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Main',
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof RouterWithRedux>

const Template: ComponentStory<typeof RouterWithRedux> = () => <RouterWithRedux route='/' />

export const MainPage = Template.bind({})

export const SignIn = Template.bind({})

SignIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByTestId('sign-in')
  await userEvent.click(loginButton)
}

export const SignUp = Template.bind({})

SignUp.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const loginButton = await canvas.getByTestId('sign-up')
  await userEvent.click(loginButton)
}
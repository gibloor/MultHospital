import React from 'react';
import { screen, render } from '@testing-library/react';
import RoutRenderWithRedux from 'tests/helpers/RouterWithRedux';

//*WORKING ON HALF
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  Trans: ({ children }: { children: any }) => children,
}));

describe('ROUTES TEST', () => {

  test('route to MAIN page', () => {
    render(RoutRenderWithRedux({route:'/'}))
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('route to ABOUT PROJECT page', () => {
    render(RoutRenderWithRedux({route: '/about-project'}))
    expect(screen.getByTestId('about-project-page')).toBeInTheDocument();
  });
  
})
import React from 'react';
import { screen, render } from '@testing-library/react';
import RoutRenderWithRedux from 'tests/helpers/RouterWithRedux';

describe('ROUTES TEST', () => {

  test('route to MAIN page', () => {
    render(RoutRenderWithRedux({route:'/'}))
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('route to ABOUT PROJECT page', () => {
    render(RoutRenderWithRedux({route: '/about-project'}))
    expect(screen.getByTestId('about-project-page')).toBeInTheDocument();
  });

  test('route to MULTFILMS-OFF page', () => {
    render(RoutRenderWithRedux({route: '/multfilms', }))
    expect(screen.getByTestId('multfilms-page-off')).toBeInTheDocument();
  });

  test('route to MULTFILMS-GREET NEW page', () => {
    const user = {
      name: 'user',
      test_passed: true,
      level: 2,
    }

    render(RoutRenderWithRedux({route: '/multfilms', initialState: {user: user}}))
    expect(screen.getByTestId('multfilms-page')).toBeInTheDocument();

    screen.debug()
  });

  // test('route to MULTFILMS-CHAIN page', () => {
  //   render(RoutRenderWithRedux({route: '/multfilms', }))
  //   expect(screen.getByTestId('multfilms-page')).toBeInTheDocument();
  // });

  // test('route to MULTFILMS-SURVEY page', () => {
  //   render(RoutRenderWithRedux({route: '/multfilms', }))
  //   expect(screen.getByTestId('multfilms-page')).toBeInTheDocument();
  // });
  
});
import React from 'react';
import { screen, render } from '@testing-library/react';
import RoutRenderWithRedux from 'tests/helpers/RouterWithRedux';

describe('ROUTES TEST', () => {

  test('route to MAIN page', () => {
    render(RoutRenderWithRedux({route:'/'}));
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('route to ABOUT PROJECT page', () => {
    render(RoutRenderWithRedux({route: '/about-project'}));
    expect(screen.getByTestId('about-project-page')).toBeInTheDocument();
  });

  test('route to MULTFILMS-OFF page', () => {
    render(RoutRenderWithRedux({route: '/multfilms', }));
    expect(screen.getByTestId('multfilms-page-unauthorized')).toBeInTheDocument();
  });

  test('route to MULTFILMS-GREET NEW page', () => {
    const user = {
      name: 'user',
    };

    render(RoutRenderWithRedux({route: '/multfilms', initialState: {user: user}}));
    expect(screen.getByTestId('multfilms-page-greet')).toBeInTheDocument();
  });

  test('route to MULTFILMS page', () => {
    const user = {
      name: 'user',
      test_passed: true,
      level: 2,
    };

    render(RoutRenderWithRedux({route: '/multfilms', initialState: {user: user}}));
    expect(screen.getByTestId('multfilms-page')).toBeInTheDocument();
  });
});
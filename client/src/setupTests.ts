import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

import 'i18n';
import i18nextMock from 'tests/__mocks__/i18nextMock';

i18nextMock();

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import 'i18n';

window.matchMedia = window.matchMedia || function() {
  return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
  };
};
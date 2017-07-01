## Webpack 2: Step by Step Guide

### Code Splitting

  System.imoport is a special function that is a part of ES2015 module spec.
  System.import returns a Promise Type and parameter 'module' of the .then function
  is what you've imported

  When the 'module' is actullay loaded up, we're going to call 'module.default' which is
  gonna call our defined functions in the 'module'. 

  Webpack is quite literally looking for calls to System.import, and if it sees a call
  to System.import, it's going to add in all that additional codes.
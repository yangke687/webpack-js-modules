## Webpack 2: Step by Step Guide

### Introduction to ecosystem
	
+ 	Server Sdie Templating: 
		Backend server creates an HTML document and sends it to the user

+ 	Single Page Application:
		Server sends a bare-bones HTML doc to the user. Javascript runs on the users machine
		to assemble a full webpage. We have a huge pile of Javascripts that is being shipped
		down to our user's browser.

### Purpose of Webpack
	
The more files we have, the slower load time for our page and this is specially true
on mobile devices. Each of these javascript files takes time to download and this can
be a big issue on a mobile connection. The purpose of webpack is to take our big collection
of tiny little javascript modules and merge them all into one big javascript file while also
ensuring that each module is executed in the correct order. That is the core of webpak does.
If you used webpack in the past and you found that it also seems to handle CSS or handle 
turning ES2015 code into ES5 compatible code. The final output will deal with the load order
of a bunch of different modules and it will also solve the issue of loading up a ton of tiny
javascript modules over a network connection.

### Module Loaders
	
Module loaders are used to do some preprocessing on files before they are added to webpack output 
bundle.js file. So before the get stuffed into the bundle.js, we're gonna do some amount of preprocessing
on them. Loaders are commonly used to implement transpiling for ES2015 code, so like the use of Babel. 
They could also be used to handle CSS, handle images, all different types of files can be eanbled use
with webpack by the use of these module loaders.

### Code Splitting

System.imoport is a special function that is a part of ES2015 module spec.
System.import returns a Promise Type and parameter 'module' of the .then function
is what you've imported

When the 'module' is actullay loaded up, we're going to call 'module.default' which is
gonna call our defined functions in the 'module'. 

Webpack is quite literally looking for calls to System.import, and if it sees a call
to System.import, it's going to add in all that additional codes.
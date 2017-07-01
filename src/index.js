/*import sum from './sum';
import './image_viewer';
const total = sum(10, 5);

console.log(total);*/


const button = document.createElement('button');
button.innerText = 'Click me';
// see how to implemnet code splitting
button.onclick = () => {
  // System.import is a special function that is part of the ES2015 module spec
  // keep in mind, System.import call returns Promise
  System.import('./image_viewer')
    .then(module => {
      console.log(module,typeof module);
      if( typeof module.default === 'function' ){
        module.default();
      }
    });
};

document.body.appendChild(button);
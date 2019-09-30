//import _ from 'lodash';
import printMe from './print.js';
import BbvaButton from '@bbva-web-components/bbva-button-default';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  const bbvaButton = document.createElement('bbva-button-default');
  bbvaButton.text = 'BBVA Button into a Webpack module';
  bbvaButton.onclick =  printMe;

  //element.innerHTML = _.join(['Hello', 'webpack   '], ' ');
  element.innerHTML = ['Hello', 'webpack'].join(' - ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = greeting;

  element.appendChild(btn);
  element.appendChild(bbvaButton);

  return element;
}

function greeting() {
  console.log('Hola desde componente Bbva');
}
document.body.appendChild(component());

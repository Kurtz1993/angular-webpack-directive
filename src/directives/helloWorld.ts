require('./helloWorld.css');
let tpl = require('./helloWorld.html');

let helloWorld = () => {
  return {
    template: tpl
  }
};

export {helloWorld};
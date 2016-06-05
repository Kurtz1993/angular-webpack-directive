import {helloWorld} from './directives/helloWorld';

angular.module('test', [])
  .directive('helloWorld', helloWorld);
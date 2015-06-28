import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import numberAbrvFilter from './main/number-abrv.filter';

angular.module('numberApp', ['ui.router'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .controller('MainController', MainController)
  .filter('numberAbrvFilter', numberAbrvFilter);

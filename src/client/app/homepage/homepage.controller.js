(function() {
  'use strict';

  angular
    .module('app.homepage')
    .controller('HomepageController', HomepageController);

  HomepageController.$inject = ['logger'];
  /* @ngInject */
  function HomepageController(logger) {
    var vm = this;
    vm.title = 'Homepage';

    activate();

    function activate() {
      logger.info('Activated Homepage View');
    }
  }
})();

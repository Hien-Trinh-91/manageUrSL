(function() {
  'use strict';

  angular
    .module('app.timetable')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'timetable',
        config: {
          url: '/timetable',
          templateUrl: 'app/timetable/timetable.html',
          controller: 'TimetableController',
          controllerAs: 'vm',
          title: 'Timetable'
        }
      }
    ];
  }
})();

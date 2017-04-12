(function () {
  'use strict';

  angular
    .module('app.timetable')
    .service('TimetableService', TimetableService);

  TimetableService.inject = ['$http'];

  function TimetableService($http) {
    this.getTodayWork = getTodayWorkFn;

    ////////////////

    function getTodayWorkFn() {
        return $http.get('api/getTodayWork')
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('app.timetable')
    .controller('TimetableController', TimetableController);

  TimetableController.$inject = ['logger', '$scope','TimetableService'];
  /* @ngInject */
  function TimetableController(logger, $scope,TimetableService) {
    var vm = this;
    vm.title = 'Timetable';
    vm.todayWorks = [];

    activate();

    function activate() {
      logger.info('Activated Timetable View');
      showCalendar();
      getTodayWork();

    }
    // Show showCalendar
    function showCalendar() {
      $scope.eventSources = [];
      $scope.uiConfig = {
        calendar: {
          height: 450,
          width: 450,
          editable: true,
          header: {
            left: 'month basicWeek basicDay agendaWeek agendaDay',
            // center: 'Your Time',
            right: 'today prev,next'
          },
          eventClick: $scope.alertEventOnClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize
        }
      };
    }

    // Get All Work Today
    function getTodayWork() {
      TimetableService.getTodayWork()
        .then(success)
        .catch(failed)

      function success(res) {
        vm.todayWorks = res.data;
        console.log(res);
      }
      function failed(err) {
        console.log(err);

      }

    }
  }


})();

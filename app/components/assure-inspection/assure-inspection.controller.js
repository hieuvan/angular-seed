'use strict';

define(function() {
  return ['config', 'sharedProperties', '$state', '$stateParams', 'GetStorageService', function(config, sharedProperties, $state, $stateParams, GetStorageService) {
    var vm = this;
    vm.inspectionUser = GetStorageService.getFullName();
    vm.startInspection = function() {
      $state.go("root.site.assure-inspection-question")
    };

    vm.questions = [];
    vm.currentQuestion = null;

    vm.hotel = sharedProperties.getProperty('hotel');
    console.log(vm.hotel);

    vm.questions = vm.hotel.questionnaire.questions;
    console.log(vm.questions);
    vm.questionsInCategories = {};
    var questionId = $stateParams.questionId;
    vm._Index = 0;
    vm.status = {
      isCustomHeaderOpen: false
    };

    if (!_.isEmpty(questionId)) {
      if (!isNaN(questionId)) {
        vm.currentQuestion = _.findWhere(vm.questions, {number: questionId});
        vm._Index = vm.currentQuestion.number;
        vm.previousQuestionNumber = parseInt(vm._Index) - 1;
        vm.nextQuestionNumber = parseInt(vm._Index) + 1;
      } else if (questionId == 'all') {
        vm.currentQuestion = null;
        _.each(vm.questions, function(question) {
          if (_.isEmpty(vm.questionsInCategories[question.category_id])) {
            vm.questionsInCategories[question.category_id] = {};
            vm.questionsInCategories[question.category_id]['category'] = question.category;
            vm.questionsInCategories[question.category_id]['items'] = [];
          }
          vm.questionsInCategories[question.category_id]['items'].push(question);

        });
        console.log(vm.questionsInCategories);
      }
    }

    // if a current image is the same as requested image
    vm.isActive = function (index) {
      return vm._Index === index;
    };

    // show prev image
    vm.showPrev = function () {
      vm._Index = (vm._Index > 0) ? --vm._Index : vm.photos.length - 1;
    };

    // show next image
    vm.showNext = function () {
      vm._Index = (vm._Index < vm.photos.length - 1) ? ++vm._Index : 0;
    };

    // show a certain image
    vm.showPhoto = function (index) {
      vm._Index = index;
    };

  }];
});
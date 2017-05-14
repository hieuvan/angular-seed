'use strict';

define(function() {
  return ['config', 'sharedProperties', '$state', '$stateParams', 'GetStorageService', function(config, sharedProperties, $state, $stateParams, GetStorageService) {
    var vm = this;
    vm.inspectionUser = GetStorageService.getFullName();
    vm.questions = [];
    vm.currentQuestion = null;

    vm.hotel = sharedProperties.getProperty('hotel');
    vm.questions = vm.hotel.questionnaire.questions;
    vm.questionsInCategories = {};
    var questionId = $stateParams.questionId;

    vm._Index = 0;
    vm.status = false;
    vm.currentInspectionData = GetStorageService.getCurrentInspection(vm.hotel.id);
    if (!_.isEmpty(vm.currentInspectionData) && vm.currentInspectionData.hotelId == vm.hotel.id) {
      vm.cleanedBy = vm.currentInspectionData.cleanedBy;
      vm.roomNumber = vm.currentInspectionData.roomNumber;
      vm.comments = vm.currentInspectionData.comments;
    }
    console.log(vm.hotel);
    console.log(vm.currentInspectionData);
    vm.startInspection = function() {
      if (_.isEmpty(vm.currentInspectionData)) {
        vm.currentInspectionData = {};
        vm.currentInspectionData.hotelId = vm.hotel.id;
        vm.currentInspectionData.inspectionUser = vm.inspectionUser;
        vm.currentInspectionData.cleanedBy = vm.cleanedBy;
        vm.currentInspectionData.roomNumber = vm.roomNumber;
        vm.currentInspectionData.comments = vm.comments;
        vm.currentInspectionData.requiredScore = vm.hotel.questionnaire.passing_percentage;
        vm.currentInspectionData.data = _.map(vm.questions, function(question) {
          question.answer = "1";
          if (question.is_rating_type_answer) {
            question.answer = question.weighting;
          }
          question.score = calculateEachScore(question);
          return question;
        });
        vm.currentInspectionData.totalScore = calculateTotalScore();
        GetStorageService.setCurrentInspection(vm.hotel.id, vm.currentInspectionData);
      }

      //console.log(vm.currentInspectionData, vm.hotel.id);
      $state.go("root.site.assure-inspection-question");
    };

    var calculateTotalScore = function() {
      var totalWeighting = 0;
      var totalScore = 0;
      _.each(vm.currentInspectionData.data, function(question) {
        var answer = parseInt(question.answer);
        var weighting = parseInt(question.weighting);

        if (answer < 0) {
          return;
        }
        totalWeighting += weighting;
        console.log(totalScore, totalWeighting, question.number, question.is_rating_type_answer, weighting, answer);
        if (question.is_rating_type_answer) {
          if (answer > 0) {
            totalScore += answer;
          }
        } else {
          if (answer == 1) {
            totalScore += weighting;
          }
        }
      });
      console.log(totalScore, totalWeighting);
      totalScore = totalScore * 100;
      return parseInt(Math.round(totalScore / totalWeighting));
    };

    var calculateEachScore = function(question) {
      var answer = parseInt(question.answer);
      var weighting = parseInt(question.weighting);
var score = 0;
      if (answer < 0) {
        return 'NA';
      }
      if (question.is_rating_type_answer) {
        if (answer > 0) {
          score = answer;
        }
      } else {
        if (answer == 1) {
          score = weighting;
        }
      }
      score = score * 100;
      var percentage = parseInt(Math.round(score / weighting));
      percentage = percentage + '%';
      return percentage;
    };

    vm.saveInspection = function(to) {
      vm.currentQuestion.score = calculateEachScore(vm.currentQuestion);
      vm.currentInspectionData.totalScore = calculateTotalScore();

      GetStorageService.setCurrentInspection(vm.hotel.id, vm.currentInspectionData);
      $state.go("root.site.assure-inspection-question", {questionId: to});
    };

    //console.log(vm.questions);

    if (!_.isEmpty(questionId)) {
      //console.log(vm.currentInspectionData, vm.hotel.id);
      if (_.isEmpty(vm.currentInspectionData)) {
        //console.log('is empty');
        $state.go("root.site.assure-inspection-start");
      }
      if (!isNaN(questionId)) {
        //vm.currentQuestion = _.findWhere(vm.questions, {number: questionId});
        vm.currentQuestion = _.findWhere(vm.currentInspectionData.data, {number: questionId});
        console.log(vm.currentQuestion);
        if (vm.currentQuestion) {
          vm._Index = vm.currentQuestion.number;
          vm.previousQuestionNumber = parseInt(vm._Index) - 1;
          vm.nextQuestionNumber = parseInt(vm._Index) + 1;
          if (vm.currentQuestion.is_rating_type_answer) {
            vm.answerOptions = [];
            for (var index = 0; index <= vm.currentQuestion.weighting; index++) {
              var ratingOption = {"label": index, "value": index};
              vm.answerOptions.push(ratingOption);
            }
            vm.answerOptions.push({"label": "N/A", "value": "-1"});
          } else {
            vm.answerOptions = [
              {"label": "YES", "value": "1"},
              {"label": "NO", "value": "0"},
              {"label": "N/A", "value": "-1"}
            ];
          }
        } else {
          $state.go("root.site.assure-inspection-question", {questionId: "all"});
        }
      } else if (questionId == 'all') {
        vm.currentQuestion = null;
        _.each(vm.currentInspectionData.data, function(question) {
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
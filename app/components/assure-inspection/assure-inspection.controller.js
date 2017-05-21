'use strict';

define(function() {
  return ['config', 'sharedProperties', '$state', '$stateParams', 'GetStorageService', 'SiteService', function(config, sharedProperties, $state, $stateParams, GetStorageService, SiteService) {
    var vm = this;
    vm.inspectionUser = GetStorageService.getFullName();
    vm.questions = [];
    vm.currentQuestion = null;

    vm.hotel = sharedProperties.getProperty('hotel');
    vm.questions = vm.hotel.questionnaire.questions;
    vm.questionsInCategories = {};
    var questionId = $stateParams.questionId;

    vm.imageIndex = 0;
    vm.accordionOpenStatus = false;
    vm.currentInspectionData = GetStorageService.getCurrentInspection(vm.hotel.id);
    if (!_.isEmpty(vm.currentInspectionData) && vm.currentInspectionData.hotelId == vm.hotel.id) {
      vm.cleanedBy = vm.currentInspectionData.cleanedBy;
      vm.roomNumber = vm.currentInspectionData.roomNumber;
      vm.comments = vm.currentInspectionData.comments;
    }

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
      totalScore = totalScore * 100;
      return Math.round((totalScore / totalWeighting) * 100) / 100;
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
    // complete inspection
    vm.completeInspection = function() {
      if (!_.isEmpty(vm.currentInspectionData)) {
        var inspectionToSend = {};
        inspectionToSend.user_id = GetStorageService.getIdFromPayload();
        inspectionToSend.room = vm.currentInspectionData.roomNumber;
        inspectionToSend.comments = vm.currentInspectionData.comments;
        inspectionToSend.cleaned_by = vm.currentInspectionData.cleanedBy;
        inspectionToSend.percentage_obtained = vm.currentInspectionData.totalScore;
        inspectionToSend.questionnaire_id = vm.currentInspectionData.questionnaire_id;
        inspectionToSend.email_to = [];
        if (vm.emailTo) {
          inspectionToSend.email_to = vm.emailTo.split(',');
        }
        inspectionToSend.date = Math.floor(Date.now() / 1000);
        inspectionToSend.answers = [];
        inspectionToSend.signature_image_data = '';
        _.each(vm.currentInspectionData.data, function(question) {
          var answer = {};
          answer.question_id = question.id;
          if (question.is_rating_type_answer) {
            answer.yesno = false;
          } else {
            answer.yesno = true;
          }
          answer.rating = question.answer;
          answer.comment = question.comment;
          inspectionToSend.answers.push(answer);
        });
        //console.log(inspectionToSend);
        SiteService.submitInspection(inspectionToSend).then(function(val) {
          GetStorageService.deleteCurrentInspection(vm.hotel.id);
          $state.go("root.site.assure-inspection-start");
        });
      }
    };
    // save inspection
    vm.saveInspection = function(to) {
      vm.currentQuestion.score = calculateEachScore(vm.currentQuestion);
      vm.currentInspectionData.totalScore = calculateTotalScore();

      GetStorageService.setCurrentInspection(vm.hotel.id, vm.currentInspectionData);
      if (isNaN(to) && to == 'complete') {
        $state.go("root.site.assure-inspection-complete");
      } else {
        $state.go("root.site.assure-inspection-question", {questionId: to});
      }
      return;
    };

    if (!_.isEmpty(questionId)) {
      if (_.isEmpty(vm.currentInspectionData)) {
        $state.go("root.site.assure-inspection-start");
        return;
      }
      if (!isNaN(questionId)) {
        vm.currentQuestion = _.findWhere(vm.currentInspectionData.data, {number: questionId});
        if (vm.currentQuestion) {
          vm.imageIndex = vm.currentQuestion.number;
          vm.previousQuestionNumber = parseInt(vm.imageIndex) - 1;
          vm.nextQuestionNumber = parseInt(vm.imageIndex) + 1;
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
      }
    } else {
      // in case go straight to complete but skipped start
      if ($state.current.name == 'root.site.assure-inspection-complete' && _.isEmpty(vm.currentInspectionData)) {
        $state.go("root.site.assure-inspection-start");
        return;
      }
    }
    // start inspection
    vm.startInspection = function() {
      if (_.isEmpty(vm.currentInspectionData)) {
        vm.currentInspectionData = {};
        vm.currentInspectionData.hotelId = vm.hotel.id;
        vm.currentInspectionData.inspectionUser = vm.inspectionUser;
        vm.currentInspectionData.cleanedBy = vm.cleanedBy;
        vm.currentInspectionData.roomNumber = vm.roomNumber;
        vm.currentInspectionData.comments = vm.comments;
        vm.currentInspectionData.requiredScore = vm.hotel.questionnaire.passing_percentage;
        vm.currentInspectionData.questionnaire_id = vm.hotel.questionnaire.id;
        vm.currentInspectionData.data = _.map(vm.questions, function(question) {
          question.answer = "1";
          if (question.is_rating_type_answer) {
            question.answer = question.weighting;
          }
          question.score = calculateEachScore(question);
          question.comment = '';
          return question;
        });
        vm.currentInspectionData.totalScore = calculateTotalScore();
        GetStorageService.setCurrentInspection(vm.hotel.id, vm.currentInspectionData);
      }

      $state.go("root.site.assure-inspection-question");
    };

    // if a current image is the same as requested image
    vm.isActive = function (index) {
      return vm.imageIndex === index;
    };

    // show prev image
    vm.showPrev = function () {
      vm.imageIndex = (vm.imageIndex > 0) ? --vm.imageIndex : vm.photos.length - 1;
    };

    // show next image
    vm.showNext = function () {
      vm.imageIndex = (vm.imageIndex < vm.photos.length - 1) ? ++vm.imageIndex : 0;
    };

    // show a certain image
    vm.showPhoto = function (index) {
      vm.imageIndex = index;
    };

  }];
});
'use strict';

define(function() {
  return ['config', 'sharedProperties', '$state', '$stateParams', 'GetStorageService', 'SiteService', '$uibModal', '$scope', function(config, sharedProperties, $state, $stateParams, GetStorageService, SiteService, $uibModal, $scope) {
    var vm = this;
    vm.inspectionUser = GetStorageService.getFullName();
    vm.questions = [];
    vm.photos = [];
    vm.currentQuestion = null;

    vm.hotel = sharedProperties.getProperty('hotel');
    vm.questions = vm.hotel.questionnaire.questions;
    vm.questionsInCategories = {};
    var questionId = $stateParams.questionId;
    var photos = vm.hotel.brand_images;

    _.each(photos, function(photo) {
      vm.photos.push({'url': photo.url, 'id': photo.id, thumbUrl: photo.thumbnail_url});
    });

    vm.imageIndex = 0;
    vm.accordionArray = [];
    vm.startResumeButton = "Start";
    vm.currentInspectionData = GetStorageService.getCurrentInspection();
    if (!_.isEmpty(vm.currentInspectionData)) {
      if (vm.currentInspectionData.hotelId == vm.hotel.id) {
        vm.cleanedBy = vm.currentInspectionData.cleanedBy;
        vm.roomNumber = vm.currentInspectionData.roomNumber;
        vm.comments = vm.currentInspectionData.comments;
        vm.startResumeButton = "Resume";
      } else {
        // finish the incomplete inspection before
        // starting new inspection
        vm.incompleteInspection = vm.currentInspectionData.hotelId;
      }
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

        SiteService.submitInspection(inspectionToSend).then(function(val) {
          GetStorageService.deleteCurrentInspection(vm.hotel.id);
          $state.go("root.site.assure-inspection-start");
        });
      }
    };
    // save inspection
    vm.saveInspection = function(to) {
      if (vm.currentQuestion) {
        vm.currentQuestion.score = calculateEachScore(vm.currentQuestion);
        vm.currentInspectionData.totalScore = calculateTotalScore();

        GetStorageService.setCurrentInspection(vm.currentInspectionData);
      }
      if (to == 'complete') {
        $state.go("root.site.assure-inspection-complete");
      } else {
        $state.go("root.site.assure-inspection-question", {questionId: to});
      }

      return;
    };

    vm.cancelInspection = function() {
      if (vm.incompleteInspection) {
        GetStorageService.deleteCurrentInspection(vm.incompleteInspection);
        delete vm.incompleteInspection;
      }
    };

    vm.openEmailModal = function() {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'components/email-photo-modal/modal.html',
        controller: 'ModalController',
        bindToController: true,
        controllerAs: 'vm',
        resolve: {
          emailMessage: function () {
            return vm.emailBody;
          }
        }
      });
    };


    if (!_.isEmpty(questionId)) {
      if (_.isEmpty(vm.currentInspectionData)) {
        $state.go("root.site.assure-inspection-start");
        return;
      }
      if (!isNaN(questionId)) {
        vm.currentQuestion = _.findWhere(vm.currentInspectionData.data, {counter: questionId});

        if (vm.currentQuestion) {
          vm.imageIndex = vm.currentQuestion.counter;
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

          vm.emailBody = 'An AHS Assure Quality inspection has been completed at ' + vm.hotel.name + '. This refers to question ('
              + vm.currentQuestion.text + '). ' + vm.inspectionUser + ' has made the following comments: ';
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
            if (_.isEmpty(vm.questionsInCategories[question.category_id]['items'])) {

            }
          }
          vm.questionsInCategories[question.category_id]['items'].push(question);

        });
      }
    } else {
      // in case go straight to complete but skipped start
      if ($state.current.name === 'root.site.assure-inspection-complete' && _.isEmpty(vm.currentInspectionData)) {
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

        var groupBy = _.groupBy(vm.questions, 'category_id');
        var groupAndSort = [];
        _.each(groupBy, function(question) {
          groupAndSort = groupAndSort.concat(_.flatten(question));
        });
        var counter = 1;

        vm.currentInspectionData.data = _.map(groupAndSort, function(question) {
          question.answer = "1";
          if (question.is_rating_type_answer) {
            question.answer = question.weighting;
          }
          question.score = calculateEachScore(question);
          question.comment = '';
          question.counter = '' + counter;
          counter++;
          return question;
        });

        vm.currentInspectionData.totalScore = calculateTotalScore();
        GetStorageService.setCurrentInspection(vm.currentInspectionData);
      }

      $state.go("root.site.assure-inspection-question");
    };

  }];
});
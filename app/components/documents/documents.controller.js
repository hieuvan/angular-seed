'use strict';

define(function() {
  return ['config', 'sharedProperties', '$stateParams', '$state', function(config, sharedProperties, $stateParams, $state) {
    var vm = this;

    var section_id = $stateParams.section_id;
    var sub_section_id = $stateParams.sub_section_id;
    if (_.isNull(section_id) || _.isNull(sub_section_id)) {
      $state.go('root.site');
    }
    vm.title = $stateParams.title;
    vm.hotel = sharedProperties.getProperty('hotel');
    var documents = vm.hotel.documents;
    vm.sectionDocuments = [];

    console.log(vm.title, section_id, sub_section_id, $stateParams.section_name);
    if (!_.isEmpty(documents)) {
      _.each(documents,function(document) {
        if (document.section_id == section_id && document.subsection_id==sub_section_id) {
          vm.sectionDocuments.push(document);
        }
      });
    }

  }];
});

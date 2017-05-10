'use strict';

define(function() {
  return ['config', 'sharedProperties', '$stateParams', function(config, sharedProperties, $stateParams) {
    var vm = this;
    vm.title = $stateParams.title;
    vm.hotel = sharedProperties.getProperty('hotel');
    var documents = vm.hotel.documents;
    vm.sectionDocuments = [];
    var section_id = $stateParams.section_id;
    var sub_section_id = $stateParams.sub_section_id;
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

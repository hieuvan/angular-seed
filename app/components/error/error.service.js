'use strict';

define(function(require) {

  return ['$stateParams', function($stateParams) {

    var errors = {
      404: {
        code: '404',
        message: 'Sorry - Page not found!',
        description: 'The page you are looking for was moved, removed, renamed or might never existed.'
      },
      401: {
        code: '401',
        message: 'Unauthorised content',
        description: 'Unauthorised content'
      },
      500: {
        code: '500',
        message: 'Sorry - There was error in the API!!',
        description: 'Something went wrong and we are working to fix it ASAP. Please come back later.'
      },
      unknown: {
        message:  'Unknown error occured!!',
        description: 'Something went wrong. Please come back later and try again.'
      }
    };

    /**
     * Get error details
     *
     * @return {undefined}
     */
    var getError = function() {
      var error = $stateParams.error;

      // error page was accessed directly
      var directPageAccess = _.isNull(error);

      var unknownError = _.isEmpty(error) || error.status === 0;

      if (directPageAccess) { return false; }

      if (unknownError) { return errors.unknown; }

      var result = errors[error.status];

      // we have custom error for the error
      if (!_.isUndefined(result)) {
        if (error.status == '401') {
          result.description = error.data.error
        }
        return result;
      }

      return {
        code: error.status,
        message: error.statusText,
        description: errors.unknown.description
      };
    };

    return {
      error: getError
    };
  }];
});

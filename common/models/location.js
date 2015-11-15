module.exports = function(Location) {


  Location.findLocationFromUser = function(UserId, callback) {
      Location.find(
          {
              where:
              {
                  'userId': UserId
              },
              order: 'date ASC'
          },
          function(err, response)
          {
              if (err) {
                  next(err);
              } else {
                  callback(null, response);
              }
          }
      );
  };

  Location.remoteMethod(
      'findLocationFromUser',
      {
          description: 'Find a location from one user',
          accepts: [{arg: 'UserId', type: 'string', required: true}],
          returns: { arg: 'response', type: 'object' },
          http: {verb: 'get'}
      }
  );

};

angular.module('starter.services', [])

.service('FitActivity', function($http) {
  this.getoneActivity = function() {
    var data = {
        "activityId":51007,
        "activityParentId":90019,
        "calories":230,
        "description":"drinking",
        "distance":2.04,
        "duration":1097053,
        "hasStartTime":true,
        "isFavorite":true,
        "logId":1154701,
        "name":"Beer Time",
        "startTime":"00:25",
        "steps":3783
      }
    return data;
  };
  this.getAll = function() {
    var req = {
      url: 'http://magnetic-tenure-840.appspot.com/sendData'
    }
    $http(req)
      .success(function(data){ 
        console.log(data)
      });
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Fit Bit',
    lastText: 'Ready to drink beer?',
    face: 'img/fitbit.jpeg'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Fit Bit',
    notes: 'Watching you move',
    face: 'img/fitbit.jpeg'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});



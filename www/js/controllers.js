angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $timeout) {

  function getData(){
      $http.get('').then(function(response){
           
      });
  }
  
  $timeout(function(){
    getData();
  },500);

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $cordovaOauth) {
  $scope.settings = {
    enableFriends: true,
    fitbit:false
  };

  $scope.$watch('settings.fitbit', function(newVal, oldVal) {
    if(newVal){
      $cordovaOauth.fitbit("2b0e3988257a42409005740317d523a7", "91b46ff4fed342cf9e1ee3532d4ca693").then(function(response){
        alert(response);
      });
    }
  });

});

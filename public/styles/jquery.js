$(document).ready(function(){
    $('.fadeOne').fadeIn(2500);
  });
  setTimeout(function(){
    $('.fadeTwo').fadeIn(2500);
  }, 500);
  setTimeout(function(){
    $('.fadeThree').fadeIn(2500);
  }, 1000);


  $scope.login = function(username, password){
    mainSvc.login({
      //first username taking values from function parameters
      username: username,
      password: password
    }).then(function(response){
      console.log(response.data);
    });
  };

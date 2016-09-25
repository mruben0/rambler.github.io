shaman.directive('blogPost', function(){
  return {
    restrict: 'E',
   scope: {
     info: '='
   },
    templateUrl: 'dirTiv/blogPost.html'
  };
});

app.controller('PostCtrl',function($scope,PostFactory,$rootScope){
	$rootScope.loading = true;
	$scope.posts = PostFactory.find().then(function(posts){
		$scope.posts = posts;
		$rootScope.loading = false;
	},function(msg){
		alert(msg);
	});

});

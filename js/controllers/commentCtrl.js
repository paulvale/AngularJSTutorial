app.controller('CommentsCtrl',function($scope,PostFactory,$routeParams,$rootScope){
	$rootScope.loading = true; 
	$scope.newComment = {};

	PostFactory.get($routeParams.id).then(function(post){
		$rootScope.loading = false;
		$scope.title = post.name;
		$scope.picture = post.picture;
		$scope.content = post.content;
		$scope.comments = post.comments;
		$scope.post = post;
	},function(msg){
		alert(msg);
	});
	

	$scope.addComment = function(){
		$scope.comments.push($scope.newComment);
		
		PostFactory.add($scope.newComment).then(function(){

		},function(msg){
			alert(msg);
		});

		$scope.newComment = {};
	};
	
	$scope.selectComment = function(){
		alert('Salut');
	};
});
app.directive('ngComment',function(){
	return{
		scope: {
			comment : '=', // permet de faire passer un objet via comment="monObject"
			commenta : '@comment', // permet de recuperer la chaine passer en parametre de comment 
			select : '&select' // permet de faire passer une fonction
		},
		restrict : 'A', // Attribute <div ng-comment></div>
				// 'E'  Element <ng-comment> ... </ng-comment>
				// 'C'  Classe <div class='ng-comment'></div>
		templateUrl: 'partials/_comment.html' 
	};
});

app.directive('ngTabs', function(){
	return {
		restrict: 'E',
		templateUrl: 'directive/tabs.html',
		scope: {
		}, 
		transclude : true,
		controller : function($scope){
			$scope.tabs = [];

			$scope.select = function(tab){
				angular.forEach($scope.tabs, function(t){
					t.selected = false;
				});
				tab.selected = true;
			};
			
			this.add = function(tab){
				if($scope.tabs.length === 0){
					$scope.select(tab);
				}
				$scope.tabs.push(tab);
			};
		}

	};
});

app.directive('ngTab', function(){
	return {
		restrict: 'E',
		templateUrl: 'directive/tab.html',
		scope: {
			title : '@',

		}, 
		transclude : true,
		require : '^ngTabs',
		link : function(scope,element,attr,tabsCtrl){
			scope.selected = false;
			tabsCtrl.add(scope);
		}

	};
});

// app.directive('time', function(dateFilter,$interval){
// 	return {
// 		scope:{

// 		},
// 		restrict : 'E',
// 		template:'{{time}}',
// 		link: function(scope,element, attrs){
// 			scope.time = dateFilter(new Date(),'HH:mm:ss');

// 			element.on($destroy,function(){
// 				$interval.cancel(interval);
// 			});
			
// 			interval = $interval(function(){
// 				scope.time = dateFilter(new Date(),'HH:mm:ss');
// 			},1000);
// 		}
// 	};
// });

// app.directive('datePicker', function(){
// 	return {
// 		restrict : 'C',
// 		link: function(scope, element,attrs){
// 			element.pickadate();
// 		}
// 	};
// });

// app.directive('ngTest',function(){
// 	return {
// 		template :'<div>Salut {{username}}!<div ng-transclude></div></div>',
// 		restrict : 'A',
// 		transclude : true ,
// 		scope:{
// 			username : '='
// 		}
// 	};
// });
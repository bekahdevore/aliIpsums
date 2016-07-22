angular.module('aliIpsumsApp', [])
	.controller('ipsumCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.loadIpsums = function() {
			console.log('loadIpsums was called: ' + $scope.numberOfParagraphs);
			// This is where we make the AJAX request

			// AJAX request ends up updating this variable:
			// $.ajax('http://localhost:3000/api/ipsum/' + $scope.numberOfParagraphs, function(err, data) {
			// 	var outputString = '';

			// 	data.ipsums.forEach(function(ipsum) {
			// 		outputString = outputString + ipsum + ' ';
			// 	});

			// 	$scope.ipsumOutput = outputString;
			// });
			//Bekah practice
			$http.get('/api/ipsums/' + $scope.numberOfParagraphs), function(err, results) {
					if (err) {
						console.log(err);
						return;
					}

					console.log(results);
				};

		};
	}]);






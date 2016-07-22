angular.module('aliIpsumsApp', ['ngSanitize'])
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

			var success = function(result) {
				var outputString = '';

				result.data.ipsums.forEach(function(ipsum, index) {
					if (index % 5 === 0) {
						outputString += '<br><br>';
					}
					outputString = outputString + ipsum.sentence + ' ';
				});

				$scope.ipsumOutput = outputString;

				/*var htmlIpsums = [];

				result.data.ipsums.forEach(function(ipsum, index) {
					if (index % 5 === 0) {

					}

					htmlIpsums.push(ipsum.sentence);
				});

				$scope.ipsumOutput = result.data.ipsums;*/
			};

			var error = function (err) {
				console.log(err);
			};

			$http.get('http://localhost:3000/api/ipsums/' + $scope.numberOfParagraphs * 5)
				.then(success, error);

		};

		// On page load.
		$scope.numberOfParagraphs = 3;
		$scope.loadIpsums();
	}]);






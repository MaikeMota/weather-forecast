angular.module('meuApp', [])
	.controller('meuControle', function($scope, $http){
		$scope.editorNomeCidade = 'Londrina';
		$scope.langs = 	["PT", "EN"];
		$scope.lang = $scope.langs[0];
		$scope.nomeCidade = $scope.editorNomeCidade;	
		$scope.hoje = new Date().toISOString();
		
		var urlBase = 'http://api.openweathermap.org/data/2.5/forecast?q={nomeCidade}&mode=json&units=metric&lang={lang}';		
		
		$scope.buscarDados = function(){
			$scope.dados = undefined;		
			
			var url = urlBase.replace("{nomeCidade}", $scope.nomeCidade).replace("{lang}", $scope.lang);	
			console.log(url);
			
			$http.get(url)
			.success(
				function(resposta){	
					$scope.dados = resposta;
			})
			.error(
				function(resposta){
					$scope.erro = resposta;
				}
			);
		};
		
		$scope.atualizarDados = function(){			
			$scope.nomeCidade = $scope.editorNomeCidade;
			$scope.buscarDados();	
		};

		$scope.buscarDados();
});
	

	

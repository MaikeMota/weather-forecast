angular.module('meuApp', [])
	.controller('meuControle', function($scope, $http){
		$scope.editorNomeCidade = 'Londrina';
		$scope.nomeCidade = $scope.editorNomeCidade;	
		$scope.hoje = new Date().toISOString();
		
		var urlBase = 'http://api.openweathermap.org/data/2.5/forecast?q={nomeCidade}&mode=json&units=metric&lang=pt';		
		
		$scope.buscarDados = function(){
			
			console.log($scope.nomeCidade);		
			
			var url = urlBase.replace("{nomeCidade}", $scope.nomeCidade);	
			console.log(url);
			
			$http.get(url)
			.success(
				function(resposta){	
					$scope.dados = resposta;
			})
			.error(
				function(resposta){
					$scope.erro = 'Erro ao buscar Previsão do Tempo!\n';
				}
			);
		};
		
		$scope.atualizarDados = function(){			
			$scope.nomeCidade = $scope.editorNomeCidade;
			$scope.buscarDados();	
		};

		$scope.buscarDados();
});
	

	

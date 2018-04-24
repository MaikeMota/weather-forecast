angular.module('meuApp', [])
	.controller('meuControle', function($scope, $http){
		$scope.editorNomeCidade = 'Londrina';
		$scope.langs = 	["PT", "EN"];
		$scope.lang = $scope.langs[0];
		$scope.nomeCidade = $scope.editorNomeCidade;	
		$scope.hoje = new Date().toISOString();
		var APPKEY = "1bc1b95e1532678bc526b04ee54ebc01";
		var urlBase = 'https://api.openweathermap.org/data/2.5/forecast?APPID={APPKEY}&q={nomeCidade}&mode=json&units=metric&lang={lang}';		
		
		$scope.buscarDados = function(){
			$scope.dados = undefined;		
			
			var url = urlBase.replace("{nomeCidade}", $scope.nomeCidade).replace("{lang}", $scope.lang).replace("{APPKEY}", APPKEY);	
			
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
	

	

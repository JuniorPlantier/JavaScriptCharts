function desenharGraficoDispersao(){

	var busca = new google.visualization.Query(
			'https://docs.google.com/spreadsheets/d'+
			'/18_IyGzRnxERQl3T711RQ2Pl8l21KCTB0Q9KCGRJLFYA/'+
			'gviz/tq?range=A1:B19'
		);
	
	busca.send(resultadoDaBusca);

	function resultadoDaBusca(resultado){

		var tabela = resultado.getDataTable();
		var opcoes = {
			title: 'Relação entre os gastos e limite de crédito dos clientes',
			titleTextStyle: {
				color: '#5e5851',
				fontSize: 20,
				fontType: 'Arial'
			},
			width: 900,
			height: 500,
			vAxis: {
				format: 'currency',
				gridlines: {
					color: 'transparent'
				},
				title: 'Limite de crédito'
			},
			hAxis: {
				format: 'currency',
				gridlines: {
					color: 'transparent'
				},
				title: 'Gasto'
			},
			legend: 'none',
			trendlines: {
				0: {

					color: 'purple',
					lineWidth: 10,
					opacity: 0.6,
					type: 'linear'
				}	
			}
		}

		var grafico = new google.visualization.ScatterChart(
		document.getElementById('graficoDispersao'));

		grafico.draw(tabela, opcoes);
	}

};
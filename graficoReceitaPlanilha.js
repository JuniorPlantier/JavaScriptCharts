function desenharGraficoReceitaPlanilha(){

	var busca = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/19FtUuabsM3oNY_tu3SUWoq1WFtmkntKIpqWZlVQLC_k/gviz/tq?range=A1:F262'
		);
	busca.send(resultadoDaBusca);

	function resultadoDaBusca(resultado) {

		var tabela = resultado.getDataTable();
		var opcoes = {
						title: 'Receitas anuais de contas da planilha',
						titleTextStyle: {
											color: '#5e5851',
											fontSize: 20,
											fontType: 'Arial'

						},
						isStacked: 'percent',
						width: 900,
						height: 300,
						series: {
									1: {color:'#a6a6a6'},
									2: {color:'#a6a6a6'},
									3: {color:'#a6a6a6'}
						},
						vAxis: {
									gridlines: {
													color: 'transparent'
									}
						},
						hAxis: {
									gridlines: {
													color: 'transparent'
									},
									format: 'yyyy'
						},
						chartArea: {
										right: 250,
										width: 500,
										height: 200
									}, 
						legend: {
									textStyle: {
													color: '#928e8a',
													fontSize: 16
								}
						}


				};

		var grafico = new google.visualization.AreaChart(document.getElementById('graficoReceitaPlanilha'));
			grafico.draw(tabela, opcoes);
	}	
}
function desenharGraficos() {
	/* -- gráfico de pizza --
	   -------------------------------------------------------------------------------------------------------------- */
	var tabela = new google.visualization.DataTable();
	tabela.addColumn('string', 'Categorias');
	tabela.addColumn('number', 'Valores');
	tabela.addRows(
		[
			['Educação', 2000],
			['Transporte', 500],
			['Lazer', 230],
			['Saúde', 50],
			['Cartão de crédito', 900],
			['Alimentação', 260]
		]
	);
	
	var opcoes = {
		title: 'Tipos de Gastos',
		'height': 450, // pixels
		'width': 900,
		//pieHole: 0.4 // muda o gráfico para donuts
		is3D: true,
		legend: 'labeled',
		pieSliceText: 'value',
		//colors: ['gray', 'red', 'yellow', 'blue', 'pink', 'purple']
		slices: { 0:{},
				  1:{color: 'gray'}, 
				  2:{color: '#A6A6A6'},
				  3:{color: 'gray'},
				  4:{offset: 0.3},
				  5:{color: 'gray'}
				}
	};
	
	var graficoPizza = new google.visualization.PieChart(document.getElementById('graficoPizza'));
	graficoPizza.draw(tabela, opcoes);
	
	/* -- gráfico de linha --
	   -------------------------------------------------------------------------------------------------------------- */
	var tabela = new google.visualization.DataTable();
	tabela.addColumn('string', 'mês');
	tabela.addColumn('number', 'gastos');
	tabela.addRows([
					['jan',800],
					['fev',400],
					['mar',1100],
					['abr',400],
					['mai',500],
					['jun',750],
					['jul',1500],
					['ago',650],
					['set',850],
					['out',400],
					['nov',1000],
					['dez',720]
				  ]);
				  
	var opcoes = {
		title: 'Gastos por mês',
		width: 650,
		height: 300,
		vAxis: { format: 'currency',
				 gridlines: {count: 5, 
							 color: 'transparent'}
			   },
		curveType: 'function',
		legend: 'none'
	};
	
	var graficoLinha = new google.visualization.ColumnChart(document.getElementById('graficoLinha'));
	graficoLinha.draw(tabela, opcoes);
	
	/* -- gráfico de coluna --
	   -------------------------------------------------------------------------------------------------------------- */
	
	tabela = google.visualization.arrayToDataTable(
				    [
						['Mês', 'Entrada', 'Saída'],
						['jan',2500,1000],
						['fev',1000,500],
						['mar',3000,1300],
						['abr',1500,1700],
						['mai',5000,2250],
						['jun',3567,3000],
						['jul',3452,1468],
						['ago',1833,5250],
						['set',1800,1000],
						['out',1800,1000],
						['nov',3569,1500],
						['dez',3000 ,1740] 
				    ]
			);
	
	var opcoes = {
		titulo: 'Entradas e saídas da conta',
		width: 800,
		height: 400,
		vAxis: { gridlines:{color:'transparent'},
			     format: 'currency',
				 title: 'Valores'
			   },
		hAxis: { title: 'Mês'}
	}
	
	var graficoColuna = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
	graficoColuna.draw(tabela, opcoes);
	
	/* -- gráfico de colunas surpresa --
	   -------------------------------------------------------------------------------------------------------------- */
	var tabela = new google.visualization.DataTable();
	tabela.addColumn('string', 'Categorias');
	tabela.addColumn('number', 'Valores');
	tabela.addColumn({type: 'string', role: 'annotation'});
	tabela.addColumn({type: 'string', role: 'style'});
	tabela.addRows(
		[
			['Educação', 2000, 'R$2.000,00', 'blue'],
			['Transporte', 500, 'R$500,00', 'gray'],
			['Lazer', 230, 'R$230,00', 'gray'],
			['Saúde', 50, 'R$50,00', 'gray'],
			['Cartão de crédito', 900, 'R$900,00', '#8904B1'],
			['Alimentação', 260, 'R$260,00', 'gray']
		]
	);
	tabela.sort([{column: 1, desc: true}]);
	
	var opcoes = {
		titulo: 'Tipo de Gastos',
		height: 400,
		width: 800,
		vAxis: { gridlines: { count: 0, color: 'transparent'} },
		hAxis: { gridlines: { color: 'transparent' },
			     format: 'currency',
				 textPosition: 'none'
			   },
		legend: 'none',
		annotations: {alwaysOutside: true}
	}
	
	//var graficoColunaSurpresa = new google.visualization.ColumnChart(document.getElementById('graficoColunaSurpresa'));
	var graficoColunaSurpresa = new google.visualization.BarChart(document.getElementById('graficoColunaSurpresa'));
	graficoColunaSurpresa.draw(tabela, opcoes);

}
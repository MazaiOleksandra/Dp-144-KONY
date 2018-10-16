// Шахматная доска
// Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
//         * * * * * *
//          * * * * * *
//         * * * * * *
//          * * * * * *    
// Входные параметры: длина, ширина, символ для отображения.
// Выход: строка с представлением шахматной доски


function drowChessDesk(param){
	var resultTable='';
	var row='';	
	if(!validationParam(arguments,1)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}

	for(var i=0;i<param.width;i++){
		row=concatString(row,param.symb," ");
	}
	row=concatString(row,'\n');

	for(i=0;i<param.len;i++){
		if(i%2===0){
			resultTable=concatString(resultTable,row);
		}
		else {
			resultTable=concatString(resultTable,' ',row);
		}
	 }
	return resultTable;
}

function concatString() {
	var resultString='';
	for (var key in arguments){
		resultString+=arguments[key];
	}
	return resultString;
}
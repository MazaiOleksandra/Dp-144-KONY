// Шахматная доска
// Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
//         * * * * * *
//          * * * * * *
//         * * * * * *
//          * * * * * *    
// Входные параметры: длина, ширина, символ для отображения.
// Выход: строка с представлением шахматной доски


function drowChessDesk(param){
	var table='';
	var row='';
	if(!validationParam(arguments,1)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}
	
	var cnt=param.width;
	for(var i=0;i<cnt/2;i++){
		row +=param.symb+' ';
	}
	cnt=param.len;
	for(i=0;i<cnt/2;i++){
		if(i%2===0){
			table+=row+'\n';
		}
		else {
			table+=' '+row+'\n';
		}
	 }
	return table;
}
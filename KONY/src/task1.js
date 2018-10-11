

function drowChessDesk(width,len,symb){
	var table='';
	var row='';
	if(!validationParam(arguments,1)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}
	

for(var i=0;i<width/2;i++){
row +=symb+' ';
}

for(i=0;i<len/2;i++){
	if(i%2===0){
		table+=row+'\n'
	}
	else {
		table+=' '+row+'\n';
	}
 }

 return table;
}



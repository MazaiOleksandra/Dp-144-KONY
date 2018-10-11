function outputNumbers(lng,minSqr){
	if(!validationParam(arguments,6)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}
	var startNum=Math.floor(Math.sqrt(minSqr))+1;
	var i;
	var resultArr=[startNum];
	for(i=0;i<lng-1;i++){
		resultArr.push(resultArr[i]+1);
	}
	return resultArr.join(',');
}
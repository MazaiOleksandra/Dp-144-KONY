// Числовая последовательность
// Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.
// Входные параметры: длина и значение минимального квадрата
// Выход: строка с рядом чисел

function outputNumbers(param){
	if(!validationParam(arguments,6)){
		return 'Неверные параметры для задачи,перечитайте условие';
	}
	var startNum=Math.floor(Math.sqrt(param.minSqr))+1;
	var i;
	var resultArr=[startNum];
	for(i=0;i<param.lng-1;i++){
		resultArr.push(resultArr[i]+1);
	}
	return resultArr.join(',');
}
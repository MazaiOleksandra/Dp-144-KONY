// Ряд Фибоначчи для диапазона
// Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: 
// находятся в указанном диапазоне, либо имеют указанную длину.

// Входные параметры: объект context с полями min и max, либо с полем length
// Выход: массив чисел

function outputFibon(param){
    var FibonArr=[];
    var i=0; 

    if(typeof param == 'object'){
    var minCnt=calcNearestMinFibon(param.min)
    var tmp=0;
       while(tmp<=param.max){
            FibonArr.push(calcFibonNum(minCnt));
            minCnt++;
            tmp = FibonArr[i];
            i++;
        }
        FibonArr.pop();
    } 
    else{
    var FibonArr=[0,1];
        for(i=2;i<param-1;i++){
            FibonArr.push(FibonArr[i-1]+FibonArr[i-2]);
        }
    }
    return FibonArr;
}


//cacl from min to max

function fillFibonArray(minmax) {
    var FibonArr=[];
    var tmp=0 , i=0;
       
    var minCnt=calcNearestMinFibon(minmax.min);

    while(tmp<=minmax.max){
        FibonArr.push(calcFibonNum(minCnt));
        minCnt++;
        tmp = FibonArr[i];
        i++;
    }
    FibonArr.pop();
    return FibonArr;
}

//calc by length


//вічисление по формуле бине Fn=(Math.pow(1+Math.sqrt(5))/2,n)/Math.sqrt(5))  n = ln(Math.sqrt(5))/ln(1+Math.sqrt(5))
function calcNearestMinFibon(min) { 
    var minCnt=Math.floor(Math.log(min*Math.sqrt(5)) / Math.log((1+Math.sqrt(5))/2));
    return minCnt;
}

// вічисление н-го числа фибоначи
function calcFibonNum(index){
    var nFibonNum=Math.round(Math.pow(((1+Math.sqrt(5))/2),index)/Math.sqrt(5));
    return nFibonNum;
}
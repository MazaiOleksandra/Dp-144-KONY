// Ряд Фибоначчи для диапазона
// Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: 
// находятся в указанном диапазоне, либо имеют указанную длину.

// Входные параметры: объект context с полями min и max, либо с полем length
// Выход: массив чисел

function OutputFibon(param){
    var FibonArr=[];
    var i=0; 
    var lngFibon,delIdx;

    if(typeof param == 'object'){
    var minCnt=Math.floor(Math.log(param.min*2.236) / Math.log(1.618)); alert(minCnt);
    var tmp=0;
       while(tmp<=param.max){
            FibonArr.push(Math.round(Math.pow(1.618,minCnt)/2.236));
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


function calcNearestMinFibon(min) {    
    var minCnt=Math.floor(Math.log(min*2.236) / Math.log(1.618));
}

function calcFibanNum(index){
}
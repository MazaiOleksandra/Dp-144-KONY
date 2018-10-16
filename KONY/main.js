var num=parseInt(prompt('Введите номер задачи от 1 до 7','1'))-1;
var arrTasks=[drowChessDesk,checkInscribeCovers,mainSortTriangle,checkPolyndrom,countLuckyTicket,outputNumbers,outputFibon];
var arrParams=[drowChessDeskParam,checkInscribeCoverParam,mainSortTriangleParam,checkPolyndrom,countLuckyTicketParam,outputNumbersParam,outputFibonParam];


if(arrTasks[num]!== undefined){
    outputResult(arrTasks[num](arrParams[num],num));    
}
else {
    outputResult('Задача не найдена' ,'-')
}

function validationParam(params,num){
    switch(num){
        case 1:
        if(checkisInt(params[0].len)&& checkisInt(params[0].width)&&
           checkIsSymb(params[0].symb)){
            return true;
        }else{
            return false;
        }
        break;
        case 2: 
        if(checkisNum(params[0].cover1.side1)&&checkisNum(params[0].cover1.side2)
            &&checkisNum(params[0].cover2.side1)&&checkisNum(params[0].cover2.side2)){
            return true;
        }
        else{
            return false;
        }
        case 6: 
        if(checkisInt(params[0].lng)&&checkisNum(params[0].minSqr)){
            return true;
        }
        else{
            return false;
        }
        break;
        default:return false;
    }
}

//check param is positive integer 
function checkisInt(int) {
    if((int ^ 0) === int){
        return true;
    }
    return false;
}

//check param is positive number
function checkisNum(number) {
    if(typeof number=== 'number' && number>0 ){
        return true;
    }
    return false;
}
//check param is'nt empty string
function checkIsSymb(str) {
 if(typeof str==='string' && str.length>0){
        return true;
    }
    return false;
}
//check param is 
function checkObjLength(obj) {
 if(typeof obj==='object'&&obj!==null){
        return true;
    }
    return false;
}

function outputResult(res){
    console.log(res);
    return true;
}
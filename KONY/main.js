
var num=parseInt(prompt('Введите номер задачи от 1 до 7','1'));

var arrTasks=[drowChessDesk,,,checkPolyndrom,countLuckyTicket,outputNumbers,outputFibon];
switch(num){
    case 1: console.log('решение задачи 1 \n' + arrTasks[num-1](10,5.5,'5641356'));	break;
    case 2:console.log('решение задачи 2 \n' + arrTasks[num-1]());break;
    case 3:console.log('решение задачи 3 \n' + arrTasks[num-1]());break;
    case 4:console.log('решение задачи 4 \n' + arrTasks[num-1](126588887));break;
    case 5:console.log('решение задачи 5 \n' + arrTasks[num-1]({min:'000000',max:'999999'}));break;
    case 6:console.log('решение задачи 6 \n' + arrTasks[num-1](10,12354));break;
    case 7:console.log('решение задачи 7 \n' + arrTasks[num-1](10,10,'sdfg'));break;
    default: console.log('not found task whith num' + num);
}
//var z= arrTasks[num-1].name(10,10,'x');
//document.write(z);



function validationParam(params,num){
    if(num==1){
        if(params[0]===undefined||params[1]===undefined||params[2]===undefined
            ||params[0]%1!==0||params[0]<0
            ||params[1]%1!==0||params[1]<0||params[2]==''){
            return false;
        }
        else{
            return true;
        }
    }
    if (num==6){
        console.log(params);
        if(params[0]===undefined||params[0]%1!==0 || params[1]%1!==0){
            return false;
        }
        else{
            return true;
        }


    }
    if(num==5){
    }

}
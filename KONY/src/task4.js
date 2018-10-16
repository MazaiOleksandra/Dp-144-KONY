function checkPolyndrom(num){
    var numArr=String(num).split('').map(Number);
    var revArr=String(num).split('').reverse().map(Number);
    var lngArr=numArr.length;
    var lngRev=revArr.length;
    var cnt = 0;
    for(var j=0; j<lngRev;j++){
        for (var i=0;i<lngArr;i++){
console.log(numArr + '  ' + revArr);
            if(numArr[i] == revArr[i]){
                     
                cnt++;
            }
            else if(cnt<3){
                cnt=0;            
            }
        }
        if(cnt>=3){
            lngRev=0;
        }
        revArr.pop();
        numArr.shift();
        lngArr--;
    }
return cnt;

} 
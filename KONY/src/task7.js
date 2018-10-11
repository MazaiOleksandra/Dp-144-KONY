function outputFibon(param){
	var FibonArr=[0,1];
	var i=1; 
	var lngFibon,delIdx;

	if(typeof param == 'object'){
       while(FibonArr[i]<param.max){
			FibonArr.push(FibonArr[i]+FibonArr[i-1]);
        	i++;
        }
        FibonArr.pop();
        lngFibon=FibonArr.length;
        for(i=0;i<lngFibon;i++){
        	if(FibonArr[i]<param.min){
            delIdx=i;
        	}
        }
        	FibonArr.splice(0, delIdx+1);

	} 
	else{
		FibonArr.push(0,1);
        for(i=2;i<param;i++){
        	FibonArr.push(FibonArr[i-1]+FibonArr[i-2]);
        }
	}
	return FibonArr;
}
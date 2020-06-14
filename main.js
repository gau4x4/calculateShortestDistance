let calculateShortestDistance=(argArray)=>{
  let tempSmVal=Number.MAX_SAFE_INTEGER,arrV=[];
  for(let i=0;i<argArray.length-1;i++){
    if(tempSmVal>Math.abs(argArray[i],argArray[i+1])){
      tempSmVal=Math.abs(argArray[i]-argArray[i+1]);
     
    }
    arrV.push(tempSmVal);
  }
 arrV.sort((a,b)=> a-b);
  return arrV.shift();
}
const testArray=[1,20,24,19,28,13,5,1,2];
console.log(calculateShortestDistance(testArray));

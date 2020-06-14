let calculateShortestDistance=(argArray)=>{
  let tempSmVal=Number.MAX_SAFE_INTEGER,arrV=[];
  for(let j=0;j<argArray.length;j++){
    for(let i=j+1;i<argArray.length;i++){
      if(tempSmVal>Math.abs(argArray[j],argArray[i])){
        tempSmVal=Math.abs(argArray[j]-argArray[i]);
      }
      arrV.push(tempSmVal);
    }
  }
  arrV.sort((a,b)=> a-b);
console.log(arrV)
  return arrV.shift();
}
const testArray=[17,1,24,19,28,13,57,2];
console.log(calculateShortestDistance(testArray));

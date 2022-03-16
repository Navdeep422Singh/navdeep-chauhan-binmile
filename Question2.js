const a = [1,2,3,4];
const b = [8,7,6,5];

const getMedian = (a,b) => {
    //validate
    if(a&&b&&Array.isArray(a)&&Array.isArray(b))
    {
        const combinedArray = [...a,...b].sort((a,b) => b-a);
        if(combinedArray.length%2 == 0)
        {
            return (combinedArray[combinedArray.length/2]+combinedArray[(combinedArray.length/2)-1])/2;
        }
        else {
            return combinedArray[Math.floor(combinedArray.length/2)];
        }
    }
  
} 
console.log(getMedian(a,b));
const a = [3,10,40,45,50,60,69];
const b = [60,50,40,20,1];

const getCombinedArray = (a,b) => {
    let resultArray = [];
    const mainlength = a.length+b.length;
    let j=0;
    let h=b.length-1; 
    for(i=0;i<mainlength;i++)
    {
        if(a[j]<b[h])
            {
                resultArray.push(a[j]);
                j+=1;
            }
            else{
                resultArray.push(b[h]);
                h-=1;
            }
            if(h<0)
            {
                resultArray= [...resultArray,...(a.slice(j))];
                return resultArray;
            }
        
    }
    return resultArray;
}
const getMedian = (a,b) => {
    //validate
    if(a&&b&&Array.isArray(a)&&Array.isArray(b))
    {
        const combinedArray = getCombinedArray(a,b);
        console.log(combinedArray);
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
const portfolio = [
    {name: 'Mark', stock: 'FB'},
    {name: 'Steve', stock: 'AAPL'},
    {name: 'Tim', stock: 'AAPL'},
    {name: 'Steve', stock: 'MSFT'},
    {name: 'Bill', stock: 'MSFT'},
    {name: 'Bill', stock: 'AAPL'},
    ];

const parseOutputFunction = (arrayObject) => {
    const resultArray =[];
    //validate
    if(Array.isArray(arrayObject) && arrayObject.length>0)
    {   
        arrayObject.forEach((mainItem) => {
            let found = false;
            if(resultArray.length>0) 
            {
                resultArray.forEach((resultItem) => {
                if(resultItem.stock === mainItem.stock)
                {
                    found = true;
                    resultItem.name = [...resultItem.name,mainItem.name];
                    resultItem.count+=1
                }
                })
            }
            if(!found)
            {
                resultArray.push({stock:mainItem.stock,name:[mainItem.name], count:1});
            }
        })
        return resultArray;
    }
    return []
}
console.log(parseOutputFunction(portfolio).sort((a,b) => b.count-a.count));
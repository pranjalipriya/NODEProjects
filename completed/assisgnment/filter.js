const filter=(array,predicate)=>
{
    const newArray=[];
    for(let index=0;index<array.length;index++)
    {
        const element=array[index];
        const value=predicate(element);
        if(value===true)
        {
            newArray.push(element);
        }
    }
        return newArray;
}
filter([1,2,5,6,7,8,0,3,10],x=> x>5);
const name="pranjali";
// const reverseName= name.split("").reverse().join("");
let reverseName="";

for(let index=name.length-1;index>=0;index--){
    reverseName+=name.charAt(index);
}

const asyncFunction=async()=>{
    return(name);
} 
asyncFunction();
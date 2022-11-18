const input=9;
let number=0,position=0;
// let arr;
while(number<input)
{
for(let row=0;row<3;row++)
{
    // arr[position]=number;
    console.log(number);
    position++;
}
    
for (let column=0;column<3;column++)
{
    // arr[position]=number;
    console.log(number);
    position++;
}

if(position%3==0)
{console.log(\n);}

    number++;
}

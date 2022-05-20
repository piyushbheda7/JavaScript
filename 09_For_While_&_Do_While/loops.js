// ******* for Loop ********

for(let i = 0 ; i < 5 ; i++)
{
    console.log(i);
}

// ******** while Loop *********

let j = 1 ; 
while(j < 5)
{
    console.log(j);
    j++ ;
}

// *********** Do While Loop ******

let k = 21 ;
do{
    console.log(k);
    k++ ;
}while(k < 20)

// ************ break Keyword ********

let l = 0 ; 
do {
    console.log(l)
    if(l == 2)
    {
        break;
    }
    l++ ;
} while (l<5);

// ******* Continue KeyWord ******
let m = 0 ; 
do {
    if(m == 2)
    {
        m++ ;
        continue;
    }
    console.log(m) ;
    m++ ;
} while (m < 5);

// ********* for each *******
let arr = [1 , 2 , 3 , 4 , 5 , 6];
arr.forEach(function(element , index , array) {
    console.log(element , index , array);
})

// ********* loop for object *******
let obj = {
    name : 'Rohan Das' ,
    channel : 'CodewithHarry' ,
    marks : 96 ,
    isDriver : true 
}

for(let key in obj)
{
    console.log(`${key} : ${obj[key]}`)
}
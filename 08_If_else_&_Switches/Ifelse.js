// ****** if Else *******

let age = 16 ;

if(age > 18)
{
    console.log('You are Eligible for voting');
}
else if(age == 17 )
{
    console.log('Next Year You will Eligible for voting')
}
else
{
    console.log('You are not Eligible for voting')
}

let doesDrive = false ;

if(doesDrive && age > 18)
{
    console.log('You can drive')
}
else
{
    console.log('you can not drive')
}

// ********* ternary operator *********
age = 45 ;
console.log(age == 45? 'Age is 45': 'Age is not 45');

// ******* switch ********
age = 28 ;
switch (age) {
    case 18:
        console.log('You are 18');
        break;

    case 28:
        console.log('You are 28');
        break;

    case 38:
        console.log('You are 38');
        break;

    default:
        console.log('You are Not 18 , 28 and 38 ')
        break;
}
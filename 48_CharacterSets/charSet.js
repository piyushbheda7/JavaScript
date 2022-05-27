
// character sets

let regex = /harry/ ;
let str = "harry bhai";

// we use []
regex = /h[a-z]rry/; // can be from a to z
regex = /h[art]rry/ ; // can be a , r and t
regex = /h[^art]rry/; // can not a r and t
regex = /h[a-zA-Z]rr[y0-9][0-9]/ ; // both can be 

// Quantifiers - we use {}
regex = /har{2}y/ // r can occur exactly 2 times
regex = /har{0,2}y/ // r can occur exactly 0 or 2 (0 or 1 or 2)times

//Groupings - we use paranthesis fro groupings
regex = /(har){2}([0-9]){3}/

str = "harhar555"

console.log(regex.test(str));
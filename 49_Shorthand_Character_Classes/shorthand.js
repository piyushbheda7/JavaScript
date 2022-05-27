console.log('helo');

let regex = /\wrry/; // \w mean word character mean it can be letter , number or underscore

regex = /\w+d1r/; // one or more word character before d1r
// gives true
str = 'harh7rd1r4r5r bhai'


// \W is for the non word character here W is capital
regex = /\Wbhai/ // non word character

// \W+  more than one non word character
regex = /\W+/


// \d  is for digit
regex = /\d999/; //can be digit

// \d is for more than one digit
// \D is for non digit
// \D+1 mean for more than one non digit

// \s is for check the white space character also for tabs and more than one white spaces
// \s+ one or more
// \S non white space
// \S+ one or more than non white space

// \b is for word boundry - it check that is word is complete or not

// assertion 

regex = /h(?=a)/ ; //there should be a after h
regex = /h(?!a)/ ; // there should not be a after h

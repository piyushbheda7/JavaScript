class Employee{
    constructor(givenName , givenExperience , givenDivison)
    {
        this.name = givenName;
        this.experience = givenExperience ;
        this.division = givenDivison ;
    }

    review()
    {
        return `i am ${this.name} and this company is the best`;
    }

    joinYear()
    {
        return 2022 - this.experience
    }

    static add(a , b)
    {
        return a+b ;
    }
}

piyush = new Employee('Piyush' , 2 , 'Developer')
console.log(piyush)
console.log(piyush.review())
console.log(Employee.add(10 , 20))

class Programmer extends Employee{
    constructor(givenName , givenExperience , givenDivison , givenLanguage)
    {
        super(givenName , givenExperience , givenDivison);
        this.language = givenLanguage;
    }

    favlang()
    {
        if(this.language == 'Python')
        {
            return 'python';
        }
        else{
            return 'javascript';
        }
    }

    static multiple(a ,b )
    {
        return a * b ;
    }
}

let rohan = new Employee('rohan' , 2 , 'Q&A');
console.log(rohan)

let pankaj = new Programmer('pankaj' , 5 , 'Manager' , 'Swift');
console.log(pankaj)
console.log(pankaj.favlang())

console.log(Programmer.multiple(10,30))
console.log(Programmer.add(10 , 20))
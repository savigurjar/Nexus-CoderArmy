const obj = {
    name : "tae",
    occuption : "singer",
    age: 30,
    "full name" : "kim Taehyung",
    7 : "BTS"
}
// key will store as a string if key is number it will also store as string
console.log(obj);
console.log(obj.name);
console.log(obj["full name"]);
console.log(obj[7]);

// second method of creating object
const person = new Object();
person.name = "v";
person.age = 30;
console.log(person);
// delete
delete person.name;
console.log(person);
// modify or update
person.name = "tae";
console.log(person);

// third method
class People{
    constructor(na,a,occupti)
    {
        this.name = na;
        this.age = a;
        this.occuption = occupti;
    }
}
let per1 = new People("v",30,"singer");
let per2 = new People("jeonghan",30,"singer");
console.log(per1,per2);

class students{
   constructor (private name : string,private age : number){

        this.name = name;
        this.age = age;
       }
   GetDetails():string{
        return " student name is " +this.name + " "+ "and  "+ " " + "age  is " + this.age  
 
        }
}
let  s1 = new students('sreevani',25);
console.log( s1.GetDetails());
alert(s1.GetDetails());
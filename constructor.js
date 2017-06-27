var students = (function () {
    function students(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    students.prototype.GetDetails = function () {
        return " student name is " + this.name + " " + "and  " + " " + "age  is " + this.age;
    };
    return students;
}());
var s1 = new students('sreevani', 25);
console.log(s1.GetDetails());
alert(s1.GetDetails());

var getLowerCase = function (str) {
    return str;
};
console.log(getLowerCase('Hello'));
//array
var arr1 = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var id = "1";
var person1 = {
    name: 'John',
    age: 30,
    hobby: 'Sports'
};
var person2 = {
    name: 'Don',
    age: 30
};
//enums
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red);

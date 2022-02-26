const getLowerCase = (str: string) => {
    return str;
}

console.log(getLowerCase('Hello'));

//array
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['a', 'b', 'c'];

//generic array
const arr3: Array<number | string> = [1, 2, 3, 'a', 'b', 'c'];

//type alias
type MyArray = number[];
type numberOrString = number | string;

const id: numberOrString = "1";

//interface for object
interface person{
    name: string;
    age: number;
    hobby?: string; //optional property
}

const person1: person = {
    name: 'John',
    age: 30,
    hobby: 'Sports'
}

const person2: person = {
    name: 'Don',
    age: 30
}

//enums
enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

console.log(Color.Red);
export function hello(name : string) : string {
    console.log("Welcome to ESBuild !");
    return 'Hello ' + name; 
}
let greets = hello('vijay');

console.log(greets);
function sayHello(name) {
    if (typeof name === 'string')
  
    {if (name === "Mark")
    console.log("Hi, "+name+"!");}
    
    
    console.log("Hello, "+name+"!");    
}



sayHello("Oleg");
sayHello("Viktor");
sayHello("Mark");



function hypot(n, m){

console.log (Math.hypot(n, m));;

}
hypot(3, 4);



//console.log (( Math.pow(m, 2) ) + (Math.pow(n, 2)));


function mathMin(a, b){
    console.log (Math.min(a, b))
}

mathMin(2, 5);
mathMin(3, -1);
mathMin(1, 1);


function isEven (g){
    console.log (g % 2 == 0 || false);
}

isEven(4);
isEven(5);


function deleteChars (chars) {
    if (typeof chars === 'string');
console.log(chars.slice(1, - 1));

}

deleteChars('Hello');
deleteChars('A');



function numberStroke (a, b, c, d, e, f) {

    if (typeof a, b, c === 'number');
    if (typeof d, e, f === 'string');
    console.log( String(a), String(b), String(c), Number(d), Number(e), Number(f) );

}

numberStroke (1, 2, 3, "4", "5", "6")




function massive (){
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];
    const thirdArray = [...firstArray, ...secondArray];
    console.log(thirdArray);
}

massive ();


function stringCutter (str) {
    if (typeof str === 'string');
    console.log(str.substr(0, 6) + "...");
}

stringCutter ('Привет мир!');


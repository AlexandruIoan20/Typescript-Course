import './App.css'

//Variables 
let name:string = 'Alex'; 
let age:number | string  = '2'; // ori number ori string 
let isStudent:boolean;
let hobbies: string[]; 
let numbers: number[]; 
let role: [number, string] //un array cu un numar si un string 

let person: Object; //merge dar nu e recomandat 

type Person =  { 
  name: string,
  age?: number, //age with ? is an optional property 
}

let typedPerson: Person = { 
  name: 'Hello World!', 
  age: 12, 
}

let lotsOfPeople: Person[] //array cu persoane


let printSomeName: Function // not recommanded
let printName: (name: string) => never //ce e dupa => = tipul variabilei returnate

//never === returns nothing 
//void === returns undeined  printName: (name: string) => void 

let something: any // orice tip (nu recomandat)
let personName: unknown; // recomdandat cand poate lua orice tip


const App = () => { 
  return ( 
    <div> Hello World from TypeScript </div>
  )
}


export default App

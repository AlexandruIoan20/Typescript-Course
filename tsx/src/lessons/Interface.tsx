import React from "react";

interface Person { 
    name: string, 
    age?: number,
  }; 
  
  interface Guy extends Person { // extends interface Person
                                // in loc de interfata person poate fi si un tip 
    profession: string, 
  }
  
  type X = { 
    a: string, 
    b: number, 
  }; 
  
  type Y = X & {  //extends X type + has some other variables
                  // in loc de X poate fi si o interfata - ex: type Y = Person & { c, d }
    c: string, 
    d: number, 
  }; 
  
  //let y: Y = { 
   // c: 'efdats', 
   // d: 43
  //}

const Interface = () => { 
    return ( 
      <div> Hello World from TypeScript </div>
    )
}; 

export default Interface; 
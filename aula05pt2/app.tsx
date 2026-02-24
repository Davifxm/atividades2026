import { useState } from "react";

 function contar() {
  const [numero, setnumero] = useState<number>(10);
 
  function aumentar() {
     setnumero(numero+1);
  debugger;

  }

  return (
     <div>
        <h2> numero atual  </h2>
           <h2>{numero}</h2>
         <button onClick={() => console.log("contar:", aumentar())}>
          numero atual
      </button>

     </div>



  );

  }
  export default contar;

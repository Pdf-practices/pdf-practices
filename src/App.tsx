import { useRef, useLayoutEffect } from "react";
import "./App.scss";
import style from "./styles/styles.module.scss";

function App() {
   const prueba = useRef<HTMLHeadingElement>(null);

   console.log(prueba);

   useLayoutEffect(() => {
      console.log(prueba);
   });

   return (
      <div className={style.centro} ref={prueba}>
         <h2>My title of the house</h2>
      </div>
   );
}

export default App;

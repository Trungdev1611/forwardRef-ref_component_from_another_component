import { useRef } from "react";
import Child from "./child";
import "./styles.css";

export default function App() {
  const refapp = useRef()

  //truy cập trực tiếp component con từ component cha
  if(refapp.current) {
    console.log('refapp',refapp.current.value )
  }
  return (
    <div className="App">
    <Child ref = {refapp}/>
    </div>
  );
}

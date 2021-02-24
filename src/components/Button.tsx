import  {useState} from 'react'
interface ButtonProps{
  color:string;
  children:string;
}

function  Button(props:ButtonProps){
  const [counter, setCouter] = useState(1) 
    function increment(){
      setCouter(counter + 1) //criando um novo valor para counter
    }

  return(
  <button type="button"
   onClick={increment}
   style={{backgroundColor:props.color,
    height:'3rem'
   }}>
    {props.children} <strong>{counter}</strong>
  </button>
  );
}
  
export default Button;
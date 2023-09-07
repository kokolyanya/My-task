import React, {useRef} from "react";
import './style.css';

interface Props {
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

//const InputField = ({ todo, setTodo} : Props) => {
const InputField: React.FC<Props> = ({ todo, setTodo,handleAdd}) => {      
    const inputRef= useRef<HTMLInputElement>(null); //au lieu d'utiliser e.target.id ou e.target.classname
    

    return <form className="Input" 
            onSubmit={(e)=>{
                handleAdd(e);
                inputRef.current?.blur();   //utiliser ici pour changer le css de input(box-shadow)
                }}>
        <input type="input"
        ref={inputRef}
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }
        className="inputBox" placeholder="Enter a new task" />
        <button type='submit' className="inputSubmit">Go</button>
    </form>
}

export default InputField;

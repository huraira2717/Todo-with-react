import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";


function App() {
  // const [count, setCount] = useState(0)
  const [todos,setTodos]=useState([])
  const [todoValue, setTodoValue] = useState("");
  const [EditTodoValue, setEditTodoValue]=useState('')
  


  const addTodo=()=>{
    if(!todoValue)return alert("Enter Requird filds");
    const userObj = {
      value: false,
      value:todoValue,
    }      
      todos.push(userObj);
      setTodos([...todos])
      setTodoValue("")
  }
  console.log(todoValue,"todoValue");
  console.log(todos,"Todos")


  const DeleteAllTodo = () => {
    console.log("DeleteTodo")
    setTodos([])
  }

  const DeleteTodo=(index)=>{
    console.log(index,"DeleteTodo");
    todos.splice(index , 1)
    setTodos([...todos])
  }

const EditTodo = (index) => {
  console.log("Edit Todo");
  const EditValue = prompt("Enter your Edit todo", todos[index].value);
  console.log("Edit Value", EditValue);
  todos[index].value = EditValue;
  setTodos([...todos]);
}

  return (
    <>

    <Header />
    <div className="bg-green-500 flex justify-center items-center mt-5 flex-col">
    <div className="w-[70%]">
    <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="border w-full rounded-lg p-3 outline-none border-gray-600 mb-4"
            id="todoInput"
            value={todoValue}
            onChange={(e)=> {
              setTodoValue(e.target.value)
            }}
          />
    </div>
    <div className="flex">
    <Button 
    
      title="Add Todo"
      clickTriger={addTodo}
      customClass=""

    />

    <Button 
      title="Delete All"
      clickTriger={DeleteAllTodo}

    />
    </div>
    </div>
    <Button />
    <div className="w-[70%] mx-auto mt-5">
    <ul className="">
    {todos.map((todo,index)=>
    
    <li 
    key={index}
    className="text-xl text-green-800 font-bold border rounded-lg p-3 flex justify-between items-center"
    >
    {todo.value}
    <div className="flex">
      <Button 
        title="Edit"
        clickTriger={()=>EditTodo(index)}

      />
      <Button 
        title="Delete"
        customClass="bg-red-500"
        clickTriger={()=>DeleteTodo(index)}
      />
    </div>
    </li>
    )}

    </ul>

    </div>
      
    </>


  )
  
}
export default App;



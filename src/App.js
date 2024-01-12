import styles from './App.module.css'
import  Task  from './Task';
import { useState } from 'react';
 function App() {
 const[todoList,setTodoList] = useState([]);
 const[newTask,setNewTask] = useState("");
 const handleChange = (event)  =>
 {
     setNewTask(event.target.value);
 }

 const addNewTask = () =>{
      const obj = {
        id:todoList.length === 0?1:(todoList[todoList.length-1].id)+1,
        taskName:newTask,
        completed: false

      }
      setTodoList([...todoList,obj]);
 }

   const deleteTask = (taskId) =>{
      
      setTodoList(todoList.filter((task) => task.id !== taskId));

   }
   const completeEvent = (taskId)  => {
          setTodoList(todoList.map((task) =>{
                 if(task.id === taskId){
                    return {...task,completed:  true};
                 }
                 else 
                   return task;
          }))
   }
 return(   //starting point of App.js
  <div className={styles.User}>

    <div className = {styles.addTask}>
      <input onChange = {handleChange}/>
      <button onClick = {addNewTask}>Add Task</button>
      
    </div>  

    <div className = {styles.list}>
      {
      todoList.map((task)=>
             {return <Task taskName = {task.taskName} 
                           id ={task.id} 
                           deleteTask = {deleteTask}
                           completed = {task.completed}
                           completeEvent = {completeEvent}
                           />}
           )}
    </div>


    </div>
 );
}


// const User = (props) =>
// {
//   // const name;
//   let age= props.age-2;  
//   let isBlue = false,isGreen = false;
//   return(
//     <div className = {styles.User}>
//       <h1 style = {{color:isBlue?"blue":isGreen?"green":"red"}}>{props.name.slice(2)}</h1>

      
//       {age>=18?<h1>OverAge</h1>:<h1>UnderAge</h1>} 
       
//     <h3>{props.email}</h3>
//     </div>
//   );
// }

// const planets = [
  //   {name:"Earth",isGas:true},
  //   {name:"Mars",isGas:false},
  //   {name:"Pluto",isGas:true},
  //   {name:"Venum",isGas:false},
  // ];

// <div>
    //   {
    //     planets.map((planet,key) =>{
    //            return <Component name = {planet.name} isGas = {planet.isGas}/>
    //     }
            
        
    //     )
    //   }
    // </div>


//{ <button onClick={() => (setCount(count+1))}>Increase</button>  
    //<button onClick={() => (setCount(count-1))}>Decrease</button>  
  //  <button onClick={() => (setCount(0))}>Set To Zero</button>  
 //   <br></br>
//    {count}     }
export default App;

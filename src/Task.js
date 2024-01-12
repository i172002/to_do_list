import st from './App.module.css'
function Task (props) {
    return(
        <div className={st.taskList} style={{backgroundColor:props.completed? "rgb(133, 239, 145)":"rgb(240, 111, 111)"}}>
        <h1>{props.taskName}</h1> 
        <button onClick = {() => props.completeEvent(props.id)}>Completed</button>
        
        <button onClick = {() => props.deleteTask(props.id)}>Del</button>
    </div>
    );
    
};
export default Task;

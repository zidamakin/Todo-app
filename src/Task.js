export const Task = (props) => {
    return (
            
          <div className='task' style={{backgroundColor:  props.completed ? "green":"rgb(245 247 249)"}}>

            <h1>{props.taskName}</h1>
            <button onClick = { () => props.completeTask(props.id) }> Complete </button>
            <button onClick = { () => props.deleteTask(props.id)}> Delete </button>
          </div>
          );
}
import React, {useEffect, useState} from 'react';

const ToDoList = () =>{
    const [newTask, setNewTask] = useState ("");
    const [toDo , setToDo] = useState ([]);
    const [id, setId] = useState (0);
    const [hoveredTaskedId, setHoveredTaskId] = useState(null);
    

    useEffect (() =>{
        if(toDo.length ===0){
            alert('no task, add a task');
    
        }

    },[toDo])

    function handleInput (){
        if(newTask === ''){
            alert ('input cannot be empty');
        }else{
            const newToDoItem = {
            id : id,
            content : newTask.charAt(0).toUpperCase() + newTask.slice(1)
          };
          setToDo((previousToDo)=> [...previousToDo, newToDoItem])
          setNewTask("");
          setId((id) => id +1);
        }
    }

    function handleMouseEnter (id){
        setHoveredTaskId(id);
    }
    function handleMouseLeave (id){
        setHoveredTaskId(id);
    }
    function handleDeleteItem (id){
        setToDo((previousToDo) => previousToDo.filter((task) => task.id !==id))
      
    }
    
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleInput();
        }
    }

    return(

        <>
        
        <div className='toDoList'>
            <h1 className="toDoHeader">todos</h1>

            <div className="container">
                <div className="toDoBody">
                    <input 
                        type="text "
                        className="controlled-input"
                        onChange={(event) => setNewTask(event.target.value)} 
                        onKeyDown={handleKeyDown}
                        value ={newTask}
                        placeholder='Enter Your New Task'/>
               
                    <ul>
                        {toDo.map((task) => (
                            <li 
                                key={task.id} 
                                onMouseOver={() => handleMouseEnter(task.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {task.content} {hoveredTaskedId === task.id &&
                                 <button className='deleteButton' onClick={() => handleDeleteItem(task.id)}>x</button>}
                                
                            <hr /> </li>
                        ))
                        }
                        
                    </ul>

                </div>

                <div className="todoFooter">
                    <p>{toDo.length <=1? `${toDo.length} item left`: `${toDo.length} items left`}</p>
                </div>
            </div>
        </div>

        </>
    );
};

export default ToDoList;

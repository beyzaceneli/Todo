import React,{useState} from 'react';
function TodoList(){
    const [todos,setTodos]=useState(["Sabah kahvaltısı","Ev işleri","Kediler oynamak","React Çalışmak"]);
    const [newsTasks,setNewTasks]=useState('');

    function handleInputChange(event){
       setNewTasks(event.target.value);
    }

    function addTask(){
        if(newsTasks.trim() !== ''){
            setTodos([...todos,newsTasks]);
        }
    }

    function deleteTask(index){
        const newTodos=todos.filter((_,i)=> i !== index);
        setTodos(newTodos);
        setNewTasks('');
    }

    function moveDown(index){
        if(index < todos.length - 1){
            const newTodos = [...todos];
            const move=newTodos[index];
            newTodos[index]=newTodos[index+1];
            newTodos[index+1]=move;
            setTodos(newTodos);
            
        }
    }

    function moveUp(index){
        if(index > 0){
            const newTodos = [...todos];
            const move=newTodos[index];
            newTodos[index]=newTodos[index-1];
            newTodos[index-1]=move;
            setTodos(newTodos);
        }
    }

    return(
        <div>
            <h1>To-do List</h1>
            <input type="text" value={newsTasks} placeholder='Add new task' onChange={handleInputChange}/>
            <button onClick={addTask} className='add-button'>Add</button>
            <div className='to-do-list'>
                <ol>
                   {todos.map((element,index)=>(
                        <li key={index}>
                            {element}
                            <button onClick={()=>moveUp(index)} className='up-button'>☝🏻</button>
                            <button onClick={()=>moveDown(index)} className='down-button'>👇🏻</button>
                            <button onClick={()=>deleteTask(index)} className='delete-button'>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default TodoList;
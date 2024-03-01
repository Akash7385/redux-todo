import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addTodo , deleteTodo , REMOVETodo } from '../actions/Action'
import Todoreducers from '../reducerss/Todoreducers'
import './Todo.css'
const Todo = () => {
    const [inputData , setInputData] = useState("")
const list = useSelector((state)=>state.Todoreducers.list)

    const dispatch = useDispatch();
  return (
   <>
   <div className='main-div'>
    <div className='child-div'>

        <figure>
        <figcaption>
Add Your List Here
</figcaption>
        </figure>
       
<div className='addItems'>
<input type='text' placeholder='add items.. ' value={inputData}  onChange={(event)=>setInputData(event.target.value)} />
<button onClick={()=>dispatch(addTodo(inputData),setInputData(""))}>ADD</button>
</div>

<div className ="show-item">

    {
        list.map((elem)=>{
            return (

                <div className='eact-item' key={elem.id}>
                <h3>{elem.data}</h3>
                
                 <button title='delete-item' onClick={()=> dispatch(deleteTodo(elem.id))}>Delete</button>
             </div>
                )
        })
    }

</div>
<div>
    <button onClick={()=>dispatch(REMOVETodo())}><span>check list</span></button>
</div>
    </div>

   </div>
   </>
  )
}

export default Todo

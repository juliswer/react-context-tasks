import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';

const TaskList = () => {

    const contexto = useContext(GlobalContext);
    console.log(contexto);

    return (
        <div>
            Task List
        </div>
    )
}

export default TaskList

import React from 'react';
import axios from 'axios';
import CheckBoxComponent from './components/CheckBoxComponent/CheckBoxComponent';
import CloseEditComponent from './components/CloseEditComponent/CloseEditComponent';


const Task = ({task, index, setTasks, setCurrent }) => {
  const { _id, isCheck, text: word} = task;

  const deleteTask = async () => {
    await axios.delete(`http://localhost:8000/deleteTask?_id=${_id}`)
      .then(res => {
        setTasks(res.data.data);
      });
  }

  const editCheck = async () => {
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck: !isCheck
    }).then(res => {
      setTasks(res.data.data);
    });
  }

  return (
    <div
      className="tasks"
      key={`task-${index}`}
    >
      <CheckBoxComponent
        isCheck={isCheck}
        editCheck={editCheck}
      />
      <CloseEditComponent
        setCurrent={setCurrent}
        task={task}
        deleteTask={deleteTask}
      />
    </div>)
}

export default Task;
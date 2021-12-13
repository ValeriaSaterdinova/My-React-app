import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/allTasks').then(res => {
      setTasks(res.data.data);
    });
  }, [])

  const addNewTask = async () => {
    if (text.trim()) {
      await axios.post('http://localhost:8000/createTask', {
        text: text.trim(),
        isCheck: false
      }).then(res => {
        tasks.push(res.data.data);
        setText('');
        setTasks([...tasks]);
      });
    } else {
      alert("Please, add text!")
    }
  }
  return (
    <div className='content'>
      <header>
        <h1>To-Do List</h1>
        <div className='added'>
          <TextField
            id='standard-basic'
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
          <Button
            variant='contained'
            onClick={() => addNewTask()}
          >
            Add
          </Button>
        </div>
      </header>
      <div className='allTask'>
        {
          tasks.sort((a, b) => a.isCheck - b.isCheck)
            .map((task, index) =>
              <Task
                task={task}
                index={index}
                setTasks={setTasks}
              />)
        }
      </div>
    </div>
  );
}

export default App;
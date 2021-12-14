import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Switch,
  Route, 
  Redirect 
} from 'react-router-dom';
import OpenEditComponent from './components/OpenEditComponent/OpenEditComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AllTasksComponent from './components/AllTasksComponent/AllTasksComponent';
import './App.scss';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrent] = useState({});
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
    <Switch>
      <Route path='/home'>
        <div className='content'>
          <header>
            <h1>To-Do List</h1>
            <HeaderComponent
              text={text}
              setText={setText}
              addNewTask={addNewTask}
            />
          </header>
          <AllTasksComponent
            setCurrent={setCurrent}
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
      </Route>
      <Route path='/edit' 
      >
        <div className='EditPage'>
        <h1> Edit task </h1>
        <OpenEditComponent 
          currentTask={currentTask}
          setTasks={setTasks}
        />
        </div>
      </Route>
      <Redirect from='/' to='/home' />
    </Switch>

  );
}

export default App;
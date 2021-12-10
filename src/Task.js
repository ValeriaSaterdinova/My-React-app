import React, { useState } from 'react';
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import MenuOpenTwoToneIcon from '@material-ui/icons/MenuOpenTwoTone';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Task = ({ task, index, setTasks }) => {
  const { _id, isCheck } = task;
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const editText = async () => {
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      text,
      isCheck
    }).then(res => {
      setTasks(res.data.data);
      setOpen(false)
    })
  }

  const openEdit = (value, state) => {
    setText(value);
    setOpen(state);
  }

  const deleteTask = async () => {
    await axios.delete(`http://localhost:8000/deleteTask?_id=${_id}`)
      .then(res => {
        setTasks(res.data.data);
      })
  }

  const editCheck = async () => {
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      isCheck: !isCheck
    }).then(res => {
      setTasks(res.data.data);
    })
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div
      className="tasks"
      key={`task-${index}`
      }>
      <Checkbox {...label}
        icon={<FavoriteBorderIcon />}
        checkedIcon={<FavoriteIcon />}
        checked={isCheck}
        onChange={() => editCheck()} />
      {
        open
          ? <div className="edit-open">
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <CheckCircleTwoToneIcon onClick={() => editText()} />
            <HighlightOffTwoToneIcon onClick={() => setOpen(!open)} />
          </div>
          : <div className="edit-close">
            <p> {task.text} </p>
            <MenuOpenTwoToneIcon
              visibility={isCheck ? 'hidden' : 'visible'}
              onClick={() => openEdit(task.text, !open)} />
            <DeleteSweepTwoToneIcon onClick={() => deleteTask()} />
          </div>
      }
    </div>)
}

export default Task;
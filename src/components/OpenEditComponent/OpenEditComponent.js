import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

const OpenEditComponent = ({ setTasks, currentTask }) => {
  const { _id, text: word } = currentTask;
  const history = useHistory();
  const [text, setText] = useState(word);

  const editText = async () => {
    await axios.patch('http://localhost:8000/updateTask', {
      _id,
      text,
    }).then(res => {
      setTasks(res.data.data);
      history.push('/home')
    });
  }
  return (
    <div className="edit-open">
      <input type="text" defaultValue={word} onChange={(e) => setText(e.target.value)} />
      <CheckCircleTwoToneIcon onClick={() => editText()} />
      <HighlightOffTwoToneIcon onClick={() => history.push('/home')} />
    </div>
  )
}

export default OpenEditComponent;
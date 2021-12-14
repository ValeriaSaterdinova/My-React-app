import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const HeaderComponent = ({ text, setText, addNewTask }) => {
  return (
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
  )
}

export default HeaderComponent;
import React from 'react';
import { useHistory } from 'react-router';
import MenuOpenTwoToneIcon from '@material-ui/icons/MenuOpenTwoTone';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';

const CloseEditComponent = ({setCurrent, task, deleteTask}) => {
  const history = useHistory();
  const { isCheck, text:word } = task;
  
  const openEdit = () => {
    setCurrent(task);
    history.push('/edit');
  }

  return (
    <div className="edit-close">
      <p> {word} </p>
      <MenuOpenTwoToneIcon
        visibility={isCheck ? 'hidden' : 'visible'}
        onClick={() => openEdit()} />
      <DeleteSweepTwoToneIcon onClick={() => deleteTask()} />
    </div>
  )
}

export default CloseEditComponent;
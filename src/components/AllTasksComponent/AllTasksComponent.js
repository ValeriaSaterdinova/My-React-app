import React from 'react';
import Task from '../../Task';

const AllTasksComponent = ({tasks, setCurrent, setTasks}) => {
  return (
    <div className='allTask'>
      {
        tasks.sort((a, b) => a.isCheck - b.isCheck)
          .map((task, index) =>
            <Task
              setCurrent={setCurrent}
              task={task}
              index={index}
              setTasks={setTasks}
            />)
      }
    </div>
  )
}

export default AllTasksComponent;
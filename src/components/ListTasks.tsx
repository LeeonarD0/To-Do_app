import { PlusCircle } from '@phosphor-icons/react';
import styles from './ListTask.module.css';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskItem } from './TaskItem';
import Clipboard from '../assets/Clipboard.svg';

interface NewTaskProps {
  id: string;
  taskName: string;
  isComplete: boolean;
}

export function ListTask() {
  const [newTaskInput, setNewTaskInput] = useState('');
  const [taskItem, setNewTaskItem] = useState<NewTaskProps[]>([]);

  function handleNewTask(e: FormEvent) {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      taskName: newTaskInput,
      isComplete: false,
    };

    setNewTaskItem((prevTasks) => [...prevTasks, newTask]);
    setNewTaskInput('');
  }

  function toggleTaskCompletion(id: string) {
    setNewTaskItem((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  function handleTaskRemove(id: string) {
    const taskWithoutDeletedOne = taskItem.filter(task => {
      return task.id !== id
    })

    setNewTaskItem(taskWithoutDeletedOne)
  }

  return (
    <div className={styles.MainContentContainer}>
      <form onSubmit={handleNewTask} className={styles.formTask}>
        <input
          required
          type="text"
          placeholder="Add a new task"
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
        />
        <div className={styles.buttonCreate}>
          <button type="submit">
            Create
            <PlusCircle size={18} />
          </button>
        </div>
      </form>

      <div>
        <header className={styles.header}>
          <div>
            <strong className={styles.taskCreatedDescription}>Tasks created</strong>
            <p className={styles.taskCreatedCount}>{taskItem.length}</p>
          </div>

          <div>
            <strong className={styles.taskDoneDescription}>Concluded</strong>
            <p className={styles.taskDoneCount}>
              {taskItem.filter((task) => task.isComplete).length} of {taskItem.length}
            </p>
          </div>
        </header>

        <article className={styles.taskListContent}>
          {taskItem.length !== 0 ? (
            taskItem.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                taskName={task.taskName}
                isComplete={task.isComplete}
                toggleTaskCompletion={toggleTaskCompletion}
                handleDeleteTask={handleTaskRemove}
              />
            ))
          ) : (
            <div className={styles.emptyTaskPage}>
              <img src={Clipboard}/>

              <div className={styles.emptyTaskPageDescription}>
                <strong>You don't have any tasks registered yet.</strong>
                <p>Create task and organize your itens ToDo.</p>
              </div>
            </div>
          )} 
        </article>
      </div>
    </div>
  );
}

import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import styles from './TaskItem.module.css';

interface TaskItemProps {
  id: string;
  taskName: string;
  isComplete: boolean;
  toggleTaskCompletion: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function TaskItem({ id, taskName, isComplete, toggleTaskCompletion, handleDeleteTask }: TaskItemProps) {
  
  function onDeleteTask() {
    handleDeleteTask(id)
  }
  
  return (
    <div className={styles.taskItemContainer}>
      <div className={styles.taskItemDescription}>
        <button onClick={() => toggleTaskCompletion(id)}>
          {isComplete ? (
            <CheckCircle weight="fill" className={styles.checkIcon} />
          ) : (
            <Circle size={24} className={styles.circleIcon} />
          )}
        </button>
        <p className={isComplete ? styles.taskNameDone : styles.taskName}>{taskName}</p>
      </div>

      <button onClick={onDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}

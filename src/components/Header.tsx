import styles from './Header.module.css'
import rocketLogo from './../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
      
      <img src={rocketLogo} alt="" />
      <div>
        <span className={styles.ToDoColor}>ToDo</span>{' '}
        <span className={styles.TasksColor}>Tasks</span>
      </div>
    </header>
  )
}
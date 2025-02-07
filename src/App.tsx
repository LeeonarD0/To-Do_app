import { Header } from "./components/Header";
import styles from "./App.module.css"
import { ListTask } from "./components/ListTasks";

export function App() {

  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.mainContent}>
        
        <div className={styles.listTaskContainer}>
        <ListTask/>
        </div>
      </div>
    </div>
  )
}



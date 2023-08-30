import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

function App() {

  return (

    <div>

      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Daniel Santos"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam magnam tempore, dignissimos saepe iste fugit vel perspiciatis, expedita in sapiente officia illum enim eveniet deleniti et minima. Reprehenderit, obcaecati aspernatur."
          />
          <Post
            author="Daniel Santos2"
            content="Outro texto"
          />
        </main>

      </div>

    </div>

  )
}

export default App



import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/Sidebar";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tkdsantos.png',
      name: 'Daniel Santos',
      role: 'Develpment'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera'},
      {type: 'paragraph', content: 'Acabou de sair mais um projeto no meu portifolio'},
      {type: 'link', content: 'daniel.santos/teste02'},
    ],
    publishedAt: new Date ('2022-05-01 20:00:00')
  },

]

console.log(post)

function App() {

  return (

    <div>

      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}              
              />
            )
          })}
        </main>

      </div>

    </div>

  )
}

export default App



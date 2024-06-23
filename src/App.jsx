import './App.css'
import postImg from "./assets/illustration-article.svg"
import avatarImg from "./assets/image-avatar.webp"

function App() {

  return (
    <div className="main-container">
      <div className="card-container">
        <img className='post-img' src={ postImg } alt="post-image" />
        <p className='category'>Learning</p>
        <p className="post-date">Published 21 Dec 2023</p>
        <h1 className='post-title'>HTML & CSS foundations</h1>
        <p className="post-desc">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="post-author-container">
          <img className='avatar-img' src={ avatarImg } alt="avatar-image" />
          <p className='author-name'>Greg Hooper</p>
        </div>
      </div>
    </div>
  )
}

export default App

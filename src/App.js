import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['뷰', '리액트', '파이썬']);
  let [like, setLike] = useState(0);

  const increase = () => {
    setLike(like+1);
  }

  const changeTitle = () => {
    let copy = [...title];  // deepcopy
    copy[0] = '제목';
    setTitle(copy);
  }

  const sortTitle = () => {
    let copy = [...title];  // deepcopy
    copy.sort();
    setTitle(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color: 'white', fontsize: '16px'} }>ReactBlog</h4>
      </div>
      <button onClick={changeTitle}>제목 변경</button>
      <button onClick={sortTitle}>제목 가나다순 변경</button>
      <div className="list">
        <h4>{title[0]} <span onClick={increase}>👍</span> {like} </h4>
        <p>5월 17일 발행</p>  
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>5월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>5월 17일 발행</p>
      </div>
      
      <Modal title="제목1"/>
      <Modal title="제목2"/>
      <Modal title="제목3"/>
    </div> 
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// function List(){
//   return (
//     <div className="list">
//       <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>👍</span> {like} </h4>
//       <p>5월 17일 발행</p>  
//     </div>
//   )
// }

export default App;
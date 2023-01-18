import {useState, useReducer} from "react";
import Video from "./components/Video";

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
}

export default function App() {
  const [video, setVideo] = useState(null);
  
  function display(e) {
    const selected = e.target.value;
    const link = videos[selected];
    const element = <Video link={link} />
    setVideo(element)
  }


  return (
    <div className="container">
      <h1>Video Player</h1>
      <form>
        <label htmlFor="spider" className="btn" >
          <input id="spider" type="radio" name="animal" value="spider" onChange={(e) => display(e)} />
          Spider
        </label>
        <label htmlFor="deer" className="btn" >
          <input id="deer" type="radio" name="animal" value="deer" onChange={(e) => display(e)} />
          Deer
        </label>
        <label htmlFor="snail" className="btn" >
          <input id="snail" type="radio" name="animal" value="snail" onChange={(e) => display(e)} />
          Snail
        </label>
        <label htmlFor="cat" className="btn" >
          <input id="cat" type="radio" name="animal" value="cat" onChange={(e) => display(e)} />
          Cat
        </label>
      </form>
      <div className="video-container">
        {video}
      </div>
    </div>
  )
}
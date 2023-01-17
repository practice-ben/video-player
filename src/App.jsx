import React from "react";
const data = [
  {
    name: "spider",
    url_link: <iframe width="500" height="400" src="https://www.youtube.com/embed/uHyYtcMZYGs" title="Best Spider Moments | Top 5 | BBC Earth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    name: "snail",
    url_link: <iframe width="500" height="400" src="https://www.youtube.com/embed/PQ1BXxmHsiU" title="Largest Snail in the world Lifecycle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    name: "deer",
    url_link: <iframe width="500" height="400" src="https://www.youtube.com/embed/V1wo6lRmmuQ" title="The Private Life of Deer - Amazing Nature Documentary (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    name: "cat",
    url_link: <iframe width="500" height="400" src="https://www.youtube.com/embed/EAV6J6hE9rk" title="Cats Meowing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  }
]
export default function App() {
  const elements = data.map(({url_link}, index) => {
    return(
      <div key={index += 1} className="video">
        {url_link}
      </div>
    )
  })
  
  return (
    <div className="container">
      <h1>Video Player</h1>
      <div className="video-container">
        {elements}
      </div>
    </div>
  )
}
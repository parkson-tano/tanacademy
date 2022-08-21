import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [course, SetCourse] = useState("");
  const BaseUrl = "http://127.0.0.1:8000/curriculum/course";
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [tutor, setTutor] = useState();
  const [cover_image, setCoverImage] = useState(null);


  useEffect(() => {
    axios
    .get(BaseUrl)
    .then((response) => {
      SetCourse(response.data)
    })
  }, [])
  const courses = Object.entries(course).map(([key, value]) => (<li key={key}>
    <span className='text-blue-500'>
      {value.title}
      <img src={value.cover_image} className="h-10 w-50" />
    </span>
  </li>
  )
  )
  
  const createCourse = () => {
    axios.post(
      BaseUrl, {
        title,
        description,
        tutor,
        status,
        cover_image,
      }
    )
    .then((response) => {
      SetCourse(response.data)
    })
    .catch(error => console.log(error))
  }

function handleSubmit(event) {
  const image = event.target.files[0]
    axios
      .post(BaseUrl, {
        title: event.target.title,
        description: event.target.description,
        tutor: event.target.tutor,
        status: event.target.status,
      })

      .then((response) => {
        SetCourse(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <ul>{courses}</ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            type="text"
            placeholder="enter tutor"
            value={tutor}
            onChange={(e) => setTutor(e.target.value)}
          />
          <input
            type="file"
            name='cover_image'
            onChange={(e) => {
              setCoverImage(e.target.files[0]);
              console.log(e.target.files[0])
            }
              
            }
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      <button className="btn " onClick={createCourse}>
        Add course
      </button>
    </div>
  );
}

export default App;

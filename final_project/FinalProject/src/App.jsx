import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid';
import AddStudent from './AddStudent';


function App() {

  const [allStudents, setAllStudents] = useState(null);

  const students=[{
    id:nanoid(),
      firstName: "Chariot",
      lastName: "Lanaway",
      email: "hello@hotmail.com",
      image: "student1.jpg"
    }, {
      id:nanoid(),
      firstName: "Dexter",
      lastName: "Wathell",
      email: "dwathell1@economist.com",
      image: "student2.jpg"
    }, {
      id:nanoid(),
      firstName: "Rafa",
      lastName: "Rowlands",
      email: "rrowlands2@blogs.com",
      image: "student3.jpg"
    }, {
      id:nanoid(),
      firstName: "Goku",
      lastName: "Cuddy",
      email: "gcuddy3@salon.com",
      image: "student4.jpg"
    }, {
      id:nanoid(),
      firstName: "Kevon",
      lastName: "Cotgrave",
      email: "kcotgrave4@yellowpages.com",
      image: "student5.jpg"
    }, {
      id:nanoid(),
      firstName: "Der",
      lastName: "Astell",
      email: "dastell5@howstuffworks.com",
      image: "student6.jpg"
    }, {
      id:nanoid(),
      firstName: "Shandra",
      lastName: "Pitkeathly",
      email: "spitkeathly6@epa.gov",
      image: "student7.jpg"
    }, {
      id:nanoid(),
      firstName: "Frank",
      lastName: "Severwright",
      email: "cseverwright7@wp.com",
      image: "student8.jpg"
    }, {
      id:nanoid(),
      firstName: "Ivie",
      lastName: "Buncombe",
      email: "ibuncombe8@tinyurl.com",
      image: "student9.jpg"
    }, {
      id:nanoid(),
      firstName: "Pauli",
      lastName: "Nys",
      email: "pnys9@cnbc.com",
      image: "student10.jpg"
    }];

    const addStudent = (newStudent) => {
      const updatedStudents = [...allStudents,newStudent];
      saveStudents(updatedStudents);
    };

  return (
    <div className='container'>
      <div className='row'>
        {allStudents && allStudents.map((student) =>(
        <div className='col-lg-2' key={student.id}>
          <div className='card'>
          <img src={student.image} />
          <ul className='list group list group flush'>
            <li className='list-group-item'>{student.firstName}</li>
            <li className='list-group-item'>{student.lastName}</li>
            <li className='list-group-item'>{student.email}</li>
          </ul>
          </div>
        </div>)
        )}

      </div>

      {!allStudents && <button type='button' className='btn btn-lrg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>}
      <AddStudent addStudent={addStudent} />
     
    </div>
    

  )
}

export default App

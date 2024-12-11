import { useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import _ from 'lodash';
import Student from './component/Student';
import AddStudent from './component/AddStudent';



function App() {

  const [allStudents, setAllStudents] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [gradYear, setGradYear] = useState('');

  useEffect(() => {
    if(localStorage){
      const studentsLocalStorage = JSON.parse(localStorage.getItem('students'));

      if(studentsLocalStorage){
        saveStudents(studentsLocalStorage);
      }else{
        saveStudents(students);
      }
    }
 
  },[]);


  //base array

  const students=[{
    id:nanoid(),
      firstName: "Jimmothy",
      lastName: "Jimbo",
      email: "hello@hotmail.com",
      image: "student1.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Dexter",
      lastName: "Lab",
      email: "xxx_420blzit_xxx@hotmail.net",
      image: "student2.jpg",
      gradYear: 1999
    }, {
      id:nanoid(),
      firstName: "Rafa",
      lastName: "DeLaffa",
      email: "jjisdumb@aol.com",
      image: "student3.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Goku",
      lastName: "Kuddi",
      email: "gku3@salon.com",
      image: "student4.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Kevon",
      lastName: "Elevon",
      email: "phazeclanhalo2@yellowpages.com",
      image: "student5.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Der",
      lastName: "Dur Dur",
      email: "idontknow@howstuffworks.com",
      image: "student6.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Shandra",
      lastName: "Nallar",
      email: "redplanzwalkr@ok.gov",
      image: "student7.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Frank",
      lastName: "Sthe tank",
      email: "bigfrank@wp.com",
      image: "student8.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Ivie",
      lastName: "Buncombe",
      email: "ibuncombe8@tinyurl.com",
      image: "student9.jpg",
      gradYear: 1999,
    }, {
      id:nanoid(),
      firstName: "Pauli",
      lastName: "Nys",
      email: "pnys9@cnbc.com",
      image: "student10.jpg",
      gradYear: 1999 ,
    }];

    //save and add

    const saveStudents = (students) => {
      setAllStudents(students);
      setSearchResults(students);
      if(localStorage){
        localStorage.setItem('students', JSON.stringify(students));
        console.log('saved to local storage');
      }
    }

    const addStudent = (newStudent) => {
      const updatedStudents = [...allStudents,newStudent];
      saveStudents(updatedStudents);
    };
    
    //DELETE
    const removeStudent = (studentToDelete) => {
      const updatedStudentArray = allStudents.filter(student => student.id !== studentToDelete.id);
      saveStudents(updatedStudentArray);
    }

    const updateStudent = (updatedStudent) => {
      //console.table(updatedStudent);
      const updatedStudentArray = allStudents.map(student => student.id === updatedStudent.id ? {...student, ...updatedStudent} : student);
      saveStudents(updatedStudentArray)
    }

    //search

    const searchStudents = () => {
      let keywordsArray = [];

      if(keywords){
        keywordsArray = keywords.toLowerCase().split(' ');
      }

      if(gradYear){
        keywordsArray.push(gradYear.toString());
      }

      if(keywordsArray.length > 0){
        const searchResults = allStudents.filter(student => {
          for(const word of keywordsArray){
            if(student.firstName.toLowerCase().includes(word) ||
              student.lastName.toLowerCase().includes(word) ||
              student.gradYear === parseInt(word)){
                return true;
              }
          }
          return false;
        });
        setSearchResults(searchResults);
      }else{
        setSearchResults(allStudents)
      }
    };

  return (
    <div className='container'>
      <div className='row'>
        {searchResults && searchResults.map((student) =>(
        <div className='col-lg-2' key={student.id}>
          <Student student={student} removeStudent={removeStudent} updateStudent={updateStudent} />

        </div>)
        )}

      </div>

      {/*!allStudents && <button type='button' className='btn btn-lrg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>*/}
      <AddStudent addStudent={addStudent} />
      <div className='row mt-4'>
        <div className='col-md4'></div>
        <label htmlFor='txtkeywords'>Search by First or Last Name</label>
        <input type='text' className='form-control' placeholder='Search First or Last Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
      </div>
      <div className='col-md-4'>
        <select className='form-select' value={gradYear} onChange={e => setGradYear(e.currentTarget.value)} >
          <option value=''>Select Year</option>
          {_(allStudents).map(student => student.gradYear).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
        </select>
      </div>
      <div className='col-md-4'>
        <button type='button' className='btn btn-lg btn-primary' onClick={searchStudents}>Search Students</button>
      </div>
     
    </div>
    

  )
}

export default App

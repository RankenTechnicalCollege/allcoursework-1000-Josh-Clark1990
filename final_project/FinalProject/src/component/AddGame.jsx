import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import './AddGame.css';

const addGame  = (props) => {
  const[GameName, setGameName] = useState('');
  const[ConsoleName, setConsoleName] = useState('');
  const[Developer, setDeveloper] = useState('');
  const[ReleaseYear, setReleaseYear] = useState('');
  const[selectedFile, setSelectedFile] = useState();

  const doWork = () => {
    const newGame = {
      'id': nanoid(),
      'GameName': GameName,
      'ConsoleName': ConsoleName,
      'Developer': Developer,
      'ReleaseYear': parseInt(ReleaseYear),
      'image': URL.createObjectURL(selectedFile)
    }
    props.addGame(newGame)
  }

  const imageUpdate =(event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className='row mt-5' id='addGame'>
      <h3>Add Game</h3>
      <div className='col-md-2'>
        <label htmlFor='txtGameName' className='form-label'>Game Name</label>
        <input type='text' id='txtGameName' placeholder='Game Name' className='form-control' onChange={(event) => setGameName(event.currentTarget.value)} value={GameName}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtConsoleName' className='form-label'>Console Name</label>
        <input type='text' id='txtConsoleName' placeholder='Console Name' className='form-control' onChange={(event) => setConsoleName(event.currentTarget.value)} value={ConsoleName}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtDeveloper' className='form-label'>Developer</label>
        <input type='text' id='txtDeveloper' placeholder='Developer' className='form-control' onChange={(event) => setDeveloper(event.currentTarget.value)} value={Developer}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='txtScore' className='form-label'>Release Year</label>
        <input type='text' id='txtScore' placeholder='ReleaseYear' className='form-control' onChange={(event) => setReleaseYear(event.currentTarget.value)} value={ReleaseYear}></input>
      </div>
      <div className='col-md-2'>
        <label htmlFor='fileUpload' className='form-label'>Game Image</label>
        <input type='file' id='fileUpload' className='form-control' onChange={imageUpdate}></input>
      </div>
      <div className='col-md-2'>
        <button type='button' className='btn btn-primary btn-lg' id='btnAdd' onClick={doWork}>Add Game <FontAwesomeIcon icon={faPlusSquare} /></button> 
      </div>


    </div>
  )
}

export default addGame
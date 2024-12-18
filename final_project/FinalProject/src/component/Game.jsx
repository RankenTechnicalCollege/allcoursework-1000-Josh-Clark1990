import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, } from '@fortawesome/free-solid-svg-icons';
import './AddGame.css';




const game = (props) => {
  const [editMode, setEditMode] = useState(false);
  const[GameName, setGameName] = useState('');
  const[ConsoleName, setConsoleName] = useState('');
  const[Developer,setDeveloper] = useState('');
  const[ReleaseYear, setReleaseYear] = useState('');


  useEffect(()=> {
    setGameName(props.game.GameName);
    setConsoleName(props.game.ConsoleName);
    setDeveloper(props.game.Developer);
    setReleaseYear(props.game.releaseYear);
 },[]);

  const saveGame = () => {
    setEditMode(false);
    const updatedGame = {GameName:GameName, ConsoleName:ConsoleName, Developer:Developer, ReleaseYear:ReleaseYear, id:props.game.id, image:props.game.image};
    props.updateGame(updatedGame);
  }

  return (
    <div className='card'>
    <img src={props.game.image} alt='Our game' className='card-img-top mx-auto img-fluid custom-img'/>
    {!editMode &&     <ul className='list-group list-group-flush'>
      <li className='list-group-item text-center'>{props.game.GameName}</li>
      <li className='list-group-item text-center'>{props.game.ConsoleName}</li>
      <li className='list-group-item text-center'>{props.game.Developer}</li>
      <li className='list-group-item text-center'>{props.game.ReleaseYear}</li>
      <button type='button' className='btn btn-danger' onClick={() => props.removeGame(props.game)}>Delete Game <FontAwesomeIcon icon={faDeleteLeft} /></button>
      <button type='button' className='btn btn-warning' onClick={() => setEditMode(true)}>Edit Game  <FontAwesomeIcon icon={faEdit} /></button>
    </ul>
}
{editMode &&     <ul className='list-group list-group-flush'>
      <li className='list-group-item text-center'><input type='text' className='form-control' value={GameName} onChange={(e) => setGameName(e.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type='text' className='form-control' value={ConsoleName} onChange={(e) => setConsoleName(e.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type='text' className='form-control' value={Developer} onChange={(e) => setDeveloper(e.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><input type='text' className='form-control' value={ReleaseYear} onChange={(e) => setReleaseYear(e.currentTarget.value)} /></li>
      <li className='list-group-item text-center'><button type='button' className='btn btn-secondary' onClick={saveGame}>Save</button></li>
    </ul>
}



    </div>
  )  
}

export default game
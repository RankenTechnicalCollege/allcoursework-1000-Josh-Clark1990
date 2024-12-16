import { useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {nanoid} from 'nanoid';
import _ from 'lodash';
import Game from './component/Game';
import AddGame from './component/AddGame';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGamepad,} from '@fortawesome/free-solid-svg-icons';




function App() {

  const [allGames, setAllGames] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [releaseYear, setReleaseYear] = useState('');

  useEffect(() => {
    if(localStorage){
      const gamesLocalStorage = JSON.parse(localStorage.getItem(games));

      if(gamesLocalStorage){
        saveGames(gamesLocalStorage);
      }else{
        saveGames(games);
      }
    }
 
  },[]);


  //base array

  const games=[{
    id:nanoid(),
    GameName: "Pauli",
    ConsoleName: "Nys",
    Developer: "pnys9@cnbc.com",
    image: "student10.jpg",
    ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Pauli",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Pauli",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Pauli",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Pauli",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Jim",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "frank",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student1.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Paaqaaaaaaai",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Paussssssssssssssssssli",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }, {
      id:nanoid(),
      GameName: "Pauli",
      ConsoleName: "Nys",
      Developer: "pnys9@cnbc.com",
      image: "student10.jpg",
      ReleaseYear: 1999 ,
    }];

    //save and add

    const saveGames = (games) => {
      setAllGames(games);
      setSearchResults(games);
      if(localStorage){
        localStorage.setItem(games, JSON.stringify(games));
        console.log('saved to local storage');
      }
    }

    const addGame = (newGames) => {
      const updatedGames = [...allGames,newGames];
      saveGames(updatedGames);
    };
    
    //DELETE
    const removeGame = (gameToDelete) => {
      const updatedGameArray = allGames.filter(game => game.id !== gameToDelete.id);
      saveGames(updatedGameArray);
    }

    const updateGame = (updatedGame) => {
      //console.table(updatedStudent);
      const updatedGameArray = allGames.map(game => game.id === updatedGame.id ? {...game, ...updatedGame} : game);
      saveGames(updatedGameArray)
    }

    //search

    const searchGames = () => {
      let keywordsArray = [];

      if(keywords){
        keywordsArray = keywords.toLowerCase().split(' ');
      }

      if(releaseYear){
        keywordsArray.push(releaseYear.toString());
      }

      if(keywordsArray.length > 0){
        const searchResults = allGames.filter(game => {
          for(const word of keywordsArray){
            if(game.gameName.toLowerCase().includes(word) ||
              game.consoleName.toLowerCase().includes(word) ||
              game.score === parseInt(word)){
                return true;
              }
          }
          return false;
        });
        setSearchResults(searchResults);
      }else{
        setSearchResults(allGames)
      }
    };

  return (
    <div className='container'>
      <div className='row' id='allGames'>
        <h3>Current Games</h3>
        {searchResults && searchResults.map((game) =>(
        <div className='col-lg-2' key={game.id}>
          <Game game={game} removeGame={removeGame} updateGame={updateGame} />

        </div>)
        )}

      </div>

      <AddGame addGame={addGame} />
      <div className='row mt-4' id='searchGames'>
        <h3>Search Games</h3>
        <div className='col-md-4'></div>
        <input type='text' className='form-control' placeholder='Search Game or Console Name' onChange={e => setKeywords(e.currentTarget.value)} value={keywords} />
        <div className='col-md-4'>
          <br></br>
 
      </div>
      <label htmlFor='txtKeywords'>Search by Release Year</label>
        <select className='form-select' value={releaseYear} onChange={e => setReleaseYear(e.currentTarget.value)} >
          <option value=''>Select Year</option>
          {_(allGames).map(game => game.score).sort().uniq().map(year => <option key={year} value={year}>{year}</option>).value()}
        </select>
        <br></br>
        <button type='button' className='btn btn-lg btn-primary' onClick={searchGames}>Search Game <FontAwesomeIcon icon={faGamepad} /> </button>
      </div>
      <div className='col-md-4 mt-3'>
        <br></br>

      </div>
      <br></br>

     
    </div>
    

  )
}

export default App

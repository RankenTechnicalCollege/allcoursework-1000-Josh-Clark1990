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
      const gamesLocalStorage = JSON.parse(localStorage.getItem('games'));

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
    GameName: "World of Wacraft",
    ConsoleName: "PC",
    Developer: "Blizzard",
    image: "world of warcraft.jpg",
    ReleaseYear: 2004 ,
    }, {
      id:nanoid(),
      GameName: "Final Fantasy XIV",
      ConsoleName: "PC",
      Developer: "Square Enix",
      image: "finalfantasy14.webp",
      ReleaseYear: 2013 ,
    }, {
      id:nanoid(),
      GameName: "Diablo 2",
      ConsoleName: "PC",
      Developer: "Blizzard",
      image: "diablo2.jpg",
      ReleaseYear: 2000 ,
    }, {
      id:nanoid(),
      GameName: "Va-11 Hall-A",
      ConsoleName: "PC, PS4, Switch",
      Developer: "Sukeban Games",
      image: "va11halla.jpg",
      ReleaseYear: 2016 ,
    }, {
      id:nanoid(),
      GameName: "Castlevania Aria of Sorrow",
      ConsoleName: "Gameboy Advance",
      Developer: "Konami",
      image: "castlevaniaaraia.jpg",
      ReleaseYear: 2003 ,
    }, {
      id:nanoid(),
      GameName: "Super Mario World",
      ConsoleName: "Super Nintendo",
      Developer: "Nintendo",
      image: "supermarioworld.jpg",
      ReleaseYear: 1990 ,
    }, {
      id:nanoid(),
      GameName: "Warhammer 40k Dawn of War Soulstorm",
      ConsoleName: "PC",
      Developer: "Iron Lore Entertainment",
      image: "warhammer40ksoulstorm.png",
      ReleaseYear: 2008 ,
    }, {
      id:nanoid(),
      GameName: "Castlevania Order of Eclessia",
      ConsoleName: "Nintendo DS",
      Developer: "Konami",
      image: "castlevaniaeclessia.webp",
      ReleaseYear: 2008 ,
    }, {
      id:nanoid(),
      GameName: "Bloodstained Ritual of the Night",
      ConsoleName: "PS4, PC, Switch",
      Developer: "Art Play Inc",
      image: "bloodstainedritual.avif",
      ReleaseYear: 2019 ,
    }, {
      id:nanoid(),
      GameName: "Super Metroid",
      ConsoleName: "Super Nintendo",
      Developer: "Nintendo",
      image: "supermetroid.jpg",
      ReleaseYear: 1994 ,
    }, {
      id:nanoid(),
      GameName: "Genshin Impact",
      ConsoleName: "PC, PS5, Mobile",
      Developer: "Mihoyo",
      image: "genshinimpact.avif",
      ReleaseYear: 2020,
    }, {
      id:nanoid(),
      GameName: "Pokemon Crystal",
      ConsoleName: "Gameboy Color",
      Developer: "Game Freak",
      image: "pokemoncrystal.jpg",
      ReleaseYear: 2000,
    }];

    //save and add

    const saveGames = (games) => {
      setAllGames(games);
      setSearchResults(games);
      if(localStorage){
        localStorage.setItem('games', JSON.stringify(games));
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
            if((game.GameName && game.GameName.toLowerCase().includes(word)) ||
            (game.ConsoleName && game.ConsoleName.toLowerCase().includes(word)) ||
            game.ReleaseYear === parseInt(word)) {
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

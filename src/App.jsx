import * as starshipService from './services/starshipService.js'
import StarshipList from './components/StarshipList.jsx'
import StarshipSearch from './components/StarshipSearch.jsx';
import './App.css'


const App = () => {
  return (
    <>
      <StarshipSearch starshipService={starshipService} />
      <StarshipList starshipService={starshipService} />
    </>
  );
}

export default App;
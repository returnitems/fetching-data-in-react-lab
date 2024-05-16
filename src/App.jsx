import * as starshipService from './services/starshipService.js'
import StarshipList from './components/StarshipList.jsx'
// import './App.css'


const App = () => {
  return (
    <>
      <StarshipList starshipService={starshipService} />
    </>
  );
}

export default App;
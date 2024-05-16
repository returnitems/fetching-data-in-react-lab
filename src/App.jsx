import * as starshipService from './services/starshipService'
import StarshipList from './components/StarshipList'


const App = () => {
  return (
    <>
      <StarshipList starshipService={starshipService} />
    </>
  );
}

export default App;
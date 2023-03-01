import Navigation from './components/Navigation';
import Featured from './components/Featured';
import Popular from './components/Popular';
import Recent from './components/Recent';
import DetaileRecipe from './components/DetaileRecipe';
import BrowseRecipe from './components/BrowseRecipe';
console.log(Popular);
function App() {
  return (
    <div className="App">
      <Navigation />
      <Featured />
      <Popular />
      <Recent />
      <DetaileRecipe />
      <BrowseRecipe />
    </div>
  );
}

export default App;

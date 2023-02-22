import Navigation from './components/Navigation';
import Featured from './components/Featured';
import Popular from './components/Popular';
import Recent from './components/Recent';
console.log(Popular);
function App() {
  return (
    <div className="App">
      <Navigation />
      <Featured />
      <Popular />
      <Recent />
    </div>
  );
}

export default App;

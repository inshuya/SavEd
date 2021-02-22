import logo from './logo.svg';
import './App.css';
import NavigationBar from './Navigation.js'

function App() {
  return (
    <div class="App" id="wrapper">
      <div class="header">
        <p>
          SavEd
        </p>
      </div>
      <div>
      <div class="leftpanel">
      <NavigationBar/>
      </div>
      <div class="rightpanel">
        Data
      </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import MyButton from './components/Button/Button';
import MyButton2 from './components/Button2/Button2';
import MyButton3 from './components/Button3/Button3';
// import MyButton3 from './components/Button2/Button3';
import MyButton4 from './components/Button4/Button4';

function App() {
  return (
    <div className="App">
      <nav class="Navbar">
        <div>React Exercises</div>
        <div class="numbers">
          <p>#1</p>
          <p>#2</p>
          <p>#3</p>
          <p>#4</p>
        </div></nav>
      <header className="header">

        Exercise 1
      </header>
      <p class="enunciate">
        Increment the number of like when you click on it.
      </p>
      <MyButton/>
      <MyButton2/>
      <MyButton3/>
      <MyButton4/>
      {/* className= "App-header"*/}
      {/* className="App-logo" */}
      {/* "App-link" */}
    </div>
  );
}

export default App;

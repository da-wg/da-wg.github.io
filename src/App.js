import { ReactComponent as Twitter } from './img/twitter.svg';
import { ReactComponent as Github } from './img/github.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-name">
          David Wang
        </h1>
        <p>
          CS @ University of Waterloo
          <br/>
          BBA @ Wilfrid Laurier
        </p>
        <div className="App-now">
          Currently: Applying for 2022 Winter Co-op
        </div>
        <div className="App-icons">
          <a href="https://twitter.com/davidlwang" target="_blank">
            <Twitter className="App-twitter" alt="twitter"/>
            {/* <img src={twitter} className="App-twitter" alt="twitter" /> */}
          </a>
          |
          <a href="https://github.com/da-wg" target="_blank">
            <Github className="App-github" alt="github"/>
            {/* <img src={github} className="App-github" alt="github" /> */}
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { NameContainer } from './ex1/NameContainer';
import { List } from './ex2/List';
import { MouseMove } from './ex3/MouseMove';
import { InputComp } from './ex4/InputComp';
import { Container } from './ex5/Container';
import { MouseMoveClass } from './ex3/MouseMoveClass';
import { StylesTest } from './ex6/StylesTest';
import { Buttons } from './ex7/Buttons';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link01" to="/">Main</Link>
        <Link className="link01" to="/mouse-move">Mouse Move</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StylesTest />} />
        <Route path="/mouse-move" element={<MouseMove />} />
      </Routes>
    </div>
  );
}

export default App;

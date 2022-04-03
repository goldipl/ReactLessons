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
import { Dogs } from './ex8/Dogs';


function App() {
  return (
    <div className="App">
      <nav>
        <Link className="link01" to="/">Main</Link>
        <Link className="link01" to="/mouse-move">Mouse Move</Link>
        <Link className="link01" to="/name-container">Name Container</Link>
        <Link className="link01" to="/list">List</Link>
        <Link className="link01" to="/input-comp">Input Comp</Link>
        <Link className="link01" to="/container">Container</Link>
        <Link className="link01" to="/mouse-move-class">Mouse Move Class</Link>
        <Link className="link01" to="/buttons">Buttons</Link>
        <Link className="link01" to="/dogs">Dogs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StylesTest />} />
        <Route path="/mouse-move" element={<MouseMove />} />
        <Route path="/name-container" element={<NameContainer />} />
        <Route path="/list" element={<List/>} />
        <Route path="/input-comp" element={<InputComp />} />
        <Route path="/container" element={<Container />} />
        <Route path="/mouse-move-class" element={<MouseMoveClass />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </div>
  );
}

export default App;

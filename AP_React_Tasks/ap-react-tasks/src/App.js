import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import StringTask from "./components/StringTask";
import CharCount from "./components/CharCount";
import Counter from "./components/Counter";
import CountdownTimer from "./components/CountdownTimer";
import PasswordToggle from "./components/PasswordToggle";
import DigitalClock from "./components/DigitalClock";
import GuessNumber from "./components/GuessNumber";
import BasicCalc from "./components/BasicCalc";
import SimpleCalculator from "./components/SimpleCalculator";
import GSTCalculator from "./components/GSTCalculator";
import TodoApp from "./components/TodoApp";
import FormApp from "./components/FormApp";
import FetchUsers from "./components/FetchUsers";
import WeatherApp from "./components/WeatherApp";
import MovieSearch from "./components/MovieSearch";
import NewsApp from "./components/NewsApp";
import CurrencyConverter from "./components/CurrencyConverter";
import DarkMode from "./components/DarkMode";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/task2">Task 2</Link> |{" "}
        <Link to="/task3">Task 3</Link> |{" "}
        <Link to="/task4">Task 4</Link> |{" "}
        <Link to="/task5">Task 5</Link> |{" "}
        <Link to="/task6">Task 6</Link> |{" "}
        <Link to="/task7">Task 7</Link> |{" "}
        <Link to="/task8">Task 8</Link> |{" "}
        <Link to="/task9">Task 9</Link> |{" "}
        <Link to="/task10">Task 10</Link> |{" "}
        <Link to="/task11">Task 11</Link> |{" "}
        <Link to="/task12">Task 12</Link> |{" "}
        <Link to="/task13">Task 13</Link> |{" "}
        <Link to="/task19">Task 19</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/task2" element={<StringTask />} />
        <Route path="/task3" element={<CharCount />} />
        <Route path="/task4" element={<Counter />} />
        <Route path="/task5" element={<CountdownTimer />} />
        <Route path="/task6" element={<PasswordToggle />} />
        <Route path="/task7" element={<DigitalClock />} />
        <Route path="/task8" element={<GuessNumber />} />
        <Route path="/task9" element={<BasicCalc />} />
        <Route path="/task10" element={<SimpleCalculator />} />
        <Route path="/task11" element={<GSTCalculator />} />
        <Route path="/task12" element={<TodoApp />} />
        <Route path="/task13" element={<FormApp />} />
        <Route path="/task19" element={<DarkMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

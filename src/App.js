import WeatherWidget from '../components/WeatherWidget.jsx'

import {useState} from "react"

function App() {

const [unit, setUnit] = useState("C")
const [theme, setTheme] = useState("dark")

  function toggleTheme(e){
    setTheme(e.target.value)
  }

  return (
    <div className={"App" + theme}> 
      <h1>React - state and events</h1>
      <select onChange={toggleTheme}>
        <option value = "light">Light</option>
        <option value = "dark">Dark</option>
      </select>
      
      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>

      <WeatherWidget city="Miami" icon="🟡" celsius={29} unit={unit} />
      <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
      <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
      <WeatherWidget city="Barcelona" icon="🌤️" celsius={28} unit={unit} />
    </div>
  );
}

export default App;



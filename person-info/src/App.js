import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } hairColor= { "Black" }/>
      <PersonCard firstName={ "John" } lastName={ "Smith" } hairColor= { "Brown" }/>
    </div>
  );
}

export default App;

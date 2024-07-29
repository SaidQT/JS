import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Jane" } age = {45} lastName={ "Doe" } hairColor= { "Black" }/>
      <PersonCard firstName={ "John" } age = {88} lastName={ "Smith" } hairColor= { "Brown" }/>
    </div>
  );
}

export default App;

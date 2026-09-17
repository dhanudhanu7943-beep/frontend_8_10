import Button from "./Button";
import Input from "./Input";
import Card from "./Card";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>React Components Hub</h1>
      <div className="input-group">
        <Input />
      </div>
      <Button />
      <Card />
    </div>
  );
};

export default App;
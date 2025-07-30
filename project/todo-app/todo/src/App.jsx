import Appname from "./components/Appname";
import Apptodo from "./components/Apptodo";
import Todoitem from "./components/Todoitem";
import Todoitem1 from "./components/Todoitem1";
import "./App.css";
function App() {
  return (
    <center className="todo_container">
      <Appname />
      <Apptodo></Apptodo>
      <div className="todo_item">
        <Todoitem></Todoitem>
        <Todoitem1></Todoitem1>
      </div>
    </center>
  );
}

export default App;

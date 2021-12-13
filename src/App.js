import './App.css';
import { DataList } from './drag_drop/context';
import Form from './drag_drop/form';
import ToDoList from './drag_drop/list';
function App() {
  return (
    <div className="App">
      <div className="mainWrapper">
        <DataList>
          <Form />
          <ToDoList />
        </DataList>
      </div>
    </div>
  );
}

export default App;

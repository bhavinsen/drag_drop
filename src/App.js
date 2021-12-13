import './App.css';
import { DataList } from './components/context';
import Form from './components/form';
import List from './components/list';
function App() {
  return (
    <div className="App">
      <div className="mainWrapper">
        <DataList>
          <Form />
          <List />
        </DataList>
      </div>
    </div>
  );
}

export default App;

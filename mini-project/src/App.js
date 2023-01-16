import './App.css';
import Control from './components/Control';
import DataProvider, { DataContext } from './components/DataProvider';
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';
function App() {
  return (
    <div className='container'>
      <DataProvider>
      <Header/>
      <Control/>
      <Form/>
      <List/>
      </DataProvider>
    </div>
  );
}
export default App;

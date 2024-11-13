
import { BrowserRouter as  Router,Routes,Route,Link } from 'react-router-dom';
import DisplayData from './DisplayData';
import AddData from './AddData';
import EditData from './EditData';

function App() {
    return (
      <div className="App">
       <Router>
       <Link to='/add'>Add</Link> | <Link to='/'>Display</Link> |
          
        <Routes>
          <Route path='/' element={<DisplayData/>}/>
          <Route path='/add' element={<AddData/>} />
          <Route path='/edit/:id' element={<EditData/>}/>
        </Routes>
       </Router>
      </div>
    );
  }
  
  export default App;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import NotesPage from './pages/NotesPage';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <CreatePage />
          </Route>
          <Route exact path="/notes">
            <NotesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

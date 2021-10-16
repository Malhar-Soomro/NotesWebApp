import './App.css';
import "./index.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreatePage from './pages/CreatePage';
import NotesPage from './pages/NotesPage';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Layout>
            <Route exact path="/">
              <NotesPage />
            </Route>
            <Route exact path="/create">
              <CreatePage />
            </Route>
          </Layout>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

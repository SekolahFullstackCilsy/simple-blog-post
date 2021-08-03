import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Navbar from './components/navbar';
import Blog from './pages/blog';
import BlogDetail from './pages/blog/detail';
import CreateBlog from './pages/blog/create';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/create" component={CreateBlog} />
            <Route path="/blog/:id" component={BlogDetail} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

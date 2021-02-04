import ReactDOM from 'react-dom';
import { Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import HomeProfile from "./components/HomeProfile";
import Counter from "./components/Counter"
import HomeLeaderboard from './components/HomeLeaderboard';
import Feed from './components/Feed';
import Navbar from "./components/Navbar";
import Counters from './components/Counters';
import App from './App';
import Leaderboard from './components/Leaderboard';
import Home from './components/Home';
import Leagues from './components/Leagues';
import Messaging from './components/Messaging';
import Profile from './components/Profile';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'
Amplify.configure(awsExports);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

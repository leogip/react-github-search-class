import React from 'react';
import GithubService from '../../services/github-service';
import { GithubServiceProvider } from '../github-service-context';
import Home from '../pages/home';

const githubService = new GithubService();

function App() {
  return (
    <GithubServiceProvider value={githubService}>
      <div className="container">
        <Home />
      </div>
    </GithubServiceProvider>
  );
}

export default App;

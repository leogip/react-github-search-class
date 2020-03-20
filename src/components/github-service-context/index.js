import { createContext } from 'react';

const {
  Provider: GithubServiceProvider,
  Consumer: GithubServiceConsumer
} = createContext();

export { GithubServiceProvider, GithubServiceConsumer };

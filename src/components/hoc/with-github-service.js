import React from 'react';

import { GithubServiceConsumer } from '../github-service-context';

const withGithubService = mapMethodsToProps => Wrapped => props => (
  <GithubServiceConsumer>
    {githubService => {
      const serviceProps = mapMethodsToProps(githubService);
      return <Wrapped {...props} {...serviceProps} />;
    }}
  </GithubServiceConsumer>
);

export default withGithubService;

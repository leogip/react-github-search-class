class GithubService {
  _apiBase = 'https://api.github.com';
  _clientID = process.env.REACT_APP_CLIENT_ID;
  _clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  _virifyUrl = `&client_id=${this._clientID}&client_secret=${this._clientSecret}`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}${this._virifyUrl}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  }

  getSearchUsers = async query => {
    const users = await this.getResource(`/search/users?q=${query}`);
    const usersList = users.items.map(user => this._transformUser(user));
    return {
      count: users.total_count,
      users: usersList
    };
  };

  _transformUser = user => {
    return {
      id: user.id,
      name: user.login,
      avatar: user.avatar_url,
      url: user.html_url,
      reposUrl: user.repos_url,
      followers: user.followers
    };
  };
}

export default GithubService;

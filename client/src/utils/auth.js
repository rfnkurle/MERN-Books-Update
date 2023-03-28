// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';


class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }
//sets life time for login
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // provides apollo server with token for user context
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    //  token to localStorage for user context
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // deletes session by removing token  from localStorage
    localStorage.removeItem('id_token');
    //redirect
    window.location.assign('/');
  }
}

export default new AuthService();

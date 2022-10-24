import axios from 'axios';
import routing from '../fosRouting/index';

const apiUrlLogin = routing.generate('api_login');
const apiUrlLogout = routing.generate('app_logout');
const apiUrlRegister = routing.generate('app_register');

class AuthService {
  /**
   *
   * @param user {object}
   * @param user.email {string}
   * @param user.password {string}
   * @returns {Promise<AxiosResponse<any>>}
   */
  login (user) {
    return axios
      .post(apiUrlLogin, {
        username: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout () {
    return axios
      .get(apiUrlLogout)
      .then(() => {
        localStorage.removeItem('user');
      });
  }

  /**
   *
   * @param user {object}
   * @param user.email {string}
   * @param user.password {string}
   * @param user.lastname {string}
   * @param user.firstname {string}
   * @returns {Promise<AxiosResponse<any>>}
   */
  register (user) {
    return axios.post(apiUrlRegister, {
      firstName: user.firstname,
      lastName: user.lastname,
      email: user.email,
      password: user.password

    });
  }
}

export default new AuthService();

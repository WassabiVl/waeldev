import { defineStore } from 'pinia';
import AuthService from '../services/AuthService';
import { reactive, ref } from 'vue';

const userLocal = JSON.parse(localStorage.getItem('user'));
const initialState = userLocal
  ? { status: { loggedIn: true }, userLocal }
  : { status: { loggedIn: false }, userLocal: null };

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const AuthStore = defineStore('auth', {
  state: () => {
    /**
     * @type {null|object}
     * @param user {null|object}
     * @param user.user {string}
     * @param user.token {string}
     * @param user.firstName {string}
     * @param user.lastName {string}
     * @param user.roles {array}
     */
    const user = ref(initialState.userLocal ? initialState.userLocal.user : null);
    const token = ref(initialState.userLocal ? initialState.userLocal.token : null);
    const firstName = ref(initialState.userLocal ? initialState.userLocal.firstName : null);
    const lastName = ref(initialState.userLocal ? initialState.userLocal.lastName : null);
    const roles = reactive(initialState.userLocal ? initialState.userLocal.roles : []);
    const loggedIn = ref(initialState.userLocal ? initialState.status.loggedIn : null);

    return {

      user,
      lastName,
      firstName,
      token,
      roles,
      loggedIn

    };
  },
  actions: {
    async login (email, password) {
      return await AuthService.login({ email, password }).then(
        response => {
          this.loggedIn = true;
          this.user = response.user;
          this.token = response.token;
          this.firstName = response.firstName;
          this.lastName = response.lastName;
          this.roles = response.roles;
          return Promise.resolve(response);
        },
        error => {
          this.loggedIn = false;
          this.user = null;
          this.token = null;
          this.firstName = null;
          this.lastName = null;
          this.roles = null;
          return Promise.reject(error);
        }
      );
    },
    async register (email, password, firstname, lastname) {
      return await AuthService.register({
        email, password, firstname, lastname
      }).then(
        response => {
          // this.loggedIn = false;
          return Promise.resolve(response.data);
        },
        error => {
          this.loggedIn = false;
          return Promise.reject(error);
        }
      );
    },
    async logout () {
      await AuthService.logout().then(() => {
        this.loggedIn = false;
        this.user = null;
        this.token = null;
        this.firstName = null;
        this.lastName = null;
        this.roles = null;
        localStorage.removeItem('user');
        localStorage.removeItem('userGen');
      });
    }
  }
});

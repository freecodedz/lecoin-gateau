import { mount, createLocalVue } from '@vue/test-utils'
import Login from './../../src/views/Login.vue'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Login', () => {

  let actions, store;

  beforeEach(()=> {
    actions = {
      login: jest.fn(),
      actionInput: jest.fn()
    };
    store = new Vuex.Store({actions});
  });
  test('calls store action "actionClick" when button is clicked', () => {
      const wrapper = mount(Login, { store, localVue });
      const emailInput = wrapper.find('#login-email');
      const passwordInput = wrapper.find('#login-password');
      const button = wrapper.find('#login-button');

      emailInput.element.value = 'blahou@gmail.com';
      passwordInput.element.value = 'p@ssword';
      emailInput.trigger('input');
      passwordInput.trigger('input');

      expect(wrapper.vm.loginForm.email).toBe('blahou@gmail.com');
      expect(wrapper.vm.loginForm.password).toBe('p@ssword');


      button.trigger('click');
      expect(actions.login).toHaveBeenCalled();
    });
})

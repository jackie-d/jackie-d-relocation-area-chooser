import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue';

describe('Home', () => {
  it('Renders title', () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: (key) => key
      }
    });
    expect(wrapper.find('h2').text()).toMatch('dashboard.welcome')
  })

  it('Renders subtitle', () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: (key) => key
      }
    });
    expect(wrapper.find('p').text()).toMatch('dashboard.description')
  })
  it('Snapshot consistence', () => {
    const wrapper = shallowMount(Home, {
        mocks: {
          $t: (key) => key
        }
      });
      expect(wrapper).toMatchSnapshot();
  });

})
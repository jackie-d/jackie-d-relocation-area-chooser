import { shallowMount } from '@vue/test-utils'
import Name from '@/views/Name.vue';

describe('Name view', () => {
  it('Renders title', () => {
    const wrapper = shallowMount(Name, {
      mocks: {
        $t: (key) => key
      }
    });
    expect(wrapper.find('h2').text()).toMatch('name.title')
  })

  it('Snapshot consistence', () => {
    const wrapper = shallowMount(Name, {
        mocks: {
          $t: (key) => key
        }
      });
      expect(wrapper).toMatchSnapshot();
  });
  

})
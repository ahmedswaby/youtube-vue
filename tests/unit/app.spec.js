import { mount } from "@vue/test-utils";
import Header from '@/components/header/Header.vue';

describe('Header.vue', () => {
  it('emits add-service when Add button is clicked', () => {

    const wrapper = mount(Header);

		expect(wrapper.find('.a-icon').exists()).toBe(true);

		const ToggleSearch = wrapper.find('.a-icon');
    
		ToggleSearch.trigger('click');

		expect(wrapper.vm.searchOpen).toBe(true);
	});
});
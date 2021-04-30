import { mount } from "@vue/test-utils";
import Header from './header.vue';

describe('header', () => {
	it('should toggle search', () => {

		const wrapper = mount(Header);

        console.log(wrapper);
		
		expect(wrapper.find('.a-icon').exists()).toBe(true);

		const ToggleSearch = wrapper.find('.a-icon');
    
		ToggleSearch.trigger('click');

		expect(wrapper.vm.searchOpen).toBe(true);
	});
});
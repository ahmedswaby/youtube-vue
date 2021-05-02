import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Header from './header.vue';

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter({
	routes: [{path: '/search' , query: {query: 'test'},component: totest},
	]})


describe('header', () => {
	it('should toggle search', () => {
		
		const wrapper = mount(Header);
		expect(wrapper.find('.a-icon').exists()).toBe(true);
		expect(wrapper.contains('.a-icon')).toBe(true);

		const ToggleSearch = wrapper.find('.a-icon');
    
		ToggleSearch.trigger('click');

		expect(wrapper.vm.searchOpen).toBe(true);
	});
});

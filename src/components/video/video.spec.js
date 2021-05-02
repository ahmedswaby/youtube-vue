import { shallowMount } from '@vue/test-utils';
import VideoView from './video.vue';

describe('fetch every video', () => {
    it('test props', () => {
        const wrapper = shallowMount(VideoView, {
			stubs: ['router-link'],
            propsData: {
                videoId: {
                    snippet: 'test',
                },
            },
        })
		expect(wrapper.props().videoId.snippet).toBe('test');
	});
});

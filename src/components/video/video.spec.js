import { mount } from '@vue/test-utils';
import VideoView from './video.vue';

describe('fetch every video', () => {
    it('test props ', () => {

        const wrapper = mount(VideoView, {
            propsData: {
                videoId: {
                    snippet: 'test',
                },
            },
        })
		expect(wrapper.props().videoId.snippet).toBe('test');
	});
});

import { mount, shallowMount } from "@vue/test-utils";
import ChannelPage from "@/views/channel.vue";

describe("ChannelPage.vue", () => {
    let wrapper = null;

  beforeEach(async () => {
		wrapper = mount(ChannelPage, { propsData: {} });
	});
  it("should match the snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('like a snapshot', () => {
  it('should return an h1', () => {
    let shallowWrapper = shallowMount(ChannelPage);
    expect(shallowWrapper.contains('h1')).toBe(true);


	});
});

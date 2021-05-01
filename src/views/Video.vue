<template>
	<div v-if="!loading">
		<div>
			<Header />
		</div>
		<div class="container">
			<!-- M7lc1UVf-VE -->
			<iframe
				id="ytplayer"
				type="text/html"
				width="100%"
				height="300px"
				:src="'https://www.youtube.com/embed/' + this.$route.params.id"
				frameborder="0"
			></iframe>
			<div class="video-title">
				<h1>{{ videoDetails.title }}</h1>
				<p class="d-flex d-md-none">
					<span>{{ videoDetails.channelTitle }}</span>
					<!-- 122, 3323 -->
				</p>
			</div>
			<div class="d-sm-none d-md-flex">
				<ChannelView size="sm" :data="videoDetails" />
			</div>
			<VideoView
				v-for="(video, index) in relatedVideo"
				:key="index"
				:videoId="video.id.videoId"
			/>
			<div class="d-flex">
				<a
					href="#"
					class="show-more"
					@click.prevent="loadMore"
					v-if="!loadmore"
				>
					Show more Items
				</a>
				<Loading v-if="loadmore" />
			</div>
		</div>
	</div>
	<Loading v-else />
</template>

<script>
import Header from '@/components/header/header';
import VideoView from '@/components/video/video';
import ChannelView from '@/components/channel/channel';
import { fetchVideo, fetchRelatedVideos } from '@/services/services';
export default {
    name: 'VideoDetails',
    components: {
        Header,
        VideoView,
        ChannelView,
        Loading: () => import('@/components/loading/loading.vue'),
    },
    data() {
        return {
            videoDetails: {},
            relatedVideo: [],
            loading: false,
            loadmore: false,
        };
    },
    async created() {
        const data = await fetchVideo(this.$route.params.id);
        this.videoDetails = data.items[0].snippet;
        // fetch related videos
        const relatedVideo = await fetchRelatedVideos(this.$route.params.id);
        this.relatedVideo = relatedVideo.items;
    },
    methods: {
        loadMore() {
            this.loadmore = true;
        },
    },
};
</script>

<style lang="scss" scoped>
	.video-title {
		margin-block-start: 25px;
		margin-block-end: 25px;
		border: 1px solid #c7c7c7;
		padding: 10px;
		box-shadow: 1px 1px 8px #c7c7c7;
		h1 {
			font-size: 24px;
		}
		p {
			font-size: 16px;
		}
	}
	@media (min-width: 1024px) {
		.video-title {
			border: none;
			box-shadow: none;
			h1 {
				margin: 0;
			}
		}
	}
</style>

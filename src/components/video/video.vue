<template>
	<div class="video-section">
		<router-link :to="'/video/'+ videoDetails.id"  class="video-image-wrapper">
			<img :src="videoDetails.snippet ? videoDetails.snippet.thumbnails.medium.url: ''" class="img-fluid" alt="" />
		</router-link>
		<div class="video-info">
            <router-link :to="'/video/'+ videoDetails.id">
				<h3>{{ videoDetails.snippet ? videoDetails.snippet.title : '' }}</h3>
				<p>150 Videos</p>
				<p>15,000 Subscriber</p>
			</router-link>
		</div>
	</div>
</template>

<script>
import {fetchVideo} from '@/services/services'
export default {
	name: 'VideoView',
	props: {
		videoId: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			videoDetails: {}
		}
	},
	async mounted() {
		const data = await fetchVideo(this.videoId)
		this.videoDetails = data.items[0]
	}
};
</script>

<style lang="scss" scoped>
.video-section {
    display: flex;
    align-items: start;
    margin-block-end: 15px;
	width: 100%;
}
.video-info {
    display: flex
}
// .video-info {
    // h3 {
    //     font-size: 18px;
    // }
    // p {
    //     font-size: 14px;
    // }
// }

.video-image-wrapper {
    flex: 0 0 60%;
    margin-inline-end: 10px;
}
</style>

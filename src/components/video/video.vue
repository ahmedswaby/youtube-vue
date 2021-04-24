<template>
	<div class="video-section">
		<router-link to="video/1"  class="video-image-wrapper">
			<img src="@/assets/img/me-copy.jpeg" class="img-fluid" alt="" />
		</router-link>
		<div class="video-info">
            <router-link to="video/1">
				<h3>Video Name</h3>
				<p>150 Videos</p>
				<p>15,000 Subscriber</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'VideoView',
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

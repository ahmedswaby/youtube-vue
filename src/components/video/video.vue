<template>
	<div class="video-section">
		<a href="#" class="video-image-wrapper">
			<img src="@/assets/img/me-copy.jpeg" class="img-fluid" alt="" />
		</a>
		<div class="video-info">
			<a href="#">
				<h3>Channel Name</h3>
				<p>150 Videos</p>
				<p>15,000 Subscriber</p>
			</a>
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

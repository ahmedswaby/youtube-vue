<template>
    <div class="video-section playlist">
        <router-link to="video/1" class="video-image-wrapper">
            <div class="overlay-number">40</div>
            <img src="@/assets/img/placeholder.jpeg" class="img-fluid" alt="" />
        </router-link>
		<div class="video-info">
            <router-link to="video/1">
                <h3>playList Name</h3>
                <p>150 Videos</p>
            </router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'playlistView'
}
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

.overlay-number {
    width: 40%;
    height: 98%;
    background: rgb(60 60 60 / 58%);
    position: absolute;
    right: 0;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: normal;
}
.video-image-wrapper {
    position: relative;
    flex: 0 0 60%;
    margin-inline-end: 10px;
}
</style>
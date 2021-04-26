<template>
    <div>
        <search />
        <div class="container">
            <!-- M7lc1UVf-VE -->
            <iframe id="ytplayer" type="text/html" width="100%" height="300px"
        :src="'https://www.youtube.com/embed/'+ this.$route.params.id"
        frameborder="0"></iframe>
        <div class="video-title">
            <h1>{{videoDetails.title}}</h1>
            <p class="d-flex d-md-none"><span>{{videoDetailschannelTitle}}</span> 
            <!-- 122, 3323 -->
            </p>
        </div>
        <!-- <div class="video-control"></div> -->
        <div class=" d-sm-none d-md-flex">
            <ChannelView size="sm" :data="videoDetails"/>
        </div>
        <!-- <VideoView /> -->
        </div>
        
    </div>
</template>

<script>
import search from '@/components/search/search';
// import VideoView from '@/components/video/video';
import ChannelView from '@/components/channel/channel';
import { fetchVideo } from '@/services/services'
export default {
    name: 'VideoDetails',
    components: {
        search,
        // VideoView,
        ChannelView
    },
    data() {
        return {
            videoDetails: {},
        }
    },
    created: async function () {
        const data = await fetchVideo(this.$route.params.id)
        this.videoDetails = data.items[0].snippet
        console.log(data.items[0].snippet);
    },
}
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
@media (min-width:1024px) {
    .video-title {
        border: none;
        box-shadow: none;
        h1 {
            margin: 0;
        }
    }
  }
</style>
<template>
    <div>
        <search />
        <div class="container">
            <iframe id="ytplayer" type="text/html" width="100%" height="200px"
        :src="`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=${url}`"
        frameborder="0"></iframe>
        <div class="video-title">
            <h1>Name of the video</h1>
            <p class="d-flex d-md-none"><span>channel Name</span> 122, 3323</p>
        </div>
        <!-- <div class="video-control"></div> -->
        <div class=" d-sm-none d-md-flex">
            <ChannelView size="sm"/>
        </div>
        <VideoView />
        </div>
        
    </div>
</template>

<script>
import search from '@/components/search/search';
import VideoView from '@/components/video/video';
import ChannelView from '@/components/channel/channel';

export default {
    name: 'VideoDetails',
    components: {
        search,
        VideoView,
        ChannelView
    },
    data() {
        return {
            url: 'http://example.com',
            
        }
    }
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
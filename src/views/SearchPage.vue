<template>
  <div>
    <Search /> 
    <main>
    <div class="container">
      <div class="select-wrappers">
          <v-select :options="UploadedSince"></v-select>
          <v-select :options="FilterType"></v-select>
      </div>
      <div class="border d-flex">
        <ChannelView />
        <VideoView />
        <playlistView />
        <a href="#" class="show-more">
          Show more Items
        </a>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/search/search.vue";
import ChannelView from "@/components/channel/channel.vue";
import VideoView from "@/components/video/video.vue";
import playlistView from "@/components/playlist/playlist.vue";
import 'vue-select/dist/vue-select.css';

export default {
  name: "SearchPage",
  components: {
    Search,
    ChannelView,
    VideoView,
    playlistView
  },
  data() {
    return {
      UploadedSince: [
        'all',
        'test1',
        'test2'
      ],
      FilterType: [
        'Video',
        'Channel',
        "Playlist"
      ]

    }
  }
};
</script>
<style lang="scss">
main {
  padding-top: 70px;
}
h3 {
  margin: 0;
  font-size: 20px;
  line-height: 29px;
}
p {
  margin: 5px 0;
  line-height: 22px;
}
.select-wrappers {
  display: flex;
  padding: 15px 0;
  margin-block-end: 10px;
  border-bottom: 1px solid #c7c7c7;
  & > * {
    flex: 0 0 35%;
    &:first-of-type {
      margin-inline-end: 10px;
    }
  }
}

.show-more {
    display: block;
    padding: 15px 20px;
    text-align: center;
    border-top: 1px solid #c7c7c7;
    border-bottom: 1px solid #c7c7c7;
    width: 100%;
}
@media (min-width:1024px) {
  main {
    padding-top: 0;
  }
  .select-wrappers {
    display: none;
  }
  h3 {
    font-size: 28px;
  }
}
</style>

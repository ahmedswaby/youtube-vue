<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Search msg="Welcome to Your Vue.js App" /> 
    <div class="container">
      <div class="select-wrappers">
        <v-select :options="UploadedSince"></v-select>
        <v-select :options="FilterType"></v-select>
      </div>
      <div class="border">
        <div class="channel-section">
          <a href="#">
            <img src="@/assets/img/me-copy.jpeg" class="channel-image" alt="">
          </a>
          <div class="channel-info">
            <a href="#">
              <h3>Channel Name</h3>
              <p>150 Videos</p>
              <p>15,000 Subscriber</p>
            </a>

          </div>
        </div>
        <div class="video-section">
          <a href="#" class='video-image-wrapper'>
            <img src="@/assets/img/me-copy.jpeg" class="img-fluid" alt="">
          </a>
          <div class="video-info">
            <a href="#">
              <h3>Channel Name</h3>
              <p>150 Videos</p>
              <p>15,000 Subscriber</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/search/Search.vue";
import 'vue-select/dist/vue-select.css';

export default {
  name: "SearchPage",
  components: {
    Search,
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
<style lang="scss" scoped>
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
.container {
    padding: 0 5px;
}
.channel-section {
  display: flex;
  align-items: center;
}
.video-section {
  display: flex;
  align-items: start;
}
.channel-info, .video-info {
  display: flex
}
.video-info {
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
}
.channel-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-inline-end: 20px;
}
.video-image-wrapper {
    flex: 0 0 60%;
    margin-inline-end: 10px;
}
</style>

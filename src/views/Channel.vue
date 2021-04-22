<template>
<div>
    <Search />  
    <div class="container">
      <div class="channel-cover">
        <div class="cover-image" :style="{ backgroundImage:'url('+ image +')'}"></div>
        <div class="info-wrapper">
          <img src="@/assets/img/me-copy.jpeg" alt="" class="img-fluid avatar">
          <div class="info-channel">
            <h1>
              Name of channel
            </h1>
            <div class="d-flex">
              <button class="subscribe-btn">
                <i class="icon-youtube"></i>
                Subscribe</button>
                <span>
                  10,1010 
                </span>

            </div>
          </div>
          
        </div>
        <div class="container">
          <playlistView />

        </div>
      </div>
    </div>
</div>
</template>
<script>
import image from '@/assets/img/me-copy.jpeg'
import Search from '@/components/search//search'

export default {
  name: "ChannelPage",
  components: {
    Search,
    playlistView: () => import('@/components/playlist//playlist')
  },
  data() {
    return {
      image: image
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-top: -35px;
}
.info-wrapper {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #c7c7c7;
  margin-bottom: 20px;
}
.info-channel {
    margin-inline-start: 20px;
    h1 {
      font-size: 25px;
      margin-block-end: 10px;
    }
}
.cover-image {
    height: 100px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.subscribe-btn {
  display: flex;
  align-items: center;
  background-color: transparent;
  color: red;
  border: none;
  i {
    margin-inline-end: 10px;
  }
}
@media screen and (min-width: 1024px) {
  .cover-image {
    height: 200px;
  }
  .info-wrapper {
      justify-content: start;
      margin-inline-start: 20px;
  }
  
}
</style>

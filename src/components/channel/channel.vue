<template>
    <div class="channel-section">
          <a href="#" class="channel-link">
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
</template>

<script>
    export default {
        name: 'ChannelView'
    }
</script>

<style lang="scss" scoped>
.channel-section {
    display: flex;
    align-items: center;
    width: 100%;
    margin-block-end: 15px;
}
.channel-info {
    display: flex;
    

}
.channel-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-inline-end: 20px;
}
@media (min-width:1024px) {
    .channel-link {
      min-width: 60%;
      flex: 0 0 60%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  .channel-image {
    width: 200px;
    height: 200px;
  }
}
</style>
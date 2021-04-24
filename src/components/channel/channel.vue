<template>
    <div :class="size === 'sm' ? 'channel-section sm-section' : 'channel-section'">
      <router-link to="/channel/1" class="channel-link">
        <img src="@/assets/img/me-copy.jpeg" class="channel-image" alt="">
      </router-link>
      <div class="channel-info">
        <router-link to="/channel/1" class="channel-link">
          <h3>Channel Name</h3>
          <p>150 Videos</p>
          <p>15,000 Subscriber</p>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ChannelView',
        props: {
          size: {
            type: String,
            default: 'lg'
          }
        }
    }
</script>

<style lang="scss" scoped>
.channel-section {
    display: flex;
    align-items: center;
    margin-block-end: 15px;
    width: 100%;
    
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
.sm-section {

}
@media (min-width:1024px) {
    .channel-link {
      min-width: 60%;
      flex: 0 0 60%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .channel-section {
      &.sm-section {
        width: 70%;
      }
    }
  .channel-image {
    width: 200px;
    height: 200px;
  }
  .sm-section {
    .channel-image {
      width: 150px;
      height: 150px;
    }
}
}
</style>
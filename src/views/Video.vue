<template>
    <div>
        <search />
        <div class="container">
            <iframe id="ytplayer" type="text/html" width="100%" height="100%"
        :src="`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=${url}`"
        frameborder="0"></iframe>
        </div>
    </div>
</template>

<script>
import search from '@/components/search/search';

export default {
    name: 'VideoDetails',
    components: {
        search
    },
    data() {
        return {
            url: 'http://example.com',
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
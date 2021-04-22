<template>
    <header>
        <div class="header__Logo-side">
            <img src="@/assets/img/youtube-white.png" alt="" class="img-fluid">
            <span v-if="!searchOpen">spongepop</span>
        </div>
        <div class='search-wrapper '>
            <form>
                <input  type="search" name="search" id="" :class="searchOpen ? 'search-input opened': 'search-input'">
            </form>
            <a href="#" class="a-icon" @click.prevent="searchOpen = !searchOpen">
                <i class="icon-search"></i>
            </a>
        </div>
    </header>
</template>

<script>
// import Logo from '@/assets/img/youtube-logo.png'
    export default {
        name: 'Header',
        data() {
            return {
                searchOpen: false
            }
        },
    }
</script>

<style lang="scss" scoped>
header {
    display: flex;    
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 0, 0);
    color: #FFF;
    padding: 15px 10px;
    .header__Logo-side{
        display: flex;
        align-items: center;
        span {
            margin-inline-start: 10px;
        }
    }
    img {
        max-width: 60px;
    }
}
.search-wrapper {
    display: flex;
    align-items: center;
    input {
        margin-inline-end: 10px;
    }
}
.search-input {
    display: none;
    &.opened {
        display: block;
    }
}
a {
    &.a-icon {
        color: #FFF;
    }
}
// @media (min-width:600px) { 
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ 
    // }
</style>
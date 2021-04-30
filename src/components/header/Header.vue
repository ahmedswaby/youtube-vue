<template>
    <header>
        <div class="container">
            <div class="d-flex space-between">
                <div class="header__Logo-side">
                    <a href="/search">
                        <i class="icon-youtube"></i>
                    </a>    
                    <span v-if="!searchOpen">{{ search }}</span>
                </div>
                <div class='search-wrapper'>
                    <!-- @submit="submitSearch" -->
                        <!-- :value="this.$route.params.text" -->
                        <!-- action="/search" -->
                    <form  action="/search">
                        <input  
                        v-model="   $route.query.query"
                        type="search" 
                        name="query" 
                        :class="searchOpen ? 'search-input opened': 'search-input'"
                        placeholder="search"
                        >
                        <button type="submit">
                            <i class="icon-search"></i>
                        </button>
                    </form>
                    <a href="#" class="a-icon" @click.prevent="searchOpen = !searchOpen">
                        <i class="icon-search"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',
    data() {
        return {
                searchOpen: false,
                search: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
header {
    background-color: rgb(255, 0, 0);
    color: #FFF;
    padding: 15px 10px;
    position: fixed;
    width: calc(100% - 20px);
    z-index: 1020;
}

.header__Logo-side {
    a {
        color: #FFF;
        &:hover {
            text-decoration: none;
        }
    }
    i {
        font-size: 40px;
    }
    display: flex;
    align-items: center;
    span {
        margin-inline-start: 10px;
    }
}

.search-wrapper {
    display: flex;
    align-items: center;
    input {
        margin-inline-end: 10px;
    }
    button {
        display: none;
    }
    i {
        font-size: 22px;
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
@media (min-width:1024px) {
    header {
        background-color: #fff;
        position: relative;
    }
    .search-input {
        display: block;
    }
    .header__Logo-side {
        span {
            display: none;
        }
        i {
            &::before {
                content: "\ea9e";
            }
            color: red
        }
    }
    .search-wrapper {
        flex: 0 0 60%;
        .a-icon {
            display: none;
        }
        form {
            display: flex;
            flex: 0 0 100%;
            justify-content: flex-end;
        }
        input {
            min-width: 80%;
            margin-inline-end: 0;
            border-color: #77777740;
            border-right: none;
        }
        button {
            display: block;
            padding: 5px 15px;
            color: #777;
            border-color: #77777740;
            outline: none;
            i {
                font-size:12px
            }
        }
    }

}
</style>
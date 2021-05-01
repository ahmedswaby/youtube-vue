<template>
	<div v-if="!loading">
		<Header />
		<main>
			<div class="container">
				<div class="select-wrappers">
					<v-select :options="UploadedSince"></v-select>
					<v-select :options="FilterType"></v-select>
				</div>
				<searchFilter />
				<div class="border d-flex">
					<h2>About {{ pageInfo.totalResults }} results</h2>
					<!-- <ChannelView /> -->
					<VideoView
						v-for="(item, index) in searchdata"
						:key="index"
						:videoId="item.id.videoId"
					/>
					<playlistView />
					<a href="#" class="show-more" @click.prevent="loadMore" v-if="!loadingMore">
						Show more Items
					</a>
					<Loading v-if="loadingMore" />
				</div>
			</div>
		</main>
	</div>
	<Loading v-else />
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/header/header.vue';
	import searchFilter from '@/components/filter/filter.vue';
	import VideoView from '@/components/video/video.vue';
	import playlistView from '@/components/playlist/playlist.vue';
	import { fetchSearch } from '@/services/services';
	import 'vue-select/dist/vue-select.css';

	export default {
		name: 'SearchPage',
		components: {
			searchFilter,
			Header,
			VideoView,
			playlistView,
			Loading: () => import('@/components/loading/loading.vue'),
			
		},
		data() {
			return {
				loading: false,
				loadingMore: false,
				pageInfo: {},
				searchdata: [],
				UploadedSince: ['all', 'test1', 'test2'],
				FilterType: ['Video', 'Channel', 'Playlist'],
				nextPageToken: ''
			};
		},
		created() {
			this.getSearchResults(this.$route.query ? this.$route.query.query : '');
				this.loading = false;
		},
		methods: {
			loadMore() {
				this.loadingMore = true;
				this.getSearchResults(this.$route.query ? this.$route.query.query : '', this.nextPageToken)
				this.loadingMore = false;
			},
			async getSearchResults(value, nextPageToken) {
				this.loading = true;
				const searchData = await fetchSearch(value, nextPageToken);
				const filterData = searchData.items.filter(
					(item) => item.id.kind === 'youtube#video'
				);
				this.searchdata.push(...filterData)
				this.pageInfo = searchData.pageInfo;
				this.nextPageToken = searchData.nextPageToken
			},
		},
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
		word-break: break-all;
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
		display: flex;
		justify-content: center;
		padding: 15px 20px;
		text-align: center;
		border-top: 1px solid #c7c7c7;
		border-bottom: 1px solid #c7c7c7;
		width: 100%;
	}
	@media (min-width: 1024px) {
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

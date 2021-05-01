// search url
const url = 'https://www.googleapis.com/youtube/v3';

// Api Key
const Api_Key = 'AIzaSyA5HW-CVsuqGMiDLV99tsGCgy_htwmoc_0';

// client ID
// const clientOd = '518151005630-5gt37g3n290u4t2vcv54n45par0h2l9u.apps.googleusercontent.com'

// client secret
// const clientSecret = "QLBhmoN3J2ZMu3otdvZ1c3qQ"

export const fetchSearch = async (searchText = '', pageToken) => {
	if(pageToken) {
		console.log(pageToken);
		return await fetch(
			`${url}/search?pageToken=${pageToken}&key=${Api_Key}&part=snippet,id&order=date&maxResults=20&q=${searchText}`
		)
			.then((res) => res.json())
			.then((data) => {
				return data;
			})
			.catch((err) => err);
	} else {
		return await fetch(
			`${url}/search?key=${Api_Key}&part=snippet,id&order=date&maxResults=20&q=${searchText}`
		)
			.then((res) => res.json())
			.then((data) => {
				return data;
			})
			.catch((err) => err);
	}
};

export const fetchRelatedVideos = async (relatedVideoId) => {
	return await fetch(
		`${url}/search?part=snippet&relatedToVideoId=${relatedVideoId}&type=video&key=${Api_Key}`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => err);
};

export const fetchVideo = async (videoId) => {
	return await fetch(
		`${url}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${Api_Key}`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => err);
};

export const fetchChannel = async (channelId) => {
	return await fetch(
		`${url}/channelSections?part=snippet,contentDetails&channelId=${channelId}&key=${Api_Key}`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => err);
};

export const fetchPlayLists = async (playListid) => {
	return await fetch(
		`${url}/playlistItems?part=snippet%2CcontentDetails&maxResults=25&&playlistId=${playListid}&key=${Api_Key}`
	)
		.then((res) => res.json())
		.then((data) => {
			return data;
		})
		.catch((err) => err);
};

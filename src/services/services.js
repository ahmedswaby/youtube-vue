// search url
const url = "https://www.googleapis.com/youtube/v3"


// Api Key
const Api_Key = 'AIzaSyA5HW-CVsuqGMiDLV99tsGCgy_htwmoc_0'

// client ID
// const clientOd = '518151005630-5gt37g3n290u4t2vcv54n45par0h2l9u.apps.googleusercontent.com'

// client secret
// const clientSecret = "QLBhmoN3J2ZMu3otdvZ1c3qQ"

// &channelId={channel_id_here}

export const fetchSearch = async () => {
    return await fetch(
			`${url}/search?key=${Api_Key}&part=snippet,id&order=date&maxResults=20`
		)
			.then((res) => res.json())
			.then((data) => {
				return data;
			})
			.catch((err) => err);
}

export const fetchVideo = async (videoId) => {
    return await fetch(
			`${url}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${Api_Key}`
		)
			.then((res) => res.json())
			.then((data) => {
				return data;
			})
			.catch((err) => err);
}



// https://www.googleapis.com/youtube/v3/videos?p
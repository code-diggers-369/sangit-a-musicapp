import youtubeSearch from "simple-youtube-api";

const API_KEY = "<Your_Youtube_Api_Key_Replace_Here>";

export const getPopularList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob
    .searchVideos("tseries+bollywood+songs+latest", 10)
    .catch((e) => {
      console.log(e);
    });

  return await data;
};

export const getBollywoodLongSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob
    .searchVideos("hindi bollywood songs 2019", 10)
    .catch((e) => {
      console.log(e);
    });

  return await data;
};

export const getHollywoodSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("hollywood songs latest", 10).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getGhazalList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("popular ghazals", 10).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getSearchData = async (query) => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos(query + " song", 12).catch((e) => {
    console.log(e);
  });

  return await data;
};

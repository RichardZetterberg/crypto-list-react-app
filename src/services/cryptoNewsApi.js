import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    // 'x-bingapis-sdk': 'true',
    // 'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-host': 'duckduckgo10.p.rapidapi.com',
    'x-rapidapi-key': 'f2efc829damsh17d797cb48c9a47p10ff0ejsn40f1d2302510'
}

const baseUrl = 'https://duckduckgo10.p.rapidapi.com';

const createRequest = (url) => ({ url, method: 'GET', headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({ newsCategory }) => createRequest(`/search/news?region=wt-wt&safeSearch=off&term=${newsCategory}`),
      }),
    }),
});

export const {
    useGetNewsQuery
} = cryptoNewsApi;

// const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

// const createRequest = (url) => ({ url, method: 'GET', headers: cryptoNewsApiHeaders });

// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//       getNews: builder.query({
//         query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
//       }),
//     }),
// });

// export const {
//     useGetNewsQuery
// } = cryptoNewsApi;
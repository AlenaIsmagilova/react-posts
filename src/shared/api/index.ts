import { baseUrl } from "../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../entities/ui/posts-list";

const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getPostsList: builder.query<IPost[], number>({
      query: (offset = 0) => {
        return {
          url: "posts",
          params: { _limit: 5, _start: offset },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newPosts) => {
        currentCache.push(...newPosts);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPostById: builder.query<IPost, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

const { useGetPostByIdQuery, useGetPostsListQuery } = postsApi;

export { useGetPostByIdQuery, useGetPostsListQuery, postsApi };

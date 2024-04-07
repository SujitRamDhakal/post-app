import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const POST_URL = import.meta.env.VITE_POST_URL;
const CREATE_POST_URL = import.meta.env.VITE_CREATE_POST_URL;

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchposts", async () => {
  try {
    const response = await fetch(POST_URL);
    if (!response.ok) throw new Error("cannot fetch data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const createPost = createAsyncThunk("create/posts", async (postData) => {
  try {
    const response = await fetch(CREATE_POST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error("error creating post");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts.push(action.payload);
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export default postSlice.reducer;

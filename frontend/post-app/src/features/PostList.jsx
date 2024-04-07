import { useEffect } from "react";
import { selectAllPosts } from "./postSlice";
import { fetchPosts } from "./postSlice";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
const PostList = () => {
  const posts = useSelector(selectAllPosts);
  console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-center font-bold text-[50px]">POSTS</h1>
      <div className="">
        {posts.map((post) => (
          <li key={post.id} className="list-none">
            <Post post={post} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default PostList;

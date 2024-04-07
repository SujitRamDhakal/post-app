import { useState } from "react";
import { createPost } from "./postSlice";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(createPost({ title, content }));
    }
    setTitle("");
    setContent("");
  };
  return (
    <div className="flex justify-center mb-5">
      <div className="border border-collapse shadow-lg rounded-md w-[500px] p-4">
        <form>
          <label htmlFor="title" className="font-bold text-lg">
            Title
          </label>
          <br />
          <input
            type="text"
            value={title}
            name="title"
            onChange={onTitleChanged}
            className="border border-collapse w-full rounded-lg"
          />
          <br />
          <label htmlFor="content" className="font-bold text-lg">
            content
          </label>
          <br />
          <input
            type="text"
            value={content}
            name="content"
            onChange={onContentChanged}
            className="border border-collapse w-full rounded-lg"
          />
          <br />
          <br />
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white bg-blue-950 w-full"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;

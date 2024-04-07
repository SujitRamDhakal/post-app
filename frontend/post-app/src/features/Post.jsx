const Post = ({ post }) => {
  return (
    <div className="flex justify-center">
      <div className="border border-collapse shadow-lg rounded-md w-[500px] mb-[20px]">
        <h1 className="text-center text-lg font-bold">{post.title}</h1>
        <p className="text-red-900">Created At: {post.created_at}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;

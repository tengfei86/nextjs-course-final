interface PostProps {
  post?: Post;
}

const Post = ({ post }: PostProps) => {
  const { title = "--", content = "-", createdAt = 0 } = post || {};
  return (
    <div className="w-full border-b border-black/10 py-6">
      <h3 className="text-sm text-black font-bold">{title}</h3>
      <p className="text-sm text-black/50 mt-2">{content}</p>
      <p className="text-sm text-black/50 mt-2">
      {new Date(createdAt).toLocaleString()}
      </p>
    </div>
  );
};

export default Post;

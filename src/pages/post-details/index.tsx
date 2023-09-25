import { Link, useParams } from "react-router-dom";
import { Post } from "../../entities/ui/post";
import { useGetPostByIdQuery } from "../../shared/api";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(postId);

  return (
    <>
      {!isLoading && (
        <>
          <Post title={data.title} body={data.body} id={data.id} />
          <Link to="/">
            <button>Вернуться</button>
          </Link>
        </>
      )}
    </>
  );
};

export default PostDetailsPage;

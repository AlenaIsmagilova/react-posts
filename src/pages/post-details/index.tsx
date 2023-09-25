import { Link, useParams } from "react-router-dom";
import { Post } from "../../entities/ui/post";
import { useGetPostByIdQuery } from "../../shared/api";
import styles from "./post-details.module.css";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(postId);

  return (
    <>
      {!isLoading && (
        <div className={styles.container}>
          <Post
            title={data.title}
            body={data.body}
            id={data.id}
            isInList={false}
          />
          <Link to="/" className={styles.link}>
            <button className={styles.button}>Вернуться</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default PostDetailsPage;

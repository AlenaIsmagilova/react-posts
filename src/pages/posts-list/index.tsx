import { PostsList } from "../../entities/ui/posts-list";
import { useGetPostsListQuery } from "../../shared/api";

export const PostsListPage = () => {
  const { data, isLoading } = useGetPostsListQuery();

  const handleViewClick = () => {
    console.log("see post");
  };

  return (
    <>
      {!isLoading && (
        <PostsList posts={data} handleViewClick={handleViewClick} />
      )}
    </>
  );
};

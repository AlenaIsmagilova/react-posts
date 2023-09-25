import { PostsList } from "../../entities/ui/posts-list";
import { useGetPostsListQuery } from "../../shared/api";

export const PostsListPage = () => {
  const { data, isLoading } = useGetPostsListQuery(0);

  const handleViewClick = () => {};

  return (
    <>
      {!isLoading && (
        <PostsList posts={data} handleViewClick={handleViewClick} />
      )}
    </>
  );
};

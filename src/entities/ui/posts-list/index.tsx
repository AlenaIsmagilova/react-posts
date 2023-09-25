import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { postsApi } from "../../../shared/api";
import { setCurrentOffset } from "../../model";
import { Post } from "../post";
import VirtualAndInfiniteScrolls from "../scrolls";
import styles from "./post-list.module.css";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostsListProps {
  posts: Array<IPost>;
  handleViewClick: () => void;
}

export const PostsList = ({ posts, handleViewClick }: IPostsListProps) => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((store) => store);

  const lastRowHandler = async () => {
    await dispatch(
      postsApi.endpoints.getPostsList.initiate(store.postsSlice.value)
    );
    dispatch(setCurrentOffset());
  };

  const virtualScrollChildren = posts.map((item) => {
    return (
      <li key={item.id}>
        <div className={styles.postContainer}>
          <Post title={item.title} body={item.body} id={item.id} />
          <Link to={`/${item.id}`}>
            <button onClick={handleViewClick}>Просмотр</button>
          </Link>
        </div>
      </li>
    );
  });

  return (
    <VirtualAndInfiniteScrolls
      height="500"
      listItems={virtualScrollChildren}
      lastRowHandler={lastRowHandler}
    ></VirtualAndInfiniteScrolls>
  );
};

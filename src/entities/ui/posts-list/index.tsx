import { Link } from "react-router-dom";
import { Post } from "../post";

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
  return (
    <ul>
      {posts.map((item) => {
        return (
          <li key={item.id}>
            <Post title={item.title} body={item.body} id={item.id} />
            <Link to={`/${item.id}`}>
              <button onClick={handleViewClick}>Просмотр</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

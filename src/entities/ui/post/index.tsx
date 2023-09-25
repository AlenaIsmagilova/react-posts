import styles from "./post.module.css";

export interface IPostProps {
  title: string;
  body: string;
  id: number;
}

export const Post = ({ title, body, id }: IPostProps) => {
  return (
    <div className={styles.text}>
      Пост №{id} "{title}": {body}
    </div>
  );
};

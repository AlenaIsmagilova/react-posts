import styles from "./post.module.css";

export interface IPostProps {
  title: string;
  body: string;
  id: number;
  isInList: boolean;
}

export const Post = ({ title, body, id, isInList }: IPostProps) => {
  return (
    <div className={isInList ? styles.croppedText : styles.text}>
      Пост №{id} "{title}": {body}
    </div>
  );
};

export interface IPostProps {
  title: string;
  body: string;
  id: number;
}

export const Post = ({ title, body, id }: IPostProps) => {
  return (
    <div>
      <p>
        Пост №{id} "{title}": {body}
      </p>
    </div>
  );
};

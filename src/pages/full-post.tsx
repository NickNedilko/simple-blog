import { useQuery } from "@tanstack/react-query";
import { AddComment } from "../components/shared/add-comment";
import { CommentsBlock } from "../components/shared/comments-block";
import { Post } from "../components/shared/post";
import { getOnePost } from "../services/postsApi";
import { useParams } from "react-router-dom";
import { formateDate } from "../lib/formate-data";

export const FullPost = () => {
  const {id} = useParams();

  const { data, isLoading } = useQuery({ queryKey: ['posts', id], queryFn:()=> getOnePost(id as string) })
 
if(!data) {
    return <h1>Loading...</h1>
  }

  const { _id, title, text, tags, viewsCount, createdAt, imageUrl, user } = data;
  return (
    <>
      <Post
      _id={_id}
      title={title}
      imageUrl={imageUrl}
      user={user}
      createdAt={formateDate(createdAt)}
      viewsCount={viewsCount}
      commentsCount={3}
      tags={tags}
      isFullPost
      >
        <p>
          {text}
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={isLoading}
      >
        <AddComment />
      </CommentsBlock>
    </>
  );
};

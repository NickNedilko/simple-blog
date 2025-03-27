import { Tab, Tabs } from '@mui/material';
import { CommentsBlock } from '../components/shared/comments-block';
import { Post } from '../components/shared/post';
import { TagsBlock } from '../components/shared/tags-block';
import { useQuery } from '@tanstack/react-query';
import { getPosts, getTags } from '../services/postsApi';
import { formateDate } from '../lib/formate-data';
import { PostSkeleton } from '../components/shared/post-skeleton';



export const Home = () => {

  const { data: posts , isLoading: isLoadingPosts } = useQuery({ queryKey: ['posts'], queryFn: getPosts });
  const { data: tags, isLoading: isLoadingTags } = useQuery({ queryKey: ['tags'], queryFn: getTags })



  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>

      {
        !posts ? <PostSkeleton /> : (
          <div className="flex flex-wrap">
       
        <div className="w-full md:w-2/3">
          {posts?.map((post) => {
            return (
            <Post
              key={post._id} 
              _id={post._id}
              title={post.title}
              imageUrl={post.imageUrl}
                  user={post.user}
              createdAt={formateDate(post.createdAt)}
              viewsCount={post.viewsCount}
              commentsCount={3}
              tags={post.tags}
              isEditable
            />
          )})}
            </div>
            
        <div className="w-full md:w-1/3">
          {!tags? <></>  :<TagsBlock items={tags} isLoading={isLoadingTags} />}
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={isLoadingPosts}
          />
        </div>
      </div>
        )
      }
    </>
  );
};
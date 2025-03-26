import IconButton from '@mui/material/IconButton';
import { MdOutlineDelete,  MdEdit, MdComment, MdRemoveRedEye  } from "react-icons/md";
import { FC } from 'react';
import { UserInfo } from './user-info';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface PostProps {
  _id: string;
  title: string;
  createdAt: string;
  imageUrl?: string;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  children?: React.ReactNode;
  isFullPost?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
}

export const Post:FC<PostProps> = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  if (isLoading) {
    return <div>skeleton</div>;
  }

  const onClickRemove = () => {};
  return (
   <div className={`bg-white border border-[#dedede] rounded-lg overflow-hidden mb-4 relative ${isFullPost ? 'hover:border-[#4361ee] hover:shadow-md' : ''}`}>
      {isEditable && (
        <div className="absolute right-4 top-4 bg-white rounded-xl opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100">
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary" > 
              <MdEdit />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <MdOutlineDelete />
          </IconButton>
        </div>
      )}
      {imageUrl && (
       <img
  className={clsx('w-full h-[300px] object-cover', { 'h-auto max-h-[600px] object-cover': isFullPost })}
  src={imageUrl}
  alt={title}
/>
      )}
      <div className="p-5">
        <UserInfo {...user} additionalText={createdAt} />
        <div className='pl-10'>
          <h2 className={`text-2xl ${isFullPost ? 'text-4xl font-extrabold' : ''} mb-2`}>
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>
          <ul className="flex flex-wrap gap-3 mb-2">
            {tags.map((name) => (
              <li key={name}>
                <a href={`/tag/${name}`}>#{name}</a>
              </li>
            ))}
          </ul>
          {children && <div className="my-8">{children}</div>}
          <ul className="flex space-x-6 mt-6 text-sm text-gray-600">
            <li className="flex items-center space-x-1 opacity-70 hover:opacity-100">
              <MdRemoveRedEye />
              <span>{viewsCount}</span>
            </li>
            <li className="flex items-center space-x-1 opacity-70 hover:opacity-100">
              <MdComment />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

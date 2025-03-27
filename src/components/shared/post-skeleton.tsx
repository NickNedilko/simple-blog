import Skeleton from "@mui/material/Skeleton";

export const PostSkeleton = () => {
  return (
    <div className='bg-white border border-[#dedede] rounded-lg overflow-hidden mb-4'>
        <Skeleton variant="rectangular" width="66%" height={300} />
        <div className='p-5'>
          <div className='flex'>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            <div className='flex flex-col'>
              <Skeleton variant="text" width={60} height={20} />
              <Skeleton variant="text" width={100} height={15} />
            </div>
          </div>
          <div className='ml-12'>
            <Skeleton variant="text" width="50%" height={45} />
            <div className='flex gap-4'>
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
                      </div>
            
          </div>
        </div>

    </div>
  );
};   
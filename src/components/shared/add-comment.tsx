import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export const AddComment = () => {
  return (
    <>
      <div className='flex mt-4 mr-5 ml-4 pb-5'>
        <Avatar
          className='mr-4'
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className='w-full gap-2'>
          <TextField
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
        <div className="mt-3">
        <Button  variant="contained">Отправить</Button>
        </div>
        </div>
      </div>
    </>
  );
};

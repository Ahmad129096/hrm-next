"use client";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide, { SlideProps } from "@mui/material/Slide";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { clearSnackbar } from "@/redux/slices/snackbarSlice";

type TransitionProps = Omit<SlideProps, "direction">;

const Transitionleft = (props: TransitionProps) => {
  return <Slide {...props} direction="left" />;
};

export const Notification = () => {
  const { show, message, type } = useAppSelector((state) => state.snackbar);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(clearSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={show}
      autoHideDuration={3000}
      TransitionComponent={Transitionleft}
      onClose={handleClose}
      key={"topright"}
    >
      <Alert severity={type} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

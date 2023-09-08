import CircularProgress from "@mui/material/CircularProgress";

export const ProgressLoader = () => {
  return (
    <CircularProgress
      size="6rem"
      sx={{
        marginTop: "20%",
        marginLeft: "50%",
      }}
    />
  );
};

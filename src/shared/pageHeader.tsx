import { AppBar, Box, Typography, Button, Toolbar } from "@mui/material";
import { PageHeaderProps } from "./Interface";
import { useRouter } from "next/navigation";
export const PageHeader = ({ header, btnText, navigate }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.25)", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {header}
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => {
              router.push(navigate);
            }}
          >
            {btnText}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

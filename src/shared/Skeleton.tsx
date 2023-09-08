import { Box, Container, Paper, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export function SkeletonLoader() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        style={{
          height: "100%",
          width: "120%",
          padding: "30px 40px 40px 50px",
        }}
        elevation={24}
      >
        <Box
          sx={{
            marginTop: 0,
            marginBottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box textAlign={"center"}>
            <Stack spacing={4} width={396}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Skeleton variant="circular" width={120} height={120} />
              </Box>
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={40}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={40}
                animation="wave"
              />
              <Typography display={"flex"} justifyContent={"space-between"}>
                <Skeleton
                  variant="rounded"
                  width={195}
                  height={40}
                  animation="wave"
                />
                <Skeleton
                  variant="rounded"
                  width={195}
                  height={40}
                  animation="wave"
                />
              </Typography>
              <Typography display={"flex"} justifyContent={"space-between"}>
                <Skeleton
                  variant="rounded"
                  width={195}
                  height={40}
                  animation="wave"
                />
                <Skeleton
                  variant="rounded"
                  width={195}
                  height={40}
                  animation="wave"
                />
              </Typography>
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={40}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={40}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={40}
                animation="wave"
              />
              <Skeleton
                variant="rounded"
                width={"100%"}
                height={40}
                animation="wave"
              />
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export function ViewJobSkeleton() {
  return (
    <Container component="main">
      <Box
        sx={{
          textAlign: "center",
          width: {
            xs: "100%",
            sm: "65%",
            md: "70%",
          },
          borderRadius: "5px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box textAlign={"center"}>
            <Stack spacing={3} width={500}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Skeleton
                  variant="rounded"
                  height={40}
                  width={200}
                  animation="wave"
                />
                
                <Stack spacing={2} m={3}>
                  <Skeleton variant="circular" width={120} height={120} />
                </Stack>
                <Skeleton
                  variant="rounded"
                  height={45}
                  width={"100%"}
                  animation="wave"
                />
              </Box>
              <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
                
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={45}
                  animation="wave"
                />
              </Box>
              <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={45}
                  animation="wave"
                />
              </Box>
              <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={45}
                  animation="wave"
                />
              </Box>
              <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={45}
                  animation="wave"
                />
              </Box>{" "}
              <Box sx={{ display: "flex" }} justifyContent={"space-between"}>
                <Skeleton
                  variant="rounded"
                  width={"100%"}
                  height={45}
                  animation="wave"
                />
              </Box>{" "}

              <Skeleton
                variant="rounded"
                width={"100%"}
                height={120}
                animation="wave"
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import {
  Box,
  Paper,
  Divider,
  Toolbar,
  MenuList,
  IconButton,
  CssBaseline,
} from "@mui/material";
import { MenuItem } from "./MenuItem";
import { Container } from "@mui/system";
import { SideBarData } from "./SideBarData";
import { Drawer, DrawerHeader } from "./Style";
import { Content } from "@/static";
import { Icons } from "@/shared";
import { usePathname, useRouter } from "next/navigation";
import { drawertoggle } from "@/redux/slices/drawerSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Header from "@/components/header.component";

const { drawerWidth } = Content;
const { BsChevronLeft } = Icons;

const publicRoutes = [
  "/signin",
  "/signup",
  "/resetpassword",
  "/forgetpassword",
  "/resetotp",
  "/otpverification",
];

const MiniDrawer = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const SidebarItems = SideBarData();
  const { data: session } = useSession();
  const userStatus = useAppSelector((state) => state.status);
  const drawerState = useAppSelector((state) => state.toggle.open);
  if (session && publicRoutes.includes(pathname!)) {
    router.push("/");
  }

  return (
    <Box sx={{ display: "flex" }}>
      {session &&
        userStatus.createOrganization &&
        userStatus.selectDepartments && (
          <>
            <CssBaseline />
            <Header />
            <Drawer variant="permanent" open={drawerState}>
              <DrawerHeader>
                <IconButton onClick={() => dispatch(drawertoggle())}>
                  <BsChevronLeft />
                </IconButton>
              </DrawerHeader>
              <Divider />
              <Paper sx={{ width: drawerWidth, maxWidth: "100%" }}>
                <MenuList>
                  {SidebarItems.map((Item, i) => (
                    <MenuItem key={i} item={Item} router={router} />
                  ))}
                </MenuList>
              </Paper>
            </Drawer>
          </>
        )}
      <Container maxWidth={false}>
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};

export default MiniDrawer;

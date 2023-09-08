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
import { useRouter } from "next/navigation";
import { drawertoggle } from "@/redux/slices/drawerSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Header from "@/components/header.component";

const { drawerWidth } = Content;
const { BsChevronLeft } = Icons;

const MiniDrawer = ({ children }: { children: ReactNode }) => {
  const SidebarItems = SideBarData();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const drawerState = useAppSelector((state) => state.toggle.open);
  console.log(session);
  return (
    <Box sx={{ display: "flex" }}>
      {session && (
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

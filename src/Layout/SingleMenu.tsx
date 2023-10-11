import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { usePathname } from "next/navigation";
export const SingleLevel = ({ item, router }: any) => {
  const pathname: any = usePathname();
  return (
    <ListItemButton
      selected={pathname === item.url}
      disabled={item.status}
      onClick={() => {
        if (item.url) router.push(item.url);
      }}
    >
      <ListItemIcon>{item.Icon}</ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItemButton>
  );
};

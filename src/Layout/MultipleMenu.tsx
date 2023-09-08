"use client";
import { useState, Fragment } from "react";
import {
  List,
  Collapse,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Icons } from "@/shared";
import { MenuItem } from "./MenuItem";
import { usePathname } from "next/navigation";

const { MdExpandMore, MdExpandLess } = Icons;

export const MultiLevel = ({ item, router }: any) => {
  const { items: children } = item;
  const location: any = usePathname();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Fragment>
      <ListItemButton
        onClick={handleClick}
        disabled={item.status}
        selected={location?.pathname === item.url}
      >
        <ListItemIcon>{item.Icon}</ListItemIcon>
        <ListItemText
          primary={item.name}
          onClick={() => {
            if (item.url) router.push(item.url);
          }}
        />
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: any, key: any) => (
            <MenuItem key={key} item={child} router={router} />
          ))}
        </List>
      </Collapse>
    </Fragment>
  );
};

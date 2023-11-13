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

const { MdExpandMore, MdExpandLess } = Icons;

export const MultiLevel = ({ item, router }: any) => {
  const { items: children } = item;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Fragment>
      <ListItemButton onClick={handleClick} disabled={item.status}>
        <ListItemIcon>{item.Icon}</ListItemIcon>
        <ListItemText
          primary={item.name}
          onClick={() => {
            if (item.url) router.push(item.url, { shallow: true });
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

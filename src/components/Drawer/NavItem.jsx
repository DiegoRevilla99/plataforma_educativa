import { ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";

const NavItem = ({ item, active }) => {
  return (
    <ListItemButton sx={{ pl: 4 }} key={item.key}>
      <ListItemText>
        <Typography
          sx={{ color: active ? "#d2202e" : "" }}
          variant="body2"
          fontFamily="IndivisaRegular"
        >
          {item.label}
        </Typography>
      </ListItemText>
    </ListItemButton>
  );
};

export default NavItem;

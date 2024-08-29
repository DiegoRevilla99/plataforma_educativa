import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

const NavListItem = ({ item, active, extraPadding = 0, pathsArray }) => {
  const extra = extraPadding + 4;

  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <ListItemButton
        sx={{ pl: extra }}
        key={item.key}
        onClick={() => setIsExpand((state) => !state)}
      >
        <ListItemText>
          <Typography
            sx={{ color: pathsArray?.includes(item.key) ? "#d2202e" : "" }}
            variant="body2"
            fontFamily="IndivisaRegular"
          >
            {item.label}
          </Typography>
        </ListItemText>
        {isExpand ? (
          <ExpandLessIcon
            sx={{ color: pathsArray?.includes(item.key) ? "#d2202e" : "" }}
          />
        ) : (
          <ExpandMoreIcon
            sx={{ color: pathsArray?.includes(item.key) ? "#d2202e" : "" }}
          />
        )}
      </ListItemButton>
      <AnimatePresence>
        {isExpand && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <List component="div" disablePadding>
              {item?.subItems?.map((item2) => {
                if (item2?.subItems?.length > 0) {
                  return (
                    <>
                      <NavListItem
                        item={item2}
                        active={false}
                        extraPadding={extra}
                        pathsArray={pathsArray}
                      />
                    </>
                  );
                } else
                  return (
                    <ListItemButton
                      sx={{ pl: extraPadding + 8 }}
                      key={item2.key}
                    >
                      <ListItemText>
                        <Typography
                          variant="body2"
                          sx={{
                            color: pathsArray?.includes(item2.key)
                              ? "#d2202e"
                              : "",
                          }}
                          fontFamily="IndivisaRegular"
                        >
                          {item2.label}
                        </Typography>
                      </ListItemText>
                    </ListItemButton>
                  );
              })}
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavListItem;

import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShareIcon from "@mui/icons-material/Share";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ActionMenus() {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ContactPageIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ textAlign: "center" }}>View Profile</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <FavoriteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ textAlign: "center" }}>
          Add to favorite
        </ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ShareIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ textAlign: "center" }}>Share</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem variant="contained">
        <ListItemIcon>
          <PersonAddIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ textAlign: "center" }}>Connect</ListItemText>
      </MenuItem>
    </MenuList>
  );
}

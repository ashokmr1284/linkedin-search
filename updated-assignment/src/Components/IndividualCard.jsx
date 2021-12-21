import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function IndividualCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMoreClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ margin: "15px" }}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={`https://picsum.photos/200/300?random=${props.item.index}`}
            sx={{ width: 56, height: 56 }}
          />
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleMoreClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMoreClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleMoreClose}>View Profile</MenuItem>
              <MenuItem onClick={handleMoreClose}>Add to favorite</MenuItem>
              <MenuItem onClick={handleMoreClose}>Share</MenuItem>
              <MenuItem onClick={handleMoreClose}>Connect</MenuItem>
            </Menu>
          </>
        }
        title={props.item.name}
        subheader={`Works at ${props.item.company}, Qualified: ${props.item.eyeColor}, Hobbies: ${props.item.favoriteFruit}, Located in: ${props.item.gender}`}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About:</Typography>
          <Typography paragraph>{props.item.about}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

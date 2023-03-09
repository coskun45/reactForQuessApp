import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props) {
  const [expanded, setExpanded] = React.useState(false);
  const {title, text, userId, userName}=props;
  const [liked,setLiked]=useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLike=()=>{
    setLiked(!liked);
  }

  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:"20px"}}>
      <CardHeader
        avatar={
          <Link style={{ textDecoration: 'none' }} to={{pathname : '/users/'+ userId}}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName[0].toUpperCase()}
          </Avatar>
          </Link>
          
        }
        
        title={title}
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
        onClick={handleLike}
        >
          <FavoriteIcon style={liked?{color:"red"}:null}/>
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <InsertCommentIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
        </CardContent>
      </Collaps
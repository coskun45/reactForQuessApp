import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, InputAdornment, OutlinedInput } from '@mui/material';



export default function PostForm(props) {
  const { userId, userName, refreshPosts}=props;
  const [title,setTitle]=useState("");
  const [text,setText]=useState("");
  const [isSent,setIsSent]=useState(false);

  const savePost=()=>{
    fetch("/posts",
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            title : title,
            userId : userId,
            text : text,
        }),
    })
        .then((res)=>res.json())
        .catch((err)=>console.log("errror"))
  }

  
  const handleSubmit=()=>{
    console.log(text)
    console.log(title)
    savePost()
    setIsSent(true)
    setTitle("");
    setText("")
    refreshPosts();
  }

  const handleTitle=(value)=>{
    setTitle(value);
    setIsSent(false)

  }
  const handleText=(value)=>{
    setText(value);
    setIsSent(false)

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
        
        title={<OutlinedInput
        id="outlined-adornment-amount"
        multiline
        placeholder='Title'
        inputProps={{maxLength:25}}
        fullWidth
        value={title}
        onChange={(i)=>handleTitle(i.target.value)}
      
        >

        </OutlinedInput>}
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {<OutlinedInput
        id="outlined-adornment-amount"
        multiline
        placeholder='Text'
        inputProps={{maxLength:250}}
        fullWidth
        value={text}

        onChange={(i)=>handleText(i.target.value)}

        endAdornment={
            <InputAdornment position='end'>
                <Button 
                variant='contained'
                style={{background:'linear-gradient(45deg,#2196f3 30%, #21CBF3 90%'}}
                onClick={handleSubmit}
                >Post</Button>
            </InputAdornment>
        }

        >

        </OutlinedInput>}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
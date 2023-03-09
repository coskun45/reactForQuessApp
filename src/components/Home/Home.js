import Post from './../Post/Post';
import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material';


function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [postList, setPostList] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPostList(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Container maxWidth="sm">
        {postList.map(post => (
          <Post title={post.title} text={post.text} userId={post.userId} userName={post.userName}></Post>
         
        ))}
      </Container>
    );
  }
  
}

export default Home
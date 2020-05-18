import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Post from "../post/post.component"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));




const Posts = () => {
    const uri = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([])
    const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
    useEffect(() => {
        const fetshPosts = async () => {
            try {
                const response = await fetch(uri);
                const postsResponse = await response.json()
                setPosts(postsResponse)
            } catch (error) {
                console.log(error)
            }
    
        }
        fetshPosts()
        
    },[])
    return (
    
             <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                    <Grid key={value} item>
                        {posts.map(post => <Post key={post.id} post={post} />)}
                    </Grid>
                    ))}
                </Grid>
                </Grid>
                
            
       </Grid>     
    
    )
}
export default Posts
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

function App() {
  return (
    <div style= {{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1589659964144-cd22a01ec20e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: "100vh",
      backgroundRepeat: 'no-repeat',
      }}>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2A5040' }} >
        <Toolbar >
          <IconButton size="large" edge="start" color="inherit" aria-label="Placeholder" sx={{ mr: 1 }}>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Placeholder
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{height:'100vh'}}>
  
      <Box sx={{display: 'flex', flexWrap: 'wrap','& > :not(style)': {m: 1, width: 450, height: 550,}, }} >
        <Paper square={false} elevation={3}>

          <Grid container direction="column" justifyContent="space-evenly" alignItems="center" style={{height:'60vh'}} >
            <Typography variant="h2" gutterBottom>Login</Typography>
            <TextField  id="outlined-textarea" label="Guest LastName " placeholder="LastName" multiline  style={ {width: 250}}/>
            <TextField  id="outlined-textarea" label="Confirmation # " placeholder="33-333-33" multiline style={ {width: 250}}/>
            <Button variant="contained" color="success"> Shop now </Button>
         </Grid>
     
      </Paper>
     </Box>

    </Grid>
    </div>
  );
}

export default App;

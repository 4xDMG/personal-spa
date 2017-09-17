import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import Footer from './Footer';
import Latop from './assets/laptop.jpeg';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="space-between"
        align="stretch"
        style={{ height: '100vh' }}
      >
        <Grid item>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title">Daniel Tait</Typography>
              <Button>Home</Button>
              <Button>Projects</Button>
              <Button>Contact</Button>
              <Button>CV</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item style={{ backgroundImage: `url(${Latop})`, backgroundSize: 'cover', flex: 1 }}>
          Content!
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

export default App;

import React from 'react';
import { AppBar, Toolbar, Headline, Typography } from 'material-ui';

export default props => 
  <AppBar position="static">
    <Toolbar>
      <Typography variant='headline' color='inherit'>
        Test
      </Typography>
    </Toolbar>
  </AppBar>;

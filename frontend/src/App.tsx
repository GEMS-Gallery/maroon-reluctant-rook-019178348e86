import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Container, TextField, Button, Box } from '@mui/material';
import { backend } from 'declarations/backend';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5a5f',
    },
    secondary: {
      main: '#00a699',
    },
  },
});

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async () => {
    try {
      const result = await backend.search(searchQuery);
      setSearchResult(result);
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResult('An error occurred while searching.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Browse</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: 'linear-gradient(to right, #ff5a5f, #ff8a80)',
          padding: '100px 0',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Find Adventures Nearby
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <TextField
              variant="outlined"
              placeholder="Try 'New York'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ bgcolor: 'white', borderRadius: '4px 0 0 4px' }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSearch}
              sx={{ borderRadius: '0 4px 4px 0' }}
            >
              Search
            </Button>
          </Box>
          {searchResult && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              {searchResult}
            </Typography>
          )}
        </Container>
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            © 2024 Simple Modern Design. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
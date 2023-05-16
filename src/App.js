import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

const App = () => {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, []);

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Latest Posts</h1>
        <PostLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
    </ThemeProvider>
  );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PostList from '../pages/PostList';
import PostDetails from '../pages/PostDetails';
import { AppContainer, AppWrap } from './App.styles.js';

function App() {
  return (
    <AppContainer>
      <AppWrap>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" exact element={<PostList />} />
              <Route path="/post/:postId" exact element={<PostDetails />} />
            </Routes>
          </Router>
        </Provider >
      </AppWrap>
    </AppContainer>
  );
}

export default App;
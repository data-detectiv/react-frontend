import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import EditPost from './components/EditPost';
import Missing from './components/Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog"/>
      <DataProvider>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/post' element={<NewPost />}/>
          <Route path='/post/:id' element={<PostPage />}/>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
          <Route path='/edit/:id' element={<EditPost />}/>
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;

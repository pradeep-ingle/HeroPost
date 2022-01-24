import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AllPosts from "./components/AllPosts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import CreatePost from "./components/CreatePost";
import NotFound from "./components/NotFound";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/allPosts" exact element={<AllPosts />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/createPost" exact element={<CreatePost />} />
          <Route path="/" element={<CreatePost />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

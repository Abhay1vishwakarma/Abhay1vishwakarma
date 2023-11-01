import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import Blogs from "./components/Blogs";
import Myblogs from "./components/Myblogs";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/my-blogs" element={<Myblogs />}></Route>
          <Route path="/blog-details/:id" element={<BlogDetails />}></Route>
          <Route path="/create-blog" element={<CreateBlog />}></Route>
          <Route path="/" element={<Blogs />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

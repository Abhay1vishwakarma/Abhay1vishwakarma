import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/Store";

const Header = () => {
  // global state
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    try {
      dispatch(authActions.logout());
      // alert("LogOut seccessfully");
      toast.success("User seccessfully logout", {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="header">
        <div>
          <h2>MY BLOGS</h2>
        </div>

        {isLogin && (
          <div>
            <Link className="links" to="/blogs">
              BLOGS
            </Link>
            <Link className="links" to="/my-blogs">
              MY BLOGS
            </Link>
            <Link className="links" to="/create-blog">
              CREATE BLOG
            </Link>
          </div>
        )}

        {!isLogin && (
          <>
            <div className="logreg">
              <Link className="links" to="/login">
                LOGIN
              </Link>
              <Link className="links" to="/register">
                REGISTER
              </Link>
            </div>
          </>
        )}
        {isLogin && (
          <Link className="linklogout" to="/login" onClick={handleLogOut}>
            LOGOUT
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;

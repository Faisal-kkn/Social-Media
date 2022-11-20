import React, { useEffect } from 'react'
import UserProfile from '../../components/UserProfile/UserProfile'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

function User() {    
  const Navigate = useNavigate()
  useEffect(() => {
    userAuthenticeted()
  }, [Navigate]);

  const userAuthenticeted = () => {
    axios.get("http://localhost:5000/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("userToken"),
      }
    }).then((response) => {
      if (response.data.auth) { Navigate("/UserProfile"); }
      else Navigate("/login");
    });
  };

  
    
  return (
      <>
      <UserProfile />
      </>
  )
}

export default User
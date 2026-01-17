  import React from "react";
  import { useState } from "react";
  import axios from "axios";
  import Hero from "./Components/Hero";
  import UserDetails from "./Components/UserDetails";
  import "./App.css"


  function App() {
    const url = "https://api.github.com/users/"
    const [user , setUser] = useState("")
    const [profile, setProfile] = useState()
    const [repo,setRepo] = useState([])
    async function fetchUser(){
      if(user){
      try {
        const GitUser = await axios.get(`${url}${user}`)
        const GitRepo = await axios.get(`${url}${user}/repos`)
        setProfile(GitUser.data)
        setRepo(GitRepo.data)
      } catch (error) {
        console.log("Error fetching github user data")
      }
    }
    else{
      alert("Enter User ID");
    }
    }
    return (
      <div className="App">
        <Hero 
        user={user}
        setUser={setUser}
        fetchUser={fetchUser}
        />
        <UserDetails 
        profile={profile}
        repo={repo}        
        />
        </div>
      
    )
  }

  export default App

import { useState } from "react";

export default function Main() {
  const [profile, setProfile] = useState(null);
  async function fetchUser(){
   try{
    const response = await fetch(`https://api.github.com/users/${name}`);
    if(!response.ok) throw new error ("user not found");
    const data = response.json();
    setProfile(data);
   }catch(error){
       console.error("")
   }
  }

  return (
    <>
      <div></div>
    </>
  );
}

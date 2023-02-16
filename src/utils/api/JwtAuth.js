

export const setAuthToken = (user) =>{
  

    const currentUser = { email : user};
            fetch('https://repairing-dream-server.vercel.app/jwt',{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(currentUser)
            })
            .then( res => res.json())
            .then( data => {
                console.log(data.token)
                localStorage.setItem("accessToken", data.token);
                // navigate(from, { replace: true });
            
            })
}
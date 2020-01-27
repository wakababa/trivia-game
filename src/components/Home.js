import React from 'react'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Route, Link} from 'react-router-dom'
 function Home() {
   
    return(
        <div style={{textAlign:'center',width:'100%',height:'800px', backgroundImage:'url("https://pbs.twimg.com/media/EPRpzXGWkAER5Ne?format=jpg&name=large")'}} >
           
            <Button style={{position:'relative',top:'700px'}}><Link style={{textDecoration:'none',color:'white',fontSize:'25px'}} to="/difficulty" >Start Game</Link></Button>
            
          </div>
    )
   }
export default Home
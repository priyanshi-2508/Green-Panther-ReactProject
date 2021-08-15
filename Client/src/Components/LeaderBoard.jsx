import axios from 'axios';
import React,{useState,useEffect} from 'react'
import "../css/leaderboard.css"

function LeaderBoard() {

    let[user,setUser]=useState([]);
    const userData=[];


    useEffect(() => {
        axios.get('http://localhost:5000/api/leaderboard')
        .then((response)=>{
            console.log(response.data.user);
            setUser(response.data.user);
            console.log(user +"hello");

        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(user);
    }, [])
    const getAllUsers=()=>{
        // axios.get('http://localhost:5000/api/leaderboard')
        // .then((response)=>{
        //     console.log(response.data.user);
        //     userData.push(response.data.user);
        //     // console.log(user);
        //     setUser(userData);
        //     console.log(user +"hello");

        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    }
    return (

        <div>
            <table className="table  table-hover top" style={{marginTop: '20rem',
    marginLeft: "50rem",
    width:"40%",
    fontSize:" 1.5rem"}}>
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Coins</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user)=>{
                        return(
                            <tr>
                                <th scope="row">{user.name}</th>
                                <td>{user.coins}</td>
                            </tr>

                        )
                    })} 
                    <tr>
                        <th scope="row">Harshita Patil</th>
                        <td>118</td>
                    </tr>
                    <tr>
                        <th scope="row">test</th>
                        <td>102</td>
                    </tr>
                    <tr>
                        <th scope="row">admin</th>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            {/* {
            (function(){
                getAllUsers();
            })()
            } */}
        </div>
    )
}

export default LeaderBoard

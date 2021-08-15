import React,{useState} from 'react'
import axios from 'axios';
import  "../css/profile.css"

function Profile() {

const[user,setuser]=useState("");
    const getUserData=()=>{
        if(localStorage.getItem("userId")){
            let userId=localStorage.getItem("userId");
            axios.get(`http://localhost:5000/api/profile?userId=${userId}`)
            .then((response)=>{
                // console.log(response); 
                console.log(response.data.user.name);
                setuser(response.data.user);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        else
        {
            window.location.href="/login";
        }
    }    
    return (
        <div>
            <div class="page-content page-container" id="page-content" style={{alignItems: "center"}}>
                <div className="padding">
                    <div>
                        <div style={{width:"70%", marginLeft:"16%",marginTop: "8%"}}>
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/> </div>
                                            <h6 className="fw-800" style={{fontSize:"30px"}}>{user.name}</h6>
                                            
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                            <div className="card-block">
                                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600" style={{fontSize:"30px",textAlign:"center"}}>My Profile</h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="m-b-10 f-w-600 "style={{fontSize:"20px"}}>Email</p>
                                                            <h6 className="text-muted f-w-600"style={{fontSize:"15px"}}>{user.email}</h6>
                                                        </div>
                                                    </div>
                                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"style={{fontSize:"30px",textAlign:"center"}}>My Standings</h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <p className="m-b-10 f-w-600"style={{fontSize:"25px",color:"green"}}>Green coins</p>
                                                            <h6 className="text-muted f-w-400"style={{fontSize:"20px"}}>{user.coins} coins</h6>
                                                        </div>
                                                    </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {getUserData()}
        </div>
    )
}

export default Profile

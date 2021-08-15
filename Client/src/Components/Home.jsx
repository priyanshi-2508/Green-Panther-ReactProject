import React from 'react'

function Home() {
    return (
        <>
        {/* <!-- Hero Section  --> */}
        <section id="hero">
          <div class="hero container">
            <div>
              <h1>Take Initiative, <span></span></h1>
              <h1>to save our <span></span></h1>
              <h1>Earth <span></span></h1>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Section  --> */}

        <section id="services">
            <div className="services container">
                <div className="service-top">
                    <h1 className="section-title">Serv<span>i</span>ces</h1>
                    <p style={{	fontWweight:"300px",
                    fontFamily:"Helvetica",
                    fontSize:"14px"}}>
                    We have made this website with the motive to save environment from the big problem of air pollution
                    by avoiding use of vehicles, thus saving nautural resources for our future generations. You all can take initiative to contribute
                    towards this by using bicycle or any sort of public transport for travelling. </p>
                </div>
                <div className="service-bottom">
                    <div className="service-item">
                        <h2 style={{fontSize:"26px",color:"rgb(170, 196, 26)",fontWeight:"bolder",textAlign: "center"}}>Start  Tracking</h2>
                        <p>You may note down your current source and destination and the mode of transport you are using.
                            According to your mode of transport you will be alloted some coins for appreciation.
                        </p>
                    </div>
                    <div className="service-item" >
                        <h2 style={{fontSize:"26px",color:"rgb(189, 189, 28)",fontWeight: "bolder",textAlign: "center"}}>LeaderBoard</h2>
                        <p>In this leaderboard you would be given some scores based on the coins
                            you earned and you could compete with your neighbours or friends which will motivate you to 
                            keep using sustainable resources.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- service --> */}
        </>
    )
}

export default Home

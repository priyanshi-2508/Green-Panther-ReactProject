// import React from 'react'
// import useScript from '../appendScript';
// import get_route from '../trackingScript';

// function TrackingPage() {
//     useScript("../trackingScript.js");
//     return (
//         <div className="container">
//             <div className="top-container">
//                 <h3 id="text-center" style={{ textAlign: "center", width: "100%", color: "green", marginLeft: "25%" }}>Enter Locations </h3>

//                 <input type="text" style={{ width: "100%", marginLeft: "28%", textAlign: "center" }} className="form-control form-control-lg"
//                     placeholder="Enter Starting Address" />
//                 <br></br>
//                 <input type="text" style={{ width: "100%", marginLeft: "28%", textAlign: "center" }} id="starting-input"
//                     className="form-control form-control-lg" placeholder="Source Postal Code" />
//                 <br></br>

//                 <input type="text" style={{ width: "100%", marginLeft: "28%", textAlign: "center" }} className="form-control form-control-lg"
//                     placeholder="Enter Ending Address" />
//                 <br></br>
//                 <input type="text" style={{ width: "100%", marginLeft: "28%", textAlign: "center" }} id="destination-input"
//                     className="form-control form-control-lg" placeholder="Destination Postal Code" />
//                 <br></br>
//                 <button id="submit" style={{ width: "45%", marginLeft: "52%" }} className="btn btn-info btn-block"
//                     onclick="return getcor()">Show on map</button>

//                 <div className="card-block" id="formatted-address"></div>
//                 <div className="card-block" id="address-components"></div>
//                 <div className="card-block" id="geometry"></div>

//             </div>
//             <div className="bottom-part">
//                 <div id='map'></div>

//                 <button className="btn-tracker" onClick={get_route()} >Get distance</button>
//             </div>
//         </div>
//     )
// }

// export default TrackingPage;

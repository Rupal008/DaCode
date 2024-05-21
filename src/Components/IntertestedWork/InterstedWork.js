import React from "react";

const InterstedWork = () => {
  return (
    <div className="container"style={{backgroundColor:'#60E1CB'}}>
      <div className="row">
        <div>
          <img src="Vector1.png" alt="..." style={{width:'30%',position:'absolute',marginLeft:'-6px'}}/>
        </div>
        <div className="col text-center">
        <div>
          <img src="Vector2.png" alt="..." style={{width:'35%',position:'absolute',marginLeft:'9%', marginBottom:'85%'}}/>
        </div>
          <div className="pt-4 mt-5">
            <h3 style={{ fontWeight: "bold" }}>Interested to work with us ?</h3>
            <p className="mt-3">Send a line here get and update daily</p>
          </div>
          <div className="pb-5 pt-3 ">
            <button className="btn mb-4 p-3 rounded-5" style={{backgroundColor:'black',color:'#FFFFFF',width:'20%'}}>
              DaCode@example.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterstedWork;

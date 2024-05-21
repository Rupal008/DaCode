import React from "react";

const Testiomonials = () => {
  return (
    <div className="container pt-5">
      <div className="row text-center">
        <div>
          <p style={{ color: "#7BC0E3", fontWeight: "bolder" }}>
            Testiomonials
          </p>
          <h3 style={{ fontWeight: "bold" }}>Our Happy Clients</h3>
        </div>
        <div className="col " style={{textAlign:"-webkit-center"}}>
          <div className="pt-4 mb-4">
            <div class="card p-4" style={{boxShadow:'0px 97px 90px 0px #07003B1F',border:'none',width:'60%',backgroundColor:"#FDFDFF"}}>
              <div class="card-body" style={{}}>
                <h5 class="card-title" style={{fontWeight:'bold'}}>5.0</h5>
                <img src="./grade.png" alt="..."/>
                <img src="./grade.png" alt="..."/>
                <img src="./grade.png" alt="..."/>
                <img src="./grade.png" alt="..."/>
                <img src="./grade.png" alt="..."/>
                <p className="card-text pt-4 mb-3"style={{fontWeight:'bold',fontStyle:'italic',color:'#292525'}}>
                We tried several agencies before we found daCode. Has been a pleasure to work<br/> with and will soon start the next project with our second brand.
                </p>               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testiomonials;

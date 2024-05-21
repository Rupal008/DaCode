import React from "react";

const Logo = () => {
  return (
    <div className="container mt-5" style={{ backgroundColor: "#60E1CB" }}>
      <div className="row  pt-5">
        <div className="col-lg-5">
          <h3 className="mb-3" style={{ fontWeight: "bold" }}>
            Logo
          </h3>
          <p>
            Far far away, behind the word mountains, far from <br></br>the
            countries Vokalia and Consonantia
          </p>
        </div>

        <div className="col-lg-7 ">
          <div style={{ display: "flex" }}>
            <div className="me-5">
              <p style={{ color: "black", fontWeight: "bolder" }}>Work</p>
              <p style={{ color: "#292525" }}>Blog</p>
              <p style={{ color: "#292525" }}>How We Work</p>
              <p style={{ color: "#292525" }}>Testimonials</p>
            </div>

            <div className="me-5">
              <p style={{ color: "black", fontWeight: "bolder" }}>Services</p>
              <p style={{ color: "#292525" }}>Marketing Strategy</p>
              <p style={{ color: "#292525" }}>Website Optimization</p>
              <p style={{ color: "#292525" }}>Email Maerketing</p>
            </div>

            <div className="me-5">
              <p style={{ color: "black", fontWeight: "bolder" }}>
                Business Solution
              </p>
              <p style={{ color: "#292525" }}>Partnership</p>
              <p style={{ color: "#292525" }}>About Project</p>
              <p style={{ color: "#292525" }}>Corporate</p>
            </div>

            <div className="me-5">
              <p style={{ color: "black", fontWeight: "bolder" }}>Language</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#FFFFFF", width: "30%" }}></div>
      <div className="row">
        <div className="container">
          <div className="row">
            <div>
              <img src="Line.png" alt="..." style={{ width: "100%",fontWeight:'bold'}} />
            </div>
            <div>
              <div style={{ display: "flex",marginBottom:'3%',marginTop:'1%' }}>
                <div className="col-lg-9">
                  <img src="p2020.png" alt="..." style={{ width: "12%" }} />
                </div>
                <div className="col-lg-3">
                  <img
                    src="SocialMedia.png"
                    alt="..."
                    style={{ width: "40%", marginLeft: "60%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;

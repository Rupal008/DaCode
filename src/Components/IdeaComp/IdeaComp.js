

const IdeaComp = () => {
  return (
    <div className="container pt-5" style={{ position: "relative" }}>
      <div className="row mb-4">
        <div style={{ marginLeft: "50px" }}>
          <h2 style={{ fontWeight: "bold" }}>
            Your idea into <span style={{ color: "#60E1CB" }}>reality</span>
          </h2>
          <p>
            We start every web development project with a project manager from
            daCode interviewing you
            <br /> about the goal with the project. This is for us to be able to
            come up with a solution for your SaaS
            <br /> business, estimate a timeline, and come up with a budget.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7 col-sm-12 mb-4">
          <div style={{ display: "flex" }}>
            <div className="">
              <img className="" src="./gp1.png" alt="..."></img>
            </div>

            <div>
              <h6 className="pt-5" style={{ color: "#60E1CB" }}>
                {" "}
                Your Idea
              </h6>
              <p>
                In order for us at daCode to know that we are a good fit for
                your project we always start with screening questions in order
                to make sure that we are a suitable match for your company.
              </p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="">
              <img className="" src="./gp2.png" alt="..."></img>
            </div>
            <div>
              <h6 className="pt-5" style={{ color: "#60E1CB" }}>
                {" "}
                Strategy meeting
              </h6>
              <p>
                This meeting will be a meeting where we together go over our
                proposed strategy on how we can reach your website goals. Here
                we will establish a project update system where you will be able
                to follow the whole process from start to finish.
              </p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="">
              <img className="" src="./gp3.png" alt="..."></img>
            </div>
            <div>
              <h6 className="pt-5" style={{ color: "#60E1CB" }}>
                {" "}
                Agile and Scrum framework
              </h6>
              <p>
                In this step we will have a team meeting with the project
                manager and the lead developer and designer. Then we will be
                working using and agile and scrum framework in order to make
                sure to deliver your project on time and within budget.
              </p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="">
              <img className="" src="./gp4.png" alt="..."></img>
            </div>
            <div>
              <h6 className="pt-5" style={{ color: "#60E1CB" }}>
                Your website goes live
              </h6>
              <p>
                The final checks of the website will happen, we will make sure
                that all tracking pixels, links and user interface is compatible
                with all different devices. We will also perform a few different
                tests to make sure that the website is optimised for user
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-sm-12" style={{ marginBottom: "0"}}>
          <img
            src="./right.png"
            alt="..."
            style={{ width: "100%"}}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default IdeaComp;

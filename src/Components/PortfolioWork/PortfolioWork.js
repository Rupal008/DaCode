import "./PortfolioWork.css"
const PortfolioWork = () => {
    return (
        <div className="container gradient-container" style={{  }}>
            <div className="row">
                <div className="col-lg col-md col-sm">
                <div className="text-center mt-5">
                    <p style={{ color: '#7BC0E3',fontWeight:'bolder' }}>Portfolio</p>
                    <h3 style={{ fontWeight: "bold" }}>Our Great Work</h3>
                </div>

                <div className="text-center mt-3">
                    <button className="rounded-5 p-3 me-2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'bold', color: '#7BC0E3', border: "2px solid #7BC0E3", width: '20%' }}>Website Optimization</button>
                    <button className="rounded-5 p-3 me-2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'bold', color: '#7BC0E3', border: "none", width: '30%' }}>Website Redesign</button>
                    <button className="rounded-5 p-3 me-2" style={{ backgroundColor: '#FFFFFF', fontWeight: 'bold', color: '#7BC0E3', border: "none", width: '30%' }}>Search Engine Optimization</button>
                </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-12 mt-4  p-5">

                    <div style={{display:'flex'}}>
                    
                        <div className="me-4" style={{ width: '60%'}}>
                            <img src="./Image.png" className=" pb-4" alt="..." style={{ width: '100%' }} />
                            <div>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                            </div>
                        </div>

                        <div className="me-4" style={{ width: '60%' }}>
                            <img src="./Imgae2.png" className=" pb-4" alt="..." style={{ width: '100%' }} />
                            <div>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                            </div>
                        </div>

                        <div className="" style={{ width: '60%' }}>
                            <img src="./Imgae3.png" className=" pb-4" alt="..." style={{ width: '100%' }} />
                            <div>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <div className="col-4 pt-4">

                    <div  style={{width:'60%',backgroundColor:"#60E1CB"}}>
                        <img src="./Image.png" className=" pb-4" alt="..." style={{width:'100%'}}/>
                            <div>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                            </div>
                    </div>
                </div>

                 <div className="col-4 pt-4 pb-5">
                   <div  style={{width:'60%',backgroundColor:"#60E1CB"}}>
                        <img src="./Imgae2.png" className=" pb-4" alt="..." style={{width:'100%'}}/>
                            <div>
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                            </div>
                    </div>
                </div>

                <div className="col-4 pt-4">
                <div  style={{width:'60%',backgroundColor:"#60E1CB"}}>
                        <img src="./Imgae3.png" className="pb-4 " alt="..." style={{width:'100%'}}/>
                            <div className="">
                                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum </p>
                            </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default PortfolioWork;
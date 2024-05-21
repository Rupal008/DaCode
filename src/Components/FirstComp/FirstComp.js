
import IdeaComp from "../IdeaComp/IdeaComp";
import InterstedWork from "../IntertestedWork/InterstedWork";
import Logo from "../Logo/Logo";
import NavigationBar from "../NavigationBar/NavigationBar";
import NewsArticles from "../NewsArticles/NewsArticles";
import PortfolioWork from "../PortfolioWork/PortfolioWork";
import Services from "../Services/Services";
import Testiomonials from "../Testiomonials/Testiomonials";
import "./FirstComp.css";
const FirstComp = () => {
    return (
        <>

        <div className="contaier mt-4 overflow-y-hidden overflow-x-hidden ml-10 mr-10 mx-5" style={{ backgroundColor: "#FFFFFF", position: 'relative'}}>
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-12 mb-3">
                <div>
                <img src="./Rectangle.png" alt="..." style={{ width: '20%',marginLeft:'25%', marginTop:'20%' }}></img>
                <h1 className="shadow-text" style={{ color: '#292525', fontWeight: "bold",marginLeft:'25%' }}>We help you create<br />
                                your<span style={{ color: '#60E1CB' }}> website</span></h1>
                            <p style={{color:'#000000',marginLeft:'25%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis<br /> adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non.<br /> At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
                </div>
                <div>
                            <button className="rounded-5 p-3 me-2" style={{backgroundColor:'#60E1CB',fontWeight:'bold',color:'#FFFFFF',border:"none",width:'30%',marginLeft:'25%' }}>Get Started</button>     <button className="rounded-5 p-3" style={{border:' 1px solid #07003B2B',color:'#60E1CB',width:'30%',fontWeight:'bold',backgroundColor:"#FFFFFF"}}>Contact Us</button>
                        </div>
                        <div style={{position:"absolute",top:'310px',right:'700px'}}>
                        <img src="./Group56.png" alt="..." style={{ width: '100%',zIndex:'2'}}></img>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div>
                        <img src="./Analyse.svg" alt="..." style={{width: '100%' }}></img>
                    </div>
                </div>
            </div>
        </div>

        <Services/>
        <PortfolioWork/>
        <IdeaComp/>
        <InterstedWork/>
        <Testiomonials/>
        <NewsArticles/>
        <Logo/>
        </>
    )
}

export default FirstComp;
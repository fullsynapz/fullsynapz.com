import DshboardIcon from '../../assets/dashboardIcon.png'
import DashboardExplainLogo from '../../assets/dashboardExplainLogo.png'
import TeamLogo from '../../assets/teamWork.png'
import DashboardLogo from '../../assets/dashboardLogo1.png'
import DashboardLogo2 from '../../assets/dashboardLogo2.png'
import FzLogo from '../../assets/FzLogo.png';


const Home = () => {
    return (
        <>
            <div className="home-parent-container">
                <div className="home-container d-flex flex-column justify-content-center align-items-center">
                    <div className='align-items-center d-flex justify-content-center  animate__animated animate__zoomInDown'>
                        <img src={FzLogo} alt="FullSynapz Logo" className='image-container' />
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 cotainer mt-3">
                        <span className="fs-26">Welcome to</span>
                        <span className=" animate__animated animate__bounce color-text fs-26">Synapz...</span>
                    </div>
                    <div className='d-flex justify-content-center align-items-center text-center'>
                        <span className='fs-20'>Turning Ideas into AI-Powered Solutions <br /> <span className='fs-20'>I build intelligent systems and scalable applications for businesses and individuals.</span></span>
                    </div>
                </div>
                <div className="container-fuild">
                    <div className="row d-flex justify-content-between ">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <div className="container-fuild  animate__animated  animate__fadeInLeft">
                                <img src={DashboardExplainLogo} alt="home-icon" className='image-container' />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 d-flex flex-column mt-3 card-container-body  animate__animated  animate__fadeInRight" >
                            <h1 className="fs-26">Turning Ideas into AI-Powered & Data-Driven Solutions</h1>
                            <p className="fs-16">
                                We are a freelance-driven tech startup specializing in delivering end-to-end solutions for:
                            </p>
                            <ul className='fs-16'>
                                <li>AI & Machine Learning Projects From data collection and model development to deployment.</li>
                                <li>Full-Stack Web Development Scalable, secure, and user-friendly web applications.</li>
                                <li>Cloud Solutions Infrastructure setup, deployment, and management on AWS, Azure, or Google Cloud.</li>
                                <li>Power BI & Data Analytics Transforming your data into actionable insights and stunning dashboards.</li>

                            </ul>
                            <p className='fs-16'>Our mission is to help individuals, startups, and enterprises turn their concepts into reality from brainstorming to final delivery. Whether it’s building a predictive AI model, designing a modern web platform, or creating business intelligence dashboards, we handle the entire lifecycle of your project.</p>
                        </div>
                    </div>
                </div>

                <div className="container-fuild mt-5 mb-5">
                    <div className="row d-flex justify-content-between ">
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 d-flex flex-column mt-3 card-container-body  animate__animated  animate__fadeInLeft">
                            <h1 className="fs-26">Focusing Sectors</h1>
                            <p className="fs-16">
                                At Synapz, we specialize in delivering end-to-end software solutions across all domains from AI, Full-Stack Development, and Power BI to custom projects for healthcare, education, business, and more.
                                We work with doctors, students, startups, and enterprises, ensuring every project is tailored to meet the unique needs of each sector.
                                Our focus is on building high-quality solutions that impress clients, drive results, and keep them coming back for future projects.
                            </p>
                             <ul className='fs-16'>
                                <li>Healthcare & Medical Projects Supporting doctors with AI-based diagnostics, patient management systems, and more.</li>
                                <li>Education & Academic Projects Guiding students with final-year innovations.</li>
                                <li>Business & Enterprise Solutions Building tools to streamline operations and boost efficiency.</li>
                                <li>Custom Industry Applications From retail to finance, manufacturing to real estate, we tailor solutions to meet your needs.</li>
                            </ul>
                            <p className='fs-16'>Our goal is to empower every sector with innovative technology solutions that drive success and growth.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-3">
                            <div className="container-fuild  animate__animated  animate__fadeInRight">
                                <img src={DashboardLogo2} alt="home-icon" className='image-container' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fuild mt-5 mb-5">
                    <div className="row d-flex justify-content-between ">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
                            <div className="container-fuild  animate__animated  animate__fadeInLeft">
                                <img src={DashboardLogo} alt="home-icon" className='image-container' />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 d-flex flex-column mt-3 card-container-body  animate__animated  animate__fadeInRight" >
                            <h1 className="fs-26">Academic & Professional Project Support</h1>
                            <p className="fs-16">Whether you’re a student, a medical professional, or a business owner, Synapz is here to help you bring your ideas to life.
                                We support all types of projects academic, industry focused, or personal and cover the full.</p>
                            <ul className='fs-16'>
                                <li>AI & Machine Learning </li>
                                <li>Full-Stack Applications</li>
                                <li>Power BI Dashboards & Data Analytics.</li>
                                <li>Custom Software for any sector (Healthcare, Education, Retail, Finance, and more).</li>
                            </ul>
                            <p className='fs-16'>From concept to deployment, we ensure every project is innovative, scalable, and impactful.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fuild mt-3 mb-5">
                    <div className="card-body-footer-container p-5  animate__animated  animate__fadeInUp">
                        <p className='fs-16 text-weight'>© 2024 FullSynapZ</p>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 d-flex flex-column justify-content-center">
                                <span className='fs-16 cursor-pointer'>FAQ</span>
                                <span className='fs-16 cursor-pointer'>Investor</span>
                                <span className='fs-16 cursor-pointer'>Relations</span>
                                <span className='fs-16 cursor-pointer'>Instagram</span>
                                <span className='fs-16 cursor-pointer'>Youtube</span>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 d-flex flex-column justify-content-center">
                                <span className='fs-16 cursor-pointer'>Help Center</span>
                                <span className='fs-16 cursor-pointer'>Jobs</span>
                                <span className='fs-16 cursor-pointer'>Cookies</span>
                                <span className='fs-16 cursor-pointer'>Preferences</span>
                                <span className='fs-16 cursor-pointer'>Leagal Notices</span>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 d-flex flex-column justify-content-center">
                                <span className='fs-16 cursor-pointer'>Account</span>
                                <span className='fs-16 cursor-pointer'>Ways to watch</span>
                                <span className='fs-16 cursor-pointer'>Corporate infor</span>
                                <span className='fs-16 cursor-pointer'>Speed</span>
                                <span className='fs-16 cursor-pointer'>Youtube</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Home;
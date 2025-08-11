import Tech208 from '../../assets/208Tech.png'

const Services = () => {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="wow animate__animated  animate__bounce">
                    <h1 className="fs-26 wow animate__animated  animate__bounce">Services</h1>
                    <div className="padding-left">
                        <p className="fs-16">At FullSynapz, we specialize in delivering end-to-end project solutions with a focus on quality, innovation, and client satisfaction. Our services cover the complete lifecycle of a projectfrom ideation to deployment & ensuring that your vision is transformed into a fully functional and scalable product.
                        </p>
                    </div>
                </div>

                <div className="wow animate__animated  animate__bounce mt-3">
                    <h2 className="fs-20">Custom End-to-End Project Development</h2>
                    <p className="fs-16 padding-left ">We handle the entire process: planning, designing, development, testing, and final deployment, ensuring a seamless experience for our clients.
                    </p>
                </div>
                <div className="wow animate__animated  animate__bounce mt-3">
                    <h2 className="fs-20">Deployment & Delivery</h2>
                    <p className="fs-16 padding-left ">We provide robust and reliable deployment strategies, whether on-premise or in the cloud, with full support for smooth handover and maintenance.
                    </p>
                </div>

                <div className="wow animate__animated  animate__bounce mt-3">
                    <h2 className="fs-20">Data Sourcing for AI/ML Projects</h2>
                    <p className="fs-16 padding-left ">For AI and Machine Learning projects, we take the responsibility of sourcing and preparing high-quality datasets, ensuring data accuracy, relevance, and compliance.
                    </p>
                </div>
                <div className="wow animate__animated  animate__bounce mt-3">
                    <h2 className="fs-20">Scalable Solutions
                    </h2>
                    <p className="fs-16 padding-left ">We design our solutions with future growth in mind, ensuring they can easily adapt to evolving business needs.
                    </p>
                </div>
                <div className="wow animate__animated  animate__bounce mt-3">
                    <h2 className="fs-20">Why Choose FullSynapz?</h2>
                    <ul>
                        <li className="fs-16 padding-left">Complete ownership of the project lifecycle</li>
                        <li className="fs-16 padding-left">Expertise in AI/ML, Web, and Cloud solutions</li>
                        <li className="fs-16 padding-left">Reliable deployment with ongoing support</li>
                        <li className="fs-16 padding-left">High-quality, relevant datasets tailored to your project requirements</li>
                        <li className="fs-16 padding-left">Commitment to delivering on time, every time</li>
                    </ul>
                </div>
                <div className="wow animate__animated  animate__bounce mt-3 d-flex flex-column align-items-center justify-content-center">
                    <p className="fs-16">At FullSynapz, we are dedicated to transforming your ideas into reality with our comprehensive project development services. Whether you need a complete end-to-end solution or specific components, we are here to help you succeed.</p>
                </div>
                <div className='mt-5 d-flex justify-content-center align-items-center'>
                    <h1 className='fs-26 wow animate__animated  animate__bounce'>Our Tie-up Companies & Partners</h1>
                </div>
                <marquee className='fs-16 ' behavior="scroll" direction="left">
                    <img src={Tech208} alt="Partner 1" className='partner-logo wow animate__animated  animate__fadeInLeft' />
                </marquee>
                <div className='wow animate__animated  animate__bounce mt-3'>
                    <p>
                        208 Tech Careers is a platform dedicated to helping students and professionals in the tech industry find their dream jobs. We provide resources and career advice to empower individuals in their career journeys.
                    </p>
                    <p>
                        @ 208 TechCareers - <a href="https://saikumar208techcareers.github.io/208techcareers.com/" target="_blank" rel="noopener noreferrer">https://saikumar208techcareers.github.io/208techcareers.com/</a>
                    </p>
                </div >
                <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
                    <p className="fs-16 text-weight">@ At FullSynapz, we don't just deliver projects. we deliver impact.</p>
                </div>

            </div >
        </>
    );
}
export default Services;
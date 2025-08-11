import Saikumar from '../../assets/saikumar.png';
import Pradeep from '../../assets/pradeep.png';
import Gowtham from '../../assets/gowtham.png';
import Chanikya from '../../assets/chanikya.png';

const About = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="wow animate__animated animate__bounce">
          <h1 className="fs-26 wow animate__animated  animate__bounce">About FullSynapz</h1>
        </div>
        <div className="p-3 wow animate__animated  animate__bounce">
          <p className="fs-16 ">At FullSynapz, we are more than just developers. we are innovators shaping the future of technology. Our expertise spans Artificial Intelligence, Machine Learning, Generative AI, Power BI Dashboards, and Full-Stack Development, enabling us to craft intelligent solutions that are both powerful and practical.</p>
        </div>
        <div className="p-3 mt-2 wow animate__animated  animate__bounce">
          <p>We deliver end-to-end systems that merge advanced algorithms with intuitive user experiences. From training deep learning models and building generative AI applications to developing intelligent chatbots, creating mobile and web applications, designing interactive Power BI dashboards, and deploying scalable platforms, every solution we build is optimized for performance, scalability, and real-world impact.</p>
        </div>
      </div>
      <div className="mt-5 d-flex flex-column">
        <div>
          <h1 className="fs-20 wow animate__animated  animate__bounce">Our Expertise</h1>
        </div>
        <div className="p-3 wow animate__animated  animate__bounce">
          <ul>
            <li className="fs-16 mb-2">AI & ML : Computer Vision, NLP, Predictive Analytics, Model Deployment</li>
            <li className="fs-16 mb-2">Generative AI : AI-powered content creation, text-to-image models, large language model applications</li>
            <li className="fs-16 mb-2">Full-Stack Development : Rect Js, React Native, REST APIs, FAST APIs</li>
            <li className="fs-16 mb-2">Data & Cloud : Data Analysis, MySQL/MongoDB, AWS, Google Cloud, Docker</li>
            <li className="fs-16 mb-2">Data Visualization : Interactive Power BI dashboards & business analytics</li>
          </ul>
        </div>
      </div>
      <div className="mt-5 d-flex flex-column">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="fs-26">Our Heros</h1>
        </div>
        <div className="mt-3 d-flex justify-content-center align-items-center mb-5 flex-wrap gap-5">
          <div className="d-flex flex-column justify-content-center align-items-center wow animate__animated  animate__fadeInLeft">
            <div className='logo-background'>
              <img src={Saikumar} alt="team-logo" className='team-logo' />
            </div>
            <div className='text-center d-flex flex-column justify-content-center align-items-center'>
              <p className='fs-16 color-text'>Sai Kumar <br /><p className='text-weight color-text '>Ai & Ml, Gen Ai, FullStack</p></p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center wow animate__animated  animate__fadeInUp">
            <div className='logo-background'>
              <img src={Pradeep} alt="team-logo" className='team-logo' />
            </div>
           <div className='text-center d-flex flex-column justify-content-center align-items-center'>
              <p className='fs-16 color-text'>Pradeep <br /><p className='text-weight color-text'>Front-end Developer</p></p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center wow animate__animated  animate__fadeInUp">
            <div className='logo-background'>
              <img src={Chanikya} alt="team-logo" className='team-logo' />
            </div>
           <div className='text-center d-flex flex-column justify-content-center align-items-center'>
              <p className='fs-16 color-text'>Chanikya <br /><p className='text-weight color-text'>Cloud & Digital Marketing</p></p>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center wow animate__animated  animate__fadeInRight">
            <div className='logo-background'>
              <img src={Gowtham} alt="team-logo" className='team-logo' />
            </div>
            <div className='text-center d-flex flex-column justify-content-center align-items-center'>
              <p className='fs-16 color-text'>Gowtham <br /><p className='text-weight color-text'>Data Analyst</p></p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default About;
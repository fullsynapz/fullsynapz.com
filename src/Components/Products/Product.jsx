import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EmotionSyphony from '../../assets/emotionyms.png'
import HairQuality from '../../assets/hairQuality.png'
import { useState } from 'react';


const Product = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <div className="d-flex flex-column">
                <div className="wow animate__animated animate__bounce">
                    <h1 className="fs-26 wow animate__animated animate__bounce">Products</h1>
                    <p className="fs-16">At FullSynapz, we specialize in delivering end-to-end project solutions with a focus on quality, innovation, and client satisfaction. Our services cover the complete lifecycle of a project from ideation to deployment & ensuring that your vision is transformed into a fully functional and scalable product.</p>
                </div>
                <div className="mt-5 mb-5">
                    <div className="row gap-3 d-flex justify-content-between">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 wow animate__animated animate__bounce projectcard-container-body wow animate__animated  animate__fadeInLeft d-flex flex-column align-items-center justify-content-between">
                            <div>
                                <img src={EmotionSyphony} alt="AI Solutions" className='image-container' />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h2 className="fs-20 mt-3 text-weight">Emotion Symphony</h2>
                                <Button className='btn-color' onClick={handleShow}>
                                    More Details
                                </Button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 wow animate__animated animate__bounce projectcard-container-body wow animate__animated  animate__fadeInRight d-flex flex-column align-items-center justify-content-between">
                            <div>
                                <img src={HairQuality} alt="AI Solutions" className='image-container' />
                            </div>
                            <div className='d-flex flex-column align-items-center justify-content-center'>
                                <h2 className="fs-20 mt-3 text-weight">Hair Quality</h2>
                                <Button className='btn-color' onClick={handleShow2}>
                                    More Details
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                </div>


                <Modal show={show2} onHide={handleClose2} className="mt-5">
                    <Modal.Header closeButton>
                        <Modal.Title>Hair Quality</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Hair Quality Analysis & Recommendation System is an intelligent AI-powered hair care advisor that identifies a user’s hair quality and provides personalized product and treatment recommendations. The system begins by asking a series of basic health and lifestyle questions to gather essential information about the user’s hair and scalp. It then prompts the user to upload a hair image, which is analyzed using a deep learning model built with convolutional neural networks (CNNs) to determine the hair type and quality—such as oily, dry, frizzy, or smooth. Based on the combined insights from the survey and image analysis, the system suggests suitable shampoos, conditioners, or treatments tailored to the user’s needs.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>



                <Modal show={show} onHide={handleClose} className="mt-5">
                    <Modal.Header closeButton>
                        <Modal.Title>Emotion Symphony</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Emotion Symphony is an AI-powered application designed to detect facial
                            expressions, analyze the user’s emotional state, and play a song that matches
                            the identified emotion. Developed using deep learning for emotion recognition
                            and integrated into a Python full-stack framework, the application works by
                            capturing a live image or webcam feed, processing the facial features through
                            a CNN-based model, and classifying emotions such as happiness, sadness, anger,
                            or surprise. Based on the detected emotion, it suggests and plays a relevant
                            song, creating a personalized and interactive music experience.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
}

export default Product;
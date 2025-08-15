const Contact = () => {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="wow animate__animated animate__bounce">
                    <h1 className="fs-26 wow animate__animated  animate__bounce">Contact Us</h1>
                </div>
                <div className="d-flex flex-column p-4 wow animate__animated  animate__bounce">
                    <p className="fs-16">If you have any questions or need further information, feel free to reach out to us.</p>
                    <div className="d-flex flex-column">
                        <p className="fs-20">Support Team</p>
                        <p>Phone : +91 8143156681</p>
                        <p>Email : fullsynapz@gmail.com</p>
                        <p>Address : Ayyappa Society Road Number 24, Madhapur, Hyderabad, Telangana</p>
                    </div>
                </div>

                <div className="d-flex flex-column p-4 wow animate__animated  animate__fadeInUp mb-5">
                    <h2 className="fs-20">Get in Touch</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required name="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" placeholder="Your Phone Number" required name="phoneNumber" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required name="message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                </div>

            </div>
        </>
    );
}
export default Contact;
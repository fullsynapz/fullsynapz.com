import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = {
                name,
                phoneNumber,
                email,
                message,
            };

            const response = await fetch(
                "https://fullsynapzbackend.onrender.com/emailSending",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            const data = await response.json();
            console.log("Response:", data);

            console.log("✅ Message sent successfully!");
            setName("");
            setPhoneNumber("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error:", error);
        }
    };


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
                    <form onSubmit={handleSubmit}>
                        <h2 className="fs-20">Get in Touch</h2>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required name="name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required name="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" placeholder="Your Phone Number" required name="phoneNumber"
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value)
                                }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required name="message"
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" >Send Message</button>
                    </form>

                </div>
            </div >
        </>
    );
}
export default Contact;
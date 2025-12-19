import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { cn } from "../lib/utils"
import toast from "react-hot-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser"

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(
        {
            submitting: false,
            success: false,
            error: false,
            message: "",
        });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,

        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({
            submitting: true,
            success: true,
            error: true,
            message: "",
        });
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            );
            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Message Sent Successfully",
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            })
        }
        catch (error) {
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Failed to sentMessage ",
            });
        }

        setTimeout(() => {
            toast.custom((t) => (
                <div
                    className={`
                ${t.visible ? "animate-toast-in" : "animate-toast-out"}
                fixed bottom-6 right-6
                bg-[#0b1220]
                border border-white/10
                rounded-xl
                shadow-2xl
                px-5 py-4
                w-65
                `}
                >
                                <p className="text-sm font-semibold text-white">
                                    Message sent!
                                </p>

                                <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                                    Thank you for your message. I’ll get back to you soon.
                                </p>
                            </div>
                        ), {
                            duration: 1000, 
                        }
                        );
        }, 1500);

    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >Get In <span className="text-primary">Touch</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I’m always open to discussing new opportunities, projects, or collaborations. Feel free to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 text-left">
                        <h3 className="text-2xl font-semibold mb-6 text-left">
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:kanishka0000012@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        kanishka0000012@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Chennai</p>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/in/kanishka-arunanandh-27b987399"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        linkedin.com/in/kanishkalinkedin
                                    </a>
                                </div>
                            </div>

                            {/* GitHub */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">GitHub</h4>
                                    <a
                                        href="https://github.com/kanishkaarunanandh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        github.com/kanishkaarunanandh
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <label htmlFor="name" className="block text-sm font-medium mb-5">Your Name</label>
                                <input type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                     autoComplete="off"
                                    name="name"
                                    id="name"
                                    required
                                    className="mb-5 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name..." />
                            </div>
                            <div className="space-y-6">
                                <label htmlFor="Email" className="block text-sm font-medium mb-5">Your Email</label>
                                <input type="email"
                                    onChange={handleInputChange}
                                     autoComplete="off"
                                     value={formData.email}
                                    name="email"
                                    id="email"
                                    required
                                    className="mb-5 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="example@gmail.com" />
                            </div>
                            <div className="space-y-6">
                                <label htmlFor="Message" className="block text-sm font-medium mb-5">Your Message</label>
                                <textarea
                                    onChange={handleInputChange}
                                    value={formData.message}
                                    name="message"
                                    id="message"
                                    required
                                    className="mb-5 w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..." />
                            </div>
                            <button type="submit"
                            disabled={formStatus.submitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                )}> {formStatus.submitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
import AboutMe from '../abouts/about';
import Project from '../projects/project';
import Contact from '../contacts/contact';
import { SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

export default function HomePage() {
    return (
        <section className="pt-24 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start items-center gap-12 px-6">

            <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                Hi, I&apos;m <span className="text-accent">RORN Makara</span>
            </h1>
            <h2 className="text-2xl md:text-2xl font-extrabold mb-2">
                I&apos;m <span className="text-accent">a Web Developer</span>
            </h2>
            <h3 className="mb-6">
                I'm a recent graduate with a degree in Computer Science from the Institute of Technology of Cambodia, and I’m excited to begin my professional career in web development.
            </h3>
            <h2 className="text-2xl md:text-2xl font-extrabold mb-2">
                My <span className="text-accent">Contacts</span>
            </h2>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
                <a href="https://mail.google.com/mail/?view=cm&to=rornmakara89@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-accent text-white rounded-lg hover:opacity-90"
                >
                    <SiGmail size={22} />
                </a>

                <a href="https://www.instagram.com/mmakaaraa?igsh=MXhxZThwanl6NHRqeQ%3D%3D&utm_source=qr"
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-accent text-white rounded-lg hover:opacity-90"
                >
                    <SiInstagram size={22} />
                </a>

                <a href="http://linkedin.com/in/rorn-makara"
                    target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-accent text-white rounded-lg hover:opacity-90"
                >
                    <SiLinkedin size={22} />
                </a>
            </div>
            <div className='mt-36'>
                <AboutMe />
            </div>
            <div className='mt-20'>
                <Project />
            </div>
            <div className='mt-36'>
                <Contact />
            </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
            <img
                src="/me.jpg"
                alt="Profile"
                className="w-80 h-auto md:w-96 rounded-full object-cover"
            />
            </div>

        </div>
        </section>
    );
}
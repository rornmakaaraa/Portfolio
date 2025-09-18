import AboutMe from '../abouts/about';
import Project from '../projects/project';

export default function HomePage() {
    return (
        <section className="pt-24 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start items-center gap-12 px-6">

            <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                Hi, I&apos;m <span className="text-accent">RORN Makara</span>
            </h1>
            <h2 className="text-2xl md:text-2xl font-extrabold mb-2">
                I&apos;m <span className="text-accent">a Web Developer</span>
            </h2>
            <h2 className="text-xl mb-6">I’m a recent graduate with a degree in Computer Science from the Institute of Technology of Cambodia, and I’m excited to begin my professional career in web development.
            </h2>
            <div className="flex justify-center md:justify-start gap-4 mb-6">
                <a href="/RORN_Makara_CV.pdf" download>
                <button className="bg-accent text-white px-6 py-2 rounded-lg hover:opacity-90">
                    Download CV
                </button>
                </a>
            </div>
            <div className='mt-60'>
                <AboutMe />
            </div>
            <Project />
            </div>

            <div className="md:w-1/2 flex justify-center">
            <img
                src="/ma.jpg"
                alt="Profile"
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-lg"
            />
            </div>

        </div>
        </section>
    );
}
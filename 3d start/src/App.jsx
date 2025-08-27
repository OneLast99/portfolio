import Header from "./components/Header";
import Heros from "./components/Heros"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main>
      <Header />
      <Heros />

      {/* ✅ Updated Description Section */}
      <section
        id="description"
        className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black"
      >
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">
          Description
        </h2>

        <p
          data-aos="fade-right"
          className="max-w-2xl text-lg leading-relaxed text-center"
        >
          I am a technically driven and finance-curious Computer Science undergrad 
          with a strong foundation in backend systems, cloud deployment, and real-time analytics. 
          Passionate about scalable software design, secure architectures, and impactful products. 
          My goal is to contribute to companies by creating solutions that are reliable, innovative, 
          and scalable, while constantly expanding my expertise in emerging technologies.
        </p>

        {/* ✅ Logos Row */}
        <div className="flex gap-8 mt-8">
          <i className="bx bxl-java text-5xl text-red-600" data-aos="zoom-in"></i>
          <i className="bx bxl-python text-5xl text-yellow-500" data-aos="zoom-in" data-aos-delay="200"></i>
          <i className="bx bxl-javascript text-5xl text-yellow-400" data-aos="zoom-in" data-aos-delay="400"></i>
          <i className="bx bxl-react text-5xl text-blue-500" data-aos="zoom-in" data-aos-delay="600"></i>
          <i className="bx bxl-aws text-5xl text-orange-500" data-aos="zoom-in" data-aos-delay="800"></i>
        </div>
      </section>

      {/* ✅ Updated Academics Section */}
      <section
        id="academics"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black"
      >
        {/* Background Watermark */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/vit-ap-building.png')" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-6 flex items-center justify-center gap-3"
          >
            <i className="bx bxs-graduation text-4xl text-orange-500"></i>
            Academics
          </h2>
          <p
            data-aos="fade-left"
            className="max-w-2xl text-lg leading-relaxed"
          >
            <b>B.Tech in Computer Science and Engineering & Specialization in Data Analytics</b> at VIT-AP University, Andhra Pradesh.
            <br />
            Graduation Year: 2026 | CGPA: <b>8.31</b>
          </p>
        </div>
      </section>

      {/* ✅ Updated Tech Stack Section */}
      <section
        id="techstack"
        className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black"
      >
        <h2 data-aos="zoom-in" className="text-4xl font-bold mb-6 flex items-center gap-3">
          <i className="bx bx-code-alt text-4xl text-blue-600"></i>
          Tech Stack
        </h2>

        <ul data-aos="fade-right" className="text-lg space-y-4 max-w-xl">
          <li className="flex items-center gap-3">
            <i className="bx bxl-java text-3xl text-red-600"></i>
            <i className="bx bxl-python text-3xl text-yellow-500"></i>
            <i className="bx bxl-javascript text-3xl text-yellow-400"></i>
            <span><b>Languages:</b> Java, Python, JavaScript</span>
          </li>

          <li className="flex items-center gap-3">
            <i className="bx bxl-html5 text-3xl text-orange-500"></i>
            <i className="bx bxl-css3 text-3xl text-blue-500"></i>
            <i className="bx bxl-react text-3xl text-cyan-500"></i>
            <span><b>Frontend:</b> HTML, CSS, React</span>
          </li>

          <li className="flex items-center gap-3">
            <i className="bx bxl-nodejs text-3xl text-green-600"></i>
            <span><b>Backend:</b> Node.js, Express</span>
          </li>

          <li className="flex items-center gap-3">
            <i className="bx bxs-data text-3xl text-gray-700"></i>
            <span><b>Databases:</b> MySQL, MongoDB, Redis, Neo4j</span>
          </li>

          <li className="flex items-center gap-3">
            <i className="bx bxl-aws text-3xl text-orange-500"></i>
            <span><b>Cloud:</b> AWS (EC2, S3)</span>
          </li>

          <li className="flex items-center gap-3">
            <i className="bx bxl-git text-3xl text-red-500"></i>
            <i className="bx bxl-docker text-3xl text-blue-500"></i>
            <span><b>Tools:</b> Git, Docker</span>
          </li>
        </ul>
      </section>



{/* ✅ Updated Certifications Section */}
<section
  id="certifications"
  className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-black"
>
  <h2 data-aos="fade-up" className="text-4xl font-bold mb-10 flex items-center gap-3">
    <i className="bx bxs-certification text-4xl text-green-600"></i>
    Certifications
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {/* Oracle GenAI */}
    <div className="flex flex-col items-center">
      <a href="/Certificates/oracale-genai.png" target="_blank" rel="noopener noreferrer">
        <img
          src="/Certificates/oracale-genai.png"
          alt="Oracle GenAI Certificate"
          className="w-64 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </a>
      <p className="mt-3 font-medium text-lg">Oracle Gen AI</p>
    </div>

    {/* Azure DP-900 */}
    <div className="flex flex-col items-center">
      <a href="/Certificates/azure-dp900.png" target="_blank" rel="noopener noreferrer">
        <img
          src="/Certificates/azure-dp900.png"
          alt="Azure DP-900 Certificate"
          className="w-64 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </a>
      <p className="mt-3 font-medium text-lg">Azure DP-900</p>
    </div>

    {/* Zerodha Varsity */}
    <div className="flex flex-col items-center">
      <div className="w-64 h-40 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg">
        <p className="italic text-gray-600 text-center">Zerodha Varsity (Not Uploaded)</p>
      </div>
      <p className="mt-3 font-medium text-lg">Zerodha Varsity</p>
    </div>

    {/* AWS Fundamentals */}
    <div className="flex flex-col items-center">
      <div className="w-64 h-40 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg">
        <p className="italic text-gray-600 text-center">AWS Fundamentals (Not Uploaded)</p>
      </div>
      <p className="mt-3 font-medium text-lg">AWS Cloud Fundamentals</p>
    </div>
  </div>
</section>


      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">Achievements</h2>
        <ul data-aos="zoom-in-up" className="list-disc text-lg text-gray-300 space-y-2 max-w-2xl">
          <li>Developed SwiftTrack Courier Management System — reduced processing time by 20%.</li>
          <li>Built a real-time Network Analytics Tool handling 1000+ packets/sec.</li>
          <li>Solved 60+ problems on LeetCode.</li>
        </ul>
      </section>
    </main>
  );
}

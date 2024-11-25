

export default function AboutMe() {
    return (
      <section
        id="aboutme"
        className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-red-300 via-slate-100 to-blue-100 text-gray-800"
      >
        <h2 className="text-4xl font-extrabold font-sans text-blue-700 mb-6">
          About Me
        </h2>
        <p className="text-lg max-w-3xl text-left font-light leading-relaxed text-gray-600">
          Hello! I am a passionate to become<span className="text-blue-500 font-medium"> Full Stake Developer </span> 
          with a strong interest in <span className="text-blue-500 font-medium"> Artificial Intelligence </span>. 
          I thrive on exploring cutting-edge technologies and building innovative projects that solve real-world problems. 
          My journey in development is fueled by curiosity, a love for learning, and a commitment to creating impactful solutions.
        </p>
        <p className="text-lg max-w-3xl text-left font-light leading-relaxed text-gray-600 mt-4">
          With a foundation in programming and a vision for leveraging AI to drive the future, I aim to be at the 
          forefront of innovation. Let's shape the world, one line of code at a time.
        </p>
      </section>
    );
  }
  
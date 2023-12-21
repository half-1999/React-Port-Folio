import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-1 ">
            Passionate MERN stack developer, architecting dynamic and scalable
            websites.🌐 Proficient in MongoDB, Express.js, React.js, and Node.js
            to craft responsive user experiences 💻.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 rounded-[5%]"
                src="assets/skills.jpeg"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10 rounded-[5%]"
              src="assets/skills.jpeg"
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Front End  */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Front End Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-5 list-disc ml-5 text-xl">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
            <li>Material UI</li>
            <li>JavaScript (ES6+)</li>
            <li>React Js</li>
            <li>Next Js</li>
            <li>Redux </li>
          </ul>
        </motion.div>

        {/* Back End */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Back End Technologies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-5 list-disc ml-5 text-xl">
            <li>Node Js</li>
            <li>Express Js</li>
            <li>Mongo DB</li>
            <li>RESTful API Design</li>
            <li>Authentication and Authorization</li>
          </ul>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Others
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-5 list-disc ml-5 text-xl">
            <li>GitHub</li>
            <li>Responsive Web Design</li>
            <li>Visual Studio Code</li>
            <li>Project Management</li>
            <li>API Testing</li>
            <li>Web Hosting Services</li>
            <li>Command Line Interface</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

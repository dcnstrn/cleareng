import { motion } from "framer-motion";
import { aboutFeaturs } from "../constants";
import { about } from "../constants/images";
import { leftSideVariants, rightSideVariants } from "../constants/motion";

const Platform = () => {
  return (
    <section id="platform" className="flex items-center">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Left Side */}
          <motion.div
            variants={leftSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex lg:w-[47%] w-full"
          >
            <div className="lg:max-w-[500px] max-w-none max-h-[450px] w-full rounded-4xl overflow-hidden">
              <img src={about} alt="about" />
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={rightSideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-y-8 lg:w-[53%] w-auto flex-shrink-0 text-center lg:text-start "
          >
            <div className="flex flex-col gap-y-4">
              <h2 className="relative section-title-after text-h2 text-gray-10">
                Your Trusted Source for Quality Online Education
              </h2>
              <p className="text-base font-medium text-gray-60">
                Charging a Path from Passion to Excellence in Onile Education -
                Gulding You Toward Your Aspirations and Lifelong Learning Goals
              </p>
            </div>
            {/* <div className="flex flex-wrap justify-center gap-4">
              {aboutFeaturs.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex flex-col basis-[240px] flex-grow border border-solid border-gray-10 rounded-3xl p-4 text-start hover:bg-gray-10 transition-colors duration-300"
                >
                  <p className="text-xl font-semibold text-gray-10 !leading-[normal] group-hover:text-white">
                    {feature.title}
                  </p>
                  <p className="text-base font-medium text-gray-60 !leading-[normal] group-hover:text-gray-90">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Platform;

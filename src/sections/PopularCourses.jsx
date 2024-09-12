import { useState } from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { toggleImage } from "../constants/images";
import { rightSvg } from "../constants/images";
import { centerVariants } from "../constants/motion";

const names = [
  {
    heading: "Startup",
    price: 41,
    user: "per user, per month",
    button: "Start My 15-day Trial",
    profiles: "5 Social Profiles",
    posts: "5 Scheduled Posts Per Profile",
    templates: "400+ Templated",
    view: "Calendar View",
    support: "24/7 Support",
    category: "yearly",
  },
  {
    heading: "Business",
    price: 29,
    user: "per user, per month",
    button: "Start My 15-day Trial",
    profiles: "10 Social Profiles",
    posts: "5 Scheduled Posts Per Profile",
    templates: "600+ Templated",
    view: "Calendar View",
    support: "24/7 VIP Support",
    category: "yearly",
  },
  {
    heading: "Agency",
    price: 139,
    user: "per user, per month",
    button: "Start My 15-day Trial",
    profiles: "100 Social Profiles",
    posts: "100 Scheduled Posts Per Profile",
    templates: "800+ Templated",
    view: "Calendar View",
    support: "24/7 VIP Support",
    category: "yearly",
  },
  {
    heading: "Agency",
    price: 139,
    user: "per user, per yearly",
    button: "Start My 15-day Trial",
    profiles: "100 Social Profiles",
    posts: "100 Scheduled Posts Per Profile",
    templates: "800+ Templated",
    view: "Calendar View",
    support: "24/7 VIP Support",
    category: "monthly",
  },
  {
    heading: "Startup",
    price: 41,
    user: "per user, per yearly",
    button: "Start My 15-day Trial",
    profiles: "5 Social Profiles",
    posts: "5 Scheduled Posts Per Profile",
    templates: "400+ Templated",
    view: "Calendar View",
    support: "24/7 Support",
    category: "monthly",
  },
  {
    heading: "Business",
    price: 29,
    user: "per user, per yearly",
    button: "Start My 15-day Trial",
    profiles: "10 Social Profiles",
    posts: "5 Scheduled Posts Per Profile",
    templates: "600+ Templated",
    view: "Calendar View",
    support: "24/7 VIP Support",
    category: "monthly",
  },
];

const PopularCourses = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("monthly");

  const toggleEnabled = () => {
    setEnabled(!enabled);
    setSelectedCategory(enabled ? "monthly" : "yearly");
  };

  const filteredData = names.filter(
    (items) => items.category === selectedCategory
  );
  return (
    <section id="courses">
      <motion.div
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "0px 0px -200px 0px", once: true }}
        className="container  max-w-7xl  lg:px-8 "
      >
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Manage All Your Social Media <br /> Profiles From One Place.
        </h3>

        <div className="md:flex md:justify-around mt-10">
          <div className="flex gap-5 justify-center items-center md:justify-start">
            <img
              src={rightSvg}
              alt="right-icon"
              className="w-[21px] h-[14px] "
            />
            <h4 className="text-lg font-semibold">Free 15-day trial</h4>
          </div>
          <div className=" flex gap-5 justify-center items-center md:justify-start">
            <img
              src={rightSvg}
              alt="right-icon"
              className="w-[21px] h-[14px]"
            />
            <h4 className="text-lg font-semibold">Unlimited Team Members</h4>
          </div>
          <div className="flex gap-5 justify-center items-center md:justify-start">
            <img
              src={rightSvg}
              alt="right-icon"
              className="w-[21px] h-[14px]"
            />
            <h4 className="text-lg font-semibold">Cancel Anytime</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text mb-5">get 3 months free</div>
          <img
            src={toggleImage}
            alt="toggle-image"
            className="toggleImage w-[24px] h-[24px]"
          />
          <div className="flex justify-center">
            <h3 className="text-sm font-medium mr-5">Billed Yearly</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className={`${
                enabled ? "bg-darkpurple" : "bg-darkpurple"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only text-black">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className="text-sm font-medium ml-5">Billed Monthly</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 ">
          {filteredData.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                ${items.price}
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {items.user}
              </p>
              <button className="btn btn-primary mb-6">{items.button}</button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                {items.profiles}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.posts}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.templates}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.view}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.support}
              </h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PopularCourses;

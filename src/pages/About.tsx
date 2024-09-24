import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const NextLogo = require("../assets/logos/NextLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const SqlLogo = require("../assets/logos/SqlLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const MongoDBLogo = require("../assets/logos/MongoDBLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const JavaLogo = require("../assets/logos/java-logo-1.png");
const AngularLogo = require("../assets/logos/angularlogo.png");
const VueLogo = require("../assets/logos/vue.png");
const amazon = require("../assets/logos/amazon.png");

const skills = [
  { name: "TypeScript", logo: TypescriptLogo },
  { name: "Java", logo: JavaLogo },
  { name: "Python", logo: PythonLogo },
  { name: "Angular", logo: AngularLogo },
  { name: "JavaScript", logo: JsLogo },
  { name: "React", logo: ReactLogo },
  { name: "Vue.js", logo: VueLogo },
  { name: "SQL", logo: SqlLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Firebase", logo: FirebaseLogo },
  { name: "Nodejs", logo: NodeJSLogo },
  { name: "MongoDB", logo: MongoDBLogo },
  { name: "AWS", logo: amazon },
];

const About = () => {
  return (
    <div
      id="About"
      className="flex mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <p>
            I am a motivated software engineering student, specializing in
            various technologies and languages. I have experience utilizing
            frontend frameworks such as Angular and React.js, as well as
            languages such as Typescript, Java and Python. Please view my
            projects to get a better understanding of my abilities!
          </p>
          <br />
          <br />
          <code>My Technologies:</code>
          <List list={skills} />
        </div>
      </div>
    </div>
  );
};

export default About;

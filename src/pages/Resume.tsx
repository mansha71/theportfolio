import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1J3zyo4B4a35K4pYKw4oOvXmkuJk_m4wO/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-20 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="flex items-center">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />
          <div className="text-[#e6f1ff] text-4xl mt-5">Resume</div>
          <div className="border-b border-b-[#e6f1ff] border-opacity-25 w-full ml-4"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-xl mt-5">
        <button
          onClick={handleDownload}
          className="border border-lightblue_vs text-lightblue_vs mt-5 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs"
        >
          Download My Resume
        </button>
        <div className="pt-10">
          <div className="text-yellow_vs text-2xl mb-2">Education</div>
          <div className="ml-4 text-lg leading-relaxed">
            <div className="text-blue_vs">McMaster University</div>
            <div className="italic text-lightblue_vs">
              Bachelor's of Software Engineering Coop
            </div>
            <div className="text-brown_vs">• Sept 2021 - April 2026</div>
            <div className="text-blue_vs">Relevant Courses:</div>
            <div className="text-white_vs">
              Software Design, Concurrent System Design, Object-Oriented
              Programming, Data Structures and Algorithms, Computer
              Architecture, Databases
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="text-yellow_vs text-2xl mb-2">Experience</div>
          <div className="ml-4 text-lg leading-relaxed">
            <div className="text-blue_vs">Software Engineer Intern</div>
            <div className="italic text-lightblue_vs">
              Citi Bank - Missisauga, Canada
            </div>
            <div className="text-brown_vs">• May 2025 - August 2025</div>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li>Developed Angular features for YARDS, a reference data platform supporting trading desks, improving workflows.
                </li>
                <li>Implemented high-volume Java/Spring Boot APIs integrated with Oracle and STAN databases to validate and update reference datasets, reducing manual Swagger requests and saving the production team 10+ hours/week.
                </li>
                <li>Deployed services to production via OpenShift and Harness; delivered incrementally in Agile sprints with code reviews and CI/CD pipelines.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="ml-4 text-lg leading-relaxed">
            <div className="text-blue_vs">Software Engineer Intern</div>
            <div className="italic text-lightblue_vs">
              Wave - Toronto, Canada
            </div>
            <div className="text-brown_vs">• Jan 2025 - April 2025</div>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li> Developed and unit-tested new React/TypeScript UI flows and Ruby-on-Rails APIs, integrating them into our microservice architecture and packaging each service in its own Docker image for local and staging environments. 
                </li>
                <li>Revamped end-to-end testing setup using Playwright, CircleCI, and Docker, reducing test runtime by 45% and minimizing flaky tests for faster, more reliable deployments. 
                </li>
                <li>Built a logger package to report errors to Sentry and Datadog, integrated into 4+ projects, improving observability.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="ml-4 text-lg leading-relaxed">
            <div className="text-blue_vs">Software Developer Intern</div>
            <div className="italic text-lightblue_vs">
              SOTI - Missisauge, Canada
            </div>
            <div className="text-brown_vs">• May 2024 - December 2024</div>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li>
                  Contributed to the development and optimization of user
                  interfaces and frontend features using Angular, HTML, CSS, and
                  TypeScript, enhancing the functionality and user experience of
                  SOTI Internet of Things (IoT) platform.
                </li>
                <li>
                  Participated in Agile development processes, including daily
                  stand-ups and three-week sprints, utilizing Jira for issue
                  tracking and Git for version control, ensuring effective
                  project management and team collaboration.
                </li>
                <li>
                  Implemented continuous integration and deployment (CI/CD)
                  pipelines with Jenkins, maintaining a stable and reliable
                  codebase through automated testing and regular updates.
                </li>
                <li>
                  Collaborated with QA teams to develop and execute test plans,
                  leveraging testing tools to ensure the quality and reliability
                  of the software. Assisted in identifying and fixing bugs to
                  improve overall performance.
                </li>
                <li>
                  Collaborated with a team of developers, gaining exposure to a
                  wide range of tasks from fixing bugs to developing new
                  features, providing hands-on experience in a dynamic work
                  environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="ml-4 text-lg leading-relaxed">
            <div className="text-blue_vs">Web Developer</div>
            <div className="italic text-lightblue_vs">
              McMaster Sumobot - Hamilton, Canada
            </div>
            <div className="text-brown_vs">• Sept 2023 - April 2024</div>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li>
                  Managed and maintained a highly dynamic website, employing a
                  versatile tech stack including Vue.js, HTML, Javascript, CSS,
                  and Node.js. Presented a seamless user experience,
                  consistently meeting user expectations.
                </li>
                <li>
                  Collaborated with a diverse team to ensure timely updates
                  based on client feedback. Streamlined development processes
                  with Git, Yarn, and Node.js, and enhanced interactivity using
                  innovative JavaScript techniques.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="ml-4 text-lg leading-relaxed">
            <div className="text-blue_vs">Programming Tutor</div>
            <div className="italic text-lightblue_vs">
              Self - Brampton, Canada
            </div>
            <div className="text-brown_vs">• May 2023 - Sept 2023</div>
            <div className="mt-2">
              <ul className="list-disc list-inside">
                <li>
                  Guided students in mastering Python fundamentals, including
                  key programming concepts and essential algorithm/data
                  structure principles, through interactive and engaging
                  methods, assignments, and hands-on exercises. - Designed
                  numerous thoughtful lessons, fostering problem-solving skills
                  and imparting Python programming expertise.
                </li>
                <li>
                  Designed numerous thoughtful lessons, fostering
                  problem-solving skills and imparting Python programming
                  expertise.
                </li>
                <li>
                  Mentored students to apply core knowledge to real-world
                  projects, equipping them with practical abilities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

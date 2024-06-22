import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  const handleDownload = () => {
    // Path to your resume file
    const resumeUrl = "https://drive.google.com/file/d/1Pg9_HDp_Q-Pa18bucZTg-AaLaG7go9HI/view";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-20 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <button
          onClick={handleDownload}
          className="border border-lightblue_vs text-lightblue_vs mt-5 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs"
        >
          <code>Download My Resume</code>
        </button>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">McMaster University</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Bachelor's of Software Engineering Coop
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • Sept 2021 - April 2026
            </code>
            <br />
            <code className="text-xs text-blue_vs">Relevant Courses: </code>
            <code className="text-xs text-white_vs">
              {" "}
              Software Design, Concurrent System Design, Object-Oriented
              Programming, Data Structures and Algorithms, Computer
              Architecture, Databases
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Experience</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Developer Intern</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              SOTI Inc - Missisauga, Canada{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2024 - December 2024
            </code>
            <br />
            <code className="text-sm">
              <br />• Contributed to the development and optimization of user
              interfaces and frontend features using Angular, HTML, CSS, and
              TypeScript, enhancing the functionality and user experience of
              SOTI Internet of Things (IoT) platform.
              <br />• Participated in Agile development processes, including
              daily stand-ups and three-week sprints, utilizing Jira for issue
              tracking and Git for version control, ensuring effective project
              management and team collaboration
              <br />• Implemented continuous integration and deployment (CI/CD)
              pipelines with Jenkins, maintaining a stable and reliable codebase
              through automated testing and regular updates.
              <br />• Collaborated with QA teams to develop and execute test
              plans, leveraging testing tools to ensure the quality and
              reliability of the software. Assisted in identifying and fixing
              bugs to improve overall performance.
              <br />• Collaborated with a team of developers, gaining exposure
              to a wide range of tasks from fixing bugs to developing new
              features, providing hands-on experience in a dynamic work
              environment
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs"></code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Web Developer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              McMaster Sumobot - Hamilton, Canada{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • May 2024 - December 2024
            </code>
            <br />
            <code className="text-sm">
              <br />• Managed and maintained a highly dynamic website, employing
              a versatile tech stack including Vue.js, HTML, Javascript, CSS,
              and Node.js. Presented a seamless user experience, consistently
              meeting user expectations.
              <br />• Collaborated with a diverse team to ensure timely updates
              based on client feedback. Streamlined development processes with
              Git, Yarn, and Node.js, and enhanced interactivity using
              innovative JavaScript techniques.
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

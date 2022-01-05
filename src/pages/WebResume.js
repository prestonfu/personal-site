import Experience from "./experience";
import Education from "./education";
import HonorsAwards from "./honors-awards";
import Skills from "./skills";

const Resume = () => {
  return (
    <div>
      <div className="h-auto">
        <div className="mx-auto max-w-6xl sm:pl-16 z-0">
          <div className="h-12" />
          <h2 className="text-center sm:text-center page-header">
            <b>RESUME</b>
          </h2>
          <div className="h-8" />
          <div className="flex justify-center items-center space-x-10">
            <a href="#experience"><p className="footer-link font-bold">EXPERIENCE</p></a>
            <a href="#education"><p className="footer-link font-bold">EDUCATION</p></a>
            <a href="#honors-awards"><p className="footer-link font-bold">HONORS &amp; AWARDS</p></a>
            <a href="#skills"><p className="footer-link font-bold">SKILLS</p></a>
            <a href="/files/Resume.pdf" target="_blank" rel="noreferrer">
              <button className="outline-button-sm">
                <b>SAVE PDF</b>
              </button>
            </a>
          </div>
        </div>
        <div id="experience"><Experience /></div>
        <div id="education"><Education /></div>
        <div id="honors-awards"><HonorsAwards /></div>
        <div id="skills"><Skills /></div>
      </div>
    </div>
  )
}

export default Resume
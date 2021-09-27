

const Resume = () => {
  return (
    <div>
      <div className="h-auto bg-white">
        <div className="mx-auto max-w-6xl sm:pl-16 z-0">
          <div className="h-12" />
          <h2 className="text-center sm:text-center page-header">
            <b>RESUME</b>
          </h2>
          <div className="h-8" />
          <div className="flex justify-center items-center">
            <a href="../../files/Resume.pdf" target="_blank">
              <button className="outline-button-sm mt-6">
                <b>SAVE PDF →</b>
              </button>
            </a>
          </div>

          <div className="h-8" />
          <object data="../../files/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="800px"> 
            <p>It appears you don't have a PDF plugin for this browser.
            No worries — click the button above for the PDF file.</p>  
          </object>
          {/* <iframe src="../../files/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0" title="Resume" className="h-screen" width="100%" height="425" /> */}
        </div>
      </div>
    </div>
  )
}

export default Resume
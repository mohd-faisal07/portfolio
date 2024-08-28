import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

const resumeLink =
  "https://raw.githubusercontent.com/github-name/pdf-renderer/main/src/assets/resume.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    // default width is 1200px, but this hook sets the width of the resume to be the inner width of whatever screen the user is using
    setWidth(window.innerWidth);
  }, []);

  return (
    <Document file={resumeLink} className="">
      <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
    </Document>
  );
}
export default Resume;

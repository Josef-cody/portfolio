import React from "react";

const FileDownloadCV = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Josef.abliz-CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Josef.abliz-CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <i class="fa-solid fa-download sideBarIcon filedown" onClick={onButtonClick}>&nbsp; CV</i>
    </>
  );
};

export default FileDownloadCV;

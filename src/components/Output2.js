import React, { Component } from "react";
import "./Output.css";

class Output2 extends Component {
  componentDidMount() {
    const iFrame = document.getElementById("iFrame2").contentWindow.document;
    const htmlTextArea = document.getElementById("htmlTextarea2");
    const cssTextArea = document.getElementById("cssTextarea2");
    const jsTextArea = document.getElementById("jsTextarea2");
    const runBtn = document.getElementById("runBtn2");
    runBtn.addEventListener("click", function () {
      iFrame.open();
      iFrame.writeln(
        htmlTextArea.value +
          "<style>" +
          cssTextArea.value +
          "</style>" +
          "<script>" +
          jsTextArea.value +
          "</script>"
      );
      iFrame.close();
    });
  }

  render() {
    return (
      <div>
        <iframe id="iFrame2" title="Output"></iframe>
      </div>
    );
  }
}

export default Output2;

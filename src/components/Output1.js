import React, { Component } from "react";
import "./Output.css";

class Output1 extends Component {
  componentDidMount() {
    const iFrame = document.getElementById("iFrame1").contentWindow.document;
    const htmlTextArea = document.getElementById("htmlTextarea1");
    const cssTextArea = document.getElementById("cssTextarea1");
    const jsTextArea = document.getElementById("jsTextarea1");
    const runBtn = document.getElementById("runBtn1");
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
        <iframe id="iFrame1" title="Output"></iframe>
      </div>
    );
  }
}

export default Output1;

import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./MyTabs.css";

class MyTabs2 extends Component {
  render() {
    return (
      <Tabs
        transition={false}
        defaultActiveKey="html"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="html" title="HTML">
          <textarea id="htmlTextarea2">
            {task2html}
          </textarea>
        </Tab>
        <Tab eventKey="css" title="CSS">
          <textarea id="cssTextarea2">
          {task2css}
          </textarea>
        </Tab>
        <Tab eventKey="js" title="JS">
          <textarea id="jsTextarea2"></textarea>
        </Tab>
      </Tabs>
    );
  }
}

export default MyTabs2;

const task2html = `<div class="box" id="blue">1</div>
<div class="box" id="red">2</div>
<div class="box" id="green">3</div>
`

const task2css = `div {
    height: 200px;
    width: 200px;
 }
 #blue {
     background-color: rgb(173,216,230);
   }
   
   #red {
     margin: -100px 0px 0px 100px;
     background-color: rgb(255,204,203);
   }
   
   #green {
     margin: -100px 0px 0px 200px;
     background-color: rgb(207,232,220);
   }`
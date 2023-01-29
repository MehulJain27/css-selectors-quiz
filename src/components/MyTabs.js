import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import {TASKS} from '../tasks'
import "./MyTabs.css";

class MyTabs extends Component {
  render() {
    return (
      <Tabs
        transition={false}
        defaultActiveKey="html"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="html" title="HTML">
          <textarea id="htmlTextarea">
            {taskhtml}
          </textarea>
        </Tab>
        <Tab eventKey="css" title="CSS">
          <textarea id="cssTextarea">
            {taskcss}
          </textarea>
        </Tab>
        <Tab eventKey="js" title="JS">
          <textarea id="jsTextarea"></textarea>
        </Tab>
      </Tabs>
    );
  }
}

export default MyTabs;


const taskcss = `.container {
  padding: 1em;
}
.target {
 padding: 1em;
 background: rgb(207,232,220);
 text-align: center;
 width: 150px;
 height: 150px;
}`
const taskhtml = `<div class="container">
   
 <p> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>

<div class="target">Target</div>

 <p> Lorem ipsum may be used as a placeholder before final copy is available. qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt </p>

</div>
 `
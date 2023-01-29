import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./MyTabs.css";

const task1css = `.container {
    padding: 1em;
}

.content {
    padding: 1em 3em 3em 2em;
    margin-left: 160px;
}

.sidebar {
    background-color: rgb(207,232,220);
    padding: 1em;
    margin-top: 2em;
    float: left;
    width: 125px;
}`

  const task1html = `<div class="container">
  <div class="sidebar">
    <p>This is the sidebar. It should remain in position as the content scrolls.</p>
  </div>
  <div class="content">
    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
    <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
    <p>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
    <p>Lorem ipsum may be used as a placeholder before final copy is available. qui dolorem ipsum, quia dolor sit amet consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </p> 
  </div>
</div>
    `

class MyTabs1 extends Component {
  render() {
    return (
      <Tabs
        transition={false}
        defaultActiveKey="html"
        id="uncontrolled-tab-example"
      >
        <Tab eventKey="html" title="HTML">
          <textarea id="htmlTextarea1">
            {task1html}
          </textarea>
        </Tab>
        <Tab eventKey="css" title="CSS">
          <textarea id="cssTextarea1">
          {task1css}
          </textarea>
        </Tab>
        <Tab eventKey="js" title="JS">
          <textarea id="jsTextarea1"></textarea>
        </Tab>
      </Tabs>
    );
  }
}

export default MyTabs1;

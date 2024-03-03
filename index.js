const Page = (
  <page>
    <h1 className="page--title">Fun facts about React</h1>
    <ul className="page--facts">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </page>
);

const Nav = (
  <nav>
    <img src="../react-icon-small.png" className="nav--icon" />
    <h3 className="nav--logo_text">ReactFacts</h3>
    <h4 className="nav--title">React Course - Project 1</h4>
  </nav>
);
ReactDOM.render(Nav, document.getElementById("root"));
ReactDOM.render(Page, document.getElementById("content"));

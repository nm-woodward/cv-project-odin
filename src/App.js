import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div id="aside">
        <div className="sectionHeader">Skills</div>
      </div>
      <div id="main">
        <div id="heading">
          <div id="fullName">Noah Woodward</div>
          <div id="title">Software Engineer</div>
          <div id="profile">
            <h2 id="profileHeader">Profile</h2>
            <div id="profileBody">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia d
              </p>
            </div>
          </div>
        </div>
        <div id="education">
          <div className="sectionHeader">Education</div>
        </div>
        <div id="experience">
          <div className="sectionHeader">Experience</div>
        </div>
      </div>
    </div>
  );
}

export default App;

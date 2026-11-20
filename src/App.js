import React, { useState } from "react";
import { About, Contact, Experience, Home, Nav, Skills } from "./components";

function App() {
  const [currentPage, handlePageChange] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home></Home>;
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
    }
  };
  return (
    <div className="App">
      {currentPage === "Home" ? (
        <section>
          <div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
          <div className="body">{renderPage(currentPage)}</div>
        </section>
      ) : (
        <section>
          <div>
            <Nav
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            <div className="body">{renderPage(currentPage)}</div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;

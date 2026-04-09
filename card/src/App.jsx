// App.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const cards = [
    {
      title: "Bootstrap Cards",
      text: "Cards provide a flexible and extensible content container."
    },
    {
      title: "Grid System",
      text: "Bootstrap grid helps in building responsive layouts easily."
    },
    {
      title: "Reusable UI",
      text: "Components can be reused across the application."
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        Card-Based Layout Using Bootstrap
      </h2>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4" key={index}>
            <div className="card custom-card mb-4">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <button className="btn btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

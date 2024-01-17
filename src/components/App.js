import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Section from "./Section";
import Footer from "./Footer";

const sectionData = [
  {
    name: "Skills",
    para: "ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quas cupiditate voluptatum soluta ab autem atque corrupti itaque architecto, nobis assumenda enim ipsum doloremque unde. Itaque alias ",
  },
  {
    name: "Education",
    para: "ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quas cupiditate voluptatum soluta ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quas cupiditate voluptatum soluta ab autem atque corrupti itaque architecto, nobis assumenda enim ipsum doloremque unde. Itaque ab autem atque corrupti itaque architecto, nobis assumenda enim ipsum doloremque unde. Itaque alias ",
  },
  {
    name: "Projects",
    para: "ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quas cupiditate voluptatum soluta ab autem atque corrupti itaque architecto, nobis assumenda enim ipsum doloremque unde. Itaque ipsum dolor sit amet consectetur adipisicing elit. Veritatis quas cupiditate voluptatum soluta ab autem atque corrupti itaque architecto, nobis assumenda enim ipsum doloremque unde. Itaque alias ",
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <About />
      {sectionData.map((e, i) => {
       return <Section name={e.name} para={e.para} />;
      }) 
      }
      <Footer />
    </div>
  );
}

export default App;

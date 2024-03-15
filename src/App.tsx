import React from "react";
import { Card } from "sheninthjr-card";

function App() {
  const dummyData = {
    title: "Example Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Tag1", "Tag2", "Tag3"],
  };
  return (
    <>
      <Card {...dummyData} />
    </>
  );
}

export default App;

import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
const App = () => {
  const text = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const doc = new jsPDF();
    doc.text(text.current.value, 10, 10);
    doc.save("text.pdf");
  }

  return (
    <form className="wrapper" onSubmit={handleSubmit}>
      <b>Matnni pdf formatga o'girib yuklab oling</b>
      <textarea ref={text}></textarea>
      <button>Generate</button>
    </form>
  );
};

export default App;

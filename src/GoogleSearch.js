import "./App.css";

export default function GoogleSearch() {
  return (
    <div className="App">
      <iframe
        src="https://www.google.com/search?igu=1"
        height="400px"
        width="800px"
      ></iframe>
    </div>
  );
}

import "./App.css";
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

const imgUrl =
  "https://img.lovepik.com/background/20211102/medium/lovepik-beautiful-scenery-mobile-phone-wallpaper-background-image_400795402.jpg";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  console.log(file);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="App">
      <img src={imgUrl} alt="banner"></img>
      <div className="wrapper">
        <h1>FILE SHARE</h1>
        <p>Upload your files and share download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;

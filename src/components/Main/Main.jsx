import styles from "./Main.module.css"
import {useState} from "react";

const Main = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [upload, setUpload] = useState();

    const handleChange = event => {
        console.log(event.target.files)
        setSelectedFile(event.target.files[0])
    }

    const handleUpload = () => {
        if(!selectedFile) {
            alert("выберете файл");
        }
        const formData = new FormData();
        formData.append("file", selectedFile);

        console.log(formData)
    }

    return (
        <main className={styles.main}>
            <header>
                <input accept=".json" type="file" onChange={handleChange}/>
                <button onClick={handleUpload}>загрузить файл</button>
            </header>
            <button>отправить файл</button>
        </main>
    )
}

export default Main;
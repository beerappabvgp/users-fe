
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { app, storage } from "../utils/firebase";
import { useState } from "react";
const db = getFirestore(app);
const collectionRef = doc(db, "doc", "doc1");
function FireBase() {
    const [files, setFiles] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("upload started ... ")
        console.log(event);
        console.log("files is: ", files);
        const file = files[0];
        if (!file) return;
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(collectionRef, {
                        imageurl: downloadURL,
                    });
                });
            }
        );
        console.log("upload success ... ");
    };
    return (
        <div className="App">
            <label for="myfile=" multiple
            accept="image/*">Select a file:</label>
            <input type="file" id="myfile" name="myfile" onChange={(e) => {
                console.log(e);
                setFiles(e.target.files);
            }}/>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default FireBase;
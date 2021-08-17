import { useState } from "react";
import ClassComponent from "./components/ClassComponent";

function App() {
    const [isVisible, setIsVisible] = useState(true);
    const [buttonName, setButtonName] = useState("Remove");

    const handleDelete = () => {
        setIsVisible((prevState) => !prevState);
        buttonName === "Remove"
            ? setButtonName("Bring My Comp Back")
            : setButtonName("Remove");
    };

    return (
        <div style={{ textAlign: "center" }}>
            {isVisible ? <ClassComponent color="red" /> : null}

            <button onClick={handleDelete}>{buttonName}</button>
        </div>
    );
}

export default App;

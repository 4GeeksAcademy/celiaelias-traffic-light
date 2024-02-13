import React, { useState } from "react";

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("");
    return (
        <React.Fragment>
            <div className="post">
            </div>
            <div className="traffic-light">
                <div onClick={() => setSelectedColor("red")} className={
                    "light red" + ((selectedColor === "red") ? " glow" : "")}></div>
                <div onClick={() => setSelectedColor("yellow")} className={
                    "light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
                <div onClick={() => setSelectedColor("green")} className={
                    "light green" + ((selectedColor === "green") ? " glow" : "")}></div>
                <div style={{ display: "none" }} onClick={() => setSelectedColor("purple")} className={
                    "light purple" + ((selectedColor === "purple") ? " glow" : "")}></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="button">
                            <button type="button" className="btn btn-secondary"
                                onClick={changeColor}>
                                Change light
                            </button>
                        </div>
                        <div className="button2">
                            <button type="button" className="btn btn-secondary"
                                onClick={showPurple}>
                                Add/Hide light
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

function changeColor() {
    let selectedElement = document.querySelector('.glow');
    let classList = selectedElement.classList;
    let newElement = null;

    if (document.querySelector('.purple').style.display === 'none') {
        if (classList.contains('red')) {
            newElement = document.querySelector('.yellow')
        } else if (classList.contains('yellow')) {
            newElement = document.querySelector('.green')
        } else if (classList.contains('green')) {
            newElement = document.querySelector('.red')
        }
    } else {
        if (classList.contains('red')) {
            newElement = document.querySelector('.yellow')
        } else if (classList.contains('yellow')) {
            newElement = document.querySelector('.green')
        } else if (classList.contains('green')) {
            newElement = document.querySelector('.purple');
        } else if (classList.contains('purple')) {
            newElement = document.querySelector('.red')
        }
    }

    classList.remove('glow');
    newElement.classList.add('glow');
}

function showPurple() {
    if (document.querySelector('.purple').style.display === 'none') {
        document.querySelector('.purple').style.display = 'block'
    }
    else {
        document.querySelector('.purple').style.display = 'none'
    }
}


export default Home;

'use client';

import Navbar from "../components/Navbar"
import SelectionButton from "../components/SelectionButton"
import Card from "../components/Card";
import SelectionButtonCss from "../components/css/SelectionButton.css";
import styles from './explore.module.css'
import CardCss from "../components/css/Card.css"

export default function Page() {

    const handleClick = () => {
        alert('Hello World');
        };
  return (
    <>
        <Navbar></Navbar>
        <div className="body">
            <div className={styles.container}>
                <div className={styles.selectioncolumn}><SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                <SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                <SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                <SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                <SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                <SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                <SelectionButton label="TestButton" onClick={handleClick} className={"selectionButton"}></SelectionButton>
                </div>
                
                <div className={styles.displaycolumn}>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                        <Card title={"Hello World"} description={"This contains the description"}></Card>
                </div>
            </div>
            
        </div>
    </>
)
}

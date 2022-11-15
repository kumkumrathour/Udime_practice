import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css;'
const ErrorModal = props =>{
    return <div>
         <Card className={classes.modal}>
            <header className={classes.modal}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button> Okey</Button>
            </footer>
         </Card>
    </div>
}
export default ErrorModal;
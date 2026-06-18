import { Button } from "react-bootstrap";
import {Alert} from 'react-bootstrap'

function BootstrapReact(){
    return(
        <>
        <h2>Add Bootstrap in React</h2>
        <Button>Get Data</Button>
        <Button variant="danger">Set Data</Button>
        <Alert>Hello, BT Installed</Alert>
        <Alert variant="success">Hello, BT Installed</Alert>
        <Button onClick={()=>alert("Alert Btn")}>Alert Btn</Button>
        </>
    )
}
export default BootstrapReact;
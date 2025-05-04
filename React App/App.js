import ReactDOM from 'react-dom/client'
import {Header} from './Components/Header'
import { Body } from './Components/Body';

const a=10;
const b=10;
const App=()=>{
    return (
        <div className="maincontainer">
            {/* babel convert this JSX to React Element which in turn converted to HTML by react only */}
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)
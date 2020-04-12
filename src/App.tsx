import React from 'react';
import "./App.css"
import  {Dashboard} from "./components/Dashboard";


export class App extends React.Component {
  state = { isVisible: true };
  render() {
    return (
        <div className = "app_body">
            <Dashboard /> 
        </div>
        

    );
  }
}
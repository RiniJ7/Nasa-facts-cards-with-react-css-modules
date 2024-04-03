import React from "react";
import styles from './Rocket.module.css';
import shuttleImage from './Assets/shuttle.png';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src={shuttleImage} alt="shuttle" className={styles.img}/>
      </div>
    );
  }
}

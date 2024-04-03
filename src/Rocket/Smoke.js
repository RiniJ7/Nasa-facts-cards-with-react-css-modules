import React from 'react';
import styles from './Smoke.module.css';
import smokeVideo from './Assets/smoke.mov';
import smokeSound from './Assets/NASA.mp3';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.smoke}> 
        <video className={styles.video} autoPlay loop> 
        <source src={smokeVideo} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <audio autoPlay>
          <source src={smokeSound} type="audio/mp3" />
          </audio>
      </div>
    );
  }
}

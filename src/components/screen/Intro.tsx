import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Button from '../shared/Button';

import classNames from 'classnames/bind';
const classes = require('./Intro.css');
const cx = classNames.bind(classes);

class Intro extends Component<any, any> {
  public render() {
    const containerClass = cx({
      container: true,
      background: true,
    });
    return(
      <div className={containerClass}>
      <div className={classes.box}>
          <Button
            id='btn'
            onClick={() => this.onClick()}
            white={true}
            txt='Button'
          />
        </div>
      </div>
    );
  }

  private onClick = () => {
    alert('clicked');
  }
}

export default Intro;

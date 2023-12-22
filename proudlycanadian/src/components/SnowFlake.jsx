
// Snowflake.js
import React from 'react';

class Snowflake extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      animationDelay: '0s',
      fontSize: '10px'
    };
    this.generateSnowflake = this.generateSnowflake.bind(this);
  }

  generateSnowflake = () =>{
    const newDelay = `${(Math.random()*16).toFixed(2)}s`;
    const newFontSize = `${(Math.floor(Math.random()*10) + 10)}px`;
    this.setState({animationDelay: newDelay, fontSize: newFontSize});
  }

  componentDidMount() {
    this.generateSnowflake();
  }

  render(){
    const {animationDelay, fontSize} = this.state;
    const style = {animationDelay, fontSize};
    
    return (
      <p className='Snowflake' id={`item${this.props.id}`} style={style}>
        ❄
      </p>
    );
  }
}

export default Snowflake;

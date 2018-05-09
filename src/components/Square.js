import React from 'react';

const Square = (props) => {

    return (
      <input className={props.className} type="image" src={props.square.imgSrc} onClick={props.handlePress} value={props.square.id} />
    )

  }

export default Square;

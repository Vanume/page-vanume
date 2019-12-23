import React, { useRef, useEffect} from "react";
import $ from "jquery";
import './turn.js';

import './magazine.styles.scss';

const Magazine = props => {

  
    let fadeClass = useRef("");
  
    useEffect(() => {
      if (fadeClass) {
          console.log( $(fadeClass).turn);
          console.log(fadeClass)
        $(fadeClass).turn(Object.assign({}, props.options));
      }
      // 	//   document.addEventListener("keydown", handleKeyDown, false);
    }, [props.options]);
  
    return (
      <div
        className={props.className}
        style={Object.assign({}, props.style)}
        ref={el => {
          fadeClass = el;
        }}
      >
        {props.children}
      </div>
    );
  };
  
  export default Magazine;
  
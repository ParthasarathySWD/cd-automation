import React, {useState, useEffect} from "react";

function ChangingProgressProvider(props) {

    const [valuesIndex, setvaluesIndex] = useState(0);


  useEffect(()=> {
    setInterval(() => {
        setvaluesIndex((valuesIndex + 1) % props.values.length)
    }, props.interval);
  }, [])


    return props.children(props.values[valuesIndex]);
}

ChangingProgressProvider.defaultProps = {
    interval: 1000
  };
export default ChangingProgressProvider;
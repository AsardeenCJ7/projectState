import { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //document.title = `Count: ${count}`;
    checkCount();
  }, [count]);

  // Here [] Optional but useEffect reCalling Function Avoid because each time referesh slow our react app

  function countIncrease(count) {
    return count + 1;
  }

  function checkCount() {
    if (count > 10) {
      setCount(1);
    }
  }

  function update() {
    setCount(countIncrease); //

    /*
    or another method 

    setCount((count)=>{
        return count + 1});
    
    */
  }

  return (
    <div>
      <h1>I have Rendered {count} times</h1>
      <button onClick={update}>Increase Value</button>
    </div>
  );
}

export default Timer;

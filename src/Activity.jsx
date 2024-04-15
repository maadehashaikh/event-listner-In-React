import {useState} from 'react'


function Activity() {
  let [islike , setIsLike] = useState(false);
  let toggleLike = () => {
  setIsLike(!islike);
}
let redbtn = {color:"red"};
  return (
    <div>
      <p onClick={toggleLike}>
      { islike ? <i className="fa-solid fa-heart" style={redbtn}></i> : <i className="fa-regular fa-heart"></i>}
    </p>
    </div> 
  );
}

export default Activity;
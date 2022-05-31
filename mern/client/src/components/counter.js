import {useState} from "react";
function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>
    
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <div class="col-xs-1">
  <input type="text" class="form-control"  value={num} onChange={handleChange}/>
  </div>
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>

   </>
  );
}

export default IncDecCounter;
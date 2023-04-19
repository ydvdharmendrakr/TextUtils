import React,{useState} from "react";

export default function TextForm(props) {
const handleUpClick=()=>{
  //console.log("Uppercase was clicked"+text);
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase!","success");

}
const handleOnchange=(event)=>{
  //console.log("on change");
  setText(event.target.value);
}
const handleLoClick=()=>{
let newText=text.toLowerCase();
setText(newText);
props.showAlert("Converted to lowercase!","success");
}
const handleClearClick=()=>{
let newText="";
setText(newText);
props.showAlert("Cleared text!","success");
}
const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copyed text!","success");
}
const handleRmExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed extra spaces","success");
}
const [text, setText]=useState('');
  return (<>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnchange} 
       style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lovercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
       <button className="btn btn-primary mx-1" onClick={handleRmExtraSpace}>Remove exta space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} character</p>
      <p>{0.008*text.split(" ").length} minnutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter sonething int the text box above to preview it here"}</p>
    </div>
    </>
  );
}

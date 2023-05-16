import React, { useState } from 'react'

export default function Textform(props) {
    const [text,setText]=useState("");
    
    const handleUpClick=()=>{
         const newtext=text.toUpperCase();
        setText(newtext);
    }
    
    const handleLoClick=()=>{
        const newtext=text.toLowerCase();
       setText(newtext);
   }
    const handleOnChange=(event)=>{
    
       setText(event.target.value);
   }
   const handleClearClick=()=>{
    
    setText(" ");
   }
  return (
   <div className='container my-3' style={{color:props.mode==='light'?'black':'#cfd7df'}}> 
        <h1>Enter the text</h1>        
        <div class="mb-3">
 
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}
  style={{backgroundColor: props.mode==='light'?'white':'#325370', color: props.mode==='light'?'black':'white'}}></textarea>
    </div>
        <div className='my-3'>
        <button  class="btn btn-primary mx-2"onClick={handleUpClick}>Change to Uppercase</button>
        <button  class="btn btn-primary mx-2"onClick={handleLoClick}>Change to Lowercase</button>
        <button  class="btn btn-primary mx-2"onClick={handleClearClick}>Clear Text</button>
        
        </div>
        
        <h2>Text Summary</h2>
        <p>{text.length} characters and {text.split(" ").length} words</p>
        <h2>Preview</h2>
        {text}
         
    </div>
    
  )
}

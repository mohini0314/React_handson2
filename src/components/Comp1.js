import React from 'react';
import './Comp1.css';
import { useState } from 'react';

function Comp1() {
   const [inputdata, setInputData]= useState([]);
    const [inputarr, setInputarr]= useState([]);
   

    const handleInput = (e)=> {
        setInputData({
          ...inputdata,
          [e.target.name] : e.target.value,
          [e.target.dpt] : e.target.value,
          [e.target.rating] : e.target.value,
        })
      }
      
      let {name, dpt , rating } = inputdata;
      const handleChange = ()=> {
        setInputarr([...inputarr,{name, dpt, rating}])
        console.log(inputdata, "input data ");
        setInputData({name:" ", dpt:" " , rating: " "})
      
      }


  return (
    <div>
        <h1 className="title">EMPLOYEE FEEDBACK FORM</h1>
          <label>Name :</label>
             <input type="text" autoComplete='off' name='name' value={inputdata.name} onChange={handleInput} />
           
           <br />
           <label>Department :   </label>
             <input type="text" autoComplete='off' name='dpt'value={inputdata.dpt} onChange={handleInput}/>
        
           <br />
           <label >Rating :</label>
           <input type="text" autoComplete='off' name='rating' value={inputdata.rating} onChange={handleInput}/>
           
           <br />
           <button onClick={handleChange} >SUBMIT</button>
      
           <div className='card'>
            <div className='row'> 
            {
        inputarr.map((info,ind)=>{
                    return(
                        <div key={ind}  >
                          <div className='column'>
                            <div className='infocard'>
                            Name:  {info.name}| Department: {info.dpt}| Rating: {info.rating}</div>
                            </div>
                        </div>  
                    )
                }
             )}

            </div>
        
        </div>
      
    </div>
  )
}

export default Comp1



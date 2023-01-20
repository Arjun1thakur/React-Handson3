import './classComp.css'
import { useState } from 'react';

function Foam(){
  let [btn,btnCge]=useState(true)
  const [mainData,setData]=useState([])
  let [data,updateData]=useState({
    Name:'',
    Department:'',
    Rating:'',
    newSet:[]
  })
  const update=(e)=>{
    updateData((val)=>{
      const newState = { ...val };
      newState[e.target.name] = e.target.value;
      return newState;
    })
  }
  const latestChange=()=>{
    btnCge(false)
    setData((val)=>{
      const newState = [...val];
      newState.push(data);
      return newState;
    })
  }
  const reverse=()=>btnCge(true);
  return (
    <>
    {btn ? (
      <div>
        <div className="header">
          Employee Feedback Form
        </div>
          <div className="foam">
              <label htmlFor="name">Name : </label>
              <input type="text" name="Name" className="input"  value={data.Name} onChange={update} />  <br />
              <label htmlFor="Department">Department : </label>
              <input type="text" name="Department" className="input" value={data.Department} onChange={update}/>  <br />
              <label htmlFor="Rating">Rating : </label>
              <input type="number" name="Rating" className="input" value={data.Rating} onChange={update} /> <br />
              <button onClick={latestChange} className="btn">Update</button>
          </div>
      </div>
  ):(
    <>
        <div className="header">
          Employee Feedback Data
        </div>
            <div className="getData">
            <table>
                <thead>
                <tr style={{fontSize:'2rem',fontWeight:'700'}}>
                    <th>Name</th>
                    <th style={{backgroundColor:'#ffc0cb87'}}>Department</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {mainData.map((data,index)=>{
                    return (
                        <tr key={index}>
                            <th>{data.Name}</th>
                            <th style={{backgroundColor:'#ffc0cb87'}}>{data.Department}</th>
                            <th>{data.Rating}</th>
                        </tr>
                    )
                    })
                }
                </tbody>
            </table>
            
        </div>
        <div className="btnMain">
            <button className='btn' onClick={reverse}>Back</button>
            </div>
        </>
  )}
  </>
  )
}
export default Foam
import {useState} from 'react';
import axios from 'axios';
import Dropdown from'react-dropdown';
import 'react-dropdown/style.css';

   const Insert=()=>{
    
    const[emp,setEmp]=useState ({
            empEmployeeName:"",
            empCtc:"",
            empBasic:"",
            empHraType:"",
            empHra:"",
            empPf:"",
            empLta:"",
            empFual:"",
            empSpecial:"",
        })
        const options=[
            {value:'metro',label:'metro'},
            {value:'Non-Metro',label:'Non-Metro'},
                    
        ];  
    

    const{empEmployeeName,empCtc,empHra,empPf,empLta,empFual,empBasic,empSpecial,empHraType}=emp;  

    const onchange=e=>{
        debugger
        if(e.target.name == "empFual" && parseInt(e.target.value) > 1800)
    {
        e.target.value=1800
    }
        setEmp ({...emp, [e.target.name]: e.target.value});
        onpass()

   
}
function onpass(){
    
    var hravalue=document.getElementById("areatype").value
    
    
    if(hravalue == "metro")
    {
    
    var hraValue = (parseInt(document.getElementById("basicAmt").value)/100) * 50
    document.getElementById("hraAmt").value=hraValue

    
    var pfValue = (parseInt(document.getElementById("basicAmt").value)/100) * 12 
    document.getElementById("pfAmt").value=pfValue
   
    var specialAmt = parseInt(document.getElementById("basicAmt").value) -
    (parseInt(document.getElementById("ltaAmt").value) + parseInt(document.getElementById("fualAmt").value) +
    parseInt(document.getElementById("hraAmt").value) + parseInt(document.getElementById("pfAmt").value))
    document.getElementById("specialAmt").value=specialAmt
    }
    if(hravalue == "Non-Metro")
    {
       
        var hraValue = (parseInt(document.getElementById("basicAmt").value)/100) * 40
        document.getElementById("hraAmt").value=hraValue
    
       
        var pfValue = (parseInt(document.getElementById("basicAmt").value)/100) * 12 
        document.getElementById("pfAmt").value=pfValue
        
        var specialAmt = parseInt(document.getElementById("basicAmt").value) -
        (parseInt(document.getElementById("ltaAmt").value) + parseInt(document.getElementById("fualAmt").value) +
        parseInt(document.getElementById("hraAmt").value) + parseInt(document.getElementById("pfAmt").value))
        document.getElementById("specialAmt").value=specialAmt
}

}

    const onemp = async  =>{
        debugger
        emp.empHra= document.getElementById("hraAmt").value
        emp.empPf=document.getElementById("pfAmt").value
        emp.empSpecial=document.getElementById("specialAmt").value
        emp.empHraType=document.getElementById("areatype").value
        
         var response = axios.post("https://localhost:7078/api/userapplication/Insertapplication",emp);
        alert("data Inserted");
       
    };
    return(
        
        <div className='container'>
            
        <form onSubmit={e=>onemp(e)}>
        <div className='textbox'>   
            
            <input name="empEmployeeName" id='a1' required type="text"value={empEmployeeName}
            onChange={e =>onchange(e)}
            placeholder='EMPLOYEE NAME'/>
            {/* <p onClick={oninputhandler} id="item"></p> */}
            
        
            <input  name="empCtc"type="text" required  value={empCtc}
            onChange={e =>onchange(e)}
            placeholder='CTC'/><br/>
           
           
           <input name="empBasic" type="text"  id="basicAmt"value={empBasic}
            onChange={e =>onchange(e)}
            placeholder='BASIC'/><br/>

    
              {/* <Dropdown id="areaname" class="drop" options={options} name='empHraType'  onChange={(value)=>
             onpass({...emp,empHraType:value.value})} value={emp.empHraType}placeholder='select option'></Dropdown>
             
               */}
               {/* <Dropdown id="areaname" class="drop" options={options} name='empHraType'  onChange={(value)=>
             onpass(value)} value={emp.empHraType}placeholder='select option'></Dropdown>
              */}
               <select 
              onChange={()=>
             onpass()} 
              name="empHraType"id="areatype">
                <option selected disabled>SELECT OPTION</option>    
                <option>metro</option>
                <option>Non-Metro</option>
              </select>
              <br/>
            
            <input name="empHra" type="text" id="hraAmt" 
            onChange={e =>onchange(e)}
            placeholder='HRA'/><br/>

            

            
             <input  name="empPf"type="text" id="pfAmt" 
            onChange={e =>onchange(e)}
            placeholder='PF'/><br/> 

            
            <input name="empLta" type="text" id="ltaAmt"value={empLta}
            onChange={e =>onchange(e)}
            placeholder='LTA'/><br/>

            
            <input name="empFual" type="text"  id="fualAmt"value={empFual}
            //onChange={e =>setTotal()}
            onChange={e =>onchange(e)}
            placeholder='FUAL'/><br/>

            <input name="empSpecial" type="text" id="specialAmt"  
            onChange={e =>onchange(e)}placeholder='SPECIAL'/><br/>
            </div>
            <button type="submit" id="btn" value="Submit">SAVE</button>
        </form>
        </div>
    );
    
}

export default Insert;

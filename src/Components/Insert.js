import {useState} from 'react';
import axios from 'axios';
import Dropdown from'react-dropdown';
import 'react-dropdown/style.css';

   const Insert=()=>{
    var hratype=""
    var hraAmt=0
    var pfAmt=0
    var specialAmt=0
    let[emp,setEmp]=useState ({
            empEmployeeName:"",
            empCtc:"",
            empBasic:"",
            empHraType:hratype,
            empHra:hraAmt,
            empPf:pfAmt,
            empLta:"",
            empFual:"",
            empSpecial:specialAmt,
        })
        const options=[
            {value:'metro',label:'metro'},
            {value:'Non-Metro',label:'Non-Metro'},
                    
        ];  

        let{empEmployeeName,empCtc,empHra,empPf,empLta,empFual,empBasic,empSpecial,empHraType}=emp;

        function oninputhandler(){
            var txt=document.getElementById("a1").required=("please enter your Name");
            document.getElementById("item").innerHTML=txt;
            // var txt1=document.getElementById("a2").required=("please ctc");
            // document.getElementById("items").innerHTML=txt1;

        }
        
            // var eBasic,eHra,ePf,eHraType,eSpecial;
             //eBasic=document.getElementById("s").value;
            //  
            // ePf=eBasic*12/100;
            // eSpecial=parseInt(eBasic)+parseInt(eHra+eHraType-ePf);
            // document.getElementById("HraType").value=eHraType;
            // document.getElementById("Hra").value=eHra;
            // document.getElementById("Pf").value=ePf;
            // document.getElementById("Special").value=eSpecial;  
            
    const onchange=e=>{
        setEmp ({...emp,[e.target.name]:e.target.value});
        
setdrop()
        
        
    

    }
    function setdrop(){
       hratype=document.getElementById("areatype").value

        
        var basicAmt=empBasic
        // var hraAmt=0
        // var pfAmt=0
        if(hratype == "metro")
        
        {
            hraAmt=(basicAmt/100)*50
            pfAmt=(basicAmt/100)*12
            
        }
        if(hratype=="Non-Metro"){
            hraAmt=(basicAmt/100)*40
            pfAmt=(basicAmt/100)*12
        }
        empHra=hraAmt
        empHraType=hratype
          document.getElementById("hraAmt").value=hraAmt
        
          document.getElementById("pfAmt").value=pfAmt
          
            setTotal()  
    }
    function setTotal(){

        
        var ltaAmt=parseInt(empLta== "" ? 0 : empLta)
        //var ltaAmt=parseInt(document.getElementById("ltaAmt").value)
        var fualAmt=parseInt(empFual == "" ? 0 : empFual)
        //var fualAmt=parseInt(document.getElementById("fualAmt").value)
        var basicAmt=parseInt(empBasic)
        var hraAmt=parseInt(empHra)
        var pfAmt=parseInt(empPf)
       
        if(fualAmt>1800)
        {            
            document.getElementById("fualAmt").value=1800        
        }
        specialAmt=basicAmt-(ltaAmt+fualAmt+hraAmt+pfAmt)
        document.getElementById("specialAmt").value=specialAmt

       
    }

    const onemp = async  =>{
        
        axios.post("https://localhost:7078/api/userapplication/Insertapplication",emp);
        alert("data Inserted");
        console.log(onemp   )
    };

    
   

    return(
        
        <div className='container'>
            
        <form onSubmit={e=>onemp(e)}>
        <div className='textbox'>   
            
            <input name="empEmployeeName" id='a1' type="text"value={empEmployeeName}
            onChange={e =>onchange(e)}
            placeholder='EMPLOYEE NAME'/>
            <p onClick={oninputhandler} id="item"></p>
            
        
            <input  name="empCtc"type="text" value={empCtc}
            onChange={e =>onchange(e)}
            placeholder='CTC'/><br/>
            <p onClick={oninputhandler} id="items"></p>

           <input name="empBasic" type="text"  id="basicAmt"value={empBasic}
            onChange={e =>onchange(e)}
            placeholder='BASIC'/><br/>

            {/* <div id="droptxt">
             <Dropdown id="areaname" class="drop" options={options} name='empHraType'   onChange={(value)=>
             setdrop()} value={emp.empHraType}placeholder='select option'></Dropdown>
            </div> */}
              <select 
              onChange={(value)=>
             setdrop()}  
             id="areatype"  >
                <option selected disabled>SELECT OPTION</option>    
                <option>metro</option>
                <option>Non-Metro</option>
              </select>

             {/* <Dropdown id="areaname" class="drop" options={options} name='empHraType'  onChange={(value)=>
             onchange({...emp,empHraType:value.value})} value={emp.empHraType}placeholder='select option'></Dropdown>
             */}
              
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
            <button type="submit" onClick={setdrop} id="btn" value="Submit">SAVE</button>
        </form>
        </div>
    );
    
}

export default Insert;
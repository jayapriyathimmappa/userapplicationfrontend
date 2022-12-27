import{useState,useEffect} from "react";
import axios from 'axios';


function Header(){
  const [product, setProduct]=useState([]);
  
  const getProductData =async()=>{
    try {
      const data = await axios.get(
        "https://localhost:7078/api/userapplication/GetAlluser"
      );
      console.log(data.data);
      setProduct(data.data);
    }catch (e) {
      console.log(e);
    }
    };
    useEffect(()=>{
    getProductData();
  },[]);
  


 
  return (
    <div> 
          <table>        
            <tr>
                <th>EMPOLYEECODE</th>
                <th>EMPOLYEENAME</th>
                <th>CTC</th> 
                <th>BASIC</th>
                <th>HRATYPE</th>
                <th>HRA</th>
                <th>PF</th>
                <th>LTA</th>
                <th>FUAL</th>
                <th>SPECIAL</th>    
                         
            </tr> 
            {product.map((item)=>{
              
              
            return(
            <tr>
                  <td>{item.employeeCode}</td>
                  <td>{item.employeeName}</td>
                  <td>{item.ctc}</td>
                  <td>{item.basic}</td>
                  <td>{item.hraType}</td>
                  <td>{item.hra}</td>
                  <td>{item.pf}</td>
                  <td>{item.lta}</td>
                  <td>{item.fual}</td>
                  <td>{item.special}</td>  
                          
            </tr> 
            );
            })}   
                 
          </table>
          
       
    </div>
  );
}

export default Header;
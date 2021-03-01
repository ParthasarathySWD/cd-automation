import react from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';

function ViewClient(props){

    const id = props.match.params.id;
    console.log(id);
    const [state, setState] = useState({
            
        ClientNumber: '',
        ClientName: '',
        Phone: '',
        Email: '',
        AddressLine1: '',
        CityName: '',
        CountyName: '',
        StateName: '',
        Notes:''
    });
    const [isFetched, setIsFetched] = useState(false);

    useEffect(()=>{
        if (!isFetched) {
            
            fetchClient();
            setIsFetched(true);
            // isFetched = true;

        }
    })

    function fetchClient(){
        axios.get("/clients/"+id)
                .then(res => {

                    setState({ 
                        
                        ClientNumber: res.data.ClientNumber,
                        ClientName: res.data.ClientName,
                        Phone: res.data.Phone,
                        Email: res.data.Email,
                        AddressLine1: res.data.AddressLine1,
                        CityName: res.data.CityName,
                        CountyName: res.data.CountyName,
                        StateName: res.data.StateName,
                        Notes:res.data.Notes,
                        UserName:res.data.UserName
                    });

                })
    }

    return(
        // <div>
       
    <div className="view-container" style={{marginLeft:'20px',marginTop:'20px'}}>
        <h4>Client Details</h4>
        <div className="view-table" style={{marginTop:'20px',backgroundColor:'white',height:'450px',width:'500px',boxShadow:'1px 1px 8px 1px #d6d5d5'}}>
            <table className="pt-10" style={{marginLeft:'50px'}}>
                <tr className="pt-10">
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Client Number</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.ClientNumber}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Client Name</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.ClientName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Phone Number</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.Phone}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Email ID</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.Email}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>AddressLine</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.AddressLine1}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>City</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.CityName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>County</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.CountyName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>State</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.StateName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Notes</td>
                    <td className="pl-5"style={{textAlign:'left'}}>{state.Notes}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Created By</td>
                    <td className="pl-5"style={{textAlign:'left'}}>{state.UserName}</td>
                </tr>

            </table>
        </div>
    </div>
    )
}
export default ViewClient;
import React,{useState,useEffect} from "react";
import axios from "axios";
import CampusExit from "views/AddCampusExit";
import ReactTable from "react-table-6";
import { Link } from "react-router-dom";

const BACKEND_URL = "http://127.0.0.1:8000/security/";

const AllCampusExitTable =()=>{
    const [exitData,setExitData]=useState([]);

    
    const fetchData = async()=>{
        await axios
        .get(BACKEND_URL+"all_campus_exits/")
        .then((result)=>{
            setExitData(result.data.data);
               
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        < >
       <br></br> <br></br> <br></br> <br></br>
       <Link to="/security/addcampusMovement" className="btn btn-primary">Add Campus Exit</Link>
       <ReactTable 
       data={exitData}
       columns = {[
        {
            Header: "Name",
            accessor: "person"
        },
        {
            Header: "Destination",
            accessor: "destination"
        },
        {
          Header: "Exit Date",
          accessor: "exit_time" ,
          Cell: props=><span className="date">{props.value.slice(0,10)}</span>
        },
        {
            Header: "Exit Time",
            accessor: "exit_time" ,
            Cell: props=><span className="date">{props.value.slice(11,16)}</span>
          },
        {
            Header: "Entry Time",
            accessor: "entry_time",
            Cell: props=><span className="date">{props.value==null?"":props.value.slice(11,16)}</span>
          },
        
    ]}
    defaultPageSize={10}
          className="-striped -highlight"
    ></ReactTable>








        
        </>
      );

}

export default AllCampusExitTable


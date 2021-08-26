import React from 'react';
import './App.css';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class App extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
    columnDefs: [
       {headerName: 'Application Id', field: 'applicationid', sortable: true,filter: true, checkboxSelection:true},
       {headerName: 'Api Context Root', field: 'api_context_root', sortable: true, filter: true},
       {headerName: 'Application Name', field: 'application_name', sortable: true, filter: true},
       {headerName: 'Api', field: 'api', sortable: true, filter: true}
   ],
   rowData: null,
//   rowData: [
//    {applicationid: 1, api_context_root: "Celica", application_name: "user" , api: "hello"}
//     ]
       };
    }

    componentDidMount(){
        //  fetch('http://localhost:9001/getdata')
        //  .then(res =>console.log(res))
        // .then(rowData =>console.log(rowData))
        // .catch(err => console.log(err));
axios.get("http://localhost:9001/getdata").then(res=>this.setState({rowData:res.data}));

    }

render(){
return(
    <div
    className="ag-theme-balham"
    style={{
        width: 800,
        height: 600
    }}
    >
        {console.log(this.state.rowData)}
        <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
        rowSelection="multiple"
        />
        </div>
)
}
}
export default App;
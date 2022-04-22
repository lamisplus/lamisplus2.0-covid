import React, {  } from 'react'
import MaterialTable from 'material-table';

import { forwardRef } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom'
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {  Card,CardBody,} from 'reactstrap';
import Button from "@material-ui/core/Button";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-widgets/dist/css/react-widgets.css';
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { MdDashboard, MdDeleteForever, MdModeEdit } from "react-icons/md";
import {Menu,MenuList,MenuButton,MenuItem,} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { Label } from 'semantic-ui-react'

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    cardBottom: {
        marginBottom: 20
    },
    Select: {
        height: 45,
        width: 350
    },
    button: {
        margin: theme.spacing(1)
    },

    root: {
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    input: {
        display: 'none'
    },
    error: {
        color: "#f85032",
        fontSize: "11px",
    },
    success: {
        color: "#4BB543 ",
        fontSize: "11px",
    }, 
}))

let patientList =[
    { name: 'Seyi Daudua', address: '2 oliver street Abuja', hosiptal_number: 1987, phone_number: 23456787525, status:1 },
    { name: 'Amos Fred', address: '2 oliver street Abuja', hosiptal_number: 1988, phone_number: 23456787525, status:0 },
    { name: 'Felix John', address: '2 oliver street Abuja', hosiptal_number: 1989, phone_number: 23456787525, status:0 },
    { name: 'Evans Emeka', address: '2 oliver street Abuja', hosiptal_number: 1997, phone_number: 23456787525, status:1 },

  ]

const SyncList = (props) => {
    let history = useHistory();
  // The state for our timer
  const classes = useStyles()

 
  return (
    <div>
       <Card>
         <CardBody>

         <Link to={"register-patient"} >
            <Button
                variant="contained"
                color="primary"
                className=" float-right mr-1"
                startIcon={<FaUserPlus size="10"/>}

            >
                <span style={{ textTransform: "capitalize" }}>New Patient</span>
            </Button>
            </Link>        
        <br/><br/>
       
            <MaterialTable
            icons={tableIcons}
              title="Find Patient "
              columns={[
              // { title: " ID", field: "Id" },
                {
                  title: "Patient Name",
                  field: "name",
                },
                { title: "Hospital Number", field: "hospital_number", filtering: false },
                { title: "Address", field: "address", filtering: false },
                { title: "Phone Number", field: "phone_number", filtering: false },
                { title: "Status", field: "status", filtering: false },        
                { title: "", field: "actions", filtering: false }, 
              ]}
              data={ patientList.map((row) => ({
                  //Id: manager.id,
                    name: row.name,
                    hospital_number: row.hospital_number,
                    address: row.address,
                    phone_number:  row.phone_number,
                    status: row.status===0 ? 
                            (<Label color="blue" size="mini">Admitted</Label>)
                             : (<Label color="teal" size="mini">ICU</Label>),
                    actions:
            
                    <div>
                    <Menu>
                        <MenuButton style={{ backgroundColor:"#3F51B5", color:"#fff", border:"2px solid #3F51B5", borderRadius:"4px", }}>
                          Actions <span aria-hidden>▾</span>
                        </MenuButton>
                            <MenuList style={{ color:"#000 !important"}} >
                                <MenuItem  style={{ color:"#000 !important"}}>                      
                                    <Link
                                        to={{pathname: "/patient-detail", state: { hospitalNumber: row.hospitalNumber  }}}>
                                        <MdDashboard size="15" />{" "}<span style={{color: '#000'}}>Patient Dashboard</span>
                                  </Link>                               
                                  </MenuItem>
                                  <MenuItem style={{ color:"#000 !important"}}>
                                        <Link
                                            to={{
                                              pathname: "/patient-update",
                                              currentId: row
                                            }}>
                                        <MdModeEdit size="15" />{" "}<span style={{color: '#000'}}>Edit Patient</span>                   
                                      </Link>
                                  </MenuItem>                                      
                                  <MenuItem style={{ color:"#000 !important"}}>
                                      <Link
                                        >
                                        <MdDeleteForever size="15"  />{" "}
                                        <span style={{color: '#000'}}>Transfer</span>
                                    </Link>                                  
                                  </MenuItem>
                          </MenuList>
                    </Menu>
                  </div>
                  
                  }))}
            
                        options={{
                          headerStyle: {
                              //backgroundColor: "#9F9FA5",
                              color: "#000",
                          },
                          searchFieldStyle: {
                              width : '200%',
                              margingLeft: '250px',
                          },
                          filtering: false,
                          exportButton: false,
                          searchFieldAlignment: 'left',
                          pageSizeOptions:[10,20,100],
                          pageSize:10,
                          debounceInterval: 400
                      }}
            />
    
        </CardBody>
       </Card>
    </div>
  );
}

export default SyncList;



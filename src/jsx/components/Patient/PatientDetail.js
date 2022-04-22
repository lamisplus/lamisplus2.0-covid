import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import ButtonMui from "@material-ui/core/Button";
import 'semantic-ui-css/semantic.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PatientCardDetail from './PatientCard'
import { useHistory } from "react-router-dom";
import {   Tab, Tabs, } from "react-bootstrap";
import AddmissionHome from './../Admission/AddmissionHome';
import PatientChart from './../Patient/PatientChart/Index'
import PatientVaccinationHistory from './../Vaccination/VaccinationHistory'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '20.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});


function PatientCard(props) {
    let history = useHistory();
    const [key, setKey] = useState('home');
    const { classes } = props;
    const patientObj = history.location && history.location.state ? history.location.state.patientObj : {}
    //console.log(patientObj)
  return (
    <div className={classes.root}>
      <Card >
        <CardContent>
        <Link to={"/"} >
            <ButtonMui
                variant="contained"
                color="primary"
                className=" float-end ms-2"
                //startIcon={<FaUserPlus size="10"/>}

            >
                <span style={{ textTransform: "capitalize" }}>Back</span>
            </ButtonMui>
            </Link>        
            <br/><br/>
            <div className="custom-tab-1">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Patient Chart">
                <PatientCardDetail patientObj={patientObj}/>
                <PatientChart />
              </Tab>
               <Tab eventKey="Vaccination" title="Vaccination">
              <PatientCardDetail patientObj={patientObj}/>
                 {/* <PatientVaccinationHistory/> */}
              </Tab>
              <Tab eventKey="Addmission" title="Admission">
              <PatientCardDetail patientObj={patientObj}/>
                <AddmissionHome />
              </Tab>
              <Tab eventKey="Patient ICU" title="Patient ICU">
              <PatientCardDetail patientObj={patientObj}/>
                
              </Tab>
              <Tab eventKey="Discharge/Dead" title="Discharge/Dead">
              <PatientCardDetail patientObj={patientObj}/>
                
              </Tab>
              
              
            </Tabs>
            </div>
           
            
           
          
         </CardContent>
      </Card>
    </div>
  );
}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientCard);

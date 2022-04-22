import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'
//import Chip from '@material-ui/core/Chip';
//import profile from "./../../../images/profile/profile.png";
import Divider from '@material-ui/core/Divider';
import { Button } from 'semantic-ui-react';
import ButtonMui from "@material-ui/core/Button";
import 'semantic-ui-css/semantic.min.css';
import { Col, Row } from "reactstrap";

import { Grid, Step, Label, Segment, Icon } from "semantic-ui-react";
import * as CODES from "./../codes";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
let patient = {}

function PatientCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Card >
        <CardContent>
        <Link to={"/"} >
            <ButtonMui
                variant="contained"
                color="primary"
                className=" float-right mr-1"
                //startIcon={<FaUserPlus size="10"/>}

            >
                <span style={{ textTransform: "capitalize" }}>Back</span>
            </ButtonMui>
            </Link>        
        <br/><br/>
            <ExpansionPanel defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                
                <Row>
                    
                    <Col md={11}>
                    <Row className={"mt-1"}>
                    <Col md={12} className={classes.root2}>
                        <b style={{fontSize: "25px"}}>
                        Fred  John
                        </b>

                    </Col>
                    <Col md={4} className={classes.root2}>
                    <span>
                        {" "}
                        Patient ID : <b>34552</b>
                    </span>
                    </Col>

                    <Col md={4} className={classes.root2}>
                    <span>
                        Date Of Birth : <b>1981</b>
                    </span>
                    </Col>
                    <Col md={4} className={classes.root2}>
                    <span>
                        {" "}
                        Age : <b>43</b>
                    </span>
                    </Col>
                    <Col md={4}>
                    <span>
                        {" "}
                        Gender :{" "}
                        <b>Male</b>
                    </span>
                    </Col>
                    <Col md={4} className={classes.root2}>
                    <span>
                        {" "}
                        Phone Number : <b>345555555</b>
                    </span>
                    </Col>
                    <Col md={4} className={classes.root2}>
                    <span>
                        {" "}
                        Address : <b>2 oliver street Abuja </b>
                    </span>
                    </Col>

                    <Col md={12}>
                    <Label.Group >
                    {patient.typePatient &&
                    (patient.typePatient === CODES.IN_PATIENT_UNBOOKED ||
                        patient.typePatient === CODES.IN_PATIENT_BOOKED) ? (
                        <Label color={"blue"} size={"mini"}>
                        Transfer
                        <Label.Detail>Isolation Ward</Label.Detail>
                        </Label>
                    ) : (
                        <Label color={"blue"} size={"mini"}>Transfer</Label>
                    )}
                    
                    </Label.Group>

                    </Col>
                    </Row>
                    </Col>
                </Row>
            
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} >
                    <Button
                            color='red'
                            content='BloodType'
                            //icon='heart'
                            label={{ basic: true, color: 'red', pointing: 'left', content: 'AB+' }}
                            />
                            
                    </div>
                <div className={classes.column}>
                <Button
                            basic
                            color='blue'
                            content='Height'
                            icon='fork'
                            label={{
                                as: 'a',
                                basic: true,
                                color: 'blue',
                                pointing: 'left',
                                content: '74.5 in',
                            }}
                            />
                </div>
                <div className={classes.column}>
                <Button
                            basic
                            color='blue'
                            content='Weight'
                            icon='fork'
                            label={{
                                as: 'a',
                                basic: true,
                                color: 'blue',
                                pointing: 'left',
                                content: '74.5 in',
                            }}
                            />
                </div>
                <div className={classNames(classes.column, classes.helper)}>
                    <Typography variant="caption">
                    <Label color={"red"} size={"mini"}>
                        Biometric Status
                        <Label.Detail>Not Captured</Label.Detail>
                    </Label>
                   
                    <Label color={"green"} size={"mini"}>
                    Patient Status
                        <Label.Detail>Active</Label.Detail>
                    </Label>
                    </Typography>
                </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions expandIcon={<ExpandMoreIcon />}>
                
                </ExpansionPanelActions>
            </ExpansionPanel>
            
            {/* Tab Menu  */}
            <Col md={12}>   
            <Step.Group>
                <Step link disabled>
                <Icon name='unordered list' />
                <Step.Content>
                    <Step.Title>History</Step.Title>
                    <Step.Description>Patient Clinical History</Step.Description>
                </Step.Content>
                </Step>
                <Step link>
                <Icon name='bed' />
                <Step.Content>
                    <Step.Title>Viccination</Step.Title>
                    <Step.Description>Enter patient viccination</Step.Description>
                </Step.Content>
                </Step>
                <Step link>
                <Icon name='bed' />
                <Step.Content>
                    <Step.Title>Admission</Step.Title>
                    <Step.Description> Admission information</Step.Description>
                </Step.Content>
                </Step>
                <Step link disabled>
                <Icon name='stethoscope' />
                <Step.Content>
                    <Step.Title>ICU</Step.Title>
                    <Step.Description>Enter patient ICU information</Step.Description>
                </Step.Content>
                </Step>
                <Step link disabled>
                <Icon name='magic' />
                <Step.Content>
                    <Step.Title>Discharge/Dead</Step.Title>
                    <Step.Description>Update patient status </Step.Description>
                </Step.Content>
                </Step>
            </Step.Group>
            </Col>
            {/* End of Tab Menu */}
            <br/>
            {/* Sematic Ui Card */}
            <Grid centered columns={2} padded>
                <Grid.Column>
                <Segment raised>
                <Label as='a' color='blue' ribbon>
                        INCLUSION CRITERIA 
                        
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>

                <Grid.Column>
                <Segment>
                    <Label as='a' color='orange' ribbon='left'>
                        DEMOGRAPHICS 
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment raised>
                    <Label as='a' color='brown' ribbon>
                    VACCINATION 
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>

                <Grid.Column>
                <Segment>
                    <Label as='a' color='pink' ribbon='left'>
                        VITAL SIGNS 
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment raised>
                    <Label as='a' color='purple' ribbon>
                    CO-MORBIDITIE
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/> 
                </Segment>
                </Grid.Column>

                <Grid.Column>
                <Segment>
                    <Label as='a' color='violet' ribbon='left'>
                    REINFECTION
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment raised>
                    <Label as='a' color='teal' ribbon>
                    SIGNS AND SYMPTOMS
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                    </Label>
                    
                </Segment>
                </Grid.Column>

                <Grid.Column>
                <Segment>
                    <Label as='a' color='green' ribbon='left'>
                    CHRONIC MEDICATION 
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>
                <Grid.Column>
                <Segment raised>
                    <Label as='a' color='olive' ribbon>
                    MEDICATION  
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>  
                </Segment>
                </Grid.Column>

                <Grid.Column>
                <Segment>
                    <Label as='a' color='yellow' ribbon='left'>
                    SUPPORTIVE CARE 
                    </Label>
                    <Icon name='plus' size='small' className=" float-right mr-1"/>
                </Segment>
                </Grid.Column>
            </Grid>

         </CardContent>
      </Card>
    </div>
  );
}

PatientCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientCard);

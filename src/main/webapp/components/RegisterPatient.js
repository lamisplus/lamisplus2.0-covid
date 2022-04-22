import axios from "axios";
import React, { useState, useEffect } from "react";
import MatButton from "@material-ui/core/Button";
import {

  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-widgets/dist/css/react-widgets.css";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
//import { FaArrowLeft } from "react-icons/fa";
import { TiArrowBack } from 'react-icons/ti'




const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardBottom: {
    marginBottom: 20,
  },
  Select: {
    height: 45,
    width: 300,
  },
  button: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.default,
  },
  inline: {
    display: "inline",
  },
}));
//let  arrVal = [];

const UserRegistration = (props) => {
   //
  const userDetail = props.location && props.location.state ? props.location.state.user : null;
  //const rolesDef = props.location && props.location.state ? props.location.state.defRole : null;
  const classes = useStyles();

  const [values, setValues] = useState({});

  const [saving, setSaving] = useState(false);



  return (
    <>
    <ToastContainer autoClose={3000} hideProgressBar />
       
        <Card className={classes.cardBottom}>
        <CardContent>
            <Link
                  to ={{
                    pathname: "/",
                    state: 'users'
                  }}
            >
              <Button
                variant="contained"
                color="primary"
                className=" float-right ms-1"
                startIcon={<TiArrowBack />}
              >
                <span style={{ textTransform: "capitalize" }}>Back </span>
              </Button>
            </Link>
            <br />
          
          <br />
      <ToastContainer autoClose={3000} hideProgressBar />
      
      <div className="col-xl-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">{userDetail===null ? "Basic Information" : "Edit User Information"}</h5>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form >
                  <div className="row">
                    <div className="form-group mb-3 col-md-4">
                        <FormGroup>
                          <Label for="firstName">Date of Registration*</Label>
                          <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={values.firstName}
                            //onChange={handleInputChange}
                            required
                          />
                        </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-4">
                        <FormGroup>
                          <Label for="lastName">Patient ID * </Label>
                          <Input
                            type="text"
                            name="lastName"
                            id="lastName"
                            //onChange={handleInputChange}
                            value={values.lastName}
                            required
                          />
                        </FormGroup>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-3 col-md-4">
                      <FormGroup>
                      <Label for="userName">First Name *</Label>
                      <Input
                        type="text"
                        name="userName"
                        id="userName"
                        //onChange={handleInputChange}
                        value={values.userName}
                        required
                      />
                      </FormGroup>
                    </div>
                    <div className="form-group mb-3 col-md-4">
                      <FormGroup>
                      <Label >Middle Name</Label>
                      <Input
                        type="text"
                        name="mname"
                        id="mname"
                        //onChange={handleInputChange}
                        value={values.email}
                        required
                      />
                      </FormGroup>
                    </div>
                    
                    <div className="form-group mb-3 col-md-4">
                      <FormGroup>
                      <Label >Last Name *</Label>
                      <Input
                        type="text"
                        name="lname"
                        id="lname"
                        //onChange={handleInputChange}
                        value={values.email}
                        required
                      />
                      </FormGroup>
                    </div>
                   </div>
                   <div className="row">
                    <div className="form-group mb-3 col-md-4">
                        <FormGroup>
                          <Label >Age*</Label>
                          <Input
                            type="text"
                            name="age"
                            id="age"
                            //onChange={handleInputChange}
                            value=""
                            required
                          />
                        </FormGroup>
                    </div>
                    <div className="form-group  col-md-4">
                        <FormGroup>
                          <Label >Marital Status *</Label>
                          <Input
                            type="text"
                            name="mstatus"
                            id="mstatus"
                            //onChange={handleInputChange}
                            value=""
                            required
                          />
                        </FormGroup>
                    </div>
                    
                    <div className="form-group  col-md-4">
                        <FormGroup>
                          <Label >Phone Number *</Label>
                          <Input
                            type="number"
                            name="pnumber"
                            id="pnumber"
                            //onChange={handleInputChange}
                            value=""
                            required
                          />
                        </FormGroup>
                    </div>
                   </div>
                
                  {saving ? <Spinner /> : ""}
              <br />
              {userDetail ===null ? (

                <MatButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                
                >
                  {!saving ? (
                    <span style={{ textTransform: "capitalize" }}>Save</span>
                  ) : (
                    <span style={{ textTransform: "capitalize" }}>Saving...</span>
                  )}
                </MatButton>
              )
              :
              (
                <MatButton
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<SaveIcon />}
                
              >
                {!saving ? (
                  <span style={{ textTransform: "capitalize" }}>Save</span>
                ) : (
                  <span style={{ textTransform: "capitalize" }}>Saving...</span>
                )}
              </MatButton>
              )
            }
              <MatButton
                variant="contained"
                className={classes.button}
                startIcon={<CancelIcon />}
                
              >
                <span style={{ textTransform: "capitalize" }}>Cancel</span>
              </MatButton>
                </form>
              </div>
            </div>
            
          </div>
        </div>
        </CardContent>
        </Card>
    </>
  );
};



export default UserRegistration
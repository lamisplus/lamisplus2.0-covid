import React, {useState, useEffect} from 'react';
import { Modal, ModalHeader, ModalBody,Form,FormFeedback,
Row,Col, Card,CardBody, FormGroup, Label, Input} from 'reactstrap';
import MatButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
// import { Alert } from 'reactstrap';
// import { Spinner } from 'reactstrap';
import axios from "axios";
import { ToastContainer, toast} from "react-toastify";
import { url as baseUrl } from "./../../../api";
import { token as token } from "./../../../api";
import { useHistory } from "react-router-dom";
import moment from "moment";

let getAge =""
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
    } 
}))

const Vaccination = (props) => {
    console.log(props)
    const patientObj = props.patientObj;
    let history = useHistory();
    const classes = useStyles()
    const [vaccination, setVaccination] = useState([])
    const [values, setValues] = useState([]);
    const [objValues, setObjValues] = useState({category: "",patient_id: "",location: "",questionAnswers: "",visit_date: ""});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        patients()
      }, []);
        ///GET LIST OF Patients
        async function patients() {
            axios
                .get(`${baseUrl}covid/questions-by-category/VACCINATION`,
                { headers: {"Authorization" : `Bearer ${token}`} }
                )
                .then((response) => {
                    
                    setVaccination(response.data);
                    //setValues(response.data)
                })
                .catch((error) => {    
                });        
        }
        const handleInputChange = e => {
            setValues ({...values,  [e.target.name]: e.target.value});
        }
        
        
        const calculate_age = dob => {
            var today = new Date();
            var dateParts = dob.split("-");
            var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            var birthDate = new Date(dateObject); // create a date object directlyfrom`dob1`argument
            var age_now = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                        age_now--;
                    }
                if (age_now === 0) {
                        return m + " month(s)";
                    }
                    return age_now;
            };

    getAge=calculate_age(moment(patientObj.dob).format("DD-MM-YYYY"))
    /**** Submit Button Processing  */
    const handleSubmit = (e) => {
        //console.log(values)
        e.preventDefault();
        const obj = (Object.entries(values).map(([key, value]) => ({
            question_id: key,
            answer: value,
          })))
          objValues.category= 'VICCINATION'
          objValues.patient_id= patientObj.id
          objValues.questionAnswers =obj
          //objValues.visit_date= ''

          setSaving(true);
          axios.post(`${baseUrl}covid/encounters`,objValues,
           { headers: {"Authorization" : `Bearer ${token}`}},
          
          )
              .then(response => {
                  setSaving(false);
                  toast.success("Patient Vaccination Successful");
                  props.toggle()
                  props.loadPatients()
                  //history.push("/")

              })
              .catch(error => {
                  setSaving(false);
                  toast.error("Something went wrong");
              });
          
    }

  return (      
      <div >
         
              <Modal isOpen={props.showModal} toggle={props.toggle} className={props.className} size="lg">
              <Form >
             <ModalHeader toggle={props.toggle} style={{backgroundColor:"#eeeeee"}}>Vaccination </ModalHeader>
                <ModalBody>
                    
                        <Card >
                            <CardBody>
                                <Row >
                                   {getAge>=5 ?
                                   
                                    (
                                        <>
                                 
                                        {vaccination.map((value) => (
                                            <>
                                                <div className="form-group mb-3 col-md-6">
                                                <FormGroup>
                                                    <Label for="role">{value.name}</Label>
                                                    {value.datatype==="date"?
                                                        (
                                                            <Input
                                                            type="date"
                                                            name={value.id}
                                                            id={value.id}
                                                            //value={value.name}
                                                            onChange={handleInputChange}
                                                            required
                                                            >
                                                            
                                                        </Input>
                                                        )
                                                            :
                                                            " "
                                                        }
                                                        {value.datatype==="number"?
                                                        (
                                                            <Input
                                                            type="number"
                                                            name={value.id}
                                                            id={value.id}
                                                            //value={value.name}
                                                            onChange={handleInputChange}
                                                            required
                                                            >
                                                            
                                                        </Input>
                                                        )
                                                            :
                                                            " "
                                                        }
                                                        {value.datatype==="select"?
                                                        (
                                                            <Input
                                                                type="select"
                                                                name={value.id}
                                                                id={value.id}
                                                                //value={values.name}
                                                                onChange={handleInputChange}
                                                                required
                                                                >
                                                                <option value=""> </option>
                                                                {value.responses.map(({ name, id }) => (
                                                                    <option key={id} value={id}>
                                                                    {name}
                                                                    </option>
                                                                ))}
                                                            </Input>
                                                        )
                                                            :
                                                            " "
                                                        }
                                                        {value.datatype==="checkbox"?
                                                        (
                                                            <Input
                                                                type="select"
                                                                name={value.id}
                                                                id={value.id}
                                                                //value={values.name}
                                                                onChange={handleInputChange}
                                                                required
                                                                >
                                                                <option value=""> </option>
                                                                {value.responses.map(({ name, id }) => (
                                                                    <option key={id} value={id}>
                                                                    {name}
                                                                    </option>
                                                                ))}
                                                            </Input>
                                                        )
                                                            :
                                                            " "
                                                        }
                                                   
                                                        
                                                </FormGroup>
                                            
                                            </div>
                                            </>
                                        
                                        ))}
                                         </>
                                    )
                                    :
                                    (
                                        <>
                                            <p><h4>The Age is less than 5</h4></p>
                                        </>
                                    )

                                    }
                                             
                                  </Row>
                                      <br/>
                                      
                                      <br/>
                                      
                                          <MatButton
                                              type='submit'
                                              variant='contained'
                                              color='primary'
                                              className={classes.button}
                                              startIcon={<SaveIcon />}
                                              onClick={handleSubmit}
                                              disabled={getAge<5?"true":""}
                                             
                                          >   
                                              Save 
                                          </MatButton>
                                           
                                          <MatButton
                                              variant='contained'
                                              color='default'
                                             onClick={props.toggle}
                                              className={classes.button}
                                              startIcon={<CancelIcon />}
                                          >
                                              cancel
                                          </MatButton>
                            </CardBody>
                        </Card> 
                    </ModalBody>
        
                </Form>
      </Modal>
    </div>
  );
}

export default Vaccination;

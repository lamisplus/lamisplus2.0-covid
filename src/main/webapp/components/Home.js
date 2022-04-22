import React, {useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Card,  Tab, Tabs, Table,} from "react-bootstrap";
import Dashboard from './PatientList'
import AdmissionList from './AdmissionList'
import ICUList from './ICUList'
import DischargeDeathList from './DischargeDeathList'

const divStyle = {
  borderRadius: "2px",
  fontSize: 14,
};

const Test = () => {
    const [key, setKey] = useState('home');


  return (
    <Fragment>
     
      <Row>
       
        <Col xl={12}>
          <Card style={divStyle}>
            
            <Card.Body>
              {/* <!-- Nav tabs --> */}
              <div className="custom-tab-1">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Patients">                   
                      <Dashboard />
                    </Tab>
                    <Tab eventKey="Admission" title="Admission">
                      <AdmissionList />
                    </Tab>
                    <Tab eventKey="ICU" title="ICU">
                      <ICUList />
                    </Tab>
                    <Tab eventKey="Discharge/Death" title="Discharge/Death">
                      <DischargeDeathList />
                    </Tab>
                    </Tabs>


              </div>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Fragment>
  );
};

export default Test;

import "./BorrowerForm.scss";

import { Button, Grid, TextField, Typography, useMediaQuery } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import TextLogo from "../../assets/textlogo.png";

type address = {
  street: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

type FormData = {
  email: string;
  fullName: string;
  position: string;
  company: string;
  yearsInBusiness: string;
  avgAnnRev: string;
  loanAmt: string;
  businessAddr: address;
  otherContact: string;
  purpose: string;
}

export const BorrowerForm = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  let navigate = useNavigate();

  const emailjsPubKey = process.env.REACT_APP_EMAILJS_PUB_KEY ? process.env.REACT_APP_EMAILJS_PUB_KEY : "";
  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID ? process.env.REACT_APP_EMAILJS_SERVICE_ID : "";
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ? process.env.REACT_APP_EMAILJS_TEMPLATE_ID : "";

  emailjs.init(emailjsPubKey);

  const [formValues, setFormValues] = useState<FormData>({
    email: "",
    fullName: "",
    position: "",
    company: "",
    yearsInBusiness: "",
    avgAnnRev: "",
    loanAmt: "",
    businessAddr: {
      street: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    otherContact: "",
    purpose: ""
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(emailjsServiceId, emailjsTemplateId, e.target, emailjsPubKey)
      .then(response => console.log("Form submitted!"))
      .catch(error => console.error(error));
    
      navigate("/");
  };

  return (
    <div className="borrow-page-bg">
      <form className={`borrow-form ${isSmallScreen && `smaller`}`} onSubmit={handleSubmit}>
        <Link className="internal-link" to="/" style={{ marginBottom: "30px" }}>
          <img src={TextLogo} width="100%" alt="logo-link" style={{ maxWidth: "300px", maxHeight: "30%" }} />
        </Link>
        <Grid
          className="field-container"
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          xs={11}
          md={7}
          spacing={3}>
            <Grid className="title" item>
              <Typography variant={isSmallScreen ? "h6" : "h5"}>
                Borrower Form
              </Typography>
            </Grid>
            <Grid className="description" item>
              <Typography variant={isSmallScreen ? "body1" : "body2"}>
                Tell us more about your business so we can determine how a loan from Village can help. Upon receiving your application, a team member will contact you shortly to further discuss what is needed for a risk assessment.
              </Typography>
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="email-input"
                name="email"
                label="Email"
                type="email"
                value={formValues.email}
                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="full-name-input"
                name="fullName"
                label="Full Name"
                type="text"
                value={formValues.fullName}
                onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="position-input"
                name="position"
                label="Position Title"
                type="text"
                value={formValues.position}
                onChange={(e) => setFormValues({ ...formValues, position: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="company-name-input"
                name="company"
                label="Company Name"
                type="text"
                value={formValues.company}
                onChange={(e) => setFormValues({ ...formValues, company: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="years-in-business-input"
                name="yearsInBusiness"
                label="Years In Business"
                type="text"
                value={formValues.yearsInBusiness}
                onChange={(e) => setFormValues({ ...formValues, yearsInBusiness: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="avg-ann-rev-input"
                name="avgAnnRev"
                label="Average Annual Revenues"
                type="text"
                value={formValues.avgAnnRev}
                onChange={(e) => setFormValues({ ...formValues, avgAnnRev: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="loan-amt-input"
                name="loanAmt"
                label="Loan Amount"
                type="text"
                value={formValues.loanAmt}
                onChange={(e) => setFormValues({ ...formValues, loanAmt: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" container alignItems="center" justifyContent="center" direction="row" spacing={1}>
              <Grid className="text-field-grid" item xs={12}>
                <TextField
                  className="text-field"
                  id="street-input"
                  name="street"
                  label="Street Address"
                  type="text"
                  value={formValues.businessAddr.street}
                  onChange={(e) => setFormValues({ ...formValues, businessAddr: { ...formValues.businessAddr, street: e.target.value } })}
                />
              </Grid>
              <Grid className="text-field-grid" item xs={12}>
                <TextField
                  className="text-field"
                  id="line-2-input"
                  name="line2"
                  label="Address Line 2"
                  type="text"
                  value={formValues.businessAddr.line2}
                  onChange={(e) => setFormValues({ ...formValues, businessAddr: { ...formValues.businessAddr, line2: e.target.value } })}
                />
              </Grid>
              <Grid className="text-field-grid" item xs={12} xl={4}>
                <TextField
                  className="text-field"
                  id="state-input"
                  name="state"
                  label="State/Prov/Region"
                  type="text"
                  value={formValues.businessAddr.state}
                  onChange={(e) => setFormValues({ ...formValues, businessAddr: { ...formValues.businessAddr, state: e.target.value } })}
                />
              </Grid>
              <Grid className="text-field-grid" item xs={12} md={6} xl={4}>
                <TextField
                  className="text-field"
                  id="city-input"
                  name="city"
                  label="City"
                  type="text"
                  value={formValues.businessAddr.city}
                  onChange={(e) => setFormValues({ ...formValues, businessAddr: { ...formValues.businessAddr, city: e.target.value } })}
                />
              </Grid>
              <Grid className="text-field-grid" item xs={12} md={6} xl={4}>
                <TextField
                  className="text-field"
                  id="zip-input"
                  name="zip"
                  label="Postal/Zip"
                  type="text"
                  value={formValues.businessAddr.zip}
                  onChange={(e) => setFormValues({ ...formValues, businessAddr: { ...formValues.businessAddr, zip: e.target.value } })}
                />
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="other-contact-input"
                name="otherContact"
                label="Other Contact Information"
                type="text"
                value={formValues.otherContact}
                onChange={(e) => setFormValues({ ...formValues, otherContact: e.target.value })}
              />
            </Grid>
            <Grid className="text-field-grid" item xs={12}>
              <TextField
                className="text-field"
                id="purpose-input"
                name="purpose"
                label="Purpose of Loan"
                type="text"
                value={formValues.purpose}
                onChange={(e) => setFormValues({ ...formValues, purpose: e.target.value })}
              />
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
        </Grid>
      </form>
    </div>
  );
}

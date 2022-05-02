import "./InfoBoxes.scss";

import { Accordion, AccordionDetails, AccordionSummary, Grid, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import { ReactComponent as Farm } from "../../assets/farm.svg";
import { ReactComponent as Chain } from "../../assets/chain.svg";
import { ReactComponent as Invest } from "../../assets/invest.svg";
import { ReactComponent as Borrow } from "../../assets/borrow.svg";

export const InfoBoxes = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMedScreen = useMediaQuery("(max-width: 900px)");
  const isLgScreen = useMediaQuery("(max-width: 1200px)") && !isMedScreen;

  const mobileInfoBoxes = () => {
    return (
      <Grid className="mobile-info-boxes-container" container direction="column">
        <Grid className="mobile-impact" container direction="column">
          <Grid item>
            <Typography variant="h5" color="secondary" style={{ fontWeight: "600" }}>
              Expand your access to impact.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" style={{ color: "#5E5E5E" }}>
              Village uses smart contracts to unlock capital opportunities without intermediaries. The result is an expanded access to impact, enabling socially conscious investors to support inspiring causes while borrowers appreciate easier access to capital at improved rates.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Accordion className="mobile-invest-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                  <SvgIcon
                    component={Invest}
                    className="info-box-invest-icon"
                    viewBox="0 0 89 69"
                    style={{ width: "78px", height: "60px" }}
                  />
                </Grid>
                <Grid item>
                  <Typography className="white-text" variant="h6" align="right">Invest</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="white-text" variant="body2" align="center">
                Tap into a new type of yield by committing capital to a borrower’s fund.
              </Typography>
              <br />
              <br />
              <Typography className="white-text" variant="body2" align="center">
                For every new borrower, pre-approved investors can commit capital and access financial returns on stablecoins, alongside real-world impact.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Accordion className="mobile-borrow-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                  <Typography className="white-text" variant="h6" align="left">Borrow</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <SvgIcon
                  component={Borrow}
                  className="info-box-borrow-icon"
                  viewBox="0 0 60 60"
                  style={{ width: "60px", height: "60px" }}
                />
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="white-text" variant="body2" align="center">
                Mission-oriented businesses, Fintech lenders, investment funds, and other types of institutions may be eligible to borrow through Village. 
              </Typography>
              <br />
              <br />
              <Typography className="white-text" variant="body2" align="center">
                Complete the Credit Application or contact us to start the process.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item>
          <Accordion className="mobile-impact-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                  <SvgIcon
                    component={ParkOutlinedIcon}
                    className="info-box-impact-icon"
                    viewBox="0 0 24 24"
                    style={{ width: "60px", height: "60px", fill: "white" }}
                  />
                </Grid>
                <Grid item>
                  <Typography className="white-text" variant="h6" align="right">Impact</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="white-text" variant="body2" align="center">
                Impact investments are made with the goal of generating measurable social and environmental impact alongside a financial return.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    );
  }

  const desktopInfoBoxes = () => {
    return (
      <>
        <Grid container xs={11}>
          <Grid item xs={12} md={6}>
            <SvgIcon component={Farm} className={`info-box-icon ${isLgScreen && `large`} ${isMedScreen && `medium`}`} viewBox="0 0 677 451" style={{ width: "95%", height: "95%" }} />
          </Grid>
        </Grid>
        <Grid className={`info-boxes ${isMedScreen && `medium`}`} container direction="column" alignItems="center" xs={11}>
          <Grid className={`top-box ${isSmallScreen && `smaller`}`} container direction="row" alignItems="flex-end" justifyContent="flex-end">
            <Grid item xs={12} md={5}>
              <Typography className="white-text" variant="h6" align={isSmallScreen ? "center" : "left"}>
                Bringing sustainable yields to crypto. Leverage the blockchain and stablecoins to invest and earn, or borrow and fund toward a better world using Village.
              </Typography>
            </Grid>
          </Grid>

          <Grid className={`expand ${isSmallScreen && `smaller`}`} container direction="column">
            <div className="white-box" style={ isSmallScreen ? { padding: "15px"} : {} }>
              <Grid container direction="row" xs={12} justifyContent="space-between" style={{ marginBottom: "20px" }}>
                <Grid item xs={12} style={{ marginBottom: "35px" }}>
                  <Typography variant={isSmallScreen ? "h6" : "h5"} align={isSmallScreen ? "center" : "left"}>
                    Expand your access to impact
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant={isSmallScreen ? "body1" : "h6"} align={isSmallScreen ? "center" : "left"}>
                  Village uses <span className="blue">smart contracts</span> to unlock capital opportunities without intermediaries. The result is an expanded access to impact, enabling <span className="purple">socially conscious investors to support inspiring causes</span> while borrowers appreciate <span className="orange">easier access to capital at improved rates</span>.
                </Typography>
              </Grid>
            </div>
          </Grid>

          <Grid container direction="row">
            <Grid className={`invest ${isMedScreen && `medium`} ${isSmallScreen && `smaller`}`} container direction="column" alignItems={isMedScreen ? "center" : "flex-end"} xs={12} md={6}>
              <Grid item>
                <SvgIcon
                  component={Invest}
                  className="info-box-invest-icon"
                  viewBox="0 0 89 69"
                  style={{ width: "78px", height: "60px" }}
                />
              </Grid>
              <Grid item>
                <Typography id="invest-text" className="white-text" variant={isSmallScreen ? "h6" : "h5"} align={isMedScreen ? "center" : "right"}>
                  Invest
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="white-text" variant={isSmallScreen ? "body1" : "h6"} align={isMedScreen ? "center" : "right"}>
                  Tap into a new type of yield by committing capital to a borrower’s fund.
                </Typography>
                <br />
                <br />
                <Typography className="white-text" variant={isSmallScreen ? "body1" : "h6"} align={isMedScreen ? "center" : "right"}>
                  For every new borrower, pre-approved investors can commit capital and access financial returns on stablecoins, alongside real-world impact.
                </Typography>
              </Grid>
            </Grid>
            <Grid className={`borrow ${isMedScreen && `medium`} ${isSmallScreen && `smaller`}`} container direction="column" alignItems={isMedScreen ? "center" : "flex-start"} xs={12} md={6}>
              <Grid item>
                <SvgIcon
                  component={Borrow}
                  className="info-box-borrow-icon"
                  viewBox="0 0 60 60"
                  style={{ width: "60px", height: "60px" }}
                />
              </Grid>
              <Grid item>
                <Typography id="borrow-text" className="white-text" variant={isSmallScreen ? "h6" : "h5"} align={isMedScreen ? "center" : "left"}>
                  Borrow
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="white-text" variant={isSmallScreen ? "body1" : "h6"} align={isMedScreen ? "center" : "left"}>
                  Mission-oriented businesses, Fintech lenders, investment funds, and other types of institutions may be eligible to borrow through Village. 
                </Typography>
                <br />
                <br />
                <Typography className="white-text" variant={isSmallScreen ? "body1" : "h6"} align={isMedScreen ? "center" : "left"}>
                  Complete the Credit Application or contact us to start the process.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      {isSmallScreen ? mobileInfoBoxes() : desktopInfoBoxes()}
    </>
  );
}

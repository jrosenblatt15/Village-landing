import "./InfoBoxes.scss";

import { Accordion, AccordionDetails, AccordionSummary, Grid, Link, SvgIcon, Typography, useMediaQuery } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import { ReactComponent as Farm } from "../../assets/farm.svg";
import { ReactComponent as Chain } from "../../assets/chain.svg";
import { ReactComponent as Invest } from "../../assets/invest.svg";
import { ReactComponent as Borrow } from "../../assets/borrow.svg";
import { ReactComponent as Teller } from "../../assets/tellerLogo.svg";
import { ReactComponent as Polygon } from "../../assets/polygonLogo.svg";
import { ReactComponent as TrueFi } from "../../assets/truefiLogo.svg";
import { ReactComponent as Borrow1M } from "../../assets/borrow1m.svg";
import { ReactComponent as LowRates } from "../../assets/lowRates.svg";
import { ReactComponent as Divider } from "../../assets/bigDivider.svg";

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
            <Typography variant="body1" style={{ color: "#5E5E5E", marginBottom: "36px" }}>
              Village uses smart contracts to unlock capital opportunities without intermediaries. The result is an expanded access to impact, enabling socially conscious investors to support inspiring causes while borrowers appreciate easier access to capital at improved rates.
            </Typography>
          </Grid>
          <Grid className="extra-info" container direction="column" spacing={2}>
            <Grid
              container
              direction="row"
              xs={11}
              style={ isMedScreen || isSmallScreen ? { marginBottom: "30px" } : {} }
            >
              <Grid className="borrow-1m-icon" item xs={4}>
                <SvgIcon component={Borrow1M} viewBox="0 0 174 165" style={{ minWidth: "100px", minHeight: "100px", marginBottom: "15px" }} />
              </Grid>
              <Grid container direction="column" xs={7}>
                <Grid item>
                  <Typography variant="body1" color="secondary" style={{ fontWeight: "bold" }}>
                    Borrow up to $1 million
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ color: "#5E5E5E" }}>
                    Maturity of 36 months or less, depending on loan terms
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container direction="row" xs={11}>
              <Grid container direction="column" xs={7}>
                <Grid item>
                  <Typography variant="body1" color="secondary" style={{ fontWeight: "bold" }}>
                    Low Rates
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ color: "#5E5E5E" }}>
                    Borrow for as low as 7%
                  </Typography>
                </Grid>
              </Grid>
              <Grid className="low-rates-icon" item xs={4}>
                <SvgIcon component={LowRates} viewBox="0 0 165 165" style={{ minWidth: "100px", minHeight: "100px", marginBottom: "15px" }} />
              </Grid>
            </Grid>
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
              <Typography className="white-text" variant="body1" align="center" style={{ fontWeight: "bold", marginBottom: "12px" }}>
                Lend USDC. Earn Yield. Make an impact.
              </Typography>
              <Typography className="white-text" variant="body2" align="center">
                Access financial returns on stablecoins, alongside real-world impact. Village pre-approved borrowers deploy your capital to support real-world opportunities.  
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
              <Typography className="white-text" variant="body1" align="center" style={{ fontWeight: "bold", marginBottom: "12px" }}>
                Frictionless Asset Transfer
              </Typography>
              <Typography className="white-text" variant="body2" align="center">
                Using blockchain rails to facilitate loans in Circle’s stablecoin, USD Coin (USDC), Village uses the most cost effective and efficient technology on the market.
              </Typography>
              <br />
              <Typography className="white-text" variant="body2" align="center">
                Learn more about USDC &nbsp;
                <Link href="https://www.circle.com/en/usdc" target="_blank" underline="always" style={{ color: "white" }}>
                   here.
                </Link>
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
            <SvgIcon component={Farm} className={`info-box-icon ${isLgScreen && `large`} ${isMedScreen && `medium`}`} viewBox="0 0 677 451" style={{ width: "88%", height: "88%" }} />
          </Grid>
        </Grid>
        <Grid className={`info-boxes ${isMedScreen && `medium`}`} container direction="column" alignItems="center" xs={11}>
          <Grid className={`top-box ${isSmallScreen && `smaller`}`} container direction="column" alignItems="flex-end" justifyContent="flex-end">
            <Grid className="top-box-desc" item xs={12} md={6} lg={5}>
              <Typography className="white-text" variant="body1" align={isSmallScreen ? "center" : "left"}>
                Bringing sustainable yields to crypto. Leverage the blockchain and stablecoins to invest and earn, or borrow and fund toward a better world using Village.
              </Typography>
            </Grid>
            <Grid container direction="row" xs={12} lg={7} spacing={2}>
              <Grid className="our-partners" item xs={4}>
                <Typography className="white-text" variant="body1" align="center">
                  Our Partners
                </Typography>
              </Grid>
              <Grid className="partners" container direction="row" xs={8} spacing={2}>
                <Grid item xs={4}>
                  <SvgIcon component={Teller} viewBox="0 0 145 48" style={{ width: "80%", height: "30px" }} />
                </Grid>
                <Grid item xs={4}>
                  <SvgIcon component={Polygon} viewBox="0 0 207 73" style={{ width: "100%", height: "40px" }} />
                </Grid>
                <Grid item xs={4}>
                  <SvgIcon component={TrueFi} viewBox="0 0 541 128" style={{ width: "80%", height: "30px" }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid className={`expand ${isSmallScreen && `smaller`}`} container direction="column">
            <div className="white-box" style={ isSmallScreen ? { padding: "15px"} : {} }>
              <Grid container direction="row" xs={12} justifyContent="space-between" style={{ marginBottom: "20px" }}>
                <Grid item xs={12}>
                  <Typography
                    variant={isSmallScreen ? "h6" : "h5"}
                    align={isSmallScreen ? "center" : "left"}
                    style={{ color: "rgba(54, 72, 64, 1)" }}
                  >
                    Expand your access to impact
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={isSmallScreen ? "center" : "left"}
                  style={{ color: "rgba(79, 79, 79, 1)" }}
                >
                  Village uses <span className="blue">smart contracts</span> to unlock capital opportunities without intermediaries. The result is an expanded access to impact, enabling <span className="purple">socially conscious investors to support inspiring causes</span> while borrowers appreciate <span className="orange">easier access to capital at improved rates</span>.
                </Typography>
              </Grid>
              <Grid className="extra-info" container direction="row" spacing={2}>
                <Grid
                  container
                  direction="column"
                  xs={10}
                  md={5}
                  style={ isMedScreen || isSmallScreen ? { marginBottom: "30px" } : {} }
                >
                  <Grid item>
                    <SvgIcon component={Borrow1M} viewBox="0 0 174 165" style={{ minWidth: "100px", minHeight: "100px", marginBottom: "15px" }} />
                  </Grid>
                  <Grid item style={{ marginBottom: "20px" }}>
                    <Typography variant="h6" style={{ color: "rgba(0, 47, 57, 1)" }}>
                      Borrow up to $1 million
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.9)" }}>
                      Maturity of 36 months or less, depending on loan terms
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container direction="column" xs={10} md={5}>
                  <Grid item>
                    <SvgIcon component={LowRates} viewBox="0 0 165 165" style={{ minWidth: "100px", minHeight: "100px", marginBottom: "15px" }} />
                  </Grid>
                  <Grid item style={{ marginBottom: "20px" }}>
                    <Typography variant="h6" style={{ color: "rgba(0, 47, 57, 1)" }}>
                      Low Rates
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.9)" }}>
                      Borrow for as low as 7%
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid className="bottom-box" container direction="column">
            <Grid
              className={`borrow ${isLgScreen && `large`} ${isMedScreen && `medium`} ${isSmallScreen && `smaller`}`}
              container
              direction="row"
              alignItems="center"
              xs={12}
            >
              <Grid className="borrow-top" item alignItems="center" justifyContent="center" xs={12} lg={3}>
                <div className="borrow-icon-container">
                  <SvgIcon
                    component={Borrow}
                    className="info-box-borrow-icon"
                    viewBox="0 0 60 60"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Typography id="borrow-text" className="white-text" variant={isSmallScreen ? "h6" : "h5"} align="center">
                    Borrow
                  </Typography>
                </div>
              </Grid>
              <Grid container direction="row" justifyContent="space-between" xs={12} lg={9}>
                <Grid container direction="column" xs={5} spacing={2}>
                  <Grid item>
                    <Typography className="white-text" variant="body1" align="left" style={{ fontFamily: "fantabular-sans-mvb", fontWeight: "bold"}}>
                      Spend less for your capital
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="white-text" align="left" variant="body2">
                      Village smart contracts don’t take a cut! 
                    </Typography>
                    <br />
                    <br />
                    <Typography className="white-text" align="left" variant="body2">
                      Finance without intermediaries means no extra fees and cheaper cost of capital. The cost of borrowing you see is what you get.
                    </Typography>
                  </Grid>
                </Grid>
                <div className="divider">
                  <SvgIcon component={Divider} viewBox="0 0 1 310" style={{ width: "10px", height: "250px"}} />
                </div>
                <Grid container direction="column" xs={5} spacing={2}>
                  <Grid item>
                    <Typography className="white-text" variant="body1" align="left" style={{ fontFamily: "fantabular-sans-mvb", fontWeight: "bold" }}>
                      Frictionless asset transfer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="white-text" variant="body2" align="left">
                      Using blockchain rails to facilitate loans in Circle’s stablecoin, USD Coin (USDC), Village uses the most cost effective and efficient technology on the market.
                    </Typography>
                    <br />
                    <br />
                    <Typography className="white-text" variant="body2" align="left">
                      Learn more about USDC &nbsp;
                      <Link href="https://www.circle.com/en/usdc" target="_blank" underline="always" style={{ color: "white" }}>
                        here.
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className={`invest ${isLgScreen && `large`} ${isMedScreen && `medium`} ${isSmallScreen && `smaller`}`}
              container
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              xs={12}
            >
              <Grid container direction="row" justifyContent="space-between" xs={12} lg={9}>
                <Grid container direction="column" xs={5} spacing={2}>
                  <Grid item>
                    <Typography className="white-text" variant="body1" align="left" style={{ fontFamily: "fantabular-sans-mvb", fontWeight: "bold" }}>
                      Lend USDC. Earn Yield. Make an Impact.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="white-text" variant="body2" align="left">
                      Access financial returns on stablecoins, alongside real-world impact. Village pre-approved borrowers deploy your capital to support real-world opportunities.  
                    </Typography>
                  </Grid>
                </Grid>
                <div className="divider">
                  <SvgIcon component={Divider} viewBox="0 0 1 310" style={{ width: "10px", height: "235px"}} />
                </div>
                <Grid container direction="column" xs={5} spacing={2}>
                  <Grid item>
                    <Typography className="white-text" variant="body1" align="left" style={{ fontFamily: "fantabular-sans-mvb", fontWeight: "bold" }}>
                      Access private debt
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="white-text" variant="body2" align="left">
                      A Village credit assessment results in a <span className="italic">recommended</span> rate, however the final decision is up to investors to lend capital. We provide all the financial data necessary to assess the borrowers you would like to support.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className="invest-top" item alignItems="center" justifyContent="center" xs={12} lg={3}>
                <div className="invest-icon-container">
                  <SvgIcon
                    component={Invest}
                    className="info-box-invest-icon"
                    viewBox="0 0 89 69"
                    style={{ width: "78px", height: "60px" }}
                  />
                  <Typography id="invest-text" className="white-text" variant={isSmallScreen ? "h6" : "h5"} align="center">
                    Invest
                  </Typography>
                </div>
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

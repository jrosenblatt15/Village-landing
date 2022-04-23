import "./PageBreak.scss";

import { Grid, SvgIcon, useMediaQuery } from "@material-ui/core";
import { ReactComponent as PageBreakIcon } from "../../assets/pagebreak.svg";

export const PageBreak = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const mobilePageBreak = () => {
    return (
      <></>
    );
  }

  const desktopPageBreak = () => {
    return (
      <Grid className="page-break" item xs={12}>
        <SvgIcon
          component={PageBreakIcon}
          className="page-break"
          viewBox="0 0 1540 116"
          style={{ width: "1540px", height: "116px" }}
        />
      </Grid>
    );
  }

  return (
    <>
      {isSmallScreen ? mobilePageBreak() : desktopPageBreak()}
    </>
  );
}

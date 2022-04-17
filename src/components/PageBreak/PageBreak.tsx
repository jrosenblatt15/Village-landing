import "./PageBreak.scss";

import { Grid, SvgIcon } from "@material-ui/core";
import { ReactComponent as PageBreakIcon } from "../../assets/pagebreak.svg";

export const PageBreak = () => {
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

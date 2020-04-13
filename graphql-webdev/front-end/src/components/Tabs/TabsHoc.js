import { withStyles } from "@material-ui/core";
import { compose } from "@material-ui/system";

import { styles } from "./styles";

export default compose(withStyles(styles, { withTheme: true }));

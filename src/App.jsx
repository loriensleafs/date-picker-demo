import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@material-ui/pickers";
import DateFnsAdapter from "@material-ui/pickers/adapter/date-fns";
import enLocale from "date-fns/locale/en-US";
import * as React from "react";

export default function App() {
  const [locale] = React.useState(enLocale);
  const [value, setValue] = React.useState(new Date());

  const memoizedDateAdapter = React.useMemo(() => {
    return new DateFnsAdapter({ locale });
  }, [locale]);

  return (
    <React.Fragment>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        dateAdapter={memoizedDateAdapter}
      />
    </React.Fragment>
  );
}

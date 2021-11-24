import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

getBrowserLanguage(){
    console.log(navigator.language || navigator.userLanguage)
}

ReactDOM.render(
	<IntlProvider locale={navigator.language || navigator.userLanguage} messages= {localeEsMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);

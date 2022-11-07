// import e2eReport from "../coverage/playwright/e2eresults.json" assert { type: 'json' }
import createE2ECoverageReport from "playwright-e2e-report"

function reportConverter() {
    //    Fetch Report
    fetch('../coverage/playwright/e2ereport.json')
        .then((response) => response.json())
        .then((json) => createE2ECoverageReport(json));
}

export default reportConverter
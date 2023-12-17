require("dotenv").config();

require("./database/connection");

// Run one of these files with "node app.js" or "yarn start"
require("./modules/subDocuments.js");
// require('./modules/foreignKeys.js')

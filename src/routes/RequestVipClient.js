var express = require("express");
var router = express.Router();
const requestVipClientController = require("../controllers/RequestVipClient");

router.post(`/`, requestVipClientController.create);

export default router;

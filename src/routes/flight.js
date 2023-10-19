"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/Flight:

const Flight = require("../controllers/Flight");

// URL: /Flights

router.route("/").get(Flight.list).post(Flight.create);

router
  .route("/:id")
  .get(Flight.read)
  .put(Flight.update)
  .patch(Flight.update)
  .delete(Flight.delete);

/* ------------------------------------------------------- */
module.exports = router;

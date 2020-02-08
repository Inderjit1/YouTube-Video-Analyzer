const express = require("express");
const router = express.Router();
var mainController = require("../controllers/main");

router.get('/', mainController.main);
router.get('/form', mainController.get_form);
router.post('/form', mainController.post_form);

router.get('/person', mainController.person);
router.post('/person', mainController.insert_person);


// Home page
// router.get("/", (req, res) => {
//     res.render("index");
// });


module.exports = router;
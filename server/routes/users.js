const router = require("express").Router();

router.get("/login/:sessionId", (req, res) => {

    let sessionId = req.params.sessionId;

    
    res.send('<h1>User page</h1>')
})

module.exports = router;
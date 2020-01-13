const express = require('express');
const app = express();

app.use(express.static('public'));


const userRouter = require('./routes/users');
app.use("/users", userRouter);



//redirect unmatched page to home
app.all('*', function (req, res) {
    res.redirect("/");
});

const port = process.env.PORT || 3300;
app.listen(port, () => {
    console.log('server listen on port', port)
})

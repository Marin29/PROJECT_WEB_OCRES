const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/Grand_Chelem",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log("MongoDB connected");
        else console.log("error :" + err);
    }
)
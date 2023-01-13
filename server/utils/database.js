const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
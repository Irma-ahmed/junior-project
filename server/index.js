const express = require('express');
require('./models/index.js')
const postRoute = require('./routes/post.routes.js')
const userRoute = require('./routes/user.routes.js')
const CommentRoute = require('./routes/comment.routes.js')
let app = express();

app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'));

app.use('/api/post', postRoute)
app.use('/api/user', userRoute)
app.use('/api/comments', CommentRoute)


let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


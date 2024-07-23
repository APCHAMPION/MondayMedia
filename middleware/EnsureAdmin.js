const cookieParser = require("cookie-parser");

module.exports = function(req,res,next){
        if (req.cookies.admin === 'true') {
          next();
        } else {
          res.send(`<script>alert('This page is not allowed to access'); window.location.href = '/';</script>`);
        }
}
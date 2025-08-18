const express = require("express");
const router = express.Router();

const path=require("path");

router.use("/admin/blog/create", function(req, res){
    res.sendFile(path.join(__dirname,"../views/admin","blog-create.html"));
});  
router.use("/admin/blogs", function(req, res){
    res.sendFile(path.join(__dirname,"../views/admin","blog-list.html"));
});  
router.use("/admin/blogs/:blogid", function(req, res){
    res.sendFile(path.join(__dirname,"../views/admin","blog-edit.html"));
});  

module.exports = router;
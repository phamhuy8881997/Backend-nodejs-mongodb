var express=require('express');
var router=express.Router();
var DataCart=require('../models/dataCart');

// ============get api===============================
router.get('/', async (req,res)=>{
    try{
        const Get_todo= await DataCart.find();
        res.json(Get_todo);
    }catch(err){
        res.json({message:err});
    }
});
// ============post api===============================
router.post('/', async (req,res)=>{
    var post_todo= new DataCart({
        user: req.body.user,
        Cart:req.body.Cart,
        MDH: req.body.MDH,
        status:req.body.status,
        times:req.body.times
    });
    try{
        const Post_todo = await post_todo.save();
        res.json(Post_todo);
    }catch(err){
        res.json({message:err})
    }
});
// ============update api============================
router.put('/:id', async (req,res)=>{
    try{
        var dataPost = {
            user: req.body.user,
            Cart:req.body.Cart,
            MDH: req.body.MDH,
            status:req.body.status,
            times:req.body.times
        }
        var Update_id = await DataCart.findByIdAndUpdate(req.params.id, dataPost);
        res.json(Update_id);
    }catch(err){
        res.json({message:err});
    }
});
// ============delete api id=========================
router.delete('/:id', async (req,res)=>{
    try{
        const Delete_id = await DataCart.remove({_id:req.params.id});
        res.json(Delete_id);
    }catch(err){
        res.json({message:err});
    }
});
//===================================================

module.exports=router;






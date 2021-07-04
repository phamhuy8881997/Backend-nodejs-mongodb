var express=require('express');
const { updateMany, updateOne } = require('../models/todo.model');
var router=express.Router();
var Todo=require('../models/todo.model');

// ============get api===============================
router.get('/', async (req,res)=>{
    try{
        const Get_todo= await Todo.find();
        res.json(Get_todo);
    }catch(err){
        res.json({message:err});
    }
});
// ============post api===============================
router.post('/', async (req,res)=>{
    var post_todo= new Todo({
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
        imgSale: req.body.imgSale,
        imgConfig: req.body.imgConfig,
        descript: req.body.descript,
        tagName: req.body.tagName,
        tagSearch: req.body.tagSearch,
        sale: req.body.sale,
        video: req.body.video,
        status:req.body.status
    });

    // const Post_todo = await post_todo.save()
    // .then((data)=>{res.json(data)})
    // .catch((err)=>{console.log(err)});
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
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            imgSale: req.body.imgSale,
            imgConfig: req.body.imgConfig,
            descript: req.body.descript,
            tagName: req.body.tagName,
            tagSearch: req.body.tagSearch,
            sale: req.body.sale,
            video: req.body.video,
            status:req.body.status
        }
        var Update_id = await Todo.findByIdAndUpdate(req.params.id, dataPost);
        res.json(Update_id);
    }catch(err){
        res.json({message:err});
    }
});
// ============delete api id=========================
router.delete('/:id', async (req,res)=>{
    try{
        const Delete_id = await Todo.remove({_id:req.params.id});
        res.json(Delete_id);
    }catch(err){
        res.json({message:err});
    }
});
//===================================================

module.exports=router;






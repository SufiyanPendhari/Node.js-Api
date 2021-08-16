const express = require('express');
const blogPost = require('../Database/database.js');

const router = express.Router();
//  to Fetch Api
router.get('/', async (req,res)=>{
    
    // ('Content-Type','application/json')
    try {
        
        const blog = await blogPost.find();
        res.status(200).json(blog);
    } catch (error) {
        res.setHeader('Content-Type','application/json')
        res.status(500).json({message:error.message})
    }
    
    


})
// To Fetch one element
router.get('/:id',async (req,res)=>{
    const id = req.params.id;
try {
        
    const blog = await blogPost.findById(id);
    res.status(200).json(blog);
} catch (error) {
    res.setHeader('Content-Type','application/json')
    res.status(500).json({message:error.message})
}

})
// To Add Element
router.post('/',async (req,res)=>{
   console.log(req.body)
    const newBlog = new blogPost({
        title: req.body.title,
        body: req.body.body})

    try {
        const blog = await newBlog.save();
        res.status(201).json(blog);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
    })
// To update element
router.patch('/:id',async (req,res)=>{
    try {
        await blogPost.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            body:req.body.body
        })
        res.json({message:'Updated'})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
    
    })
// To delete element
router.delete('/:id',async (req,res)=>{
    try {
        await blogPost.findByIdAndDelete(req.params.id);
        res.json({message:'Deleted'})
    } catch (error) {
        res.status(500).json({message:error.message});
    }

    
})



module.exports =router;
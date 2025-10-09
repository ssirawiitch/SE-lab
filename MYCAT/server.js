const express = require('express');
 const dotenv = require('dotenv');
 //Load env vars
 dotenv.config({path:'./config/config.env'});
 const app=express();
 app.get('/api/v1/cats', (req,res) => {
 res.status(200).json({success:true, msg:'Show all cats'});
 });
 app.get('/api/v1/cats/:id', (req,res) => {
 res.status(200).json({success:true, msg:`Show cat ${req.params.id}`});
 });
 app.post('/api/v1/cats', (req,res) => {
 res.status(200).json({success:true, msg:'Create new cat'});
 });
 app.put('/api/v1/cats/:id', (req,res) => {
 res.status(200).json({success:true, msg:`Update cat ${req.params.id}`});
 });
 app.delete('/api/v1/cats/:id', (req,res) => {
 res.status(200).json({success:true, msg:`Delete cat ${req.params.id}`});
 });
 const PORT=process.env.PORT || 5050;
 app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, 'mode on port ', PORT));
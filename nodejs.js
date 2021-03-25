var exp=require("express");
var formi=require("formidable");
var application=exp();

application.use(exp.static(__dirname+'/public'));
application.get('/nodesubmit',function(req, res){
	res.send({
		eid:req.query.eid,
		name:req.query.fname+" "+req.query.lname,
		phone:req.query.phone,
		email:req.query.email,
		city:req.query.city,
		country:req.query.country,
		gender:req.query.gender,
		birthday:req.query.birthday,
		photo:req.body.photo
	});
});

application.post("/nodesubmit",function(req,res){
	var form=new formi.IncomingForm();
	form.parse(req,function(err,fld){
		res.send({
			eid:fld.eid,
			name:fld.fname+" "+fld.lname,
			phone:fld.phone,
			email:fld.email,
			city:fld.city,
			country:fld.country,
			gender:fld.gender,
			birthday:fld.birthday,
			photo:fld.photo
			})
	})
})

application.listen(8080);
console.log("Localhost running on port 8080.");
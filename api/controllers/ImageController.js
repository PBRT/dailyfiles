module.exports = {


	//Create a file in MongoDB
	create: function(req,res){

  	var fs = require('fs');		
		var base64Image;
		fs.readFile(req.files.file.path, function(err, original_data){
  			base64Image ="data:image/png;base64,";
  			base64Image+= new Buffer(original_data, 'binary').toString('base64');

		  	Image.create({image : base64Image,text : req.param('text'), date : new Date(req.param('laDate')), heure :parseInt(req.param('hour'))}).done(function(err,im){
		  		if(err){
		  			console.log(err);
		  		}else{
		  			console.log("Created"+im);
		  			res.redirect('/');

		  		}
		  	})
  		})


  	},

  	loadImage: function(req,res){

  		Image.find().where({date : { '<=' : new Date()}}).sort('date').exec(function(err,dates){
  		//Ensemble des images des dates passées a maintenant
  		//Creation des JSON  		
  		var jsonArr= [];
  		for(var i=0; i<dates.length; i++){

        dateString = dates[i].date.getDate().toString() + "/" + (dates[i].date.getMonth()+1).toString()+"/"+dates[i].date.getFullYear().toString();
  			jsonArr.push({image: dates[i].image,text: dates[i].text,date: dates[i].date,heure: dates[i].heure, dateText: dateString});
	  	}
	  	res.send(jsonArr);
	  	})


  	},

  	upload: function(req,res){

  		console.log(req.files);
  		var fs = require('fs');
  		fs.readFile(req.files.file.path, function(err, original_data){
  			var base64Image = new Buffer(original_data, 'binary').toString('base64');
        	res.send({img: base64Image});
        })

  	},


  _config: {}

  
};

 $(document).ready(function(){
    

// Retrieve the template data from the HTML (jQuery is used here).
var template = $('#handlebars-demo').html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

/*
var context2 = {
    blocks:[
        {
            sValue:"1",
            des: {def: "The total number of modules.", extra: "Extra information"},
            formGroup:"yes"
        },{
            sValue:"2",
            des: {def: "Insert Definition", extra: "Extra information"}
        },{
            sValue:"3",
            des: {def: "Insert Definition", extra: "Extra information"},
            formGroup:"yes"
        },{
            sValue:"4",
            des: {def: "Insert Definition", extra: "Extra information"}
        },{
            sValue:"5",
            des: {def: "Insert Definition", extra: "Extra information"},
            formGroup:"yes"
        },{
            sValue:"6",
            des: {def: "Insert Definition", extra: "Extra information"}
        },{
            sValue:"7",
            des: {def: "Insert Definition", extra: "Extra information"},
            formGroup:"yes"
        }
    ]
};
*/

var context2 = {
    blocks:[
        {
            sValue:"1"
        },{
            sValue:"2",
            des: {def: "Insert Definition", extra: "Extra information"},
            des2: {def: "The total number of modules.", extra: "Extra information"}
        },{
            sValue:"3",
        },{
            sValue:"4",
            des: {def: "Insert Definition", extra: "Extra information"},
            des2: {def: "The total number of modules.", extra: "Extra information"}
        },{
            sValue:"5",
        },{
            sValue:"6",
            des: {def: "Insert Definition", extra: "Extra information"},
            des2: {def: "The total number of modules.", extra: "Extra information"}
        },{
            sValue:"7",
            des: {def: "Insert Definition", extra: "Extra information"}
        }
    ]
};


Handlebars.registerHelper("dec", function(value, options)
{
    if(value == 0){
        return parseInt(value) + 1;
    }else{
         return parseInt(value) - 1;
    }
    
});

Handlebars.registerHelper("inc", function(value, options)
{
    return parseInt(value) + 1;
});

Handlebars.registerHelper("even", function(value, options)
{

    var pass = false;
    var temp = parseInt(value) + 1;

    //hard code seven to end since odd number of S values 
    if(temp == 7){
        pass = true;
    }else{

        if(temp % 2 == 0){
            pass = true;
        }else{
            pass = false; 
        }

    }
    return pass;
});

Handlebars.registerHelper("odd", function(value, options)
{

    var temp = parseInt(value) + 1;

    return Math.abs(temp % 2) == 1;

});



/*
var context = { 
    blocks: [

    {
        sform: [

            {
                parLabel: "S1Par" 
            },
            {

            }


        ]  
    },
    {

    }


    ]

 };
*/


// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context2);

// Insert the HTML code into the page
$("#sValuesTemp").append(html); 	
    	


});



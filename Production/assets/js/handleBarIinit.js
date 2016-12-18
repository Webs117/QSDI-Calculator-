 $(document).ready(function(){
    

// Retrieve the template data from the HTML (jQuery is used here).
var sTemplate = $('#sValueTemplate').html();
var wdTemplate = $('#W-and-D-Values').html();


// Compile the template data into a function
var sTemplateScript = Handlebars.compile(sTemplate);
var wdTemplateScript = Handlebars.compile(wdTemplate);

var sValueBlock = {
    blocks:[
        {
            sValue:"1"
        },{
            sValue:"2",
            des: {def: "The total number of modules.", extra: "S1 must be greater than S2, S3, S7"},
            des2: {def: "The number of modules that either rely on correct data input, or produce data to be used elsewhere", extra: "S2 must be less than S1."}
        },{
            sValue:"3",
        },{
            sValue:"4",
            des: {def: "The number of modules that depend on prior processing", extra: "S3 must be less than S1."},
            des2: {def: "The number of database items including all attributes attached.", extra: "S4 must be greater than S5 and S6"}
        },{
            sValue:"5",
        },{
            sValue:"6",
            des: {def: " The number of unique database items", extra: "S5 must be less than S4."},
            des2: {def: "The number of individual database objects", extra: "S6 must be less than S4."}
        },{
            sValue:"7",
            des: {def: "The number of modules with a single entry and single exit.", extra: "S7 must be less than S1."}
        }
    ]
};

var wdBlock = {
    blocks:[
        {
            sValue:"1",
            des: {def: "The total number of modules.", extra: "S1 must be greater than S2, S3, S7"}  
        },{
            sValue:"2",
            des: {def: "The total number of modules.", extra: "S1 must be greater than S2, S3, S7"}            
        },{
            sValue:"3",
            des: {def: "The total number of modules.", extra: "S1 must be greater than S2, S3, S7"}              
        },{
            sValue:"4",
            des: {def: "The number of modules that depend on prior processing", extra: "S3 must be less than S1."}
        },{
            sValue:"5",
            des: {def: "The total number of modules.", extra: "S1 must be greater than S2, S3, S7"}              
        },{
            sValue:"6",
            des: {def: " The number of unique database items", extra: "S5 must be less than S4."}
        }
    ]
};



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




// html = 'My name is Ritesh Kumar. I am a developer.'
var sBlockHtml = sTemplateScript(sValueBlock);
var wdBlockHtml = wdTemplateScript(wdBlock);

// Insert the HTML code into the page
$("#sValuesTemp").append(sBlockHtml); 	
$("#WDTemplate").append(wdBlockHtml);   	


});



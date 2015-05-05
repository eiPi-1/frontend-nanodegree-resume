
var bio = {
	"name" : "Mariyan Stoyanov",
	"role" : "Scientific Software Engineer",
	"contacts" : {
		"email" : "stoyanov.mariyan.m@gmail.com",
		"location" : "Stara Zagora, Bulgaria"
	},
	"image" : "images/me.jpg",
	"welcome" : "Hello and welcome to my resume!",
	"skills" : ["scientific computing", "machine learning", "computer vision" ]
}



var education = {
	"schools" : [
    {"name" : "Drexel University", 
     "degree" : "Bc.S.",
     "location" : "Philadelphia, PA",
      "major" : ["Computer Science", "Mathematics"],
      "minor" : [],
      "dates" : "September 2007 - June 2012",
      "info" : "www.drexel.edu"
      }
	],
	"onlineCourses" :[
	{
		"title" : "Front-end Web Development Nanodegree",
		"school" : "Udacity",
		"dates" : "March 2015 - Present",
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},
	{
		"title" : "Machine Learning",
		"school" : "Coursera",
		"dates" : "2012",
		"url" : "https://www.coursera.org/course/ml"
	},
	{
		"title" : "Web Application Architecture",
		"school" : "Coursera",
		"dates" : "2014",
		"url" : "https://www.coursera.org/course/webapplications"
	}
	]
}


var work = {
	"jobs" : [
	{
	"employer" : "Bulteh2000",
    "title" : "Scientific Software Engineer",
	"dates" : "October 2013 - Present",
	"location" : "Stara Zagora, Bulgaria",
	"description" : " Working on computer vision and machine learning algoriths for the dairy industry."
	} , 
	{
	"employer" : "Admarketplace",
    "title" : "Data Software Engineer",
	"dates" : "July 2012 - October 2013",
	"location" : "Manhattan, NY, USA",
	"description" : "Designed and implemented Natural Language Processing and Data Mining algorithms."
	} ,
	{
	"employer" : "InterDigital Communications",
    "title" : "Intern - Software Engineer",
	"dates" : "April 2011 - September 2011",
	"location" : "King of Prussia, PA, USA",
	"description" : " Implemented tools for internal purposes and testing of wireless technologies."
	} ,
	{
	"employer" : "Condensed Matter Lab, Dr. Ramos, Drexel University",
    "title" : "Research Assistant",
	"dates" : "September 2010 - April 2011",
	"location" : "Philadelphia, PA, USA",
	"description" : " Designed on implemented automated control of computers and lab equipment using LabVIEW."
	} ,
	{
	"employer" : "Siemens Healthcare",
    "title" : "Intern",
	"dates" : "July 2008 - April 2009",
	"location" : "Malvern, PA, USA",
	"description" : " Installed/updated/troubleshooted server-based applications for health care systems."
	} ,
	{
	"employer" : "Bulteh2000",
    "title" : "Intern",
	"dates" : "July 2008 - April 2009",
	"location" : "Stara Zagora, Bulgaria",
	"description" : "Wrote embedded programmes for solar panels energy monitoring."
	} 
	]
}

var projects = {

	"projects" : [
	{
		"title" : "TSP with GenAlgo",
		"dates" : "August 2011 - December 2011",
		"description" : "Suboptimal solutions to TSP with Genetic Algorithm",
		"images" : ["images/tsp.png"]
	}
	]
}

function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		var formatedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formatedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formatedDates);
		$(".work-entry:last").append(formatedLoc);
		$(".work-entry:last").append(formatedDesc);
	}
}

projects.display = function(){
	for (proj in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		var formatedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		var formatedDesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formatedDates);
		$(".project-entry:last").append(formatedDesc);

		if(projects.projects[proj].images.length > 0){
			for(image in projects.projects[proj].images){
				var formatedImg = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
				$(".project-entry:last").append(formatedImg);
			}
		}
		
	}
}

function inName(name_str){
	var finalName = name_str;
    var splits = finalName.trim().split(" ");
    finalName = splits[0].slice(0,1).toUpperCase() + splits[0].slice(1).toLowerCase()+ ' ' + splits[1].toUpperCase();
    
    return finalName;
}

education.display = function(){
	if (education.schools.length > 0){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formatedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formatedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formatedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formatedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$(".education-entry:last").append(formatedName);
			$(".education-entry:last").append(formatedDegree);
			$(".education-entry:last").append(formatedDates);
			$(".education-entry:last").append(formatedLoc);

			for(maj in education.schools[school].major)
			{
				var formatedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[maj]);
				$(".education-entry:last").append(formatedMajor);
			}
		}
	}

	if (education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$(".education-entry:last").append(formattedTitle);
			$(".education-entry:last").append(formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
		}
	}
}

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	//$("#header").append(internationalizeButton);

	for( contact in bio.contacts){
		if (contact === "email"){
			var formatedEmail = HTMLemail.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedEmail);
			$("#footerContacts").append(formatedEmail);
		} else if (contact === "mobile"){
			var formatedMobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedMobile);
			$("#footerContacts").append(formatedMobile);
		} else if (contact === "twitter"){
			var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedTwitter);
			$("#footerContacts").append(formatedTwitter);
		} else if (contact === "github"){
			var formatedGithub = HTMLgithub.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedGithub);
			$("#footerContacts").append(formatedGithub);
		} else if (contact === "blog"){
			var formatedBlog = HTMLblog.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedBlog);
			$("#footerContacts").append(formatedBlog);
		} else if (contact === "location"){
			var formatedLocation = HTMLlocation.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedLocation);
			$("#footerContacts").append(formatedLocation);
		} else {
			var formatedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatedContact);
			$("#footerContacts").append(formatedContact);
		}
	}

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
	$("#header").append(formattedBioPic);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedWelcome);

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#header").append(formattedSkill);
		}
	}
}

function locationizer(work_obj) {
    var locations = [];
    for (job in work_obj.jobs) {
        locations.push(work_obj.jobs[job].location);
    }
    return locations;
}


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x, y);
})

displayWork();
projects.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);


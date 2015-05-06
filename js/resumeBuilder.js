
var bio = {
	"name" : "Mariyan Stoyanov",
	"role" : "Scientific Software Engineer",
	"contacts" : {
		"email" : "stoyanov.mariyan.m@gmail.com",
		"github" : "eiPi-1",
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
	"description" : " Working on computer vision and machine learning algoriths for the dairy industry. \
	(Python, R, Matlab, RabbitMQ, ZeroMQ)"
	} , 
	{
	"employer" : "Admarketplace",
    "title" : "Data Software Engineer",
	"dates" : "July 2012 - October 2013",
	"location" : "Manhattan, NY, USA",
	"description" : "Designed and implemented Natural Language Processing and Data Mining algorithms. \
	(Python, Java, Lucene, Spring, MySQL, Vertica)"
	} ,
	{
	"employer" : "InterDigital Communications",
    "title" : "Intern - Software Engineer",
	"dates" : "April 2011 - September 2011",
	"location" : "King of Prussia, PA, USA",
	"description" : " Implemented tools for internal purposes and testing of wireless technologies. \
	(Python, Java, Bash)"
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
		"images" : ["images/tsp.png"],
		"url" : "https://github.com/eiPi-1/tsp-genalgo"
	}
	]
}

function displayWork(){
	if (work.jobs.length > 0){
		$("#workExperience").append(HTMLworkJump);
		var formattedNavWork = HTMLnavItem.replace("%data%", "Work Experience");
		formattedNavWork = formattedNavWork.replace("%url%", "#work");
		$("#navMenu").append(formattedNavWork);

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedLoc);
			$(".work-entry:last").append(formattedDesc);
		}
	}
}

projects.display = function(){
	if (projects.projects.length > 0){
		$("#projects").append(HTMLprojectJump);
		var formattedNavProj = HTMLnavItem.replace("%data%", "Projects");
		formattedNavProj = formattedNavProj.replace("%url%", "#projects");
		$("#navMenu").append(formattedNavProj);

		for (proj in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
			formattedTitle = formattedTitle.replace("%url%", projects.projects[proj].url);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
			var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
			
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDesc);

			if(projects.projects[proj].images.length > 0){
				for(image in projects.projects[proj].images){
					var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
					$(".project-entry:last").append(formattedImg);
				}
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
		$("#education").append(HTMLschoolJump);
		var formattedNavEdu = HTMLnavItem.replace("%data%", "Education");
		formattedNavEdu = formattedNavEdu.replace("%url%", "#education");
		$("#navMenu").append(formattedNavEdu);

		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$(".education-entry:last").append(formattedNameDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLoc);

			for(maj in education.schools[school].major)
			{
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major[maj]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	if (education.onlineCourses.length > 0){
		$("#education").append(HTMLonlineClasses);
		for(course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			formattedTitleSchool = formattedTitleSchool.replace("%url%", education.onlineCourses[course].url);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			//var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(HTMLbreakLine);
			//$(".education-entry:last").append(formattedURL);
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
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedEmail);
			$("#footerContacts").append(formattedEmail);
		} else if (contact === "mobile"){
			var formatyedMobile = HTMLmobile.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formatyedMobile);
			$("#footerContacts").append(formatyedMobile);
		} else if (contact === "twitter"){
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedTwitter);
			$("#footerContacts").append(formattedTwitter);
		} else if (contact === "github"){
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact]);
			formattedGithub = formattedGithub.replace("%url%", "https://github.com/" + bio.contacts[contact]);
			$("#topContacts").append(formattedGithub);
			$("#footerContacts").append(formattedGithub);
		} else if (contact === "blog"){
			var formattedBlog = HTMLblog.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedBlog);
			$("#footerContacts").append(formattedBlog);
		} else if (contact === "location"){
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedLocation);
			$("#footerContacts").append(formattedLocation);
		} else {
			var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
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


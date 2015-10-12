"use strict";
/* globals $ */
/* jshint undef: false, unused: false */

var dataHolder = '%data%';

var bio = {
  "name": "Hai Nguyen",
  "role": "Front-end Developer",
  "contacts": {
    "mobile": "408-368-2439",
    "email": "nhuhai.h.nguyen@gmail.com",
    "github": "nhuhai",
    "twitter": "iHainguyen",
    "location": "San Jose"
  },
  "welcomeMessage": "Welcome to Hai Nguyen's Website",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "bioPic": "images/fry.jpg"
};


bio.display = function () {
  // bio - header
  var formattedName       = HTMLheaderName.replace(dataHolder, this.name);
  var formattedRole       = HTMLheaderRole.replace(dataHolder, this.role);
  var formattedBioPic     = HTMLbioPic.replace(dataHolder, this.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace(dataHolder, this.welcomeMessage);

  // bio - contacts
  var contacts = this.contacts;

  var formattedMobile   = HTMLmobile.replace(dataHolder, contacts.mobile);
  var formattedEmail    = HTMLemail.replace(dataHolder, contacts.email);
  var formattedTwitter  = HTMLtwitter.replace(dataHolder, contacts.twitter);
  var formattedGitHub   = HTMLtwitter.replace(dataHolder, contacts.github);
  var formattedLocation = HTMLlocation.replace(dataHolder, contacts.location);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
  $('#header').append(formattedBioPic);
  $('#header').append(formattedWelcomeMsg);

  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedTwitter);
  $('#topContacts').append(formattedGitHub);
  $('#topContacts').append(formattedLocation);

  $('#footerContacts'). append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedGitHub);
  $('#footerContacts').append(formattedLocation);

  // bio - skills
  if (this.skills && this.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    this.skills.forEach(function (skill) {
      var formattedSkill = HTMLskills.replace(dataHolder, skill);
      $('#skills').append(formattedSkill);
    });
  }
};

var work = {
  "jobs": [
    {
      "employer": "San Jose State University - Associate Students",
      "title": "Web developer",
      "dates": "October 2013 - May 2014",
      "url": "http://as.sjsu.edu/",
      "location": "San Jose",
      "description": "develop web applications"
    }
  ]
};

work.display = function () {
  var jobs = this.jobs;

  for (var index in jobs) {

    $('#workExperience').append(HTMLworkStart);

    var currentJob = jobs[index];
    var formattedWorkEmployer = HTMLworkEmployer.replace(dataHolder, currentJob.employer);
    var formattedWorkTitle    = HTMLworkTitle.replace(dataHolder, currentJob.title);
    var formattedDates        = HTMLworkDates.replace(dataHolder, currentJob.dates);
    var formattedLocation     = HTMLworkLocation.replace(dataHolder, currentJob.location);
    var formattedDescription  = HTMLworkDescription.replace(dataHolder, currentJob.description);

    var formattedWorkEntry = formattedWorkEmployer + formattedWorkTitle + formattedDates +
                             formattedLocation + formattedDescription;

    $('.work-entry:last').append(formattedWorkEntry);
  }
};

var projects = {
  "projects": [
    {
      "title": "VTA Bus",
      "dates": "2013",
      "description": "Whoe moved my cheese cheesy...",
      "images": ['images/vtalert.jpg']
    }
  ]
};

projects.display = function () {
  this.projects.forEach(function (curProject) {
    $('#projects').append(HTMLprojectStart);

    var projectEntryEl = $('.project-entry:last');

    var formattedTitle = HTMLprojectTitle.replace(dataHolder, curProject.title);
    var formattedDates = HTMLprojectDates.replace(dataHolder, curProject.dates);
    var formattedDescription = HTMLprojectDescription.replace(dataHolder, curProject.description);

    projectEntryEl.append(formattedTitle);
    projectEntryEl.append(formattedDates);
    projectEntryEl.append(formattedDescription);

    for (var image in curProject.images) {
      var curImage = curProject.images[image];
      var formattedImage = HTMLprojectImage.replace(dataHolder, curImage);

      projectEntryEl.append(formattedImage);
    }

  });
};

var education = {
  "schools" : [
    {
      "name": "San Jose State University",
      "city": "San Jose",
      "degree": "Masters",
      "majors": ["CS"],
      "dates": 2015,
      "url": "http://sjsu.edu",
      "location": "San Jose"
    },
    {
      "name": "Knox College",
      "city": "Galesburg, IL",
      "degree": "BA",
      "majors": ["Economics"],
      "dates": 2012,
      "url": "http://knox.edu",
      "location": "Galesburg, IL"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
};

education.display = function () {
  var educationSectionEl = $('#education');

  this.schools.forEach(function (school) {
    educationSectionEl.append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace(dataHolder, school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace(dataHolder, school.degree);
    var formattedSchoolDates =  HTMLschoolDates.replace(dataHolder, school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(dataHolder, school.location);
    var formattedSchoolMajor = HTMLschoolMajor.replace(dataHolder, school.majors);

    var educationEntryEl = $('.education-entry:last');

    educationEntryEl.append(formattedSchoolName + formattedSchoolDegree);
    educationEntryEl.append(formattedSchoolDates);
    educationEntryEl.append(formattedSchoolLocation);
    educationEntryEl.append(formattedSchoolMajor);
  });


  if (this.onlineCourses && this.onlineCourses.length > 0) {
    educationSectionEl.append(HTMLonlineClasses);

    this.onlineCourses.forEach(function (onlineCourse) {
      educationSectionEl.append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace(dataHolder, onlineCourse.title);
      var formattedHTMLonlineSchool = HTMLonlineSchool.replace(dataHolder, onlineCourse.school);
      var formattedHTMLonlineDates = HTMLonlineDates.replace(dataHolder, onlineCourse.dates);
      var formattedHTMLonlineURL = HTMLonlineURL.replace(dataHolder, onlineCourse.url);

      var educationEntryEl = $('.education-entry:last');

      educationEntryEl.append(formattedOnlineTitle + formattedHTMLonlineSchool);
      educationEntryEl.append(formattedHTMLonlineDates);
      educationEntryEl.append(formattedHTMLonlineURL);
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);

// function inName (name) {
//   name = name.trim().split(' ');
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   name[1] = name[1].toUpperCase();

//   return name[0] + ' ' + name[1];
// }

// $('#main').append(internationalizeButton);

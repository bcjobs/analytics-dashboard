var express = require('express');
var moment = require('moment');

var router = new express.Router();

router.get('/trends', function(req, res) {
  var at = req.query.at ? moment.utc(req.query.at) : moment.utc().startOf('day');
  res.send({
    "date": at.toISOString(),
    "summary": {
      "openJobs": {
        "current": 857,
        "previous": 861
      },
      "openJobsAverage": {
        "current": 760.0999755859375,
        "previous": 291.13333129882812
      },
      "newJobs": {
        "current": 18,
        "previous": 13
      },
      "newJobsAverage": {
        "current": 15.066666666666666,
        "previous": 26.5
      }
    },
    "charts": {
      "weekly": {
        "openJobsAverage": [{
          "x": "2015-08-19T00:00:00",
          "y": 168.85714721679687
        }, {
          "x": "2015-08-26T00:00:00",
          "y": 602.85711669921875
        }, {
          "x": "2015-09-02T00:00:00",
          "y": 672.71429443359375
        }, {
          "x": "2015-09-09T00:00:00",
          "y": 679.0
        }, {
          "x": "2015-09-16T00:00:00",
          "y": 730.71429443359375
        }, {
          "x": "2015-09-23T00:00:00",
          "y": 800.5714111328125
        }, {
          "x": "2015-09-30T00:00:00",
          "y": 850.5714111328125
        }],
        "newJobsTotal": [{
          "x": "2015-08-19T00:00:00",
          "y": 601.0
        }, {
          "x": "2015-08-26T00:00:00",
          "y": 140.0
        }, {
          "x": "2015-09-02T00:00:00",
          "y": 89.0
        }, {
          "x": "2015-09-09T00:00:00",
          "y": 74.0
        }, {
          "x": "2015-09-16T00:00:00",
          "y": 137.0
        }, {
          "x": "2015-09-23T00:00:00",
          "y": 112.0
        }, {
          "x": "2015-09-30T00:00:00",
          "y": 94.0
        }]
      },
      "monthly": {
        "openJobsAverage": [{
          "x": "2014-09-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2014-10-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2014-11-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2014-12-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-01-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-02-28T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-03-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-04-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-05-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-06-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-07-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-08-31T00:00:00",
          "y": 281.741943359375
        }, {
          "x": "2015-09-30T00:00:00",
          "y": 760.0999755859375
        }],
        "newJobsTotal": [{
          "x": "2014-09-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2014-10-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2014-11-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2014-12-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-01-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-02-28T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-03-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-04-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-05-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-06-30T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-07-31T00:00:00",
          "y": 0.0
        }, {
          "x": "2015-08-31T00:00:00",
          "y": 795.0
        }, {
          "x": "2015-09-30T00:00:00",
          "y": 452.0
        }]
      }
    },
    "tables": {
      "trends": {
        "titles": {
          "byNewJobs": [{
            "name": ".Net Developer",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 22.5
          }, {
            "name": "Technical Support Analyst",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Sr. Quality Engineer, Automation",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Software QA Test Lead",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Software Development Manager",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 33.25
          }, {
            "name": "Software Developer - Mobile",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Software Developer - Application & Integration Managed Support Team",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Senior Software Engineer",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 21.5
          }, {
            "name": "Senior Software Developer &#8211; Project Team",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Senior Javascript Developer",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Senior C++ Software Developer",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Security Architect Technology Services",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Programmer Analyst - Build Master",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Java Developer",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 16.2
          }, {
            "name": "Functional Analyst - Quality Assurance & Testing Services",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Database Administration - Oracle",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "CEMLI Developer",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "Application Architect",
            "current": 1.0,
            "previous": 1.0,
            "companies": 1.0,
            "averageAge": 13.0
          }],
          "byOpenJobs": [{
            "name": "Web Developer",
            "current": 16.0,
            "previous": 7.0,
            "companies": 14.0,
            "averageAge": 18.625
          }, {
            "name": ".Net Developer",
            "current": 7.0,
            "previous": 1.0,
            "companies": 7.0,
            "averageAge": 4.0
          }, {
            "name": "Senior Java Developer",
            "current": 10.0,
            "previous": 4.0,
            "companies": 6.0,
            "averageAge": 25.4
          }, {
            "name": "Software Developer",
            "current": 30.0,
            "previous": 24.0,
            "companies": 30.0,
            "averageAge": 27.933333333333334
          }, {
            "name": "Software Engineer",
            "current": 13.0,
            "previous": 7.0,
            "companies": 13.0,
            "averageAge": 27.846153846153847
          }, {
            "name": "Senior .Net Developer",
            "current": 8.0,
            "previous": 3.0,
            "companies": 5.0,
            "averageAge": -5.625
          }, {
            "name": "Software Development Manager",
            "current": 8.0,
            "previous": 3.0,
            "companies": 8.0,
            "averageAge": 25.375
          }, {
            "name": "Business Analyst",
            "current": 14.0,
            "previous": 10.0,
            "companies": 13.0,
            "averageAge": 27.071428571428573
          }, {
            "name": "Front End Developer",
            "current": 8.0,
            "previous": 4.0,
            "companies": 6.0,
            "averageAge": 16.875
          }, {
            "name": "Java Developer",
            "current": 8.0,
            "previous": 4.0,
            "companies": 7.0,
            "averageAge": 8.0
          }, {
            "name": "Saleforce Developer/Administrator",
            "current": 4.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": -18.75
          }, {
            "name": "Senior DevOps Engineer",
            "current": 4.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 5.25
          }, {
            "name": "Senior Software Engineer",
            "current": 10.0,
            "previous": 6.0,
            "companies": 8.0,
            "averageAge": 9.8
          }, {
            "name": "Solutions Architect",
            "current": 5.0,
            "previous": 1.0,
            "companies": 4.0,
            "averageAge": 8.0
          }, {
            "name": "SQL Database Administrator",
            "current": 5.0,
            "previous": 1.0,
            "companies": 4.0,
            "averageAge": 19.2
          }, {
            "name": "C Programming Engineers (CARD)",
            "current": 3.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 5.0
          }, {
            "name": "Cyber Security Analyst (Data analytics/Hadoop)",
            "current": 3.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 23.666666666666668
          }, {
            "name": "Embedded R&amp;D Engineer - Communications",
            "current": 3.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 40.0
          }, {
            "name": "Embedded Software Developer 1 (CARD968)",
            "current": 3.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 2.6666666666666665
          }, {
            "name": "Front-End Developer / UI Developer",
            "current": 3.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 26.333333333333332
          }]
        },
        "skills": {
          "byNewJobs": [{
            "name": "DATABASES",
            "current": 3.0,
            "previous": 0.0,
            "companies": 3.0,
            "averageAge": 31.75
          }, {
            "name": "JAVASCRIPT",
            "current": 3.0,
            "previous": 0.0,
            "companies": 3.0,
            "averageAge": 26.571428571428573
          }, {
            "name": "ORACLE",
            "current": 4.0,
            "previous": 1.0,
            "companies": 4.0,
            "averageAge": 24.870967741935484
          }, {
            "name": "C++",
            "current": 2.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 30.102040816326532
          }, {
            "name": "ARCHITECTURE",
            "current": 5.0,
            "previous": 3.0,
            "companies": 5.0,
            "averageAge": 24.188679245283019
          }, {
            "name": "FRONT END",
            "current": 2.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 33.1
          }, {
            "name": "HTML5",
            "current": 3.0,
            "previous": 1.0,
            "companies": 3.0,
            "averageAge": 27.421052631578949
          }, {
            "name": "JAVA",
            "current": 3.0,
            "previous": 1.0,
            "companies": 3.0,
            "averageAge": 27.572519083969464
          }, {
            "name": "LINUX",
            "current": 2.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 31.008849557522122
          }, {
            "name": "MENTOR",
            "current": 2.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 25.25
          }, {
            "name": "SECURITY",
            "current": 2.0,
            "previous": 0.0,
            "companies": 2.0,
            "averageAge": 27.32
          }, {
            "name": "SOFTWARE DEVELOPMENT",
            "current": 6.0,
            "previous": 4.0,
            "companies": 5.0,
            "averageAge": 28.94300518134715
          }, {
            "name": "STRUCTURED SOFTWARE",
            "current": 4.0,
            "previous": 2.0,
            "companies": 4.0,
            "averageAge": 25.515625
          }, {
            "name": "TRAINING",
            "current": 1.0,
            "previous": 3.0,
            "companies": 1.0,
            "averageAge": 27.138888888888889
          }, {
            "name": "APACHE CORDOVA",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": "ANGULARJS",
            "current": 1.0,
            "previous": 2.0,
            "companies": 1.0,
            "averageAge": 27.583333333333332
          }, {
            "name": "AIX",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 7.0
          }, {
            "name": ".NET 3.5",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }, {
            "name": ".NET",
            "current": 3.0,
            "previous": 2.0,
            "companies": 3.0,
            "averageAge": 30.622222222222224
          }, {
            "name": "APPLICATION SOFTWARE",
            "current": 1.0,
            "previous": 0.0,
            "companies": 1.0,
            "averageAge": 1.0
          }],
          "byOpenJobs": [{
            "name": "ARCHITECTURE",
            "current": 53.0,
            "previous": 49.0,
            "companies": 38.0,
            "averageAge": 24.188679245283019
          }, {
            "name": "DATABASE",
            "current": 94.0,
            "previous": 98.0,
            "companies": 68.0,
            "averageAge": 29.925531914893618
          }, {
            "name": "ORACLE",
            "current": 31.0,
            "previous": 27.0,
            "companies": 28.0,
            "averageAge": 24.870967741935484
          }, {
            "name": "PROBLEM SOLVING",
            "current": 29.0,
            "previous": 33.0,
            "companies": 25.0,
            "averageAge": 27.793103448275861
          }, {
            "name": "SOFTWARE DEVELOPMENT",
            "current": 193.0,
            "previous": 189.0,
            "companies": 97.0,
            "averageAge": 28.94300518134715
          }, {
            "name": "C++",
            "current": 98.0,
            "previous": 101.0,
            "companies": 51.0,
            "averageAge": 30.102040816326532
          }, {
            "name": "DATABASES",
            "current": 64.0,
            "previous": 61.0,
            "companies": 39.0,
            "averageAge": 31.75
          }, {
            "name": "scripting",
            "current": 84.0,
            "previous": 87.0,
            "companies": 44.0,
            "averageAge": 27.702380952380953
          }, {
            "name": "SQL",
            "current": 135.0,
            "previous": 132.0,
            "companies": 91.0,
            "averageAge": 27.244444444444444
          }, {
            "name": "WEB SERVICES",
            "current": 40.0,
            "previous": 37.0,
            "companies": 31.0,
            "averageAge": 26.1
          }, {
            "name": "APPLICATION DEVELOPMENT",
            "current": 26.0,
            "previous": 28.0,
            "companies": 23.0,
            "averageAge": 30.307692307692307
          }, {
            "name": "ASP",
            "current": 42.0,
            "previous": 40.0,
            "companies": 27.0,
            "averageAge": 26.0
          }, {
            "name": "ASP.NET",
            "current": 40.0,
            "previous": 38.0,
            "companies": 26.0,
            "averageAge": 25.925
          }, {
            "name": "BEST PRACTICES",
            "current": 30.0,
            "previous": 28.0,
            "companies": 25.0,
            "averageAge": 24.0
          }, {
            "name": "DATABASE DEVELOPMENT",
            "current": 7.0,
            "previous": 9.0,
            "companies": 5.0,
            "averageAge": 33.285714285714285
          }, {
            "name": "DEPLOYMENT",
            "current": 19.0,
            "previous": 21.0,
            "companies": 18.0,
            "averageAge": 25.684210526315791
          }, {
            "name": "DJANGO",
            "current": 3.0,
            "previous": 5.0,
            "companies": 3.0,
            "averageAge": 44.0
          }, {
            "name": "ETL",
            "current": 10.0,
            "previous": 12.0,
            "companies": 8.0,
            "averageAge": 31.3
          }, {
            "name": "HTML",
            "current": 47.0,
            "previous": 49.0,
            "companies": 41.0,
            "averageAge": 28.723404255319149
          }, {
            "name": "INTEGRATION",
            "current": 63.0,
            "previous": 61.0,
            "companies": 40.0,
            "averageAge": 28.047619047619047
          }]
        }
      },
      "employers": {
        "byOpenJobs": {
          "top": [{
            "employer": "Destinationone Consulting Inc.",
            "jobs": 32.0
          }, {
            "employer": "Avigilon Corporation",
            "jobs": 21.0
          }, {
            "employer": "RANDSTAD TECHNOLOGIES",
            "jobs": 17.0
          }, {
            "employer": "Avigilon",
            "jobs": 16.0
          }, {
            "employer": "Fortinet Technologies",
            "jobs": 13.0
          }, {
            "employer": "Annex Consulting Group Inc.",
            "jobs": 12.0
          }, {
            "employer": "Avocette Technologies",
            "jobs": 12.0
          }, {
            "employer": "Fortinet",
            "jobs": 12.0
          }, {
            "employer": "IT/IQ TECH RECRUITERS",
            "jobs": 12.0
          }, {
            "employer": "MDA",
            "jobs": 12.0
          }, {
            "employer": "Swim Recruiting",
            "jobs": 12.0
          }, {
            "employer": "HAYS Specialist Recruitment (Canada) Inc.",
            "jobs": 11.0
          }, {
            "employer": "Global Relay Communications",
            "jobs": 10.0
          }, {
            "employer": "Ignite Technical Resources",
            "jobs": 10.0
          }, {
            "employer": "PROVINCIAL HEALTH SERVICES AUTHORITY",
            "jobs": 10.0
          }, {
            "employer": "Syscon Justice Systems",
            "jobs": 10.0
          }, {
            "employer": "ACL Services Ltd.",
            "jobs": 9.0
          }, {
            "employer": "Best Buy Canada Ltd.",
            "jobs": 9.0
          }, {
            "employer": "Eagle Professional Resources Inc",
            "jobs": 9.0
          }, {
            "employer": "Global Relay",
            "jobs": 9.0
          }],
          "totalOpenings": 857.0,
          "companiesRepresented": 20.0,
          "jobsRepresented": 258.0,
          "openingsCoverage": 0.30105017502917153
        },
        "byLast7DaysJobs": {
          "top": [{
            "employer": "Eagle Professional Resources Inc",
            "jobs": 6.0
          }, {
            "employer": "Insurance Corporation of BC",
            "jobs": 4.0
          }, {
            "employer": "Metafore Technologies Inc",
            "jobs": 4.0
          }, {
            "employer": "RANDSTAD TECHNOLOGIES",
            "jobs": 4.0
          }, {
            "employer": "Swim Recruiting",
            "jobs": 4.0
          }, {
            "employer": "Fortinet",
            "jobs": 3.0
          }, {
            "employer": "IT MindFinders Search Consultants Inc.",
            "jobs": 3.0
          }, {
            "employer": "IT/IQ",
            "jobs": 3.0
          }, {
            "employer": "Vision Critical Inc.",
            "jobs": 3.0
          }, {
            "employer": "Fortinet Technologies",
            "jobs": 2.0
          }, {
            "employer": "ABB Enterprise Software",
            "jobs": 2.0
          }, {
            "employer": "HAYS Specialist Recruitment (Canada) Inc.",
            "jobs": 2.0
          }, {
            "employer": "Ignite Technical Resources",
            "jobs": 2.0
          }, {
            "employer": "Ingenium Technologies Corp",
            "jobs": 2.0
          }, {
            "employer": "Middleware360 Solutions",
            "jobs": 2.0
          }, {
            "employer": "T2 Systems Canada Inc.",
            "jobs": 2.0
          }, {
            "employer": "TSO Logic",
            "jobs": 2.0
          }, {
            "employer": "Global Relay",
            "jobs": 1.0
          }, {
            "employer": "Global Container Terminals Canada",
            "jobs": 1.0
          }, {
            "employer": "FTS",
            "jobs": 1.0
          }],
          "totalOpenings": 94.0,
          "companiesRepresented": 20.0,
          "jobsRepresented": 53.0,
          "openingsCoverage": 0.56382978723404253
        },
        "byYearToDate": {
          "top": [{
            "employer": "Fortinet",
            "jobs": 33.0
          }, {
            "employer": "Destinationone Consulting Inc.",
            "jobs": 32.0
          }, {
            "employer": "Fortinet Technologies",
            "jobs": 27.0
          }, {
            "employer": "Avigilon Corporation",
            "jobs": 25.0
          }, {
            "employer": "HAYS Specialist Recruitment (Canada) Inc.",
            "jobs": 25.0
          }, {
            "employer": "IT/IQ TECH RECRUITERS",
            "jobs": 25.0
          }, {
            "employer": "RANDSTAD TECHNOLOGIES",
            "jobs": 22.0
          }, {
            "employer": "TEEMA Solutions Group Inc.",
            "jobs": 21.0
          }, {
            "employer": "Annex Consulting Group Inc.",
            "jobs": 20.0
          }, {
            "employer": "Eagle Professional Resources Inc",
            "jobs": 18.0
          }, {
            "employer": "Avigilon",
            "jobs": 16.0
          }, {
            "employer": "MDA",
            "jobs": 16.0
          }, {
            "employer": "WPCG",
            "jobs": 16.0
          }, {
            "employer": "Avocette Technologies",
            "jobs": 15.0
          }, {
            "employer": "Ignite Technical Resources",
            "jobs": 15.0
          }, {
            "employer": "Vision Critical Inc.",
            "jobs": 14.0
          }, {
            "employer": "Move Canada",
            "jobs": 13.0
          }, {
            "employer": "Swim Recruiting",
            "jobs": 13.0
          }, {
            "employer": "Best Buy Canada Ltd.",
            "jobs": 12.0
          }, {
            "employer": "PROVINCIAL HEALTH SERVICES AUTHORITY",
            "jobs": 12.0
          }],
          "totalOpenings": 1247.0,
          "companiesRepresented": 20.0,
          "jobsRepresented": 390.0,
          "openingsCoverage": 0.31275060144346434
        },
        "byNewJobs": {
          "top": [{
            "employer": "Metafore Technologies Inc",
            "jobs": 4.0
          }, {
            "employer": "IT/IQ",
            "jobs": 2.0
          }, {
            "employer": "Swim Recruiting",
            "jobs": 2.0
          }, {
            "employer": "Teradici Corporation",
            "jobs": 1.0
          }, {
            "employer": "Modis Canada",
            "jobs": 1.0
          }, {
            "employer": "Isolation Network",
            "jobs": 1.0
          }, {
            "employer": "HAYS Specialist Recruitment (Canada) Inc.",
            "jobs": 1.0
          }, {
            "employer": "Eagle Professional Resources Inc",
            "jobs": 1.0
          }],
          "totalOpenings": 13.0,
          "companiesRepresented": 8.0,
          "jobsRepresented": 13.0,
          "openingsCoverage": 1.0
        }
      }
    }
  })
});

router.get('/range', function(req, res) {
  res.send({
    startsAt: "2015-09-01",
    endsAt: "2016-01-09"
  });
});

module.exports = function(app) {
  app.use('/api/v1.0/reports', router);
};

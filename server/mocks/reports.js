var express = require('express');
var moment = require('moment');

var router = new express.Router();

router.get('/trends', function(req, res) {
  var at = req.query.at ? moment.utc(req.query.at) : moment.utc().startOf('day');

  if (at.isAfter('2016-01-09Z')) {
    return res.status(400).send({
      code: 'no-data',
      message: 'No data for selected date.'
    });
  }

  res.send({
    "date":at.toISOString(),
    "summary":{
      "openJobs":{
        "current":1074,
        "previous":1174
      },
      "openJobsAverage":{
        "current":1298.9000244140625,
        "previous":1276.86669921875
      },
      "newJobs":{
        "current":52,
        "previous":42
      },
      "newJobsAverage":{
        "current":34.4,
        "previous":34.333333333333336
      }
    },
    "charts":{
      "weekly":{
        "openJobsAverage":[
          {
            "x":"2016-03-10T00:00:00",
            "y":1218.0
          },
          {
            "x":"2016-03-17T00:00:00",
            "y":1388.4285888671875
          },
          {
            "x":"2016-03-24T00:00:00",
            "y":1364.7142333984375
          },
          {
            "x":"2016-03-31T00:00:00",
            "y":1324.5714111328125
          },
          {
            "x":"2016-04-07T00:00:00",
            "y":1326.4285888671875
          },
          {
            "x":"2016-04-14T00:00:00",
            "y":1317.7142333984375
          },
          {
            "x":"2016-04-21T00:00:00",
            "y":1211.142822265625
          }
        ],
        "newJobsTotal":[
          {
            "x":"2016-03-10T00:00:00",
            "y":354.0
          },
          {
            "x":"2016-03-17T00:00:00",
            "y":313.0
          },
          {
            "x":"2016-03-24T00:00:00",
            "y":241.0
          },
          {
            "x":"2016-03-31T00:00:00",
            "y":182.0
          },
          {
            "x":"2016-04-07T00:00:00",
            "y":270.0
          },
          {
            "x":"2016-04-14T00:00:00",
            "y":234.0
          },
          {
            "x":"2016-04-21T00:00:00",
            "y":246.0
          }
        ]
      },
      "monthly":{
        "openJobsAverage":[
          {
            "x":"2015-04-30T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-05-31T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-06-30T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-07-31T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-08-31T00:00:00",
            "y":417.0
          },
          {
            "x":"2015-09-30T00:00:00",
            "y":960.5
          },
          {
            "x":"2015-10-31T00:00:00",
            "y":1006.8709716796875
          },
          {
            "x":"2015-11-30T00:00:00",
            "y":1035.0
          },
          {
            "x":"2015-12-31T00:00:00",
            "y":1050.1612548828125
          },
          {
            "x":"2016-01-31T00:00:00",
            "y":1177.45166015625
          },
          {
            "x":"2016-02-29T00:00:00",
            "y":1241.965576171875
          },
          {
            "x":"2016-03-31T00:00:00",
            "y":1312.9354248046875
          },
          {
            "x":"2016-04-21T00:00:00",
            "y":1285.09521484375
          }
        ],
        "newJobsTotal":[
          {
            "x":"2015-04-30T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-05-31T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-06-30T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-07-31T00:00:00",
            "y":0.0
          },
          {
            "x":"2015-08-31T00:00:00",
            "y":1162.0
          },
          {
            "x":"2015-09-30T00:00:00",
            "y":509.0
          },
          {
            "x":"2015-10-31T00:00:00",
            "y":495.0
          },
          {
            "x":"2015-11-30T00:00:00",
            "y":522.0
          },
          {
            "x":"2015-12-31T00:00:00",
            "y":440.0
          },
          {
            "x":"2016-01-31T00:00:00",
            "y":856.0
          },
          {
            "x":"2016-02-29T00:00:00",
            "y":708.0
          },
          {
            "x":"2016-03-31T00:00:00",
            "y":1172.0
          },
          {
            "x":"2016-04-21T00:00:00",
            "y":750.0
          }
        ]
      }
    },
    "tables":{
      "trends":{
        "titles":{
          "byAllJobs":[
            {
              "name":"Software Developer",
              "current":925.0,
              "previous":0.0,
              "companies":284.0,
              "averageAge":53.474178403755872
            },
            {
              "name":"Quality Assurance",
              "current":422.0,
              "previous":0.0,
              "companies":157.0,
              "averageAge":49.595744680851062
            },
            {
              "name":"Web Developer",
              "current":248.0,
              "previous":0.0,
              "companies":111.0,
              "averageAge":31.404761904761905
            },
            {
              "name":"Java Developer",
              "current":193.0,
              "previous":0.0,
              "companies":70.0,
              "averageAge":73.230769230769226
            },
            {
              "name":"Business Analyst",
              "current":171.0,
              "previous":0.0,
              "companies":84.0,
              "averageAge":30.941176470588236
            },
            {
              "name":"UI/UX Designer/Developer",
              "current":170.0,
              "previous":0.0,
              "companies":75.0,
              "averageAge":55.757575757575758
            },
            {
              "name":".Net Developer",
              "current":137.0,
              "previous":0.0,
              "companies":54.0,
              "averageAge":41.5
            },
            {
              "name":"IT Support",
              "current":92.0,
              "previous":0.0,
              "companies":52.0,
              "averageAge":38.103448275862071
            },
            {
              "name":"Firmware Developer",
              "current":90.0,
              "previous":0.0,
              "companies":32.0,
              "averageAge":75.84615384615384
            },
            {
              "name":"Systems Analyst",
              "current":85.0,
              "previous":0.0,
              "companies":34.0,
              "averageAge":45.214285714285715
            },
            {
              "name":"Software Development Manager",
              "current":84.0,
              "previous":0.0,
              "companies":28.0,
              "averageAge":46.388888888888886
            },
            {
              "name":"Technical Analyst",
              "current":81.0,
              "previous":0.0,
              "companies":35.0,
              "averageAge":40.0
            },
            {
              "name":"Systems Administrator",
              "current":80.0,
              "previous":0.0,
              "companies":40.0,
              "averageAge":58.0
            },
            {
              "name":"Front End Developer",
              "current":80.0,
              "previous":0.0,
              "companies":46.0,
              "averageAge":31.133333333333333
            },
            {
              "name":"C++ Software Developer",
              "current":70.0,
              "previous":0.0,
              "companies":15.0,
              "averageAge":74.5
            },
            {
              "name":"Database Developer",
              "current":70.0,
              "previous":0.0,
              "companies":40.0,
              "averageAge":29.833333333333332
            },
            {
              "name":"iOS Developer",
              "current":68.0,
              "previous":0.0,
              "companies":44.0,
              "averageAge":34.428571428571431
            },
            {
              "name":"DevOps Engineer",
              "current":65.0,
              "previous":0.0,
              "companies":32.0,
              "averageAge":54.909090909090907
            },
            {
              "name":"Graphic Designer",
              "current":51.0,
              "previous":0.0,
              "companies":36.0,
              "averageAge":113.25
            },
            {
              "name":"Android Developer",
              "current":51.0,
              "previous":0.0,
              "companies":30.0,
              "averageAge":62.5
            }
          ],
          "byOpenJobs":[
            {
              "name":"Software Developer",
              "current":213.0,
              "previous":226.0,
              "companies":108.0,
              "averageAge":53.474178403755872
            },
            {
              "name":"Quality Assurance",
              "current":94.0,
              "previous":110.0,
              "companies":59.0,
              "averageAge":49.595744680851062
            },
            {
              "name":"Web Developer",
              "current":42.0,
              "previous":45.0,
              "companies":36.0,
              "averageAge":31.404761904761905
            },
            {
              "name":"Java Developer",
              "current":39.0,
              "previous":44.0,
              "companies":27.0,
              "averageAge":73.230769230769226
            },
            {
              "name":"Business Analyst",
              "current":34.0,
              "previous":45.0,
              "companies":23.0,
              "averageAge":30.941176470588236
            },
            {
              "name":"UI/UX Designer/Developer",
              "current":33.0,
              "previous":37.0,
              "companies":27.0,
              "averageAge":55.757575757575758
            },
            {
              "name":"IT Support",
              "current":29.0,
              "previous":30.0,
              "companies":22.0,
              "averageAge":38.103448275862071
            },
            {
              "name":"Firmware Developer",
              "current":26.0,
              "previous":28.0,
              "companies":16.0,
              "averageAge":75.84615384615384
            },
            {
              "name":"Systems Administrator",
              "current":22.0,
              "previous":24.0,
              "companies":10.0,
              "averageAge":58.0
            },
            {
              "name":"Software Development Manager",
              "current":18.0,
              "previous":23.0,
              "companies":8.0,
              "averageAge":46.388888888888886
            },
            {
              "name":"Database Developer",
              "current":18.0,
              "previous":16.0,
              "companies":14.0,
              "averageAge":29.833333333333332
            },
            {
              "name":"Technical Analyst",
              "current":17.0,
              "previous":19.0,
              "companies":13.0,
              "averageAge":40.0
            },
            {
              "name":".Net Developer",
              "current":16.0,
              "previous":17.0,
              "companies":14.0,
              "averageAge":41.5
            },
            {
              "name":"Front End Developer",
              "current":15.0,
              "previous":15.0,
              "companies":13.0,
              "averageAge":31.133333333333333
            },
            {
              "name":"iOS Developer",
              "current":14.0,
              "previous":14.0,
              "companies":13.0,
              "averageAge":34.428571428571431
            },
            {
              "name":"Systems Analyst",
              "current":14.0,
              "previous":15.0,
              "companies":12.0,
              "averageAge":45.214285714285715
            },
            {
              "name":"Software Architect",
              "current":12.0,
              "previous":12.0,
              "companies":9.0,
              "averageAge":88.916666666666671
            },
            {
              "name":"Product Manager",
              "current":12.0,
              "previous":15.0,
              "companies":9.0,
              "averageAge":52.666666666666664
            },
            {
              "name":"Linux Developer",
              "current":11.0,
              "previous":12.0,
              "companies":11.0,
              "averageAge":60.090909090909093
            },
            {
              "name":"DevOps Engineer",
              "current":11.0,
              "previous":14.0,
              "companies":8.0,
              "averageAge":54.909090909090907
            }
          ]
        },
        "skills":{
          "byAllJobs":[
            {
              "name":"SOLUTIONS",
              "current":369.0,
              "previous":0.0,
              "companies":162.0,
              "averageAge":39.62330623306233
            },
            {
              "name":"TESTING",
              "current":316.0,
              "previous":0.0,
              "companies":154.0,
              "averageAge":40.617088607594937
            },
            {
              "name":"SOFTWARE DEVELOPMENT",
              "current":300.0,
              "previous":0.0,
              "companies":125.0,
              "averageAge":49.646666666666668
            },
            {
              "name":"DATABASE MANAGEMENT SYSTEM",
              "current":287.0,
              "previous":0.0,
              "companies":153.0,
              "averageAge":38.167247386759584
            },
            {
              "name":"JAVA",
              "current":278.0,
              "previous":0.0,
              "companies":113.0,
              "averageAge":48.39208633093525
            },
            {
              "name":"SQL SERVER",
              "current":250.0,
              "previous":0.0,
              "companies":151.0,
              "averageAge":40.316
            },
            {
              "name":"JAVASCRIPT",
              "current":232.0,
              "previous":0.0,
              "companies":133.0,
              "averageAge":35.827586206896555
            },
            {
              "name":"Personal Communication Skills",
              "current":219.0,
              "previous":0.0,
              "companies":110.0,
              "averageAge":51.073059360730596
            },
            {
              "name":"INTEGRATION",
              "current":214.0,
              "previous":0.0,
              "companies":105.0,
              "averageAge":48.070093457943926
            },
            {
              "name":"ENGINEER",
              "current":210.0,
              "previous":0.0,
              "companies":91.0,
              "averageAge":34.495238095238093
            },
            {
              "name":"ARCHITECTURE",
              "current":206.0,
              "previous":0.0,
              "companies":100.0,
              "averageAge":51.708737864077669
            },
            {
              "name":"C++",
              "current":206.0,
              "previous":0.0,
              "companies":85.0,
              "averageAge":54.349514563106794
            },
            {
              "name":"DOCUMENTATION",
              "current":203.0,
              "previous":0.0,
              "companies":113.0,
              "averageAge":45.078817733990149
            },
            {
              "name":"UNIX/LINUX",
              "current":202.0,
              "previous":0.0,
              "companies":102.0,
              "averageAge":50.490099009900987
            },
            {
              "name":"PROBLEM SOLVING",
              "current":161.0,
              "previous":0.0,
              "companies":97.0,
              "averageAge":45.956521739130437
            },
            {
              "name":"C#",
              "current":159.0,
              "previous":0.0,
              "companies":93.0,
              "averageAge":46.0188679245283
            },
            {
              "name":"OBJECT ORIENTED",
              "current":158.0,
              "previous":0.0,
              "companies":82.0,
              "averageAge":51.322784810126585
            },
            {
              "name":"TRAINING",
              "current":149.0,
              "previous":0.0,
              "companies":90.0,
              "averageAge":34.214765100671144
            },
            {
              "name":"BEST PRACTICES",
              "current":142.0,
              "previous":0.0,
              "companies":88.0,
              "averageAge":39.2112676056338
            },
            {
              "name":"SECURITY",
              "current":141.0,
              "previous":0.0,
              "companies":66.0,
              "averageAge":44.921985815602838
            }
          ],
          "byOpenJobs":[
            {
              "name":"SOLUTIONS",
              "current":369.0,
              "previous":415.0,
              "companies":162.0,
              "averageAge":39.62330623306233
            },
            {
              "name":"TESTING",
              "current":316.0,
              "previous":355.0,
              "companies":154.0,
              "averageAge":40.617088607594937
            },
            {
              "name":"SOFTWARE DEVELOPMENT",
              "current":300.0,
              "previous":320.0,
              "companies":125.0,
              "averageAge":49.646666666666668
            },
            {
              "name":"DATABASE MANAGEMENT SYSTEM",
              "current":287.0,
              "previous":317.0,
              "companies":153.0,
              "averageAge":38.167247386759584
            },
            {
              "name":"JAVA",
              "current":278.0,
              "previous":308.0,
              "companies":113.0,
              "averageAge":48.39208633093525
            },
            {
              "name":"SQL SERVER",
              "current":250.0,
              "previous":269.0,
              "companies":151.0,
              "averageAge":40.316
            },
            {
              "name":"JAVASCRIPT",
              "current":232.0,
              "previous":248.0,
              "companies":133.0,
              "averageAge":35.827586206896555
            },
            {
              "name":"Personal Communication Skills",
              "current":219.0,
              "previous":236.0,
              "companies":110.0,
              "averageAge":51.073059360730596
            },
            {
              "name":"INTEGRATION",
              "current":214.0,
              "previous":236.0,
              "companies":105.0,
              "averageAge":48.070093457943926
            },
            {
              "name":"ENGINEER",
              "current":210.0,
              "previous":228.0,
              "companies":91.0,
              "averageAge":34.495238095238093
            },
            {
              "name":"ARCHITECTURE",
              "current":206.0,
              "previous":214.0,
              "companies":100.0,
              "averageAge":51.708737864077669
            },
            {
              "name":"C++",
              "current":206.0,
              "previous":225.0,
              "companies":85.0,
              "averageAge":54.349514563106794
            },
            {
              "name":"DOCUMENTATION",
              "current":203.0,
              "previous":227.0,
              "companies":113.0,
              "averageAge":45.078817733990149
            },
            {
              "name":"UNIX/LINUX",
              "current":202.0,
              "previous":229.0,
              "companies":102.0,
              "averageAge":50.490099009900987
            },
            {
              "name":"PROBLEM SOLVING",
              "current":161.0,
              "previous":166.0,
              "companies":97.0,
              "averageAge":45.956521739130437
            },
            {
              "name":"C#",
              "current":159.0,
              "previous":167.0,
              "companies":93.0,
              "averageAge":46.0188679245283
            },
            {
              "name":"OBJECT ORIENTED",
              "current":158.0,
              "previous":163.0,
              "companies":82.0,
              "averageAge":51.322784810126585
            },
            {
              "name":"TRAINING",
              "current":149.0,
              "previous":154.0,
              "companies":90.0,
              "averageAge":34.214765100671144
            },
            {
              "name":"BEST PRACTICES",
              "current":142.0,
              "previous":149.0,
              "companies":88.0,
              "averageAge":39.2112676056338
            },
            {
              "name":"OPERATIONS",
              "current":141.0,
              "previous":158.0,
              "companies":60.0,
              "averageAge":41.170212765957444
            }
          ]
        }
      },
      "employers":{
        "byOpenJobs":{
          "top":[
            {
              "employer":"Amazon",
              "jobs":60.0
            },
            {
              "employer":"MDA",
              "jobs":41.0
            },
            {
              "employer":"Fortinet Technologies",
              "jobs":30.0
            },
            {
              "employer":"Global Relay Communications",
              "jobs":29.0
            },
            {
              "employer":"TELUS",
              "jobs":28.0
            },
            {
              "employer":"Avigilon",
              "jobs":23.0
            },
            {
              "employer":"Tableau Software",
              "jobs":20.0
            },
            {
              "employer":"Istuary Innovation Group",
              "jobs":18.0
            },
            {
              "employer":"Hootsuite Media Inc.",
              "jobs":17.0
            },
            {
              "employer":"IT/IQ TECH RECRUITERS",
              "jobs":16.0
            },
            {
              "employer":"Destinationone Consulting Inc.",
              "jobs":14.0
            },
            {
              "employer":"HAYS Specialist Recruitment (Canada) Inc.",
              "jobs":13.0
            },
            {
              "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
              "jobs":13.0
            },
            {
              "employer":"ACL Services",
              "jobs":11.0
            },
            {
              "employer":"Modis Canada",
              "jobs":11.0
            },
            {
              "employer":"Safe Software",
              "jobs":10.0
            },
            {
              "employer":"Schneider Electric",
              "jobs":10.0
            },
            {
              "employer":"Simba Technologies",
              "jobs":10.0
            },
            {
              "employer":"ABB Enterprise Software",
              "jobs":9.0
            },
            {
              "employer":"D-Wave Systems Inc.",
              "jobs":9.0
            }
          ],
          "totalOpenings":1074.0,
          "companiesRepresented":20.0,
          "jobsRepresented":392.0,
          "openingsCoverage":0.36499068901303539
        },
        "byLast7DaysJobs":{
          "top":[
            {
              "employer":"IT/IQ TECH RECRUITERS",
              "jobs":9.0
            },
            {
              "employer":"Mozilla",
              "jobs":9.0
            },
            {
              "employer":"SAP",
              "jobs":9.0
            },
            {
              "employer":"Central 1 Credit Union",
              "jobs":7.0
            },
            {
              "employer":"Fortinet Technologies",
              "jobs":7.0
            },
            {
              "employer":"Simba Technologies",
              "jobs":7.0
            },
            {
              "employer":"Amazon",
              "jobs":6.0
            },
            {
              "employer":"HAYS Specialist Recruitment (Canada) Inc.",
              "jobs":5.0
            },
            {
              "employer":"Hootsuite Media Inc.",
              "jobs":5.0
            },
            {
              "employer":"Hyperwallet Systems Inc.",
              "jobs":5.0
            },
            {
              "employer":"MDA",
              "jobs":5.0
            },
            {
              "employer":"Sierra Wireless, Inc.",
              "jobs":5.0
            },
            {
              "employer":"Tableau Software",
              "jobs":5.0
            },
            {
              "employer":"Colliers International",
              "jobs":4.0
            },
            {
              "employer":"Executrade Consultants Ltd.",
              "jobs":4.0
            },
            {
              "employer":"Istuary Innovation Group",
              "jobs":4.0
            },
            {
              "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
              "jobs":4.0
            },
            {
              "employer":"TEKSYSTEMS",
              "jobs":4.0
            },
            {
              "employer":"Allied Vision Technologies Canada",
              "jobs":3.0
            },
            {
              "employer":"Annex Consulting Group",
              "jobs":3.0
            }
          ],
          "totalOpenings":246.0,
          "companiesRepresented":20.0,
          "jobsRepresented":110.0,
          "openingsCoverage":0.44715447154471544
        },
        "byYearToDate":{
          "top":[
            {
              "employer":"Amazon",
              "jobs":128.0
            },
            {
              "employer":"IT/IQ TECH RECRUITERS",
              "jobs":125.0
            },
            {
              "employer":"Fortinet Technologies",
              "jobs":115.0
            },
            {
              "employer":"SAP",
              "jobs":73.0
            },
            {
              "employer":"MDA",
              "jobs":68.0
            },
            {
              "employer":"HAYS Specialist Recruitment (Canada) Inc.",
              "jobs":64.0
            },
            {
              "employer":"Tableau Software",
              "jobs":58.0
            },
            {
              "employer":"TELUS",
              "jobs":53.0
            },
            {
              "employer":"AIESEC",
              "jobs":50.0
            },
            {
              "employer":"TEEMA Solutions Group Inc.",
              "jobs":48.0
            },
            {
              "employer":"CyberCoders",
              "jobs":46.0
            },
            {
              "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
              "jobs":43.0
            },
            {
              "employer":"RANDSTAD TECHNOLOGIES",
              "jobs":43.0
            },
            {
              "employer":"Simba Technologies",
              "jobs":42.0
            },
            {
              "employer":"Istuary Innovation Group",
              "jobs":37.0
            },
            {
              "employer":"Annex Consulting Group",
              "jobs":36.0
            },
            {
              "employer":"Global Relay Communications",
              "jobs":36.0
            },
            {
              "employer":"Hootsuite Media Inc.",
              "jobs":36.0
            },
            {
              "employer":"Modis Canada",
              "jobs":36.0
            },
            {
              "employer":"Swim Recruiting",
              "jobs":35.0
            }
          ],
          "totalOpenings":3486.0,
          "companiesRepresented":20.0,
          "jobsRepresented":1172.0,
          "openingsCoverage":0.336201950659782
        },
        "byAllJobs":{
          "top":[
            {
              "employer":"Fortinet Technologies",
              "jobs":235.0
            },
            {
              "employer":"Amazon",
              "jobs":234.0
            },
            {
              "employer":"IT/IQ TECH RECRUITERS",
              "jobs":228.0
            },
            {
              "employer":"RANDSTAD TECHNOLOGIES",
              "jobs":138.0
            },
            {
              "employer":"HAYS Specialist Recruitment (Canada) Inc.",
              "jobs":136.0
            },
            {
              "employer":"Avigilon",
              "jobs":125.0
            },
            {
              "employer":"MDA",
              "jobs":99.0
            },
            {
              "employer":"Simba Technologies",
              "jobs":98.0
            },
            {
              "employer":"Global Relay Communications",
              "jobs":96.0
            },
            {
              "employer":"SAP",
              "jobs":96.0
            },
            {
              "employer":"TEEMA Solutions Group Inc.",
              "jobs":92.0
            },
            {
              "employer":"TELUS",
              "jobs":90.0
            },
            {
              "employer":"Istuary Innovation Group",
              "jobs":84.0
            },
            {
              "employer":"Swim Recruiting",
              "jobs":81.0
            },
            {
              "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
              "jobs":74.0
            },
            {
              "employer":"Eagle Professional Resources Inc",
              "jobs":73.0
            },
            {
              "employer":"Modis Canada",
              "jobs":71.0
            },
            {
              "employer":"Annex Consulting Group",
              "jobs":70.0
            },
            {
              "employer":"Hootsuite Media Inc.",
              "jobs":68.0
            },
            {
              "employer":"Avocette Technologies",
              "jobs":65.0
            }
          ],
          "totalOpenings":6614.0,
          "companiesRepresented":20.0,
          "jobsRepresented":2253.0,
          "openingsCoverage":0.34064106440882974
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

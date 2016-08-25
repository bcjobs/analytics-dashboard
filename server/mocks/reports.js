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
          "current":1042,
          "previous":1136
        },
        "openJobsAverage":{
          "current":1257.40625,
          "previous":1353.3
        },
        "newJobs":{
          "current":27,
          "previous":57
        },
        "newJobsAverage":{
          "current":32.21875,
          "previous":34.2
        }
      },
      "charts":{
        "weekly":{
          "openJobsAverage":[
            {
              "x":"2016-07-10T00:00:00",
              "y":1342.1428571428571
            },
            {
              "x":"2016-07-17T00:00:00",
              "y":1351.5714285714287
            },
            {
              "x":"2016-07-24T00:00:00",
              "y":1320.8571428571429
            },
            {
              "x":"2016-07-31T00:00:00",
              "y":1295.4285714285713
            },
            {
              "x":"2016-08-07T00:00:00",
              "y":1288.4285714285713
            },
            {
              "x":"2016-08-14T00:00:00",
              "y":1257.2857142857142
            },
            {
              "x":"2016-08-21T00:00:00",
              "y":1163.7142857142858
            }
          ],
          "newJobsTotal":[
            {
              "x":"2016-07-10T00:00:00",
              "y":201.0
            },
            {
              "x":"2016-07-17T00:00:00",
              "y":285.0
            },
            {
              "x":"2016-07-24T00:00:00",
              "y":301.0
            },
            {
              "x":"2016-07-31T00:00:00",
              "y":223.0
            },
            {
              "x":"2016-08-07T00:00:00",
              "y":206.0
            },
            {
              "x":"2016-08-14T00:00:00",
              "y":217.0
            },
            {
              "x":"2016-08-21T00:00:00",
              "y":232.0
            }
          ]
        },
        "monthly":{
          "openJobsAverage":[
            {
              "x":"2015-09-30T00:00:00",
              "y":965.86666666666667
            },
            {
              "x":"2015-10-31T00:00:00",
              "y":1012.9677419354839
            },
            {
              "x":"2015-11-30T00:00:00",
              "y":1046.3666666666666
            },
            {
              "x":"2015-12-31T00:00:00",
              "y":1065.7741935483871
            },
            {
              "x":"2016-01-31T00:00:00",
              "y":1197.8709677419354
            },
            {
              "x":"2016-02-29T00:00:00",
              "y":1270.7586206896551
            },
            {
              "x":"2016-03-31T00:00:00",
              "y":1369.3225806451612
            },
            {
              "x":"2016-04-30T00:00:00",
              "y":1428.0666666666666
            },
            {
              "x":"2016-05-31T00:00:00",
              "y":1374.0
            },
            {
              "x":"2016-06-30T00:00:00",
              "y":1400.9333333333334
            },
            {
              "x":"2016-07-31T00:00:00",
              "y":1330.4516129032259
            },
            {
              "x":"2016-08-21T00:00:00",
              "y":1222.2272727272727
            }
          ],
          "newJobsTotal":[
            {
              "x":"2015-09-30T00:00:00",
              "y":509.0
            },
            {
              "x":"2015-10-31T00:00:00",
              "y":498.0
            },
            {
              "x":"2015-11-30T00:00:00",
              "y":523.0
            },
            {
              "x":"2015-12-31T00:00:00",
              "y":441.0
            },
            {
              "x":"2016-01-31T00:00:00",
              "y":859.0
            },
            {
              "x":"2016-02-29T00:00:00",
              "y":707.0
            },
            {
              "x":"2016-03-31T00:00:00",
              "y":1176.0
            },
            {
              "x":"2016-04-30T00:00:00",
              "y":1094.0
            },
            {
              "x":"2016-05-31T00:00:00",
              "y":1083.0
            },
            {
              "x":"2016-06-30T00:00:00",
              "y":1027.0
            },
            {
              "x":"2016-07-31T00:00:00",
              "y":1106.0
            },
            {
              "x":"2016-08-21T00:00:00",
              "y":655.0
            }
          ]
        }
      },
      "tables":{
        "trends":{
          "titles":{
            "byAllJobs":{
              "data":[
                {
                  "name":"Software Developer",
                  "current":1323.0,
                  "previous":0.0,
                  "companies":361.0,
                  "averageAge":49.349206349206348
                },
                {
                  "name":"Quality Assurance",
                  "current":718.0,
                  "previous":0.0,
                  "companies":217.0,
                  "averageAge":47.98885793871866
                },
                {
                  "name":"Web Developer",
                  "current":428.0,
                  "previous":0.0,
                  "companies":161.0,
                  "averageAge":36.654205607476634
                },
                {
                  "name":"Java Developer",
                  "current":329.0,
                  "previous":0.0,
                  "companies":91.0,
                  "averageAge":55.3951367781155
                },
                {
                  "name":"Business Analyst",
                  "current":262.0,
                  "previous":0.0,
                  "companies":110.0,
                  "averageAge":40.381679389312978
                },
                {
                  "name":"UI/UX Designer/Developer",
                  "current":257.0,
                  "previous":0.0,
                  "companies":96.0,
                  "averageAge":42.054474708171206
                },
                {
                  "name":".Net Developer",
                  "current":215.0,
                  "previous":0.0,
                  "companies":69.0,
                  "averageAge":43.855813953488372
                },
                {
                  "name":"Firmware Developer",
                  "current":209.0,
                  "previous":0.0,
                  "companies":57.0,
                  "averageAge":49.282296650717704
                },
                {
                  "name":"Systems Analyst",
                  "current":136.0,
                  "previous":0.0,
                  "companies":47.0,
                  "averageAge":34.411764705882355
                },
                {
                  "name":"Systems Administrator",
                  "current":129.0,
                  "previous":0.0,
                  "companies":58.0,
                  "averageAge":61.496124031007753
                },
                {
                  "name":"IT Support",
                  "current":122.0,
                  "previous":0.0,
                  "companies":66.0,
                  "averageAge":41.270491803278688
                },
                {
                  "name":"Front End Developer",
                  "current":118.0,
                  "previous":0.0,
                  "companies":68.0,
                  "averageAge":43.381355932203391
                },
                {
                  "name":"Software Development Manager",
                  "current":117.0,
                  "previous":0.0,
                  "companies":35.0,
                  "averageAge":63.521367521367523
                },
                {
                  "name":"C++ Software Developer",
                  "current":113.0,
                  "previous":0.0,
                  "companies":19.0,
                  "averageAge":53.56637168141593
                },
                {
                  "name":"Database Developer",
                  "current":112.0,
                  "previous":0.0,
                  "companies":59.0,
                  "averageAge":37.169642857142854
                },
                {
                  "name":"DevOps Engineer",
                  "current":105.0,
                  "previous":0.0,
                  "companies":43.0,
                  "averageAge":49.361904761904761
                },
                {
                  "name":"Technical Analyst",
                  "current":95.0,
                  "previous":0.0,
                  "companies":41.0,
                  "averageAge":40.473684210526315
                },
                {
                  "name":"Business Intelligence",
                  "current":87.0,
                  "previous":0.0,
                  "companies":48.0,
                  "averageAge":34.862068965517238
                },
                {
                  "name":"iOS Developer",
                  "current":83.0,
                  "previous":0.0,
                  "companies":45.0,
                  "averageAge":45.662650602409641
                },
                {
                  "name":"Programmer Analyst",
                  "current":83.0,
                  "previous":0.0,
                  "companies":35.0,
                  "averageAge":47.590361445783131
                }
              ],
              "coverage":1.0
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"Software Developer",
                  "current":105.0,
                  "previous":102.0,
                  "companies":63.0,
                  "averageAge":91.209523809523816
                },
                {
                  "name":"Quality Assurance",
                  "current":40.0,
                  "previous":39.0,
                  "companies":31.0,
                  "averageAge":100.175
                },
                {
                  "name":"Systems Administrator",
                  "current":27.0,
                  "previous":27.0,
                  "companies":14.0,
                  "averageAge":104.07407407407408
                },
                {
                  "name":"Java Developer",
                  "current":26.0,
                  "previous":25.0,
                  "companies":15.0,
                  "averageAge":118.73076923076923
                },
                {
                  "name":"Web Developer",
                  "current":18.0,
                  "previous":18.0,
                  "companies":17.0,
                  "averageAge":45.277777777777779
                },
                {
                  "name":"UI/UX Designer/Developer",
                  "current":17.0,
                  "previous":17.0,
                  "companies":15.0,
                  "averageAge":84.058823529411768
                },
                {
                  "name":"Firmware Developer",
                  "current":16.0,
                  "previous":16.0,
                  "companies":11.0,
                  "averageAge":95.1875
                },
                {
                  "name":"Software Development Manager",
                  "current":15.0,
                  "previous":13.0,
                  "companies":6.0,
                  "averageAge":108.53333333333333
                },
                {
                  "name":"Database Developer",
                  "current":14.0,
                  "previous":14.0,
                  "companies":11.0,
                  "averageAge":25.642857142857142
                },
                {
                  "name":"Business Analyst",
                  "current":11.0,
                  "previous":11.0,
                  "companies":11.0,
                  "averageAge":73.545454545454547
                },
                {
                  "name":".Net Developer",
                  "current":11.0,
                  "previous":11.0,
                  "companies":9.0,
                  "averageAge":101.72727272727273
                },
                {
                  "name":"IT Support",
                  "current":11.0,
                  "previous":11.0,
                  "companies":10.0,
                  "averageAge":44.727272727272727
                },
                {
                  "name":"Programmer Analyst",
                  "current":10.0,
                  "previous":10.0,
                  "companies":6.0,
                  "averageAge":79.6
                },
                {
                  "name":"Systems Analyst",
                  "current":10.0,
                  "previous":10.0,
                  "companies":8.0,
                  "averageAge":41.6
                },
                {
                  "name":"DevOps Engineer",
                  "current":9.0,
                  "previous":9.0,
                  "companies":8.0,
                  "averageAge":84.222222222222229
                },
                {
                  "name":"Android Developer",
                  "current":9.0,
                  "previous":9.0,
                  "companies":8.0,
                  "averageAge":97.555555555555557
                },
                {
                  "name":"Technical Analyst",
                  "current":9.0,
                  "previous":9.0,
                  "companies":7.0,
                  "averageAge":92.0
                },
                {
                  "name":"Software Architect",
                  "current":9.0,
                  "previous":9.0,
                  "companies":8.0,
                  "averageAge":89.333333333333329
                },
                {
                  "name":"Front End Developer",
                  "current":8.0,
                  "previous":7.0,
                  "companies":8.0,
                  "averageAge":47.375
                },
                {
                  "name":"Information Technology",
                  "current":8.0,
                  "previous":8.0,
                  "companies":5.0,
                  "averageAge":120.75
                }
              ],
              "coverage":1.0
            }
          },
          "skills":{
            "byAllJobs":{
              "data":[
                {
                  "name":"DATABASE ADMINISTRATION",
                  "current":2830.0,
                  "previous":0.0,
                  "companies":621.0,
                  "averageAge":39.847349823321558
                },
                {
                  "name":"SQL",
                  "current":2741.0,
                  "previous":0.0,
                  "companies":570.0,
                  "averageAge":40.251003283473182
                },
                {
                  "name":"JAVA",
                  "current":2425.0,
                  "previous":0.0,
                  "companies":415.0,
                  "averageAge":45.676288659793812
                },
                {
                  "name":"JAVASCRIPT",
                  "current":2309.0,
                  "previous":0.0,
                  "companies":518.0,
                  "averageAge":38.24036379385015
                },
                {
                  "name":"UNIX/LINUX",
                  "current":2083.0,
                  "previous":0.0,
                  "companies":387.0,
                  "averageAge":43.792126740278448
                },
                {
                  "name":"Communication Skills",
                  "current":2028.0,
                  "previous":0.0,
                  "companies":493.0,
                  "averageAge":41.817061143984219
                },
                {
                  "name":"DOCUMENTATION",
                  "current":1936.0,
                  "previous":0.0,
                  "companies":443.0,
                  "averageAge":41.102789256198349
                },
                {
                  "name":"HTML",
                  "current":1933.0,
                  "previous":0.0,
                  "companies":513.0,
                  "averageAge":38.593378168649764
                },
                {
                  "name":"INTEGRATION",
                  "current":1872.0,
                  "previous":0.0,
                  "companies":406.0,
                  "averageAge":45.012286324786324
                },
                {
                  "name":"ENGINEER",
                  "current":1803.0,
                  "previous":0.0,
                  "companies":368.0,
                  "averageAge":38.838602329450914
                },
                {
                  "name":"C++",
                  "current":1756.0,
                  "previous":0.0,
                  "companies":282.0,
                  "averageAge":46.2369020501139
                },
                {
                  "name":"ARCHITECTURE",
                  "current":1629.0,
                  "previous":0.0,
                  "companies":374.0,
                  "averageAge":46.379373848987107
                },
                {
                  "name":"C#",
                  "current":1576.0,
                  "previous":0.0,
                  "companies":342.0,
                  "averageAge":42.826142131979694
                },
                {
                  "name":"SECURITY",
                  "current":1557.0,
                  "previous":0.0,
                  "companies":311.0,
                  "averageAge":40.754656390494539
                },
                {
                  "name":"CSS",
                  "current":1332.0,
                  "previous":0.0,
                  "companies":364.0,
                  "averageAge":39.225975975975977
                },
                {
                  "name":"PYTHON",
                  "current":1285.0,
                  "previous":0.0,
                  "companies":280.0,
                  "averageAge":39.492607003891052
                },
                {
                  "name":"OBJECT-ORIENTED PROGRAMMING",
                  "current":1252.0,
                  "previous":0.0,
                  "companies":293.0,
                  "averageAge":46.18450479233227
                },
                {
                  "name":"TRAINING",
                  "current":1231.0,
                  "previous":0.0,
                  "companies":383.0,
                  "averageAge":37.059301380991066
                },
                {
                  "name":"OPERATIONS",
                  "current":1205.0,
                  "previous":0.0,
                  "companies":282.0,
                  "averageAge":42.424066390041496
                },
                {
                  "name":"MICROSOFT OFFICE",
                  "current":1150.0,
                  "previous":0.0,
                  "companies":309.0,
                  "averageAge":39.51913043478261
                }
              ],
              "coverage":1.0
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"ENGINEER",
                  "current":306.0,
                  "previous":300.0,
                  "companies":117.0,
                  "averageAge":67.93464052287581
                },
                {
                  "name":"JAVA",
                  "current":283.0,
                  "previous":276.0,
                  "companies":104.0,
                  "averageAge":72.229681978798581
                },
                {
                  "name":"DATABASE ADMINISTRATION",
                  "current":269.0,
                  "previous":263.0,
                  "companies":130.0,
                  "averageAge":65.505576208178439
                },
                {
                  "name":"SQL",
                  "current":268.0,
                  "previous":263.0,
                  "companies":122.0,
                  "averageAge":64.358208955223887
                },
                {
                  "name":"Communication Skills",
                  "current":236.0,
                  "previous":231.0,
                  "companies":114.0,
                  "averageAge":68.983050847457633
                },
                {
                  "name":"JAVASCRIPT",
                  "current":212.0,
                  "previous":206.0,
                  "companies":115.0,
                  "averageAge":58.943396226415096
                },
                {
                  "name":"DOCUMENTATION",
                  "current":208.0,
                  "previous":206.0,
                  "companies":104.0,
                  "averageAge":68.663461538461533
                },
                {
                  "name":"UNIX/LINUX",
                  "current":208.0,
                  "previous":205.0,
                  "companies":103.0,
                  "averageAge":61.822115384615387
                },
                {
                  "name":"INTEGRATION",
                  "current":197.0,
                  "previous":193.0,
                  "companies":98.0,
                  "averageAge":75.812182741116757
                },
                {
                  "name":"SECURITY",
                  "current":197.0,
                  "previous":194.0,
                  "companies":69.0,
                  "averageAge":65.862944162436548
                },
                {
                  "name":"C++",
                  "current":192.0,
                  "previous":190.0,
                  "companies":71.0,
                  "averageAge":85.71875
                },
                {
                  "name":"ARCHITECTURE",
                  "current":189.0,
                  "previous":185.0,
                  "companies":91.0,
                  "averageAge":77.825396825396822
                },
                {
                  "name":"HTML",
                  "current":176.0,
                  "previous":172.0,
                  "companies":109.0,
                  "averageAge":68.63636363636364
                },
                {
                  "name":"C#",
                  "current":142.0,
                  "previous":141.0,
                  "companies":79.0,
                  "averageAge":78.619718309859152
                },
                {
                  "name":"OPERATIONS",
                  "current":126.0,
                  "previous":125.0,
                  "companies":65.0,
                  "averageAge":74.9920634920635
                },
                {
                  "name":"CSS",
                  "current":123.0,
                  "previous":121.0,
                  "companies":78.0,
                  "averageAge":71.528455284552848
                },
                {
                  "name":"OBJECT-ORIENTED PROGRAMMING",
                  "current":119.0,
                  "previous":116.0,
                  "companies":61.0,
                  "averageAge":72.87394957983193
                },
                {
                  "name":"PYTHON",
                  "current":117.0,
                  "previous":115.0,
                  "companies":64.0,
                  "averageAge":51.863247863247864
                },
                {
                  "name":"QA",
                  "current":112.0,
                  "previous":112.0,
                  "companies":60.0,
                  "averageAge":69.892857142857139
                },
                {
                  "name":"REQUIREMENTS GATHERING",
                  "current":112.0,
                  "previous":111.0,
                  "companies":62.0,
                  "averageAge":71.803571428571431
                }
              ],
              "coverage":1.0
            }
          },
          "educations":{
            "byAllJobs":{
              "data":[
                {
                  "name":"High School",
                  "current":17.0,
                  "previous":0.0,
                  "companies":44.0,
                  "averageAge":11.823529411764707
                },
                {
                  "name":"Certification",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"Vocational",
                  "current":26.0,
                  "previous":0.0,
                  "companies":62.0,
                  "averageAge":45.807692307692307
                },
                {
                  "name":"Associates",
                  "current":760.0,
                  "previous":0.0,
                  "companies":304.0,
                  "averageAge":42.636842105263156
                },
                {
                  "name":"Bachelors",
                  "current":3936.0,
                  "previous":0.0,
                  "companies":739.0,
                  "averageAge":43.461128048780488
                },
                {
                  "name":"Masters",
                  "current":1151.0,
                  "previous":0.0,
                  "companies":385.0,
                  "averageAge":45.490008688097305
                },
                {
                  "name":"Doctorate",
                  "current":78.0,
                  "previous":0.0,
                  "companies":76.0,
                  "averageAge":41.884615384615387
                }
              ],
              "coverage":0.55024893970127242
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"High School",
                  "current":0.0,
                  "previous":0.0,
                  "companies":23.0,
                  "averageAge":"Infinity"
                },
                {
                  "name":"Certification",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"Vocational",
                  "current":4.0,
                  "previous":4.0,
                  "companies":32.0,
                  "averageAge":296.75
                },
                {
                  "name":"Associates",
                  "current":95.0,
                  "previous":101.0,
                  "companies":117.0,
                  "averageAge":340.2
                },
                {
                  "name":"Bachelors",
                  "current":429.0,
                  "previous":467.0,
                  "companies":251.0,
                  "averageAge":397.85547785547783
                },
                {
                  "name":"Masters",
                  "current":158.0,
                  "previous":176.0,
                  "companies":163.0,
                  "averageAge":330.48734177215192
                },
                {
                  "name":"Doctorate",
                  "current":6.0,
                  "previous":8.0,
                  "companies":41.0,
                  "averageAge":543.5
                }
              ],
              "coverage":0.66410748560460653
            }
          },
          "experiences":{
            "byAllJobs":{
              "data":[
                {
                  "name":"1 to 3 Years",
                  "current":4581.0,
                  "previous":0.0,
                  "companies":972.0,
                  "averageAge":41.295132067234228
                },
                {
                  "name":"4 to 9 Years",
                  "current":3116.0,
                  "previous":0.0,
                  "companies":705.0,
                  "averageAge":42.988767650834404
                },
                {
                  "name":"10+ Years",
                  "current":398.0,
                  "previous":0.0,
                  "companies":258.0,
                  "averageAge":45.195979899497488
                }
              ],
              "coverage":0.74635810437027472
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"1 to 3 Years",
                  "current":438.0,
                  "previous":481.0,
                  "companies":276.0,
                  "averageAge":431.00684931506851
                },
                {
                  "name":"4 to 9 Years",
                  "current":314.0,
                  "previous":344.0,
                  "companies":241.0,
                  "averageAge":425.71019108280257
                },
                {
                  "name":"10+ Years",
                  "current":42.0,
                  "previous":44.0,
                  "companies":103.0,
                  "averageAge":427.38095238095241
                }
              ],
              "coverage":0.761996161228407
            }
          },
          "jobTypes":{
            "byAllJobs":{
              "data":[
                {
                  "name":"Full Time",
                  "current":6630.0,
                  "previous":0.0,
                  "companies":1087.0,
                  "averageAge":33.459276018099544
                },
                {
                  "name":"Part Time",
                  "current":20.0,
                  "previous":0.0,
                  "companies":14.0,
                  "averageAge":45.3
                },
                {
                  "name":"Contract",
                  "current":592.0,
                  "previous":0.0,
                  "companies":151.0,
                  "averageAge":28.432432432432432
                },
                {
                  "name":"Temporary",
                  "current":51.0,
                  "previous":0.0,
                  "companies":28.0,
                  "averageAge":16.803921568627452
                },
                {
                  "name":"Volunteer",
                  "current":1.0,
                  "previous":0.0,
                  "companies":1.0,
                  "averageAge":21.0
                }
              ],
              "coverage":0.67250599299280844
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"Full Time",
                  "current":587.0,
                  "previous":625.0,
                  "companies":211.0,
                  "averageAge":67.4855195911414
                },
                {
                  "name":"Part Time",
                  "current":2.0,
                  "previous":2.0,
                  "companies":2.0,
                  "averageAge":23.5
                },
                {
                  "name":"Contract",
                  "current":55.0,
                  "previous":58.0,
                  "companies":20.0,
                  "averageAge":29.781818181818181
                },
                {
                  "name":"Temporary",
                  "current":2.0,
                  "previous":3.0,
                  "companies":2.0,
                  "averageAge":22.0
                },
                {
                  "name":"Volunteer",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                }
              ],
              "coverage":0.61996161228406921
            }
          },
          "regions":{
            "byAllJobs":{
              "data":[
                {
                  "name":"Greater Victoria",
                  "current":836.0,
                  "previous":0.0,
                  "companies":213.0,
                  "averageAge":37.533492822966508
                },
                {
                  "name":"Central/Northern Island, Sunshine Coast and Gulf Islands",
                  "current":305.0,
                  "previous":0.0,
                  "companies":169.0,
                  "averageAge":23.049180327868854
                },
                {
                  "name":"Vancouver and Fraser Valley",
                  "current":2802.0,
                  "previous":0.0,
                  "companies":394.0,
                  "averageAge":43.847965738758027
                },
                {
                  "name":"Okanagan Valley",
                  "current":112.0,
                  "previous":0.0,
                  "companies":49.0,
                  "averageAge":44.491071428571431
                },
                {
                  "name":"West Kootenays",
                  "current":14.0,
                  "previous":0.0,
                  "companies":7.0,
                  "averageAge":23.142857142857142
                },
                {
                  "name":"East Kootenays",
                  "current":23.0,
                  "previous":0.0,
                  "companies":19.0,
                  "averageAge":20.913043478260871
                },
                {
                  "name":"Central Interior BC",
                  "current":19.0,
                  "previous":0.0,
                  "companies":15.0,
                  "averageAge":31.368421052631579
                },
                {
                  "name":"North West BC",
                  "current":96.0,
                  "previous":0.0,
                  "companies":55.0,
                  "averageAge":27.947916666666668
                },
                {
                  "name":"North Central BC",
                  "current":18.0,
                  "previous":0.0,
                  "companies":12.0,
                  "averageAge":28.277777777777779
                },
                {
                  "name":"Northern BC",
                  "current":13.0,
                  "previous":0.0,
                  "companies":6.0,
                  "averageAge":16.46153846153846
                }
              ],
              "coverage":0.39074313110824266
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"Greater Victoria",
                  "current":57.0,
                  "previous":61.0,
                  "companies":39.0,
                  "averageAge":29.561403508771932
                },
                {
                  "name":"Central/Northern Island, Sunshine Coast and Gulf Islands",
                  "current":2.0,
                  "previous":2.0,
                  "companies":2.0,
                  "averageAge":45.0
                },
                {
                  "name":"Vancouver and Fraser Valley",
                  "current":306.0,
                  "previous":334.0,
                  "companies":100.0,
                  "averageAge":68.885620915032675
                },
                {
                  "name":"Okanagan Valley",
                  "current":18.0,
                  "previous":18.0,
                  "companies":13.0,
                  "averageAge":96.0
                },
                {
                  "name":"West Kootenays",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"East Kootenays",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"Central Interior BC",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"North West BC",
                  "current":8.0,
                  "previous":10.0,
                  "companies":7.0,
                  "averageAge":63.25
                },
                {
                  "name":"North Central BC",
                  "current":2.0,
                  "previous":2.0,
                  "companies":2.0,
                  "averageAge":52.5
                },
                {
                  "name":"Northern BC",
                  "current":0.0,
                  "previous":1.0,
                  "companies":0.0,
                  "averageAge":0.0
                }
              ],
              "coverage":0.37715930902111322
            }
          },
          "associations":{
            "byAllJobs":{
              "data":[
                {
                  "name":"BC Tech Association",
                  "current":1913.0,
                  "previous":0.0,
                  "companies":69.0,
                  "averageAge":49.960271824359644
                },
                {
                  "name":"HR Tech Group",
                  "current":1802.0,
                  "previous":0.0,
                  "companies":37.0,
                  "averageAge":46.589345172031074
                },
                {
                  "name":"VIATEC",
                  "current":663.0,
                  "previous":0.0,
                  "companies":115.0,
                  "averageAge":43.07692307692308
                },
                {
                  "name":"Accelerate Okanogan",
                  "current":205.0,
                  "previous":0.0,
                  "companies":15.0,
                  "averageAge":45.68780487804878
                },
                {
                  "name":"Lifesciences BC",
                  "current":81.0,
                  "previous":0.0,
                  "companies":14.0,
                  "averageAge":38.728395061728392
                },
                {
                  "name":"BC Technology Industry Association",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"Digital Media BC",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                }
              ],
              "coverage":0.43002028397565922
            },
            "byOpenJobs":{
              "data":[
                {
                  "name":"BC Tech Association",
                  "current":225.0,
                  "previous":240.0,
                  "companies":33.0,
                  "averageAge":80.813333333333333
                },
                {
                  "name":"HR Tech Group",
                  "current":179.0,
                  "previous":194.0,
                  "companies":27.0,
                  "averageAge":74.290502793296085
                },
                {
                  "name":"VIATEC",
                  "current":42.0,
                  "previous":48.0,
                  "companies":23.0,
                  "averageAge":47.785714285714285
                },
                {
                  "name":"Accelerate Okanogan",
                  "current":19.0,
                  "previous":19.0,
                  "companies":7.0,
                  "averageAge":106.68421052631579
                },
                {
                  "name":"Lifesciences BC",
                  "current":7.0,
                  "previous":8.0,
                  "companies":4.0,
                  "averageAge":31.428571428571427
                },
                {
                  "name":"BC Technology Industry Association",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                },
                {
                  "name":"Digital Media BC",
                  "current":0.0,
                  "previous":0.0,
                  "companies":0.0,
                  "averageAge":0.0
                }
              ],
              "coverage":0.45297504798464494
            }
          }
        },
        "employers":{
          "byOpenJobs":{
            "top":[
              {
                "employer":"Amazon",
                "jobs":79.0
              },
              {
                "employer":"MDA",
                "jobs":44.0
              },
              {
                "employer":"Fortinet Technologies",
                "jobs":44.0
              },
              {
                "employer":"IT/IQ TECH RECRUITERS",
                "jobs":29.0
              },
              {
                "employer":"SAP",
                "jobs":25.0
              },
              {
                "employer":"Global Relay Communications",
                "jobs":24.0
              },
              {
                "employer":"Microsemi Corporation",
                "jobs":20.0
              },
              {
                "employer":"PROCOM Services",
                "jobs":19.0
              },
              {
                "employer":"TEEMA Solutions Group Inc.",
                "jobs":18.0
              },
              {
                "employer":"Altis Human Resources",
                "jobs":17.0
              },
              {
                "employer":"Hootsuite Media Inc.",
                "jobs":16.0
              },
              {
                "employer":"Destinationone Consulting Inc.",
                "jobs":14.0
              },
              {
                "employer":"TELUS",
                "jobs":13.0
              },
              {
                "employer":"Istuary Innovation Group",
                "jobs":13.0
              },
              {
                "employer":"Absolute Software",
                "jobs":13.0
              },
              {
                "employer":"Avigilon",
                "jobs":12.0
              },
              {
                "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
                "jobs":11.0
              },
              {
                "employer":"Sophos",
                "jobs":11.0
              },
              {
                "employer":"Eagle Professional Resources Inc",
                "jobs":9.0
              },
              {
                "employer":"D-Wave Systems Inc.",
                "jobs":9.0
              }
            ],
            "totalOpenings":1042.0,
            "companiesRepresented":20.0,
            "jobsRepresented":440.0,
            "openingsCoverage":0.42226487523992323
          },
          "byLast7DaysJobs":{
            "top":[
              {
                "employer":"PROCOM Services",
                "jobs":21.0
              },
              {
                "employer":"Fortinet Technologies",
                "jobs":20.0
              },
              {
                "employer":"Destinationone Consulting Inc.",
                "jobs":10.0
              },
              {
                "employer":"Move, Inc",
                "jobs":8.0
              },
              {
                "employer":"TEEMA Solutions Group Inc.",
                "jobs":6.0
              },
              {
                "employer":"TEKSYSTEMS",
                "jobs":4.0
              },
              {
                "employer":"BC Pension Corporation",
                "jobs":4.0
              },
              {
                "employer":"Amazon",
                "jobs":4.0
              },
              {
                "employer":"Schneider Electric",
                "jobs":4.0
              },
              {
                "employer":"IT/IQ TECH RECRUITERS",
                "jobs":4.0
              },
              {
                "employer":"MDA",
                "jobs":3.0
              },
              {
                "employer":"Quotemedia, Inc.",
                "jobs":3.0
              },
              {
                "employer":"Staff Systems",
                "jobs":3.0
              },
              {
                "employer":"NETGEAR",
                "jobs":3.0
              },
              {
                "employer":"Absolute Software",
                "jobs":3.0
              },
              {
                "employer":"A Thinking Ape",
                "jobs":3.0
              },
              {
                "employer":"Samsung",
                "jobs":3.0
              },
              {
                "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
                "jobs":2.0
              },
              {
                "employer":"HAYS Specialist Recruitment (Canada) Inc.",
                "jobs":2.0
              },
              {
                "employer":"PNI Digital Media Inc.",
                "jobs":2.0
              }
            ],
            "totalOpenings":232.0,
            "companiesRepresented":20.0,
            "jobsRepresented":112.0,
            "openingsCoverage":0.48275862068965519
          },
          "byYearToDate":{
            "top":[
              {
                "employer":"Fortinet Technologies",
                "jobs":445.0
              },
              {
                "employer":"Amazon",
                "jobs":248.0
              },
              {
                "employer":"IT/IQ TECH RECRUITERS",
                "jobs":244.0
              },
              {
                "employer":"SAP",
                "jobs":196.0
              },
              {
                "employer":"HAYS Specialist Recruitment (Canada) Inc.",
                "jobs":140.0
              },
              {
                "employer":"TELUS",
                "jobs":124.0
              },
              {
                "employer":"MDA",
                "jobs":121.0
              },
              {
                "employer":"Hootsuite Media Inc.",
                "jobs":118.0
              },
              {
                "employer":"Tableau Software",
                "jobs":110.0
              },
              {
                "employer":"TEEMA Solutions Group Inc.",
                "jobs":99.0
              },
              {
                "employer":"Modis Canada",
                "jobs":84.0
              },
              {
                "employer":"Avigilon",
                "jobs":77.0
              },
              {
                "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
                "jobs":73.0
              },
              {
                "employer":"CyberCoders",
                "jobs":72.0
              },
              {
                "employer":"Simba Technologies",
                "jobs":68.0
              },
              {
                "employer":"Istuary Innovation Group",
                "jobs":65.0
              },
              {
                "employer":"Annex Consulting Group",
                "jobs":64.0
              },
              {
                "employer":"Vision Critical",
                "jobs":63.0
              },
              {
                "employer":"Global Relay Communications",
                "jobs":62.0
              },
              {
                "employer":"Swim Recruiting",
                "jobs":61.0
              }
            ],
            "totalOpenings":7707.0,
            "companiesRepresented":20.0,
            "jobsRepresented":2534.0,
            "openingsCoverage":0.32879200726612173
          },
          "byAllJobs":{
            "top":[
              {
                "employer":"Fortinet Technologies",
                "jobs":565.0
              },
              {
                "employer":"Amazon",
                "jobs":354.0
              },
              {
                "employer":"IT/IQ TECH RECRUITERS",
                "jobs":347.0
              },
              {
                "employer":"SAP",
                "jobs":219.0
              },
              {
                "employer":"HAYS Specialist Recruitment (Canada) Inc.",
                "jobs":212.0
              },
              {
                "employer":"Avigilon",
                "jobs":171.0
              },
              {
                "employer":"TELUS",
                "jobs":161.0
              },
              {
                "employer":"MDA",
                "jobs":152.0
              },
              {
                "employer":"Hootsuite Media Inc.",
                "jobs":150.0
              },
              {
                "employer":"TEEMA Solutions Group Inc.",
                "jobs":143.0
              },
              {
                "employer":"RANDSTAD TECHNOLOGIES",
                "jobs":142.0
              },
              {
                "employer":"Simba Technologies",
                "jobs":124.0
              },
              {
                "employer":"Global Relay Communications",
                "jobs":122.0
              },
              {
                "employer":"Modis Canada",
                "jobs":119.0
              },
              {
                "employer":"Istuary Innovation Group",
                "jobs":112.0
              },
              {
                "employer":"Tableau Software",
                "jobs":110.0
              },
              {
                "employer":"Swim Recruiting",
                "jobs":107.0
              },
              {
                "employer":"PROVINCIAL HEALTH SERVICES AUTHORITY",
                "jobs":104.0
              },
              {
                "employer":"Eagle Professional Resources Inc",
                "jobs":101.0
              },
              {
                "employer":"Annex Consulting Group",
                "jobs":98.0
              }
            ],
            "totalOpenings":10846.0,
            "companiesRepresented":20.0,
            "jobsRepresented":3613.0,
            "openingsCoverage":0.33311820025815969
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

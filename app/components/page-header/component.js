import Ember from 'ember';
import moment from 'npm:moment';

var DATE_FORMAT = 'YYYY-MM-DD';

export default Ember.Component.extend({
    at: Ember.computed('atDate', function(){
      return this.get('atDate') ? moment(this.get('atDate')).format(DATE_FORMAT) : '';
    }),

    switchReportName: Ember.computed('type', function(){
      return this.get('type') === 'Software' ? "IT Job Report" : "Software Job Report";
    }),

    sectorList: [
  {
    "name":"Technology",
    "subSectors":[
      {
        "name":"Clean Tech"
      },
      {
        "name":"Digital Media"
      },
      {
        "name":"Life Sciences"
      },
      {
        "name":"Engineering"
      },
      {
        "name":"ICT"
      },
      {
        "name":"Other Tech Sector"
      }
    ]
  },
  {
    "name":"Other",
    "subSectors":[
      {
        "name":"Other"
      }
    ]
  },
  {
    "name":"Apparel",
    "subSectors":[
      {
        "name":"Other Apparel"
      }
    ]
  },
  {
    "name":"Auction",
    "subSectors":[
      {
        "name":"Other Auction"
      }
    ]
  },
  {
    "name":"Automotive",
    "subSectors":[
      {
        "name":"Other Automotive"
      }
    ]
  },
  {
    "name":"Construction",
    "subSectors":[
      {
        "name":"Other Construction"
      }
    ]
  },
  {
    "name":"Consulting",
    "subSectors":[
      {
        "name":"Other Consulting"
      }
    ]
  },
  {
    "name":"Consumer Services",
    "subSectors":[
      {
        "name":"Other Consumer Services"
      }
    ]
  },
  {
    "name":"Education",
    "subSectors":[
      {
        "name":"Other Education"
      }
    ]
  },
  {
    "name":"Energy",
    "subSectors":[
      {
        "name":"Other Energy"
      }
    ]
  },
  {
    "name":"Engineering Sector",
    "subSectors":[
      {
        "name":"Other Engineering Sector"
      }
    ]
  },
  {
    "name":"Entertainment",
    "subSectors":[
      {
        "name":"Other Entertainment"
      }
    ]
  },
  {
    "name":"Environment",
    "subSectors":[
      {
        "name":"Other Environment"
      }
    ]
  },
  {
    "name":"Financial Services",
    "subSectors":[
      {
        "name":"Other Financial Services"
      }
    ]
  },
  {
    "name":"Government",
    "subSectors":[
      {
        "name":"Other Government"
      }
    ]
  },
  {
    "name":"Health",
    "subSectors":[
      {
        "name":"Other Health"
      }
    ]
  },
  {
    "name":"Law",
    "subSectors":[
      {
        "name":"Other Law"
      }
    ]
  },
  {
    "name":"Marketing",
    "subSectors":[
      {
        "name":"Other Marketing"
      }
    ]
  },
  {
    "name":"Real Estate",
    "subSectors":[
      {
        "name":"Other Real Estate"
      }
    ]
  },
  {
    "name":"Retail",
    "subSectors":[
      {
        "name":"Other Retail"
      }
    ]
  },
  {
    "name":"Staffing",
    "subSectors":[
      {
        "name":"Other Staffing"
      }
    ]
  },
  {
    "name":"Supply Chain",
    "subSectors":[
      {
        "name":"Other Supply Chain"
      }
    ]
  }
],

  actions: {
    switchReport(currentReport){
      this.sendAction('action', currentReport, this.get('at'));
    },
    logout(){
      this.sendAction('logout');
    }
  }
});

export class Init {
    load() {
      if(localStorage.getItem('appointments') === null || localStorage.getItem('appointments') == undefined) {
        console.log('No Data Found... Creating...');
        let emps = [
          {
            id:1,
            hour:"08:00 AM",
            title:'Meet With Boss',
            details:'Everyone should Peresent',
            date: ['22-December-2022']
          },
          {
            id:2,
            hour:"09:00 AM",
            title:'',
            details:'',
            date: ['22-December-2022'] 
          },
          {
            id:3,
            hour:"10:00 AM",
            title:'Meet With Boss',
            details:'Everyone should Peresent',
            date: ['22-December-2022']
          },
          {
            id:4,
            hour:"11:00 AM",
            title:'Meet With Boss',
            details:'Everyone should Peresent',
            date: ['22-December-2022']
          },
          {
            id:5,
            hour:"08:00 AM",
            title:'Meet With Boss',
            details:'Everyone should Peresent',
            date: ['22-December-2022']
          },
          {
            id:6,
            hour:"12:00 AM",
            title:'Meet With Boss',
            details:'Everyone should Peresent',
            date: ['22-December-2022']
          },
          {
            id:7,
            hour:"1:00 PM",
            title:'',
            details:'',
            date: ['22-December-2022'] 
          },
          {
            id:8,
            hour:"02:00 PM",
            title:'',
            details:'',
            date: ['22-December-2022'] 
          },
          {
            id:9,
            hour:"03:00 PM",
            title:'',
            details:'',
            date: ['22-December-2022'] 
          },
          {
            id:10,
            hour:"09:00 AM",
            title:'',
            details:'',
            date: ['22-December-2022'] 
          },
          {
            id:11,
            hour:"09:00 AM",
            title:'',
            details:'',
            date: ['22-December-2022'] 
          },
        ];
  
        localStorage.setItem('appointments', JSON.stringify(emps));
        return 
      } else {
        console.log('Found appointments...');
      }
    }
  }
import '../styles/main.scss';

import moment from 'moment';
//console.log(moment({year :'2021',month :'11', day:'12' , hour :'10'}));
console.log(moment().days())

class CountDown{
    constructor(selector ,endDate){
        this.selector = selector;
        this.endDate = moment(endDate); // the endDate as a date object
        this.now = moment();  // this is the current date and time as a date object
        this.duration = this.endDate - this.now   // the rest of the date and time
        this.time = {days : 0, hours : 0 ,minutes : 0 , seconds: 0 };
        this.updateInterval = 1000 // 1000 ms = 1 sec
        this.updateTime()

    }
    updateTime(){
        setInterval(()=>{
            // we are converting duration from ms to date object talking one sec each  one sec
            this.duration = moment.duration(this.duration - this.updateInterval );
            this.time.days = this.duration.days() + this.duration.years() * 365;
            this.time.hours = this.duration.hours();
            this.time.minutes = this.duration.minutes();
            this.time.seconds = this.duration.seconds();
            console.log(this.time);
            this.render()
           
        },this.updateInterval)


    }
    createHtml(){

        return `
        <div> 
        <p> ${this.time.days} Days  </p>
        <p>${this.time.hours} Hours  </p>
        <p> ${this.time.minutes} Minutes  </p>
        <p> ${this.time.seconds} Seconds  </p>        
        </div>
        
        `
    }
    render(){
        const output = document.querySelector(this.selector);
       
        output.innerHTML = this.createHtml()
    }

}


const result = new CountDown('#output' ,{year :'2021',month :'11', day:'12' , hour :'10'});




console.log(result);

//console.log(moment().format('MMMM Do YYYY, hh:mm:ss a') ) // September 1st 2021, 3:45:28 pm);
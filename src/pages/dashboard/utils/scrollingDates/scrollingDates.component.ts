import {Component, Input, SimpleChanges} from '@angular/core';
const days:Array<string> = ["SUN","MON","TUE","WED","THU","FRI","SAT"] ;
@Component({
    selector: 'scrolling-dates',
    templateUrl: "./scrollingDates.html"
})
export class ScrollingDates {

    @Input()
    dateinput;

    dayDates:Array<IDayName> = [];
    selectedDateIndex :number;

    constructor() {
        let date = new Date();
        this.dayDates = this.getFormatedDayDates(date);
    }


    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.dateinput) {
            console.log(changes.dateinput.currentValue);
            this.dayDates = this.getFormatedDayDates(new Date(changes.dateinput.currentValue));
        }
    }

    selectedData(i){
        console.log("seelcted",i);
        this.selectedDateIndex = i;
    }

    private getFormatedDayDates(date):Array<IDayName>{
        let dayDates:Array<IDayName> = [];
        let daysInMonth = this.daysInMonth(date.getMonth()+1,date.getFullYear());
        for(let i:number = 0 ; i< daysInMonth;i++){

            dayDates.push({
                day: days[date.getDay()],
                date: date.getDate()
            });

            console.log("checking data::",date.getDay());
            date.setDate(date.getDate()+1);
        }

        return dayDates;
    }

    private daysInMonth(month:number,year:number) {
        return new Date(year, month, 0).getDate();
    }




}

interface IDayName{
    'day' : string;
    'date' : number;
}


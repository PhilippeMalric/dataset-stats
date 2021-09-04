import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, startWith, take, tap, withLatestFrom } from 'rxjs/operators';
import { updateFocusVar, updateVarName } from 'src/app/Rxjs/actions/main.actions';
import { selectFileName } from 'src/app/Rxjs/reducers';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'lime-div',
  templateUrl: './lime-div.component.html',
  styleUrls: ['./lime-div.component.css']
})
export class LimeDivComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  varNames: any;
  currentIndex: number;
  interval:any
  fileName$: Observable<unknown>;
  data: any[];
  currentVar: any;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.key == "m"){
      if(this.currentIndex < this.data.length -1){
        this.currentIndex = this.currentIndex+1
        this.currentVar = this.data[this.currentIndex]
      }
      else{
        this.currentIndex = 0
        this.currentVar = this.data[this.currentIndex]
      }
    }
    if(event.key == "n"){
      if(this.currentIndex != 0){
        this.currentIndex = this.currentIndex-1
        this.currentVar = this.data[this.currentIndex]
      }
      else{
        this.currentIndex =  this.data.length -1
        this.currentVar = this.data[this.currentIndex]
      }
    }
    console.log(event.key)
  }

  constructor(
    private dataService:DataService,
    private store:Store
  ) { }

  ngOnInit(): void {

    this.currentIndex = 0

    this.dataService.dataset_lime$.subscribe((data)=>{

      this.data = data

      this.currentVar = data[this.currentIndex]

    })
    

   
  }


  

  createStat = ()=>{
    

    console.log("stat1")

    this.store.dispatch(updateVarName({data:this.myControl.value}))

    this.dataService.dataset$.pipe(take(1),
      tap(console.log)
      )
      
      .subscribe((dataset:any)=>{
              
             this.stat(dataset)
                })
      }


   

        shuffle = (array):any[]=>{
          var currentIndex = array.length, temporaryValue, randomIndex;
        
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
        }

        stat = (dataset)=>{
          console.log("stat2")
          //console.log(varNames.includes(this.myControl.value))
          if(dataset[0].includes(this.myControl.value)){
            this.store.dispatch(updateFocusVar({data:this.myControl.value}))
            let n = dataset[0].indexOf(this.myControl.value)
            console.log( "n" )
            console.log( n )
            let col = dataset.map(x=>x[n])
            console.log("col", col )
            this.createStatDesc(col)
          }
             
            
        }
        createStatDesc = (col)=>{
          console.log("length")
          console.log(col.length)
          let stat_desc = this.createCount(col)
          console.log("stat_desc ------------------------------------")
          console.log(stat_desc)
            this.dataService.categories$.next(stat_desc)


        }


    createCount(arr){
        if(arr[1].split(" ")[0].split("-").length > 2 ){
          arr = arr.map(x=>x.split(" ")[0])

        }
      var counts = {};
      for (var i = 1; i < arr.length; i++) {
          counts[arr[i]] = 1 + (counts[arr[i]] || 0);
      }

      let result = Object.keys(counts).sort().map((key)=>{
        return {categorie:key,count:counts[key]}
      })

      return result
    }

}


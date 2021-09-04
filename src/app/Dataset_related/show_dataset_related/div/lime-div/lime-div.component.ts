import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { combineLatest, concat, merge, Observable } from 'rxjs';
import { concatMap, map, mergeMap, startWith, take, tap, withLatestFrom } from 'rxjs/operators';
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
  currentIndex_sub_q: number;
  interval:any
  fileName$: Observable<unknown>;
  data: any[];
  currentVar: any;
  data_sub_q: any;
  filter_result_sub_q: any;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    

    
    if(event.key == "m"){

      if(this.data[this.currentIndex]?.type == "M"){
        
       // si on est déjà dans un M est qu'on est pas à la fin
        if(this.currentIndex_sub_q < this.filter_result_sub_q.length -1){
          this.currentIndex_sub_q = this.currentIndex_sub_q+1
         
        }
        else{
          
          if(this.currentIndex < this.data.length -1){
            this.currentIndex = this.currentIndex+1
            if(this.data[this.currentIndex]?.type == "M"){
              this.currentIndex_sub_q = 0
            }
          }
          else{
            this.currentIndex = 0
            if(this.data[this.currentIndex]?.type == "M"){
              this.currentIndex_sub_q = 0
            }
          }
         
        }
      }else{
        if(this.currentIndex < this.data.length -1){
          this.currentIndex = this.currentIndex+1
        
        }
        else{
          this.currentIndex = 0
          
        }
        if(this.data[this.currentIndex]?.type == "M"){
          this.filter_result_sub_q = this.data_sub_q.filter((data)=>{
            return data.title_p == this.data[this.currentIndex].title
          })
          this.currentIndex_sub_q = 0
        }
      }

 
    }

    if(event.key == "n"){

      if(this.data[this.currentIndex]?.type == "M"){

         // si on est déjà dans un M est qu'on est pas au début
        if(this.currentIndex_sub_q > 0){
          this.currentIndex_sub_q = this.currentIndex_sub_q - 1
          
        }else{
          if(this.currentIndex != 0){
            this.currentIndex = this.currentIndex-1
            if(this.data[this.currentIndex]?.type == "M"){
              this.filter_result_sub_q = this.data_sub_q.filter((data)=>{
                return data.title_p == this.data[this.currentIndex].title
              })
              this.currentIndex_sub_q = this.filter_result_sub_q.length -1
            }
            
          }
          else{
            this.currentIndex =  this.data.length -1
            if(this.data[this.currentIndex]?.type == "M"){
              this.filter_result_sub_q = this.data_sub_q.filter((data)=>{
                return data.title_p == this.data[this.currentIndex].title
              })
              this.currentIndex_sub_q = this.filter_result_sub_q.length -1
            }
            
          }
        }

      }
      else{
        if(this.currentIndex != 0){
          this.currentIndex = this.currentIndex-1
          if(this.data[this.currentIndex]?.type == "M"){
            this.filter_result_sub_q = this.data_sub_q.filter((data)=>{
              return data.title_p == this.data[this.currentIndex].title
            })
            this.currentIndex_sub_q = this.filter_result_sub_q.length -1
          }
        }
        else{
          this.currentIndex =  this.data.length -1
          this.filter_result_sub_q = this.data_sub_q.filter((data)=>{
            return data.title_p == this.data[this.currentIndex].title
          })
          this.currentIndex_sub_q = this.filter_result_sub_q.length -1
        }
      }
      
    }
    this.get_newVar()
    console.log(event.key)
  }

  get_newVar(): any {

    console.log("this.currentIndex",this.currentIndex, this.data.length -1)
    

    if(this.data[this.currentIndex]?.type == "L"){

      this.currentVar = this.data[this.currentIndex]
    }
    if(this.data[this.currentIndex]?.type == "M"){

      console.log("this.currentIndex_sub_q",this.currentIndex_sub_q, this.filter_result_sub_q.length -1)

    if(this.filter_result_sub_q == 0 || !this.filter_result_sub_q){
      this.filter_result_sub_q = this.data_sub_q.filter((data)=>{
        return data.title_p == this.data[this.currentIndex].title
      })
    }
      this.currentVar = this.filter_result_sub_q[this.currentIndex_sub_q]
    }

  }

  constructor(
    private dataService:DataService,
    private store:Store
  ) { 

    this.filter_result_sub_q = []

  }

  ngOnInit(): void {

    this.currentIndex = 18
    this.currentIndex_sub_q = 0

    combineLatest(this.dataService.dataset_lime$,this.dataService.dataset_lime_sub_q$).subscribe((data)=>{

      console.log("ngOnInit",data)

      this.data = data[0]

      this.data_sub_q = data[1]
     
      this.get_newVar()
      

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


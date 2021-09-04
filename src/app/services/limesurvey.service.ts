import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LimesurveyService {

  constructor(private dataService:DataService) { }


  resultQ(fileName:string , result:any){

console.log(result)

    if( fileName.indexOf("sub_q_responses") != -1){

      console.log("sub_q_responses result : ",result)
      this.dataService.dataset_lime_sub_q$.next(this.formatResult_sub_q(result))
      
    }else{

      let formatedRes = this.formatResult(result)

      console.log("formatedRes",formatedRes)
  
      this.dataService.dataset_lime$.next(formatedRes)
    }

  }


  formatResult(data:any[]){

    let names = data[0]
  
    let result = []
  
    for(let i =1 ; i<data.length; i ++){
      //console.log(i)
      result[i-1] = new Object
      result[i-1]["result"] = []
      for(let nameI in names){
        let name = names[nameI]
        
        if(i == 1){
          console.log(name)
        }
        if(name[0] == 'X' && data[i][nameI] != "NA" && data[i][nameI] != ""){
          result[i-1]["result"].push(data[i][nameI])
        }else{
          result[i-1][name] = data[i][nameI]
        }
        
      }
    }
  
   let result2 = result.filter((data)=>{
     return  data.result.length != 0 
    })
  
    return result
   
  }



  formatResult_sub_q(data:any[]){

    let names = data[0]
  
    let result = []
  
    for(let i =1 ; i<data.length; i ++){
      //console.log(i)
      result[i-1] = new Object
      result[i-1]["result"] = []
      for(let nameI in names){
        let name = names[nameI]
        
        if(i == 1){
          console.log(name)
        }
        if(name[0] == 'X' && data[i][nameI] != "NA" && data[i][nameI] != ""){
          result[i-1]["result"].push(data[i][nameI])
        }else{
          result[i-1][name] = data[i][nameI]
        }
        
      }
    }
  
   let result2 = result.filter((data)=>{
     return  data.result.length != 0 
    })
  
    return result
   
  }

}



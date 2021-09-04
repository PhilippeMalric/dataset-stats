import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Observable } from 'rxjs';
import { updateFileName, updateFileSize } from 'src/app/Rxjs/actions/main.actions';
import { selectFileName, selectFileName_dd } from 'src/app/Rxjs/reducers';
import { DataService } from 'src/app/services/data.service';
import { LoadCSV_ddComponent } from '../load-csv_dd/load-csv_dd.component';

import {groupBy, summarize, tidy} from "@tidyjs/tidy"
import { LimeDivComponent } from '../../show_dataset_related/div/lime-div/lime-div.component';


@Component({
  selector: 'load-csv-gen',
  templateUrl: './load-csv-gen.component.html',
  styleUrls: ['./load-csv-gen.component.css']
})
export class LoadCSVGenComponent implements OnInit {


  csvRecords: any[] = [];
  header = false;
  currentIndex: number;
  interval:any
  fileName:Observable<String>
  options: any;
  varNames: any;
  nbEntree: any;
  myData: any;
  dd_present = false
  ouvert_dataset = true
  fileName_dd: Observable<any>;

  constructor(
    public dialog: MatDialog,
    private ngxCsvParser: NgxCsvParser,
    private dataService:DataService,
    private store:Store) {
      this.fileName_dd = this.store.pipe(select(selectFileName_dd))
      this.fileName = this.store.pipe(select(selectFileName))
  }

  @ViewChild('csvReader', { static: false }) fileImportInput: any;

  ngOnInit(){
    
  }
  

  // Your applications input change listener for the CSV File
  uploadListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;
    console.log('files', files);
    if(files.length > 0 ){
      this.store.dispatch(updateFileName({data:files[0].name}))
      this.store.dispatch(updateFileSize({data:formatBytes(files[0].size)}))

    }
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {

        console.log('---------------Result', result.slice(1,10));

        let formatedRes = this.formatResult(result)

        console.log(formatedRes.slice(1,10))

        this.dataService.dataset_lime$.next(formatedRes)


        /*
        tidy(
          formatedRes,
          groupBy(
            'title',
            summarize({ total: sum('value'), items: (items) => items })
          )
        )
*/
        const dialogRef = this.dialog.open(DialogCsv,{
          width: '600px',
          data: { component: LimeDivComponent}});
            
        dialogRef.afterClosed().subscribe(result => {
          this.ouvert_dataset = false
        });

      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
      
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

  return result2
 
}
  

  uploadVar(){

    let newD =[]

    let name = this.csvRecords[0][10]

    let a = this.csvRecords.filter((d,i)=>{
        return i != 0;
      })
    let b =  a.map(function(v,i2){

      newD[i2] = v[10]

    })

    let newVar = {nom : name,data : newD}

    this.dataService.createVar(newVar).subscribe()
  }

  
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
  


@Component({
  selector: 'dialog-content',
  templateUrl: 'popup_dd.html',
})
export class DialogCsv {
  fileName$: Observable<string>;
  constructor(
    private store:Store,
    public dialogRef: MatDialogRef<DialogCsv>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.store.pipe(select(selectFileName_dd)).subscribe((data)=>{
        if(data != ''){

          this.dialogRef.close()
        }

      })
      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFileName } from 'src/app/Rxjs/reducers';
import { DataService } from 'src/app/services/data.service';
import { Graph1Component } from '../../chart/graph1/graph1.component';
import { Graph2Component } from '../../chart/graph2/graph2.component';
import { Graph3Component } from '../../chart/graph3/graph3.component';
import { Graph4Component } from '../../chart/graph4/graph4.component';
import { Graph5Component } from '../../chart/graph5/graph5.component';

@Component({
  selector: 'data-view-test',
  templateUrl: './data-view-test.component.html',
  styleUrls: ['./data-view-test.component.css']
})
export class DataViewTestComponent implements OnInit {
  data$: any;
  variablesdd$: any;
  categoriesdd$: any;
  fileName$: Observable<string>;

  constructor(
    private dataService:DataService,
    public dialog: MatDialog,
    private store:Store
  ) { 

    this.fileName$ = this.store.pipe(select(selectFileName))
      this.data$ = this.dataService.dataset$
      this.variablesdd$ = this.dataService.variablesdd$
      this.categoriesdd$ = this.dataService.categoriesdd$
  }

  ngOnInit(): void {
  }

click = ()=>{
  const dialogRef = this.dialog.open(DialogTest,{
    width: '800px',
    data: { component: Graph1Component}});
      
  dialogRef.afterClosed().subscribe(result => {
    //this.dd_present = result
    console.log(`Dialog result: ${result}`);
  });
}
click2 = ()=>{
  const dialogRef = this.dialog.open(DialogTest,{
    width: '1500px',
    data: { component: Graph2Component}});
      
  dialogRef.afterClosed().subscribe(result => {
    //this.dd_present = result
    console.log(`Dialog result: ${result}`);
  });
}

click3 = ()=>{
  const dialogRef = this.dialog.open(DialogTest,{
    width: '1500px',
    data: { component: Graph3Component}});
      
  dialogRef.afterClosed().subscribe(result => {
    //this.dd_present = result
    console.log(`Dialog result: ${result}`);
  });
}


click4 = ()=>{
  const dialogRef = this.dialog.open(DialogTest,{
    width: '1500px',
    data: { component: Graph4Component}});
      
  dialogRef.afterClosed().subscribe(result => {
    //this.dd_present = result
    console.log(`Dialog result: ${result}`);
  });
}

click5 = ()=>{
  const dialogRef = this.dialog.open(DialogTest,{
    width: '1500px',
    data: { component: Graph5Component}});
      
  dialogRef.afterClosed().subscribe(result => {
    //this.dd_present = result
    console.log(`Dialog result: ${result}`);
  });
}


}






@Component({
  selector: 'dialog-test-content',
  templateUrl: 'popup.html',
})
export class DialogTest {
  fileName$: Observable<string>;
  constructor(
    public dialogRef: MatDialogRef<DialogTest>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import { Dataset_Stats } from 'src/app/model/dataset';
import { DatasetsService } from 'src/app/services/dataset.service';
import { EditDsDialogComponent } from '../edit-ds-dialog/edit-ds-dialog.component';

@Component({
    selector: 'datasets-card-list',
    templateUrl: './dataSet-card-list.component.html',
    styleUrls: ['./dataSet-card-list.component.css']
})
export class DataSetCardListComponent implements OnInit {

    @Input()
    datasets: Dataset_Stats[];

    @Output()
    datasetEdited = new EventEmitter();

    @Output()
    datasetDeleted = new EventEmitter<Dataset_Stats>();

    constructor(
      private dialog: MatDialog,
      private router: Router,
      private datasetsService:DatasetsService) {
    }

    ngOnInit() {
        console.log("datasets",this.datasets)
    }

    viewDs(){

        console.log("datasets",this.datasets)
    }

    editDataSet(dataset:Dataset_Stats) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = "400px";

        dialogConfig.data = dataset;

        this.dialog.open(EditDsDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe(val => {
                if (val) {
                    this.datasetEdited.emit();
                }
            });

    }

    onDeleteDataSet(dataset:Dataset_Stats) {

        this.datasetsService.deleteDataset(dataset.id)
            .pipe(
                tap(() => {
                    console.log("Deleted ds", dataset);
                    this.datasetDeleted.emit(dataset);
                }),
                catchError(err => {
                    console.log(err);
                    alert("Could not delete ds.");
                    return throwError(err);
                })
            )
            .subscribe();

    }


}










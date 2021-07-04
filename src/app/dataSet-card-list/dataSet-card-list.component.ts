import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {EditCourseDialogComponent} from "../edit-course-dialog/edit-course-dialog.component";
import {catchError, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';
import { Dataset } from '../model/dataset';
import { DatasetsService } from '../services/dataset.service';

@Component({
    selector: 'datasets-card-list',
    templateUrl: './dataSet-card-list.component.html',
    styleUrls: ['./dataSet-card-list.component.css']
})
export class DataSetCardListComponent implements OnInit {

    @Input()
    datasets: Dataset[];

    @Output()
    datasetEdited = new EventEmitter();

    @Output()
    datasetDeleted = new EventEmitter<Dataset>();

    constructor(
      private dialog: MatDialog,
      private router: Router,
      private datasetsService:DatasetsService) {
    }

    ngOnInit() {

    }

    editDataSet(dataset:Dataset) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = "400px";

        dialogConfig.data = dataset;

        this.dialog.open(EditCourseDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe(val => {
                if (val) {
                    this.datasetEdited.emit();
                }
            });

    }

    onDeleteDataSet(dataset:Dataset) {

        this.datasetsService.deleteDataset(dataset.id)
            .pipe(
                tap(() => {
                    console.log("Deleted course", dataset);
                    this.datasetDeleted.emit(dataset);
                }),
                catchError(err => {
                    console.log(err);
                    alert("Could not delete course.");
                    return throwError(err);
                })
            )
            .subscribe();

    }


}










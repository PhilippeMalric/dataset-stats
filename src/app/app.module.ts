import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR} from '@angular/fire/auth';
import {AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR} from '@angular/fire/firestore';
import {AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR} from '@angular/fire/functions';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './Rxjs/reducers/main.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './Rxjs/effects/main.effects';
import { StreamDivComponent } from './Dataset_related/show_dataset_related/div/stream-div/stream-div.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { Svg1_mapComponent } from './Dataset_related/show_dataset_related/svg/svg1_map/svg1_map.component';
import { D3Service } from './d3';
import {MatSliderModule} from '@angular/material/slider';
import { SwitchDivComponent } from './Dataset_related/show_dataset_related/div/switch-div/switch-div.component';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import {MatExpansionModule} from '@angular/material/expansion';
import { Svg2Component } from './Dataset_related/show_dataset_related/svg/svg2/svg2.component';
import { TestChartComponent } from './Dataset_related/show_dataset_related/chart/test-chart/test-chart.component';
import { MyTableComponent } from './Dataset_related/show_dataset_related/chart/table/mytable.component';
import { CrossVarComponent } from './Dataset_related/show_dataset_related/chart/cross-var/cross-var.component';
import { CrossVarMultiComponent } from './Dataset_related/show_dataset_related/chart/cross-var-multi/cross-var-multi.component';
import { Graph1Component } from './Dataset_related/show_dataset_related/chart/graph1/graph1.component';
import { Graph2Component } from './Dataset_related/show_dataset_related/chart/graph2/graph2.component';
import { Graph3Component } from './Dataset_related/show_dataset_related/chart/graph3/graph3.component';
import { Graph4Component } from './Dataset_related/show_dataset_related/chart/graph4/graph4.component';
import { Graph5Component } from './Dataset_related/show_dataset_related/chart/graph5/graph5.component';
import { AboutComponent } from './app_sections/main_pages/about/about.component';
import { Dialogdd, LoadCSVComponent } from './Dataset_related/Load_related/load-csv/load-csv.component';
import { LoadCSV_ddComponent } from './Dataset_related/Load_related/load-csv_dd/load-csv_dd.component';
import { LoadCSV_mapComponent } from './Dataset_related/Load_related/load-csv_map/load-csv_map.component';
import { CourseComponent } from './app_sections/main_pages/course/course.component';
import { CoursesCardListComponent } from './app_sections/main_pages/courses-card-list/courses-card-list.component';
import { HomeComponent } from './app_sections/main_pages/home/home.component';
import { EditCourseDialogComponent } from './app_sections/main_pages/edit-course-dialog/edit-course-dialog.component';
import { LoginComponent } from './app_sections/main_pages/login/login.component';
import { CreateCourseComponent } from './app_sections/main_pages/create-course/create-course.component';
import { CreateDatasetComponent } from './app_sections/main_pages/create-dataset/create-dataset.component';
import { CreateUserComponent } from './app_sections/main_pages/create-user/create-user.component';
import { EditDsDialogComponent } from './app_sections/main_pages/edit-ds-dialog/edit-ds-dialog.component';
import { SelectVarsComponent } from './Dataset_related/show_dataset_related/select-var/select-vars/select-vars.component';
import { DataDivComponent } from './Dataset_related/show_dataset_related/div/data-div/data-div.component';
import { StatDivComponent } from './Dataset_related/show_dataset_related/div/stat-div/stat-div.component';
import { Svg1Component } from './Dataset_related/show_dataset_related/svg/svg1/svg1.component';
import { DatasetComponent } from './app_sections/main_pages/dataset/dataset.component';
import { DataSetCardListComponent } from './app_sections/main_pages/dataSet-card-list/dataSet-card-list.component';
import { VarViewComponent } from './Dataset_related/show_dataset_related/div/var-view/var-view.component';
import { VarTestComponent } from './Dataset_related/show_dataset_related/div/var-test/var-test.component';
import { TestddComponent } from './Dataset_related/dd/testdd/testdd.component';
import { TableauCroiseComponent } from './Dataset_related/show_dataset_related/div/tableau-croise/tableau-croise.component';
import { DdVarNameComponent } from './Dataset_related/dd/dd-var-name/dd-var-name.component';
import { DataViewTestComponent, DialogTest } from './Dataset_related/show_dataset_related/div/data-view-test/data-view-test.component';
import { DialogCsv, LoadCSVGenComponent } from './Dataset_related/Load_related/load-csv_gen/load-csv-gen.component';

import {MatChipsModule} from '@angular/material/chips';
import { LimeDivComponent } from './Dataset_related/show_dataset_related/div/lime-div/lime-div.component';


@NgModule({
  declarations: [
    Svg2Component,
    AppComponent,
    HomeComponent,
    AboutComponent,
    DatasetComponent,
    DataSetCardListComponent,
    CourseComponent,
    CoursesCardListComponent,
    EditCourseDialogComponent,
    LoginComponent,
    CreateCourseComponent,
    CreateDatasetComponent,
    CreateUserComponent,
    LoadCSVComponent,
    VarViewComponent,
    VarTestComponent,
    Svg1Component,
    DataDivComponent,
    StreamDivComponent,
    LoadCSV_mapComponent,
    Svg1_mapComponent,
    SwitchDivComponent,
    StatDivComponent,
    TestChartComponent,
    MyTableComponent,
    LoadCSV_ddComponent,
    TestddComponent,
    TableauCroiseComponent,
    SelectVarsComponent,
    DdVarNameComponent,
    CrossVarComponent,
    CrossVarMultiComponent,
    EditDsDialogComponent,
    Dialogdd,
    DataViewTestComponent,
    Graph1Component,
    Graph2Component,
    Graph3Component,
    Graph4Component,
    Graph5Component,
    DialogTest,
    LoadCSVGenComponent,
    DialogCsv,
    LimeDivComponent
  ],
  imports: [
    MatChipsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatGridListModule,
    NgxCsvParserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    StoreModule.forRoot({ main: reducer }),
    EffectsModule.forRoot([MainEffects]),
    Ng2GoogleChartsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
      D3Service,
      { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['localhost', 9099] : undefined },
      { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 8080] : undefined },
      { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




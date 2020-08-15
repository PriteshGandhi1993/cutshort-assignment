import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageIconComponent } from './page-icon/page-icon.component';
import { AccordianMenuComponent } from './accordian-menu/accordian-menu.component';
import { SelectComponent } from './select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyVisitorsComponent } from './daily-visitors/daily-visitors.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonChartComponent } from './common-chart/common-chart.component';
import { StatCardsComponent } from './stat-cards/stat-cards.component';
import { MostVisitedPageComponent } from './most-visited-page/most-visited-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PageIconComponent,
    AccordianMenuComponent,
    SelectComponent,
    DailyVisitorsComponent,
    CommonChartComponent,
    StatCardsComponent,
    MostVisitedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

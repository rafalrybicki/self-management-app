import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { DayComponent } from './pages/day/day.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuoteComponent } from './components/quote/quote.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeekComponent } from './pages/week/week.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DayComponent,
    MenuComponent,
    QuoteComponent,
    NewTaskComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

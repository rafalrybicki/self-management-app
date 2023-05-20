import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './store/rootReducer';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DayComponent,
    MenuComponent,
    QuoteComponent,
    NewTaskComponent,
    WeekComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

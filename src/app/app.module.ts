import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './pages/main/main.component';
import { SummarizeComponent } from './pages/summarize/summarize.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeadlineComponent } from './pages/headline/headline.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
import { EmotionsComponent } from './pages/emotions/emotions.component';
import { SentimentsComponent } from './pages/sentiments/sentiments.component';
// import { TranslationComponent } from './pages/translation/translation.component';
// import { KeywordsComponent } from './pages/keywords/keywords.component';
// import { NamesComponent } from './pages/names/names.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SummarizeComponent,
    // TranslationComponent,
    HeadlineComponent,
    TopicsComponent,
    // KeywordsComponent,
    // NamesComponent,
    HighlightsComponent,
    EmotionsComponent,
    SentimentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

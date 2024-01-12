import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { SummarizeComponent } from './pages/summarize/summarize.component';
import { HeadlineComponent } from './pages/headline/headline.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { HighlightsComponent } from './pages/highlights/highlights.component';
// import { KeywordsComponent } from './pages/keywords/keywords.component';
// import { NamesComponent } from './pages/names/names.component';
// import { TranslationComponent } from './pages/translation/translation.component';
import { EmotionsComponent } from './pages/emotions/emotions.component';
import { SentimentsComponent } from './pages/sentiments/sentiments.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'summarize', component: SummarizeComponent },
  // Add more routes for other options as needed
  { path: 'headline', component: HeadlineComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'highlights', component: HighlightsComponent },
  // { path: 'keywords', component: KeywordsComponent },
  // { path: 'names', component: NamesComponent },
  // { path: 'translation', component: TranslationComponent },

  { path: 'emotions', component: EmotionsComponent },
  { path: 'sentiments', component: SentimentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

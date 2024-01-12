import { Component } from '@angular/core';

import { NlpApiService } from 'src/app/services/nlp-api-service.service';


@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent {
  text: string = '';
  emotions: any[] = [];
  error: string = '';

  constructor(private apiService: NlpApiService) { }

  analyzeEmotions() {
    if (!this.text.trim()) {
      this.error = 'Please enter text to generate Emotions.';
      return;
    }

    this.apiService.getEmotions(this.text).subscribe(
      (data: any) => {
        if (data.output && data.output.length > 0) {
          this.emotions = data.output[0].labels.map((label: { name: any; }) => label.name);
          // this.emotions = data.output[0].labels[0].name;
          this.error = '';
        } else {
          this.error = 'Emotions not found in the response.';
        }
      },
      (error) => {
        this.error = 'Error occurred while analyzing Emotions.';
        console.error(error);
      }
    );
  }
}

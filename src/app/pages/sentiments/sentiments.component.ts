import { Component } from '@angular/core';

import { NlpApiService } from 'src/app/services/nlp-api-service.service';


@Component({
  selector: 'app-sentiments',
  templateUrl: './sentiments.component.html',
  styleUrls: ['./sentiments.component.css']
})
export class SentimentsComponent {
  text: string = '';
  sen: string = '';
  sentiments: string[] = [];
  error: string = '';

  constructor(private apiService: NlpApiService) { }

  analyzeSentiments() {
    if (!this.text.trim()) {
      this.error = 'Please enter text to generate Sentiments.';
      return;
    }

    this.apiService.getSentiments(this.text).subscribe(
      (data: any) => {
        if (data.output && data.output.length > 0 && data.output[0].labels.length > 0) {
          for (const label of data.output[0].labels) {
            // Assuming that 'POS' and 'NEG' are present in the 'name' property of each label
            this.sen = label.value;
        
            // Add the sentiment to the sentiments array
            if (this.sen.includes('POS')) {
              this.sentiments.push(' Positive Sentiment');
            } else if (this.sen.includes('NEG')) {
              this.sentiments.push(' Negative Sentiment');
            }
          }
        } else {
          this.error = 'Sentiments not found in the response.';
        }
      },
      (error) => {
        this.error = 'Error occurred while analyzing Sentiments.';
        console.error(error);
      }
    );
  }
}

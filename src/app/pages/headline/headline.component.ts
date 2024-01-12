// pages/headline/headline.component.ts
import { Component } from '@angular/core';
import { NlpApiService } from 'src/app/services/nlp-api-service.service';
// import { HeadlineAPIService } from 'src/app/services/headline-api.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent {
  text: string = '';
  headline: string = '';
  summary: string = '';
  error: string = '';

  constructor(private apiService: NlpApiService) { }

  generateHeadline() {
    console.log("Headline button clicked!"); 

    if (!this.text.trim()) {
      this.error = 'Please enter text to generate a headline.';
      return;
    }

    this.apiService.getHeadline(this.text).subscribe(
      (data: any) => {
        // Assuming the response structure has a 'output' array
        if (data.output && data.output.length > 0) {
          // Assuming the summary is available under 'contents[0].utterance'
          this.summary = data.output[0].contents[0].utterance;
          this.headline = data.output[0].labels[0].value;
          this.error = ''; // Clear any previous errors
        } else {
          this.error = 'Headline not found in the response.';
        }
      },
      (error) => {
        this.error = 'Error occurred while generating the headline.';
        console.error(error);
      }
    );
  }
}

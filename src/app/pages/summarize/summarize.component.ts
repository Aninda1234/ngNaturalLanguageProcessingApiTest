import { Component } from '@angular/core';
// import { SummarizeApiService } from '../../services/summarize-api.service';
import { NlpApiService } from 'src/app/services/nlp-api-service.service';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css']
})
export class SummarizeComponent {
  text: string = '';
  summary: string = '';
  error: string = '';

  constructor(private apiService: NlpApiService) { }

  summarize() {
    console.log("button clicked");
    if (!this.text.trim()) {
      this.error = 'Please enter text to summarize.';
      return;
    }

    this.apiService.getSummary(this.text).subscribe(
      (data: any) => {
        // Assuming the response structure has a 'output' array
        if (data.output && data.output.length > 0) {
          // Assuming the summary is available under 'contents[0].utterance'
          this.summary = data.output[0].contents[0].utterance;
          this.error = ''; // Clear any previous errors
        } else {
          this.error = 'Summary not found in the response.';
        }
      },
      (error) => {
        this.error = 'Error occurred while summarizing the text.';
        console.error(error);
      }
    );
  }
}

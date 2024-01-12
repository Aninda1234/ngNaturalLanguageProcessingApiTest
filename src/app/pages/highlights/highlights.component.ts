// pages/highlights/highlights.component.ts
import { Component } from '@angular/core';
// import { HighlightsApiService } from '../../services/highlights-api.service';
import { NlpApiService } from 'src/app/services/nlp-api-service.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent {
  text: string = '';
  highlights: any[] = [];
  error: string = '';

  constructor(private apiService: NlpApiService) { }

  generateHighlights() {
    if (!this.text.trim()) {
      this.error = 'Please enter text to generate highlights.';
      return;
    }

    this.apiService.getHighlights(this.text).subscribe(
      (data: any) => {
        if (data.output && data.output.length > 0) {
          this.highlights = data.output[0].labels.map((label: { data: { span_text: any; }; }) => label.data.span_text);
          this.error = '';
        } else {
          this.error = 'Highlights not found in the response.';
        }
      },
      (error) => {
        this.error = 'Error occurred while generating highlights.';
        console.error(error);
      }
    );
  }
}


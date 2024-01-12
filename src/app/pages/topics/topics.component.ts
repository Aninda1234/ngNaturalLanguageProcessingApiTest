// pages/topics/topics.component.ts
import { Component } from '@angular/core';
// import { TopicsApiService } from '../../services/topics-api.service';
import { NlpApiService } from 'src/app/services/nlp-api-service.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  text: string = '';
  summary: string = '';
  topics: string[] = [];
  error: string = '';

  constructor(private ApiService: NlpApiService) { }

  generateTopics() {
    if (!this.text.trim()) {
      this.error = 'Please enter text to generate topics.';
      return;
    }

    this.ApiService.getTopics(this.text).subscribe(
      (data: any) => {
        if (data.output && data.output.length > 0) {
          // Extract topics from the 'value' property of each object in 'labels' array
          this.summary = data.output[0].contents[0].utterance;
          this.topics = data.output[0].labels.map((label: { value: any; }) => label.value);
          this.error = ''; // Clear any previous errors
        } else {
          this.error = 'Topics not found in the response.';
        }
      },
      (error) => {
        this.error = 'Error occurred while generating topics.';
        console.error(error);
      }
    );
  }
}


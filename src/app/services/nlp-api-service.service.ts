import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SummaryResponse, HeadlineResponse, TopicsResponse, HighlightsResponse, EmotionsResponse, SentimentsResponse} from '../interfaces/nlp.interface';

@Injectable({
  providedIn: 'root'
})
export class NlpApiService {

  private apiUrl = 'https://api.oneai.com/api/v0/pipeline';
  private apiKey = '384e97d9-51ee-4252-9f0c-84041ae93346'; 
  // private apiKey = '65c49370-ad7e-4139-9b1b-b657f473430b'; // Replace with your actual API key

  constructor(private http: HttpClient) { }

    /// correct code only for Summarize API endpoint 
  getSummary(text: string): Observable<SummaryResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    });

    const payload = {
      input: text,
      output_type: 'json',
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: 'summarize'
        }
      ]
    };

    return this.http.post<SummaryResponse>(this.apiUrl, payload, { headers });
  }

  getHeadline(text: string): Observable<HeadlineResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    });

    const payload = {
      input: text,
      output_type: 'json',
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: 'headline'
        }
      ]
    };

    return this.http.post<HeadlineResponse>(`${this.apiUrl}`, payload, { headers });
  }
  
  getTopics(text: string): Observable<TopicsResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    });

    const payload = {
      input: text,
      input_type: 'article',
      output_type: 'json',
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: 'article-topics' // Update the skill name
        }
      ]
    };

    return this.http.post<TopicsResponse>(`${this.apiUrl}`, payload, { headers });
  }

  getHighlights(text: string): Observable<HighlightsResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    });

    const payload = {
      input: text,
      input_type: 'article',
      output_type: 'json',
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: 'highlights' // Update the skill name
        }
      ]
    };

    return this.http.post<HighlightsResponse>(`${this.apiUrl}`, payload, { headers });
  }


  getEmotions(text: string): Observable<EmotionsResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    });

    const payload = {
      input: text,
      input_type: 'article',
      output_type: 'json',
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: 'emotions' // Update the skill name
        }
      ]
    };

    return this.http.post<EmotionsResponse>(`${this.apiUrl}`, payload, { headers });
  }

  getSentiments(text: string): Observable<SentimentsResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'api-key': this.apiKey
    });

    const payload = {
      input: text,
      input_type: 'article',
      output_type: 'json',
      multilingual: {
        enabled: true
      },
      steps: [
        {
          skill: 'sentiments' // Update the skill name
        }
      ]
    };

    return this.http.post<SentimentsResponse>(`${this.apiUrl}`, payload, { headers });
  }

}

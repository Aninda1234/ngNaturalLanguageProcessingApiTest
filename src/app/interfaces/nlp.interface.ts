// All interfaces 

  export interface SummaryResponse {
    summary: string;
  }
  
  export interface HeadlineResponse {
    headline: string;
  }
  
  export interface TopicsResponse {
    // Update the interface based on the actual response structure
    // For example, if the response has a 'output[0].contents[0].utterance' property, define it here
    topics: string[];
  }
  
  export interface HighlightsResponse {
    // Update the interface based on the actual response structure
    // For example, if the response has a 'output[0].contents[0].utterance' property, define it here
    highlights: any[];
  }


  export interface EmotionsResponse {
    // Update the interface based on the actual response structure
    // For example, if the response has a 'output[0].contents[0].utterance' property, define it here
    emotions: any[];
  }

  export interface SentimentsResponse {
    // Update the interface based on the actual response structure
    // For example, if the response has a 'output[0].contents[0].utterance' property, define it here
    sentiments: any[];
  }


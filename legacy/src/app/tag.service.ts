import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TagData } from './tag-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<TagData[]> {
    return this.http.get<TagData[]>('https://localhost:5001/api/tag');
  }

  getTag(id: string): Observable<TagData> {
    return this.http.get<TagData>(`https://localhost:5001/api/tag/${id}`);
  }

  putTag(tag: TagData): Observable<TagData> {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.put<TagData>('https://localhost:5001/api/tag', tag, options);
  }
  postTag(tag: TagData): Observable<TagData> {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.http.post<TagData>('https://localhost:5001/api/tag', tag, options);
  }

  deleteTag(tag: TagData) {
    return this.http.delete(`https://localhost:5001/api/tag/${tag.id}`, { responseType: 'text' });
  }
}

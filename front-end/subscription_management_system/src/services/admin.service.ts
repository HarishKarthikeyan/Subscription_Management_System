import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscriptionDTO } from '../interface/subscriptionDTO';
import { PlanDTO } from '../interface/PlanDTO';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  url = 'http://192.168.5.109/admin';

  getAllSubscription(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  updateSubscription(
    subscriptionId: number,
    subscriptionDTO: SubscriptionDTO
  ): Observable<any> {
    return this.http.put<any>(`${this.url}/${subscriptionId}`, {
      subscriptionId,
      subscriptionDTO,
    });
  }

  updatePlan(planDTO: any): Observable<any> {
    return this.http.post<any>(`${this.url}/updateplan`, planDTO);
  }
}

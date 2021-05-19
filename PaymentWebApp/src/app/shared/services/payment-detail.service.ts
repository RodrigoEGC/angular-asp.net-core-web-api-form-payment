import { Injectable } from '@angular/core';
import {PaymentDetail} from '../model/payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor() { }

  formData: PaymentDetail = new PaymentDetail();
}

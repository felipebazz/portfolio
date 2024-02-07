import { Injectable } from '@angular/core';
import { Stack } from '../interfaces/stacks.interface';
import { StackConfig } from '../models/stack-config-model';

@Injectable({
  providedIn: 'root'
})
export class StacksService {
  getStacks(): Stack[] {
    return[...StackConfig.stacks]
  }
}

/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { StacksService } from './stacks.service';

describe('Service: StacksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StacksService]
    });
  });

  it('should ...', inject([StacksService], (service: StacksService) => {
    expect(service).toBeTruthy();
  }));
});

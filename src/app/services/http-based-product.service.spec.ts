import { TestBed } from '@angular/core/testing';

import { HttpBasedProductService } from './http-based-product.service';

describe('HttpBasedProductService', () => {
  let service: HttpBasedProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBasedProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

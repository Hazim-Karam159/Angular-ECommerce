import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], titleFilter: string, categoryFilter: string, maxPrice: number): Product[] {
    if (!products) return [];

    return products.filter(product => {
      // Title filter - case insensitive partial match
      const titleMatch = !titleFilter || 
        product.title.toLowerCase().includes(titleFilter.toLowerCase());

      // Category filter - now comparing with product.category (which is a string)
      // categoryFilter will be the slug from the select dropdown
      const categoryMatch = !categoryFilter || 
        product.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter ||
        product.category.toLowerCase() === categoryFilter;

      // Price filter - less than or equal to max price
      const priceMatch = !maxPrice || 
        product.price <= maxPrice;

      return titleMatch && categoryMatch && priceMatch;
    });
  }
}
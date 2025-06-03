import { Component, OnInit } from '@angular/core';
import { ProductService, Product, Category } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone:false
})
export class Products implements OnInit {
  products: Product[] = [];
  categories: Category[] = []; // Change to Category[]
  filteredProducts: Product[] = [];
  
  // Filter form properties
  titleFilter: string = '';
  categoryFilter: string = '';
  maxPriceFilter: number = 0;
  
  // Loading state
  isLoading: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    
    // Fetch products
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        this.filteredProducts = this.products;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    });

    // Fetch categories
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories; // Now it's Category[] objects
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  resetFilters(): void {
    this.titleFilter = '';
    this.categoryFilter = '';
    this.maxPriceFilter = 0;
  }

  get totalProducts(): number {
    return this.products.length;
  }

  get filteredProductsCount(): number {
    return this.filteredProducts.length;
  }
}
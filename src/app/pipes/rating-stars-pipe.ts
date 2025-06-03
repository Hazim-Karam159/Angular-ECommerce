import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars',
  standalone: false
})
export class RatingStarsPipe implements PipeTransform {
  transform(rating: number): string {
    if (!rating) return '';
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars += '★';
    }
    
    // Add half star
    if (hasHalfStar) {
      stars += '☆';
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆';
    }
    
    return `${stars} (${rating})`;
  }
}
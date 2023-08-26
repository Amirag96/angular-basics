import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]= [
   new Recipe('Sushi','Sushi Combos for your Next Party!','https://www.justonecookbook.com/wp-content/uploads/2020/12/Temaki-Sushi-2048.jpg'),
   new Recipe('Smoked Salmon','Smoked Salmon Salad Sandwich','https://cdn11.bigcommerce.com/s-hd6k9/images/stencil/1280x1280/products/130/373/Smoked_Salmon_Salad_Sandwich_7__13254.1438969744.jpg?c=2')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

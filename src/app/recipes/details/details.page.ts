import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesPageRoutingModule } from '../recipes-routing.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  recipe?: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      if (!p.has('id')) {
        this.router.navigate(['/recipes']);
        return;
      }

      const id = p.get('id') as string;
      this.recipe = this.recipesService.find(id);
    });
  }

  onDelete() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
       {
        text: 'Cancel',
        role: 'cancel'
       },
       {
        text: 'Delete',
        handler: () => {
          this.recipesService.delete(this.recipe && this.recipe.id);
          this.router.navigate(['/recipes']);
        }
       }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}

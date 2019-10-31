import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {TimelinesComponent} from "./timelines/timelines.component";


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'dictionary',
    component: DictionaryComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
      }
    ]
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'timelines',
    component: TimelinesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

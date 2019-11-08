import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DictionaryService} from "./dictionary.service";
import { HomeComponent } from './home/home.component';
import { TimelinesComponent } from './timelines/timelines.component';
<<<<<<< HEAD
import { HuyenComponent } from './huyen/huyen.component';
=======
import { TienComponent } from './tien/tien.component';
>>>>>>> 13e83d4ba78cf835adb1e93cdf1ea737126a6842


@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    HomeComponent,
    TimelinesComponent,
<<<<<<< HEAD
    HuyenComponent,
=======
    TienComponent,
>>>>>>> 13e83d4ba78cf835adb1e93cdf1ea737126a6842
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

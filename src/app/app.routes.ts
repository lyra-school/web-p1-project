import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomepageFeatureComponent } from './components/homepage-feature/homepage-feature.component';
import { CommunityComponent } from './components/community/community.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {path: 'about', component:AboutComponent},
    {path: '', component:HomepageFeatureComponent},
    {path: 'community', component:CommunityComponent},
    {path: 'search', component:SearchComponent}
];

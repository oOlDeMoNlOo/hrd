import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '@workspace/apps/hrd/src/app/modules/auth/login/login.component';
import { HrdPipesModule } from '@pipes/hrd-pipes.module';
import { HrdComponentsModule } from '@components/hrd-components.module';

@NgModule({
  declarations: [RegistrationComponent, AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HrdPipesModule,
    HrdComponentsModule,
  ]
})
export class AuthModule {
}

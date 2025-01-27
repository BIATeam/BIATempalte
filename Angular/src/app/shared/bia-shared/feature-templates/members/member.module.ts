import { NgModule } from '@angular/core';
// import { ReducerManager, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RoleOptionModule } from 'src/app/domains/bia-domains/role-option/role-option.module';
import { UserOptionModule } from 'src/app/domains/bia-domains/user-option/user-option.module';
import { UserFromDirectoryModule } from 'src/app/features/bia-features/users-from-directory/user-from-directory.module';
import { CrudItemModule } from 'src/app/shared/bia-shared/feature-templates/crud-items/crud-item.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrudItemImportModule } from '../crud-items/crud-item-import.module';
import { MemberFormEditComponent } from './components/member-form-edit/member-form-edit.component';
import { MemberFormNewComponent } from './components/member-form-new/member-form-new.component';
import { MemberFormComponent } from './components/member-form/member-form.component';
import { MemberTableComponent } from './components/member-table/member-table.component';
import { memberCRUDConfiguration } from './member.constants';
import { FeatureMembersStore } from './store/member.state';
import { MembersEffects } from './store/members-effects';
import { MemberEditComponent } from './views/member-edit/member-edit.component';
import { MemberImportComponent } from './views/member-import/member-import.component';
import { MemberItemComponent } from './views/member-item/member-item.component';
import { MemberNewComponent } from './views/member-new/member-new.component';
import { MembersIndexComponent } from './views/members-index/members-index.component';

// export let ROUTES: Routes = [
//   {
//     path: '',
//     data: {
//       breadcrumb: null,
//       permission: Permission.Member_List_Access,
//       injectComponent: MembersIndexComponent
//     },
//     component: FullPageLayoutComponent,
//     canActivate: [PermissionGuard],
//     // [Calc] : The children are not used in calc
//     children: [
//       {
//         path: 'create',
//         data: {
//           breadcrumb: 'bia.add',
//           canNavigate: false,
//           permission: Permission.Member_Create,
//           title: 'member.add',
//           injectComponent: MemberNewComponent,
//           dynamicComponent : () => (memberCRUDConfiguration.usePopup) ? PopupLayoutComponent : FullPageLayoutComponent,
//         },
//         component: (memberCRUDConfiguration.usePopup) ? PopupLayoutComponent : FullPageLayoutComponent,
//         canActivate: [PermissionGuard],
//       },
//       {
//         path: ':crudItemId',
//         data: {
//           breadcrumb: '',
//           canNavigate: true,
//         },
//         component: MemberItemComponent,
//         canActivate: [PermissionGuard],
//         children: [
//           {
//             path: 'edit',
//             data: {
//               breadcrumb: 'bia.edit',
//               canNavigate: true,
//               permission: Permission.Member_Update,
//               title: 'member.edit',
//               injectComponent: MemberEditComponent,
//               dynamicComponent : () => (memberCRUDConfiguration.usePopup) ? PopupLayoutComponent : FullPageLayoutComponent,
//             },
//             component: (memberCRUDConfiguration.usePopup) ? PopupLayoutComponent : FullPageLayoutComponent,
//             canActivate: [PermissionGuard],
//           },
//           {
//             path: '',
//             pathMatch: 'full',
//             redirectTo: 'edit'
//           },
//         ]
//       },
//     ]
//   },
//   { path: '**', redirectTo: '' }
// ];

@NgModule({
  declarations: [
    MemberItemComponent,
    MembersIndexComponent,
    // [Calc] : NOT used for calc (3 lines).
    // it is possible to delete unsed commponent files (views/..-new + views/..-edit + components/...-form).
    MemberFormComponent,
    MemberFormEditComponent,
    MemberFormNewComponent,
    MemberNewComponent,
    MemberEditComponent,
    // [Calc] : Used only for calc it is possible to delete unsed commponent files (components/...-table)).
    MemberTableComponent,
    MemberImportComponent,
  ],
  imports: [
    SharedModule,
    CrudItemModule,
    CrudItemImportModule,
    // RouterModule.forChild(ROUTES),
    StoreModule.forFeature(
      memberCRUDConfiguration.storeKey,
      FeatureMembersStore.reducers
    ),
    EffectsModule.forFeature([MembersEffects]),
    // TODO after creation of CRUD Member : select the optioDto dommain module required for link
    // Domain Modules:
    UserOptionModule,
    RoleOptionModule,
    UserFromDirectoryModule, // required for the add user from directory feature
  ],
  exports: [
    MemberItemComponent,
    MemberFormComponent,
    MemberFormEditComponent,
    MemberFormNewComponent,
    MembersIndexComponent,
    MemberNewComponent,
    MemberEditComponent,
    MemberTableComponent,
  ],
})
export class MemberModule {}

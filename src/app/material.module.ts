    import { NgModule } from '@angular/core';

    import { MatButtonModule } from '@angular/material/button';
    import { MatSidenavModule } from '@angular/material/sidenav';
    import { MatListModule } from '@angular/material/list';
    import { MatToolbarModule } from '@angular/material/toolbar';
    import { MatIconModule } from '@angular/material/icon';
    import { MatMenuModule } from '@angular/material/menu';
    

    @NgModule({
        imports: [
            MatButtonModule,
            MatSidenavModule,
            MatListModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule
        ],
        exports: [
            MatButtonModule,
            MatSidenavModule,
            MatListModule,
            MatToolbarModule,
            MatIconModule,
            MatMenuModule
        ]
    })
    export class ModulosAngularMaterials{}
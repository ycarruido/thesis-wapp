import { Component } from "@angular/core";

export const navbarData = [
    {
        routeLink: 'dashboard',
        //icon: 'fas fa-tachometer-alt',
        icon: 'fal fa-tachometer-alt',
        label: 'DashBoard'
    },
    {
        routeLink: 'projects',
        icon: 'fal fa-project-diagram',
        label: 'Proyectos'
    },
    { 
        routeLink: 'admincontact',
        icon: 'fal fa-comment-alt',
        label: 'Consulta Admin'
    },
    { 
        routeLink: 'leads',
        icon: 'fal fa-address-card',
        label: 'Leads'
    },
    { 
        routeLink: 'invoices',
        icon: 'fal fa-file-invoice',
        label: 'Facturas'
    },
    { 
        routeLink: 'infor',
        icon: 'fal fa-info-circle',
        label: 'Informacion'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Configuración'
    }
]
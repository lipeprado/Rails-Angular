import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.components.css']
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"

    documents: Document [] = [
        {
            title: "Meu Documento",
            description: "Testando meu documento",
            file_url: "http://google.com",
            update_at: " 11/11/2016",
            image_url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTE5Z4fTzfap81AQvlY9mi-vWlbW3KdZg5Pzu-i08_9RcBnF1uW"

        },
        {
            title: "Meu Segundo Documento",
            description: "Testando meu Segundo documento",
            file_url: "http://google.com",
            update_at: " 14/11/2016",
            image_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyAEJLlEgJf6JhU2IYyf4eIKElsFSLHgRf8D9aL3yETP5MW_nY"

        },
        {
            title: "Meu Terceiro Documento",
            description: "Testando meu Terceiro documento",
            file_url: "http://google.com",
            update_at: " 11/11/2016",
            image_url: "https://cdn.elegantthemes.com/blog/wp-content/uploads/2014/11/shutterstock_197308901-e1416540010771.jpg"

        },

        {
            title: "Meu Qaurto Documento",
            description: "Testando meu Quarto documento",
            file_url: "http://google.com",
            update_at: " 16/11/2016",
            image_url: "https://www.roberthalf.com/sites/default/files/Media_Root/images/tcg-images/4-tips-finding-freelance-work.png"

        }
    ]
}
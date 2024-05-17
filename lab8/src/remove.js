import { fromEvent } from "rxjs";

const button = document.getElementById('removeButton');

fromEvent(button, 'click')
    .subscribe(() => {
        const pageIndex = document.getElementById('page');
        const paragraph = pageIndex.querySelectorAll('div');
        if (paragraph.length == 1) {
            paragraph[0].removeChild(paragraph[0].querySelectorAll('p')[paragraph[0].querySelectorAll('p').length - 1]);
        }
    });
import { fromEvent } from "rxjs";

const button = document.getElementById('downloadButton');

fromEvent(button, 'click')
	.subscribe(() => {
        fetch('/download')
            .then(response => response.json())
            .then(data => {
                const pageIndex = document.getElementById('page');
                const paragraph = pageIndex.querySelectorAll('div');
                if (paragraph.length == 0) {
                    const element = document.createElement('div');
                    for (var key in data) {
                        element.innerHTML += "<p>" + key + ": " + data[key] + "</p> " + "<br>";
                    }
                    element.style.marginTop = '20px';
                    pageIndex.appendChild(element);
                } else if (paragraph[0].querySelectorAll('p').length < Object.keys(data).length) {
                    const element = paragraph[0];
                    element.innerHTML = "";
                    for (var key in data) {
                        element.innerHTML += "<p>" + key + ": " + data[key] + "</p>" + "<br>";
                    }
                    element.style.marginTop = '20px';
                }
            })
            .catch(error => {
                console.error('Error data download:', error);
            });
	});
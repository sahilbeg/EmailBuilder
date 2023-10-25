import { outerLayout } from './LayoutVariable';
import { oneColumnLayout } from './LayoutVariable';
import { twoColumnLayout } from './LayoutVariable';
import { threeColumnLayout } from './LayoutVariable';
import { twoRowLayout } from './LayoutVariable';
import { threeRowLayout } from './LayoutVariable';
import { textLayout } from './ComponentVariable';
import { imageLayout } from './ComponentVariable';
import { gifLayout } from './ComponentVariable';
import { buttonLayout } from './ComponentVariable';


export const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
};

function replaceAllTdIdsWithRandomNumber(element) {
    const tdElements = element.getElementsByTagName("td");
    for (let i = 0; i < tdElements.length; i++) {
      tdElements[i].setAttribute("id", Math.floor(Math.random() * 1000000));
    }
  }
  

export const handleDrop = (e) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);

    const randomId = Math.floor(Math.random() * 1000000);
    // Rest of the code to handle the drop event
    if (element.id === "card1") {
        const oneCloumnDiv = document.createElement('div');
        oneCloumnDiv.innerHTML = oneColumnLayout;
        e.target.appendChild(oneCloumnDiv);
        replaceAllTdIdsWithRandomNumber(oneCloumnDiv);

    } else if (element.id === "card2") {
        const twoCloumnDiv = document.createElement('div');
        twoCloumnDiv.innerHTML = twoColumnLayout;
        e.target.appendChild(twoCloumnDiv);
        replaceAllTdIdsWithRandomNumber(twoCloumnDiv);
    } else if (element.id === "card3") {
        const threeCloumnDiv = document.createElement('div');
        threeCloumnDiv.innerHTML = threeColumnLayout;
        e.target.appendChild(threeCloumnDiv);
        replaceAllTdIdsWithRandomNumber(threeCloumnDiv);
    } else if (element.id === "card4") {
        const twoRowDiv = document.createElement('div');
        twoRowDiv.innerHTML = twoRowLayout;
        e.target.appendChild(twoRowDiv);
        replaceAllTdIdsWithRandomNumber(twoRowDiv);
    } else if (element.id === "card5") {
        const threeRowDiv = document.createElement('div');
        threeRowDiv.innerHTML = threeRowLayout;
        e.target.appendChild(threeRowDiv);
        replaceAllTdIdsWithRandomNumber(threeRowDiv);
    }  else if (element.id === "card6") {
        const threeRowDiv = document.createElement('div');
        threeRowDiv.innerHTML = outerLayout;
        e.target.appendChild(threeRowDiv);
        replaceAllTdIdsWithRandomNumber(threeRowDiv);
    }else if (element.id === "card7") {
        const textDiv = document.createElement('div');
        textDiv.innerHTML = textLayout;
        e.target.appendChild(textDiv);
        replaceAllTdIdsWithRandomNumber(textDiv);
    }else if (element.id === "card8") {
        const imageDiv = document.createElement('div');
        imageDiv.innerHTML = imageLayout;
        e.target.appendChild(imageDiv);
        replaceAllTdIdsWithRandomNumber(imageDiv);
    }else if (element.id === "card9") {
        const gifDiv = document.createElement('div');
        gifDiv.innerHTML = gifLayout;
        e.target.appendChild(gifDiv);
        replaceAllTdIdsWithRandomNumber(gifDiv);
    }else if (element.id === "card10") {
        const buttonDiv = document.createElement('div');
        buttonDiv.innerHTML = buttonLayout;
        e.target.appendChild(buttonDiv);
        replaceAllTdIdsWithRandomNumber(buttonDiv);
    } else {
        const newElement = element.cloneNode(true);
        newElement.removeAttribute("id");
        e.target.appendChild(newElement);
    }
};


export const handleDragOver = (e) => {
    e.preventDefault();
};
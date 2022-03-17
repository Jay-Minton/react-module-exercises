import React from 'react';

function choice(items) {
    const numOfChoices = items.length;
    const pick = Math.floor(Math.random() * (numOfChoices));
    return pick;
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if(items[i] == item) {
            return [...items.slice(0, i), ...items.slice(i + 1)];
        }
    }
}

export { choice, remove };
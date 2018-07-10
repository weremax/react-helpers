import _ from 'lodash';
import React from 'react';

export function isBlank(value) {
    return (
        value === undefined || value === null ||
        value === '' || value.length === 0 ||
        isEmptyObject(value)
    ) ? true : false;
}

export function isEmptyObject(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return true;
}

export function filterFromArray(array, remove) {
    let list = [];
    _.forEach(array, arg => {
        if(!_.includes(remove, arg)) {
            list.push(arg);
        }
    });
    return list;
}

export function toTitleCase(value) {
    return value.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
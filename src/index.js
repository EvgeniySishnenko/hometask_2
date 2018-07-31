/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {

    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }

}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let array2 = [];

    for (let i = 0; i < array.length; i++) {

        array2.push(fn(array[i], i, array));
    }

}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    if (initial === undefined) {
        var i = 1,
            res = array[0];

    } else {

        var i = 1,
            res = initial;
    }
    for (; i < array.length; i++) {
       
        res = fn(res, array[i], i, array);

    }

    return res;
    
}
/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {

    return Object.keys(obj).map(prop => prop.toUpperCase());
}
upperProps({ name: 'Сергей', lastName: 'Петров' });
/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
var arr = [1, 2, 3, 4, 5];

function slice(array, from = 0, to = array.length) {
    var arr2 = [];

    if (to < array.length) {
        to -= 1;
    }
    if (to > array.length) {
        to = array.length;
    }
    if (to < 0) {
        to = array.length + to;
    }
    if (to < -array.length) {
        to = 0;
    }
    if (from < 0) {
        from = 0;
    }
    for (from; from < to; from++) {
        arr2.push(array[from]);  
    }

    return arr2;
}
slice(arr, 1, 4);
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
var object = {};

function createProxy(obj) {

    let proxy = new Proxy(obj, {
        get(target, prop) {

            return target[prop];
        },
        set(target, prop, value) {
            target[prop] = value * value;

            return true;
        }
    });

    proxy.num = 3;

    return proxy.num;
}
createProxy(object);
export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};

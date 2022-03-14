/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender === 'female') {
        const { age, ...other } = data;
        return other;
    } else {
        return {
            ...data,
            income: data.income ? data.income : 100000,
        };
    }
}

/*
  В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
  Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    return Object.keys({ ...obj1, ...obj2, ...obj3 }).sort();
}

/*
  Верните в результате работы функции массив с клонами объекта obj.
  При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
  Количество клонов - count.
*/
export function objectClone(obj, count) {
    const arr = [];

    function copy(objForCopy) {
        let copyObj = {};

        let value;
        for (let key in objForCopy) {
            value = objForCopy[key];
            copyObj[key] = typeof value === 'object' ? copy(value) : value;
        }
        return copyObj;
    }

    for (let i = 0; i < count; i++) {
        let objCopy = copy(obj);
        arr.push({
            id: i,
            ...objCopy,
        });
    }

    return arr;
}

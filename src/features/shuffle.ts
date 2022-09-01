import { GetListItemsType } from "../Types/GetListType";

// export const shuffle = (
//     arr: Array<GetListItemsType>
// ): Array<GetListItemsType> => {
//     return arr.sort(() => Math.round(Math.random() * 100) - 50);
// };

function random(n: any) {
    return Math.floor(Math.random() * Math.floor(n));
}
export function shuffle(arr: Array<GetListItemsType>): Array<GetListItemsType> {
    const arr2 = JSON.parse(JSON.stringify(arr));
    for (var i = 0; i < arr2.length; i++) {
        var j = random(arr2.length);
        var k = random(arr2.length);
        var t = arr2[j];
        arr2[j] = arr2[k];
        arr2[k] = t;
    }

    return arr2;
}

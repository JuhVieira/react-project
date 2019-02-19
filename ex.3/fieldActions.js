export function changeValue(e){
    console.log('changeValue')
    return {
        type: 'VALUA_CHANGED',
        payload: e.target.value
    }
}
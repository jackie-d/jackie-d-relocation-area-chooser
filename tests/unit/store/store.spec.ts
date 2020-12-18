import store from '@/store'

describe ('Set basic data and init on the store', () => {

    it('Set the name in the state', () => {
        store.commit('SET_NAME','my_name');
        expect(store.state.name).toBe('my_name');
    })

    it('Store a recond in history', () => {
        const historyRecord = {
            'name': 'my_name',
            'time': new Date(),
            'chosenCity': 2
        };
        store.commit('STORE_RESULT',historyRecord);
        expect(store.state.history).toContain(historyRecord);
    })

    it('Init the state', () => {
        store.commit('SET_NAME','my_name');
        store.commit('INIT_PROCEDURE');
        expect(store.state.name).toBeUndefined();
    })

});
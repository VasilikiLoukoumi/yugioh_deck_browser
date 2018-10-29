import Vue from 'vue'
import Cards from '@/components/Cards'

describe('Test the cardNames array length:', () => {
    it('The cardNames array length should be 20.', () => {
        const Constructor = Vue.extend(Cards)
        const vm = new Constructor().$mount()
        expect(vm.cardNames.length).toEqual(20);

    })
})
import Vue from 'vue'
import Card from '@/components/Card'

describe('Test if a card is selected:', () => {
    it('The isCardSelected property should be of false value', () => {
        const Constructor = Vue.extend(Card)
        const vm = new Constructor().$mount()
        expect(vm.isCardSelected).toBeFalsy

    })
})
import Vue from 'vue'
import Heading from '@/components/Heading'

describe('Test the h1 element content.', () => {
    it('The h1 element should render the phrase: "Yu-Gi-Oh! Deck Browser"', () => {
        const Constructor = Vue.extend(Heading)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('h1').textContent)
            .toBe('Yu-Gi-Oh! Deck Browser')
    })
})
'use strict'

var Card = {
    template: '<div>A card component</div>'
}

Vue.component('newList')

Vue.component('list', {
    template: '#add-list-template',
    components: {
        'card': Card
    }
}) 

var app = new Vue ({
    el: '#app',
    data: {
        message: 'Vue is working!'
    }
})


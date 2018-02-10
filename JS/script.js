'use strict'



var Card = {
    template: '<div>A card component</div>'
}

Vue.component('list', {
    template: '#add-list-template',
    components: {
        'card': Card
    }
}) 



var app = new Vue ({
    el: '#app',
    data: function() {
        return {
            lists: []
        }
    }
    ,
    methods: {
        newList: function (event) {
            this.lists.push('list');
        }
    }
});


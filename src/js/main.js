'use strict';

var bob = {
    _name: 'Bob',
    _friends: ['Guilherme', 'Camila', 'Murilo'],
    printFriends: function printFriends() {
        this._friends.forEach(function (f) {
            return console.log(this._name + ' knows ' + f);
        });
    }
};

bob.printFriends();
"use strict";
"use strict";

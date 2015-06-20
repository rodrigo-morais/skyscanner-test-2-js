function createHierarchy(n) {
    var hierarchy = [];

    n.forEach(function (pair, index) {
        var evaluated = pair.split(' ');
        hierarchy[index] = [evaluated[0], evaluated[1]];
    });

    return hierarchy;
};

function readHierachy(total, hierarchy) {
    var names = [];

    names[0] = hierarchy[0][0];

    console.log(total);
    console.log(names[0]);

    var aux_names = [];
    hierarchy.forEach(function (pair) {
        names.forEach(function(_name){
            aux_names = aux_names.concat(hierarchy.map(function (x) {
                return x[0] === _name ? x[1] : undefined;
            }).filter(function(x){
                return x !== undefined;
            }));
        });

        if (aux_names.length > 0) {
            console.log(aux_names.join(' '));
            names = aux_names;
            aux_names = [];
        }
    });

}

function getHierarchy(n) {

    var total = n[0],
        hierarchy = [];

    n.shift();
    hierarchy = createHierarchy(n);

    readHierachy(total, hierarchy);

};


getHierarchy([6, "Jonh Mark", "Jonh Lee", "Mark Paul", "Lee Steve", "Lee Leo", "Leo Lana", "Steve Carl", "Paul Barbara", "Paul Dan", "Barbara Rodrigo"]);
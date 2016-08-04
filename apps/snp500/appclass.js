/*
    Prototypical Inheritance Pattern
*/
// F2.Apps["com_kingsmen_f2_snp"] = (function() {

// 	var App_Class = function (appConfig, appContent, root) {
// 		this.appConfig = appConfig;
// 		this.appContent = appContent;
// 		this.ui = appConfig.ui;
// 		this.$root = $(root);
// 	};

//     var myVar = 5;

// 	App_Class.prototype.init = function () {
// 		console.log('In init function with myVar = ' + myVar);
//         this.doSomething();
// 	};

//     App_Class.prototype.doSomething = function() {
//         console.log('In doSomething');
//     };

// 	return App_Class;
// })();

/* 
    Module Pattern
*/
F2.Apps["com_kingsmen_f2_snp"] = function(appConfig, appContent, root) {

    function hitServerAsync(callback) {
        $.get('http://192.168.1.116:5020/detail', function (resp) {
            callback(resp);
        });
    }

    function populateDropdown(data) {
        var dataArray = data.companies;
        var textToInsert = [];
        var i = 0;
        var length = dataArray.length;

        textToInsert[i++] = '<ul class="dropdown-menu">';
        for (var a = 0; a < length; a++) {
            textToInsert[i++] = `<li><a>${(dataArray[a])[1]} (${(dataArray[a])[0]})</a></li>`;
        }
        textToInsert[i++] = '</ul>';

        $('#main-dropdown').append(textToInsert.join(''));
    }

    return {
        init: function() {
            hitServerAsync(function(data) {
                populateDropdown(data);
            });            
        }
    }
};
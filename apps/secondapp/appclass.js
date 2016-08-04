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
F2.Apps["com_kingsmen_f2_secondapp"] = function(appConfig, appContent, root) {

    function saySomething() {
        console.log('something said');
    }    

    return {
        init: function() {
            saySomething();
        }
    }
};

F2_jsonpCallback_com_kingsmen_f2_snp({
	"scripts":[
		//"../../apps/snp500/appclass.js"
		"http://localhost:3344/apps/snp500/appclass.js"
	],
	"styles":[
        //"../../apps/snp500/app.css"
		"http://localhost:3344/apps/snp500/app.css"
	],
	"apps":[
		{
			"html":[
                '<div class="container snpapp">',
                    '<div id="main-dropdown" class="dropdown">',
                        '<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">S&P500 Indexes',
                        '<span class="caret"></span></button>',
                    '</div>',
                    '<div class="custom-text" id="detail-content"><p>Company Name</p></div>',
                '</div>'
			].join("")
		}
	]
})

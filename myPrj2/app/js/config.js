require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"carousel":"module/carousel",
		"ceiling":"module/ceiling",
		"list_block":"module/list_block",
		"ewm_block":"module/login/ewm_block",
		"header":"module/header",
		"footer":"module/footer",
		"bg":"module/register/bg",
		"md5":"libs/md5",
		"url":"module/url",
		"cookie":"libs/jquery.cookie"
	},
	shim: {
		carousel:{
			deps:["jquery"]
		},
		ceiling:{
			deps:["jquery"]
		},
		list_block:{
			deps:["jquery"]
		},
		ewm_block:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		bg:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		}
	}
})
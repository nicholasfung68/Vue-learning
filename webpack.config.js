const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 务必要写这一行，vue-loader@15 之后必须要写，没事多看看官方文档。。。
const VueLoaderPlugin= require('vue-loader/lib/plugin')


module.exports = {
	mode:"development",  // 模式
	// mode:'production',

	entry:path.join(__dirname,'./src/main.js'), // 入口文件

	output:{ // 指定输出项
		path:path.join(__dirname,'/dist'),  // 输出路径
		filename:'bundle.js'  // 输出文件名称
	},

	plugins:[  //所有webpack 插件的配置节点
		new htmlWebpackPlugin({
			template: path.join(__dirname,'./src/index.html'), // 指定模板文件名称
			filename:'index.html' // 设置生成的内存页面得名称
		}),
		// 请确保引入这个插件！！！！！
		new VueLoaderPlugin()
	],

    // resolve:{
	// 	alias:{ // 修改Vue被导入时候的包路径
	// 		"vue$": "vue/dist/vue.js"
	// 	}
	// }

	module:{ // 配置所有第三方loader模块
		rules:[ // 第三方模块的匹配规则
			{ test:/\.css$/,use:['style-loader','css-loader'] }, //处理css文件，loader从后往前执行
			{ test:/\.less$/,use:['style-loader','css-loader','less-loader'] }, //处理less文件，loader从后往前执行
			{ test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] }, //处理scss(sass)文件，loader从后往前执行
			{ test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=7631&name=[hash:6]-[name].[ext]'}, //处理图片路径的loader
			{ test:/\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //处理字体文件
			{ test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },//处理高级的ES6、7语法
			{ test:/\.vue$/, use:'vue-loader' }  // 处理.vue文件
		]
	}

}
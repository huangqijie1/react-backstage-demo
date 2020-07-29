This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



# react

1、调用setState之后，发生了什么？
   setState的参数对象会和当前组件的状态合并，然后进行调和，调和的过程中，react会构建一个新的元素树，然后通过diff算法对比出新树和旧树的差异，根据差异对界面进行最小化的渲染

2、为什么建议传递给setState的参数是一个回调函数而不是一个对象？
   因为this.props和this.state的更新可能是异步的，不能依赖他们的值去计算下一个state

### react的生命周期
react16.4v的生命周期，主要分为三个阶段：挂载阶段、更新阶段、卸载阶段。
挂载阶段有：
	1、constructor(),一个组件的构造函数，第一个被执行，主要是初始化state和对自定义方法进行this绑定。
	2、getDerivedStateFromProps(),一个静态函数，不能在这个函数使用this，在这里可以根据新的props和当前的state来调整新的state，这个函数会返回一个对象用来更新当前的state，如果不需要更新可以返回null。
	3、render()，主要是返回渲染的东西
	4、componentDidMount(),会在组件挂载后调用，一般会在这里请求数据，更新state。
更新阶段有：
	1、getDerivedStateFromProps()，跟挂载阶段那个方法一样
	2、shouldComponentUpdate(),这个方法用于性能优化，有两个参数，用来判断当前组件是否重新渲染，如果为true就重新渲染，false就阻止重新渲染。如果当前组件更新时，组件的props和state都没发生改变，可以用react的PureComponent
	3、render()，也是返回渲染的东西
	4、getSnapshotBeforeUpdate()，这个方法可以返回一个snapshot，这个snapshot会作为componentDidUpdate方法的第三个参数传入，如果不想要返回值，就返回null，不然会出警告，而且这个方法要和componentDidUpdate方法一起使用，不然也会出警告。
	5、componentDidUpdate(),更新后调用，可以操作DOM、发起请求、也可以setState，如果这个方法使用setState时，一定要用if语句来做些判断，防止出现死循环。
挂载阶段：
	1、componentWillUnmount(),组件卸载前调用，可以在这清除一些异步操作

### react Hooks：
hooks是react16.8版本的新特性，hooks是用在函数组件中，可以通过useState给组件添加状态，使用useEffect处理副作用，它有两个参数，第一个是个回调函数，可以做一些副作用，第二个参数是个数组，如果数组中的值发生改变，就会调用useEffect的第一个参数的回调函数，使用useConnext减少组件层级，useRef可以获取dom元素，useReducer跟redux、react-redux用法差不多一样，只是useReducer不能使用中间件，useCallback、useMemo等，hook的好处是，代码的可读性强，组件层级变浅

### react Redux/react-redux:
Redux是一个状态管理库，rudux的state是只读的，不能直接修改，只能通过action，触发action后，redux的reducer会找出对应的reducer处理这个action，然后返回新的state，如果有多个reducer，可以使用redux的combineReducers将多个reducer统一在一起，当创建好store后，使用react-redux的provider组件，利用这个组件包住整个项目，给provider组件设置store属性，因为刷新页面会初始化store，所以使用redux-persist包来解决这个问题，当组件需要读取store的state或修改store的state时，可以通过react-redux的connect高阶组件去处理。然后我们还可以使用Redux-Saga这个中间件去处理带有副作用的action。

### ajax：
ajax是一种异步请求数据的技术，它能在不刷新页面去情况下，异步请求数据，把数据展示到页面上，主要核心是XMLHttpRequest对象，创建XMLHttpRequest之后，向服务器发送请求，根据不同的请求方式做不同的操作，如果是post请求，要设置请求头的格式内容，服务器响应之后，进行同步或者异步处理

### 箭头函数：
箭头函数不会创建自己的this，它会根据作用域链的上一层继承this，箭头函数里的this指向是不能改变的，不能作为构造函数使用，没有自己的arguments，也没有原型prototype。

### 高阶组件：
React的高阶组件就是一个函数接受一个或多个组件并且返回一个组件的函数，高阶组件有两种形式，一种是属性代理，另外一种是反向继承，
属性代理是一个函数接受一个组件作为参数，并返回一个继承了React.Component组件的类，然后在类的render()方法中返回传入进来的组件，这种方式可以操作传进来的props，抽离state，可以通过ref属性访问组件的实例，
反向继承是一个函数接受一个组件作为参数传入，并返回一个继承了传入进来的组件的类，在这个类的render()方法里返回super.render()方法，这样就可以操作state和渲染劫持

### promise:
promise对象用于异步计算，也可以解决回调地狱，它有3个状态，pending、fufilled和rejected，状态的改变只有两种可能，从pending变为fufilled，从pending变为rejected，状态变了，就不能再变了，promise的then方法，有两个参数，分别代表成功和失败，它可以链式调用，还有catch方法，错误的时候调用，还有all方法





react的生命周期有3个阶段，挂载阶段、更新阶段和卸载阶段

挂载阶段：
	1、constructor 主要是初始化state和对自定义方法进行this绑定
	2、getDerivativeStateFromProps 一个静态函数，不能在这个函数里使用this,在这个方法里，可以根据新的props和当前组件的state来调整新的state，可以返回一个对象来更新state，如果不想更新可以返回null
	3、render 主要是返回渲染的东西
	4、componentDidMount 挂载后调用，可以在这里请求数据，更新state
更新阶段：
	2、getDerivedStateFromProps 跟挂载阶段的一样
	2、shouldComponentUpdate 这个方法用来做性能优化的，它有两个参数，可以根据这两个参数来控制当前组件是否重新渲染，返回true就重新渲染，返回false就阻止渲染
	3、render 返回渲染的东西
	4、getSnapshotBeforeUpdate 这个方法可以返回一个snapshot，这个snapshot会作为componentDidUpdate的第三个参数传入，如果不需要返回值，可以返回null，不然会出警告，而且这个方法是和componentDidUpdate方法一起使用的，不然也是会出警告的
	5、componentDidUpdate 更新后调用，在这里可以请求数据，更新state，这个方法里使用了setState，就要使用if语句控制，防止出现死循环
卸载阶段：
	1、componentWillUnMount 卸载前调用，在这里可以清除一些异步操作

	scss css的区别
	react生命周期
	hooks
	webpack怎么定义全局变量
(this["webpackJsonpkristen-scheel-project5"]=this["webpackJsonpkristen-scheel-project5"]||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(12),r=a.n(s),c=(a(18),a(1)),o=a(2),l=a(4),h=a(3),u=a(7),m=a.n(u);a(20);m.a.initializeApp({apiKey:"AIzaSyCV6MxKgqcAYlaavVFCzRQwwfhh4aUcvp4",authDomain:"kristen-scheel-project5.firebaseapp.com",databaseURL:"https://kristen-scheel-project5.firebaseio.com",projectId:"kristen-scheel-project5",storageBucket:"kristen-scheel-project5.appspot.com",messagingSenderId:"233635611396",appId:"1:233635611396:web:f58311c363c48f20c4c651"});var d=m.a,p=(a(23),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleNameChangeEvent=function(e){n.setState({name:e.target.value})},n.handleDishChangeEvent=function(e){n.setState({dish:e.target.value})},n.handleSubmit=function(e){n.props.addDish(n.state.name,n.state.dish),e.preventDefault()},n.state={name:"Name",dish:"Dish"},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",null,"Name:",i.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleNameChangeEvent})),i.a.createElement("label",null,"Dish:",i.a.createElement("input",{type:"text",name:"dish",value:this.state.dish,onChange:this.handleDishChangeEvent})),i.a.createElement("input",{type:"submit",value:"Submit"}))}}]),a}(n.Component)),f=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),console.log(e),n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,"List of Dishes"),i.a.createElement("ul",null,this.props.dishes.map((function(e,t){return i.a.createElement("li",{key:t},e)}))))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetchDishes=function(){d.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var i in a)n.push(a[i]);e.setState({dishes:n})}))},e.addDish=function(t,a){d.database().ref().set({name:a});e.fetchDishes()},e.state={dishes:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchDishes()}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{addDish:this.addDish}),i.a.createElement(f,{dishes:this.state.dishes}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.a6f823c2.chunk.js.map
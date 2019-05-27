(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(97)},60:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(24),i=a.n(s),r=(a(59),a(60),a(50)),o=a(11),m=a(12),c=a(16),h=a(13),d=a(17),u=a(15),v=a(14),p=a.n(v),g=a(51),b=a.n(g),F=a(25),y=a.n(F),E=a(7),N=a.n(E),f=a(18),x=a.n(f),Y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{fluid:!0},n.a.createElement("h2",null,"Velocity-Angle Mode"),n.a.createElement(N.a,{inline:!0,onSubmit:this.props.handleSubmit},n.a.createElement(N.a.Label,{className:"mb-2 mr-sm-2"},"Velocity of Launch (m/s)"),n.a.createElement(N.a.Control,{type:"number",className:"mb-2 mr-sm-2",name:"velocityVector",value:this.props.velocityVector,onChange:this.props.handleChange}),n.a.createElement(N.a.Label,{className:"mb-2 mr-sm-2"},"Angle of Launch (Degrees)"),n.a.createElement(N.a.Control,{type:"number",className:"mb-2 mr-sm-2",name:"angleDegrees",value:this.props.angleDegrees,onChange:this.props.handleChange}),n.a.createElement(x.a,{variant:"primary",type:"submit",className:"mb-2 mr-sm-2"},"Simulate!"),n.a.createElement(x.a,{variant:"danger",className:"mb-2 mr-sm-2",onClick:this.props.handleReset},"Reset")))}}]),t}(n.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{fluid:!0},n.a.createElement("h2",null,"Component Mode"),n.a.createElement(N.a,{inline:!0,onSubmit:this.props.handleSubmit},n.a.createElement(N.a.Label,{className:"mb-2 mr-sm-2"},"X Velocity (m/s)"),n.a.createElement(N.a.Control,{type:"number",className:"mb-2 mr-sm-2",name:"velX",value:this.props.velX,onChange:this.props.handleChange}),n.a.createElement(N.a.Label,{className:"mb-2 mr-sm-2"},"Y Velocity (m/s)"),n.a.createElement(N.a.Control,{type:"number",className:"mb-2 mr-sm-2",name:"velY",value:this.props.velY,onChange:this.props.handleChange}),n.a.createElement(x.a,{variant:"primary",type:"submit",className:"mb-2 mr-sm-2"},"Simulate!"),n.a.createElement(x.a,{variant:"danger",className:"mb-2 mr-sm-2",onClick:this.props.handleReset},"Reset")))}}]),t}(n.a.Component),X=a(52),V=a.n(X),M=a(26),R=a.n(M),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={time:0,deltaTime:.1,posX:0,posY:0,velX:0,velY:0,angleDegrees:0,angleRadians:0,velocityVector:0,g:9.81,canvasHeight:100,canvasWidth:100,data:[]},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleReset=a.handleReset.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){if("angleDegrees"===e.target.name){var t=e.target.value*(Math.PI/180);this.setState({angleRadians:Number.parseFloat(t).toFixed(3),angleDegrees:Number.parseFloat(e.target.value).toFixed(3),velX:Number.parseFloat(Math.cos(t)*this.state.velocityVector).toFixed(3),velY:Number.parseFloat(Math.sin(t)*this.state.velocityVector).toFixed(3)})}else if("velocityVector"===e.target.name)this.setState({velocityVector:Number.parseFloat(e.target.value).toFixed(3),velX:Number.parseFloat(Math.cos(this.state.angleRadians)*e.target.value).toFixed(3),velY:Number.parseFloat(Math.sin(this.state.angleRadians)*e.target.value).toFixed(3)});else if("velX"===e.target.name){var a=e.target.value,l=Math.atan2(this.state.velY,a);this.setState({angleRadians:Number.parseFloat(l).toFixed(3),angleDegrees:Number.parseFloat(l*(180/Math.PI)).toFixed(3),velX:Number.parseFloat(a).toFixed(3),velocityVector:Number.parseFloat(a/Math.cos(l)).toFixed(3)})}else if("velY"===e.target.name){var n=e.target.value,s=Math.atan2(n,this.state.velX);this.setState({angleRadians:Number.parseFloat(s).toFixed(3),angleDegrees:Number.parseFloat(s*(180/Math.PI)).toFixed(3),velY:Number.parseFloat(n).toFixed(3),velocityVector:Number.parseFloat(n/Math.cos(s)).toFixed(3)})}else this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();for(var a=function(e){return t.state.velX*e},l=function(e){return t.state.velY*e-.5*t.state.g*e*e},n=function(e){return t.state.velY-t.state.g*e},s=function(e){return t.state.velX},i=2*this.state.velY/this.state.g,r=[],o=0;o<=i;o+=this.state.deltaTime)r.push({time:Number.parseFloat(o).toFixed(3),posX:Number.parseFloat(a(o)).toFixed(3),posY:Number.parseFloat(l(o)).toFixed(3),velX:Number.parseFloat(s()).toFixed(3),velY:Number.parseFloat(n(o)).toFixed(3),velocityVector:Number.parseFloat(Math.sqrt(s()*s()+n(o)*n(o)).toFixed(3)),angleDegrees:Number.parseFloat(Math.atan(n(o)/s())*(180/Math.PI)).toFixed(3)});var m=i+this.state.deltaTime;r.push({time:Number.parseFloat(m).toFixed(3),posX:Number.parseFloat(a(m)).toFixed(3),posY:Number.parseFloat(l(m)).toFixed(3),velX:Number.parseFloat(s()).toFixed(3),velY:Number.parseFloat(n(m)).toFixed(3),velocityVector:Number.parseFloat(Math.sqrt(s()*s()+n(m)*n(m)).toFixed(3)),angleDegrees:Number.parseFloat(Math.atan(n(m)/s())*(180/Math.PI)).toFixed(3)}),this.setState({data:r})}},{key:"handleReset",value:function(){this.setState({time:0,deltaTime:.1,posX:0,posY:0,velX:0,velY:0,angleDegrees:0,angleRadians:0,velocityVector:0,g:9.81,data:[]})}},{key:"render",value:function(){return n.a.createElement(p.a,{fluid:!0},n.a.createElement("h1",{className:"display-4"},"Projectile Simulator"),n.a.createElement("p",{className:"lead"},"Select a mode from below. Velocity-Angle Mode takes the the magnitude of the initial velocity and the launch angle. Component Mode takes the magnitude of each of the initial components."),n.a.createElement(b.a,{defaultActiveKey:"VelocityAngleMode",id:"mode-selector"},n.a.createElement(y.a,{eventKey:"VelocityAngleMode",title:"Velocity-Angle Mode"},n.a.createElement(Y,{handleChange:this.handleChange.bind(this),handleSubmit:this.handleSubmit.bind(this),handleReset:this.handleReset.bind(this),time:this.state.time,deltaTime:this.state.deltaTime,posX:this.state.posX,posY:this.state.posY,velX:this.state.velX,velY:this.state.velY,angleDegrees:this.state.angleDegrees,angleRadians:this.state.angleRadians,velocityVector:this.state.velocityVector,g:this.state.g,canvasHeight:this.state.canvasHeight,canvasWidth:this.state.canvasWidth})),n.a.createElement(y.a,{eventKey:"ComponentMode",title:"Component Mode"},n.a.createElement(C,{handleChange:this.handleChange.bind(this),handleSubmit:this.handleSubmit.bind(this),handleReset:this.handleReset.bind(this),time:this.state.time,deltaTime:this.state.deltaTime,posX:this.state.posX,posY:this.state.posY,velX:this.state.velX,velY:this.state.velY,angleDegrees:this.state.angleDegrees,angleRadians:this.state.angleRadians,velocityVector:this.state.velocityVector,g:this.state.g,canvasHeight:this.state.canvasHeight,canvasWidth:this.state.canvasWidth}))),this.state.data.length>0&&n.a.createElement(V.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Time"),n.a.createElement("th",null,"X Position"),n.a.createElement("th",null,"Y Position"),n.a.createElement("th",null,"X Velocity"),n.a.createElement("th",null,"Y Velocity"),n.a.createElement("th",null,"Speed"),n.a.createElement("th",null,"Angle"))),n.a.createElement("tbody",null,this.state.data.map(function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.time," s"),n.a.createElement("td",null,e.posX," m"),n.a.createElement("td",null,e.posY," m"),n.a.createElement("td",null,e.velX," m/s"),n.a.createElement("td",null,e.velY," m/s"),n.a.createElement("td",null,e.velocityVector," m/s"),n.a.createElement("td",null,e.angleDegrees,"\xb0"))}))),this.state.data.length>0&&n.a.createElement(R.a,{sticky:"bottom"},n.a.createElement("p",{className:"small"},"Copyright \xa9 2019 Pranav Avva. All Right Reserved")),0===this.state.data.length&&n.a.createElement(R.a,{fixed:"bottom"},n.a.createElement("p",{className:"small"},"Copyright \xa9 2019 Pranav Avva. All Right Reserved")))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.23174fdf.chunk.js.map
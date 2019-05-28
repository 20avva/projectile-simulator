(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(97)},60:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(24),i=a.n(s),r=(a(59),a(60),a(50)),o=a(11),m=a(12),c=a(16),h=a(13),d=a(17),u=a(15),v=a(14),g=a.n(v),p=a(51),b=a.n(p),y=a(25),E=a.n(y),f=a(7),Y=a.n(f),C=a(18),N=a.n(C),X=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{fluid:!0},l.a.createElement("h2",null,"Velocity-Angle Mode"),l.a.createElement(Y.a,{inline:!0,onSubmit:this.props.handleSubmit},l.a.createElement(Y.a.Label,{className:"mb-2 mr-sm-2"},"Velocity of Launch (m/s)"),l.a.createElement(Y.a.Control,{type:"text",className:"mb-2 mr-sm-2",name:"velocityVector",value:this.props.velocityVector,onChange:this.props.handleChange}),l.a.createElement(Y.a.Label,{className:"mb-2 mr-sm-2"},"Angle of Launch (Degrees)"),l.a.createElement(Y.a.Control,{type:"text",className:"mb-2 mr-sm-2",name:"angleDegrees",value:this.props.angleDegrees,onChange:this.props.handleChange}),l.a.createElement(N.a,{variant:"primary",type:"submit",className:"mb-2 mr-sm-2"},"Simulate!"),l.a.createElement(N.a,{variant:"danger",className:"mb-2 mr-sm-2",onClick:this.props.handleReset},"Reset")))}}]),t}(l.a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,{fluid:!0},l.a.createElement("h2",null,"Component Mode"),l.a.createElement(Y.a,{inline:!0,onSubmit:this.props.handleSubmit},l.a.createElement(Y.a.Label,{className:"mb-2 mr-sm-2"},"X Velocity (m/s)"),l.a.createElement(Y.a.Control,{type:"text",className:"mb-2 mr-sm-2",name:"velX",value:this.props.velX,onChange:this.props.handleChange}),l.a.createElement(Y.a.Label,{className:"mb-2 mr-sm-2"},"Y Velocity (m/s)"),l.a.createElement(Y.a.Control,{type:"text",className:"mb-2 mr-sm-2",name:"velY",value:this.props.velY,onChange:this.props.handleChange}),l.a.createElement(N.a,{variant:"primary",type:"submit",className:"mb-2 mr-sm-2"},"Simulate!"),l.a.createElement(N.a,{variant:"danger",className:"mb-2 mr-sm-2",onClick:this.props.handleReset},"Reset")))}}]),t}(l.a.Component),V=a(52),M=a.n(V),R=a(26),S=a.n(R),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={time:0,deltaTime:.1,posX:0,posY:0,velX:0,velY:0,angleDegrees:0,angleRadians:0,velocityVector:0,g:9.81,canvasHeight:100,canvasWidth:100,data:[]},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleReset=a.handleReset.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){if("angleDegrees"===e.target.name){var t=e.target.value*(Math.PI/180);this.setState({angleRadians:t,angleDegrees:e.target.value,velX:Math.cos(t)*this.state.velocityVector,velY:Math.sin(t)*this.state.velocityVector})}else if("velocityVector"===e.target.name)this.setState({velocityVector:e.target.value,velX:Math.cos(this.state.angleRadians)*e.target.value,velY:Math.sin(this.state.angleRadians)*e.target.value});else if("velX"===e.target.name){var a=e.target.value,n=Math.atan2(this.state.velY,a);this.setState({angleRadians:n,angleDegrees:n*(180/Math.PI),velX:a,velocityVector:a/Math.cos(n)})}else if("velY"===e.target.name){var l=e.target.value,s=Math.atan2(l,this.state.velX);this.setState({angleRadians:s,angleDegrees:s*(180/Math.PI),velY:l,velocityVector:l/Math.cos(s)})}else this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();for(var a=function(e){return t.state.velX*e},n=function(e){return t.state.velY*e-.5*t.state.g*e*e},l=function(e){return t.state.velY-t.state.g*e},s=function(e){return t.state.velX},i=2*this.state.velY/this.state.g,r=[],o=0;o<=i;o+=this.state.deltaTime)r.push({time:Number.parseFloat(o).toFixed(3),posX:Number.parseFloat(a(o)).toFixed(3),posY:Number.parseFloat(n(o)).toFixed(3),velX:Number.parseFloat(s()).toFixed(3),velY:Number.parseFloat(l(o)).toFixed(3),velocityVector:Number.parseFloat(Math.sqrt(s()*s()+l(o)*l(o)).toFixed(3)),angleDegrees:Number.parseFloat(Math.atan(l(o)/s())*(180/Math.PI)).toFixed(3)});var m=i+this.state.deltaTime;r.push({time:Number.parseFloat(m).toFixed(3),posX:Number.parseFloat(a(m)).toFixed(3),posY:Number.parseFloat(n(m)).toFixed(3),velX:Number.parseFloat(s()).toFixed(3),velY:Number.parseFloat(l(m)).toFixed(3),velocityVector:Number.parseFloat(Math.sqrt(s()*s()+l(m)*l(m)).toFixed(3)),angleDegrees:Number.parseFloat(Math.atan(l(m)/s())*(180/Math.PI)).toFixed(3)}),this.setState({data:r})}},{key:"handleReset",value:function(){this.setState({time:0,deltaTime:.1,posX:0,posY:0,velX:0,velY:0,angleDegrees:0,angleRadians:0,velocityVector:0,g:9.81,data:[]})}},{key:"render",value:function(){return l.a.createElement(g.a,{fluid:!0},l.a.createElement("h1",{className:"display-4"},"Projectile Simulator"),l.a.createElement("p",{className:"lead"},"Select a mode from below. Velocity-Angle Mode takes the the magnitude of the initial velocity and the launch angle. Component Mode takes the magnitude of each of the initial components."),l.a.createElement(b.a,{defaultActiveKey:"VelocityAngleMode",id:"mode-selector"},l.a.createElement(E.a,{eventKey:"VelocityAngleMode",title:"Velocity-Angle Mode"},l.a.createElement(X,{handleChange:this.handleChange.bind(this),handleSubmit:this.handleSubmit.bind(this),handleReset:this.handleReset.bind(this),time:this.state.time,deltaTime:this.state.deltaTime,posX:this.state.posX,posY:this.state.posY,velX:this.state.velX,velY:this.state.velY,angleDegrees:this.state.angleDegrees,angleRadians:this.state.angleRadians,velocityVector:this.state.velocityVector,g:this.state.g,canvasHeight:this.state.canvasHeight,canvasWidth:this.state.canvasWidth})),l.a.createElement(E.a,{eventKey:"ComponentMode",title:"Component Mode"},l.a.createElement(F,{handleChange:this.handleChange.bind(this),handleSubmit:this.handleSubmit.bind(this),handleReset:this.handleReset.bind(this),time:this.state.time,deltaTime:this.state.deltaTime,posX:this.state.posX,posY:this.state.posY,velX:this.state.velX,velY:this.state.velY,angleDegrees:this.state.angleDegrees,angleRadians:this.state.angleRadians,velocityVector:this.state.velocityVector,g:this.state.g,canvasHeight:this.state.canvasHeight,canvasWidth:this.state.canvasWidth}))),this.state.data.length>0&&l.a.createElement(M.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Time"),l.a.createElement("th",null,"X Position"),l.a.createElement("th",null,"Y Position"),l.a.createElement("th",null,"X Velocity"),l.a.createElement("th",null,"Y Velocity"),l.a.createElement("th",null,"Speed"),l.a.createElement("th",null,"Angle"))),l.a.createElement("tbody",null,this.state.data.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.time," s"),l.a.createElement("td",null,e.posX," m"),l.a.createElement("td",null,e.posY," m"),l.a.createElement("td",null,e.velX," m/s"),l.a.createElement("td",null,e.velY," m/s"),l.a.createElement("td",null,e.velocityVector," m/s"),l.a.createElement("td",null,e.angleDegrees,"\xb0"))}))),this.state.data.length>0&&l.a.createElement(S.a,{sticky:"bottom"},l.a.createElement("p",{className:"small"},"Copyright \xa9 2019 Pranav Avva. All Right Reserved")),0===this.state.data.length&&l.a.createElement(S.a,{fixed:"bottom"},l.a.createElement("p",{className:"small"},"Copyright \xa9 2019 Pranav Avva. All Right Reserved")))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.1c1345c0.chunk.js.map
var OSMBuildings=function(){function Ka(a,c){var b=a.x-c.x,e=a.y-c.y;return b*b+e*e}function rb(a){for(var c=0,b=0,e=0,d=a.length-3;e<d;e+=2)c+=a[e],b+=a[e+1];a=(a.length-2)/2;return{x:c/a<<0,y:b/a<<0}}function sa(a,c){var b={};a/=V;c/=V;b[sb]=0>=c?90:1<=c?-90:La*(2*tb(ub(K*(1-2*c)))-P);b[vb]=360*(1===a?1:(a%1+1)%1)-180;return b}function Ma(a,c,b){function e(a){if("XDomainRequest"in window&&a!==d.readyState&&(d.readyState=a,d.onreadystatechange))d.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,
function(a,b){return c[b]||a});var d="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;d.onerror=function(){d.status=500;d.statusText="Error";e(4)};d.ontimeout=function(){d.status=408;d.statusText="Timeout";e(4)};d.onprogress=function(){e(3)};d.onload=function(){d.status=200;d.statusText="Ok";e(4)};d.onreadystatechange=function(){4===d.readyState&&d.status&&!(200>d.status||299<d.status)&&b&&d.responseText&&b(JSON.parse(d.responseText))};e(0);d.open("GET",a);e(1);d.send(null);e(2);return d}
function W(){X.render();fa.render();Na()}function Oa(){m.clearRect(0,0,w,v);if(!(D<ga||Y)){var a,c,b,e,d,g,f,h=fa.MAX_HEIGHT,j={x:z+r,y:Z+t},n=r,l=r+w,wb=t,k=t+v,s,p,u,q,ha;x.sort(function(a,b){return a.minHeight-b.minHeight||Ka(b.center,j)-Ka(a.center,j)||b.height-a.height});a=0;for(c=x.length;a<c;a++)if(d=x[a],!(d.height+d.roofHeight<=h)){g=!1;s=d.footprint;b=0;for(e=s.length-1;b<e;b+=2)g||(g=s[b]>n&&s[b]<l&&s[b+1]>wb&&s[b+1]<k);if(g)if(b=1>d.scale?d.height*d.scale:d.height,g=E/(E-b),f=e=0,d.minHeight&&
(e=1>d.scale?d.minHeight*d.scale:d.minHeight,f=E/(E-e)),u=d.wallColor||ta,q=d.altColor||ia,ha=d.roofColor||$,m.strokeStyle=q,"cylinder"===d.shape)s=Pa({x:d.center.x-r,y:d.center.y-t},d.radius,b,e,u,q),"cylinder"===d.roofShape&&(s=Pa({x:d.center.x-r,y:d.center.y-t},d.radius,b+d.roofHeight,b,ha)),m.fillStyle=ha,d=s.c,g=s.r,m.beginPath(),m.arc(d.x,d.y,g,0,2*K),m.stroke(),m.fill();else{s=Qa(s,g,f,u,q);p=[];if(d.holes){b=0;for(e=d.holes.length;b<e;b++)p[b]=Qa(d.holes[b],g,f,u,q)}m.fillStyle=ha;Ra(s,!0,
p)}}}}function Qa(a,c,b,e,d){for(var g={x:0,y:0},f={x:0,y:0},h,j,n=[],l=0,k=a.length-3;l<k;l+=2)g.x=a[l]-r,g.y=a[l+1]-t,f.x=a[l+2]-r,f.y=a[l+3]-t,h=Q(g.x,g.y,c),j=Q(f.x,f.y,c),b&&(g=Q(g.x,g.y,b),f=Q(f.x,f.y,b)),(f.x-g.x)*(h.y-g.y)>(h.x-g.x)*(f.y-g.y)&&(m.fillStyle=g.x<f.x&&g.y<f.y||g.x>f.x&&g.y>f.y?d:e,Ra([f.x,f.y,g.x,g.y,h.x,h.y,j.x,j.y])),n[l]=h.x,n[l+1]=h.y;return n}function Na(){var a=w/(window.devicePixelRatio||1)/30;z-=a;Oa();var c=m.getImageData(0,0,w,v);z+=2*a;Oa();var b=m.getImageData(0,
0,w,v);z-=a;for(var a=c.data,b=b.data,e,d,g,f,h=0,j=a.length;h<j;h+=4)if(e=h,d=h+1,g=h+2,f=h+3,a[f]||b[f])a[e]=0.7*(a[d]||235)+0.3*(a[g]||230),a[d]=b[d]||H.g,a[g]=b[g]||H.b,a[f]=M(b[f],b[f]);m.clearRect(0,0,w,v);m.putImageData(c,0,0)}function Ra(a,c,b){if(a.length){var e,d,g,f;m.beginPath();m.moveTo(a[0],a[1]);e=2;for(d=a.length;e<d;e+=2)m.lineTo(a[e],a[e+1]);if(b){e=0;for(d=b.length;e<d;e++){a=b[e];m.moveTo(a[0],a[1]);g=2;for(f=a.length;g<f;g+=2)m.lineTo(a[g],a[g+1])}}m.closePath();c&&m.stroke();
m.fill()}}function Q(a,c,b){return{x:(a-z)*b+z<<0,y:(c-Z)*b+Z<<0}}function Pa(a,c,b,e,d,g){var f=E/(E-b);b=Q(a.x,a.y,f);var f=c*f,h;e&&(e=E/(E-e),a=Q(a.x,a.y,e),c*=e);if(h=Sa(a,c,b,f))e=ja(h[0].y1-a.y,h[0].x1-a.x),h=ja(h[1].y1-a.y,h[1].x1-a.x),g||(g=I.parse(d),g=""+g.setLightness(0.8)),m.fillStyle=d,m.beginPath(),m.arc(b.x,b.y,f,P,e,!0),m.arc(a.x,a.y,c,e,P),m.closePath(),m.fill(),m.fillStyle=g,m.beginPath(),m.arc(b.x,b.y,f,h,P,!0),m.arc(a.x,a.y,c,P,h),m.closePath(),m.fill();return{c:b,r:f}}function Sa(a,
c,b,e){var d=a.x-b.x,g=a.y-b.y,f=c-e,h=d*d+g*g;if(!(h<=f*f)){var h=Ta(h),d=-d/h,g=-g/h,f=f/h,h=[],j,n,l;j=Ta(M(0,1-f*f));for(var k=1;-1<=k;k-=2)n=d*f-k*j*g,l=g*f+k*j*d,h.push({x1:a.x+c*n<<0,y1:a.y+c*l<<0,x2:b.x+e*n<<0,y2:b.y+e*l<<0});return h}}function ua(a){z=ka+a.x;Z=v+a.y}function Ua(a){w=a.w;v=a.h;ka=w/2<<0;Va=v/2<<0;z=ka;Z=v;N.setSize(w,v);va=E-50}function Wa(a){D=a;V=xb<<D;a=D;var c=ga,b=wa;a=aa(M(a,c),b);A=1-aa(M(0+0.3*((a-c)/(b-c)),0),0.3);ta=J.setAlpha(A)+"";ia=la.setAlpha(A)+"";$=H.setAlpha(A)+
""}var Xa=Xa||Array,Ya=Ya||Array,q=Math,ub=q.exp,yb=q.log,zb=q.sin,Ab=q.cos,Za=q.tan,tb=q.atan,ja=q.atan2,aa=q.min,M=q.max,Ta=q.sqrt,$a=q.ceil,ab=q.floor,Bb=q.round,bb=document,I,cb=function(a){var c,b,e;if(0===a.s)c=b=e=a.l;else{e=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var d=2*a.l-e;a.h/=360;c=xa(d,e,a.h+1/3);b=xa(d,e,a.h);e=xa(d,e,a.h-1/3)}return new F(255*c<<0,255*b<<0,255*e<<0,a.a)},xa=function(a,c,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a},F=function(a,
c,b,e){this.r=a;this.g=c;this.b=b;this.a=4>arguments.length?1:e},Cb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",
darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",
ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",
lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",
oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",
skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},ya=F.prototype;ya.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};ya.setLightness=function(a){var c=F.toHSLA(this);c.l*=a;c.l=Math.min(1,Math.max(0,
c.l));return cb(c)};ya.setAlpha=function(a){return new F(this.r,this.g,this.b,this.a*a)};F.parse=function(a){var c;a+="";a=Cb[a]||a;if(~a.indexOf("#")&&(c=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new F(parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),c[4]?parseInt(c[4],16)/255:1);if(c=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new F(parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10),c[4]?parseFloat(c[5]):1);if(c=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return cb({h:parseInt(c[1],
10),s:parseFloat(c[2]),l:parseFloat(c[3]),a:c[4]?parseFloat(c[5]):1})};F.toHSLA=function(a){var c=a.r/255,b=a.g/255,e=a.b/255,d=Math.max(c,b,e),g=Math.min(c,b,e),f,h=(d+g)/2,j;if(d===g)f=g=0;else{j=d-g;g=0.5<h?j/(2-d-g):j/(d+g);switch(d){case c:f=(b-e)/j+(b<e?6:0);break;case b:f=(e-c)/j+2;break;case e:f=(c-b)/j+4}f/=6}return{h:360*f,s:g,l:h,a:a.a}};I=F;var db,R=Math,za=R.PI,y=R.sin,G=R.cos,eb=R.tan,fb=R.asin,gb=R.atan2,O=za/180,ma=23.4397*O;db=function(a,c,b){b=O*-b;c*=O;a=a.valueOf()/864E5-0.5+2440588-
2451545;var e=O*(357.5291+0.98560028*a),d=O*(1.9148*y(e)+0.02*y(2*e)+3E-4*y(3*e)),d=e+d+102.9372*O+za,e=fb(y(0)*G(ma)+G(0)*y(ma)*y(d)),d=gb(y(d)*G(ma)-eb(0)*y(ma),G(d));b=O*(280.16+360.9856235*a)-b-d;return{altitude:fb(y(c)*y(e)+G(c)*G(e)*G(b)),azimuth:gb(y(b),G(b)*y(c)-eb(e)*G(c))-za/2}};var jb=function(a,c){var b,e,d,g,f=0,h,j;h=0;for(j=a.length-3;h<j;h+=2)b=a[h],e=a[h+1],d=a[h+2],g=a[h+3],f+=b*g-d*e;if((0<f/2?hb:ib)===c)return a;b=[];for(e=a.length-2;0<=e;e-=2)b.push(a[e],a[e+1]);return b},k={DEFAULT_HEIGHT:5},
hb="CW",ib="CCW";k.windOuterPolygon=function(a){return jb(a,hb)};k.windInnerPolygon=function(a){return jb(a,ib)};k.YARD_TO_METER=0.9144;k.FOOT_TO_METER=0.3048;k.INCH_TO_METER=0.0254;k.METERS_PER_LEVEL=3;k.toMeters=function(a){a=""+a;var c=parseFloat(a);return c===a||~a.indexOf("m")?c<<0:~a.indexOf("yd")?c*k.YARD_TO_METER<<0:~a.indexOf("ft")?c*k.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*k.FOOT_TO_METER+a[1]*k.INCH_TO_METER<<0):c<<0};k.getRadius=function(a){for(var c=90,b=-90,e=0,d=a.length;e<
d;e+=2)c=aa(c,a[e]),b=M(b,a[e]);return Bb(6378137*((b-c)/La)/2)};var Db={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},Eb={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",
panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};k.getMaterialColor=function(a){a=a.toLowerCase();return"#"===a[0]?a:Db[Eb[a]||a]||null};var kb,lb=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},
Ba=function(a){if(a){for(var c=[],b,e=0,d=a.length;e<d;e++)b=Aa[a[e]],c.push(b[0],b[1]);c[c.length-2]!==c[0]&&c[c.length-1]!==c[1]&&c.push(c[0],c[1]);if(!(8>c.length))return c}},Fb=function(a,c){for(var b in c)a[b]||(a[b]=c[b]);return a},Ca=function(a,c){var b={},e=a.tags;a.id&&(b.id=a.id);c&&(b.footprint=k.windOuterPolygon(c));e.height&&(b.height=k.toMeters(e.height));!b.height&&e["building:height"]&&(b.height=k.toMeters(e["building:height"]));!b.height&&e.levels&&(b.height=e.levels*k.METERS_PER_LEVEL<<
0);!b.height&&e["building:levels"]&&(b.height=e["building:levels"]*k.METERS_PER_LEVEL<<0);e.min_height&&(b.minHeight=k.toMeters(e.min_height));!b.minHeight&&e["building:min_height"]&&(b.minHeight=k.toMeters(e["building:min_height"]));!b.minHeight&&e.min_level&&(b.minHeight=e.min_level*k.METERS_PER_LEVEL<<0);!b.minHeight&&e["building:min_level"]&&(b.minHeight=e["building:min_level"]*k.METERS_PER_LEVEL<<0);e["building:material"]&&(b.wallColor=k.getMaterialColor(e["building:material"]));e["building:facade:material"]&&
(b.wallColor=k.getMaterialColor(e["building:facade:material"]));e["building:cladding"]&&(b.wallColor=k.getMaterialColor(e["building:cladding"]));e["building:color"]&&(b.wallColor=e["building:color"]);e["building:colour"]&&(b.wallColor=e["building:colour"]);e["roof:material"]&&(b.roofColor=k.getMaterialColor(e["roof:material"]));e["building:roof:material"]&&(b.roofColor=k.getMaterialColor(e["building:roof:material"]));e["roof:color"]&&(b.roofColor=e["roof:color"]);e["roof:colour"]&&(b.roofColor=e["roof:colour"]);
e["building:roof:color"]&&(b.roofColor=e["building:roof:color"]);e["building:roof:colour"]&&(b.roofColor=e["building:roof:colour"]);b.height=b.height||k.DEFAULT_HEIGHT;if("dome"===e["roof:shape"]||"cylinder"===e["building:shape"]||"sphere"===e["building:shape"])b.shape="cylinder",b.radius=k.getRadius(b.footprint),"dome"===e["roof:shape"]&&e["roof:height"]&&(b.roofShape="cylinder",b.roofHeight=k.toMeters(e["roof:height"]),b.height=M(0,b.height-b.roofHeight));return b},Aa,ba,na;kb=function(a){Aa={};
ba={};na=[];for(var c,b=0,e=a.length;b<e;b++)switch(c=a[b],c.type){case "node":Aa[c.id]=[c.lat,c.lon];break;case "way":if(lb(c)){var d=void 0,d=void 0;if(d=Ba(c.nodes))d=Ca(c,d),na.push(d)}else if(d=c.tags,!d||!d.highway&&!d.railway&&!d.landuse)ba[c.id]=c;break;case "relation":var g=c,f=void 0,h=void 0;c=[];var j=h=void 0,n=void 0,d=void 0;if(j=lb(g)&&!("multipolygon"!==g.tags.type&&"building"!==g.tags.type)){for(var f=g.members,h=j=void 0,n=[],l=0,m=f.length;l<m;l++)j=f[l],"way"===j.type&&ba[j.ref]&&
(!j.role||"outer"===j.role?h=ba[j.ref]:("inner"===j.role||"enclave"===j.role)&&n.push(ba[j.ref]));f=h&&h.tags?{outer:h,inner:n}:void 0;j=f}if(j&&(j=Ca(g),h=f.outer))if(n=Ba(h.nodes)){h=Ca(h,n);g=0;for(n=f.inner.length;g<n;g++)(d=Ba(f.inner[g].nodes))&&c.push(k.windInnerPolygon(d));c.length&&(h.holes=c);na.push(Fb(h,j))}}return na};var K=Math.PI,P=K/2,Gb=K/4,La=180/K,xb=256,sb="latitude",vb="longitude",w=0,v=0,ka=0,Va=0,r=0,t=0,D,V,m,J=new I(200,190,180),la=J.setLightness(0.8),H=J.setLightness(1.2),
ta=J+"",ia=la+"",$=H+"",oa,A=1,ga=15,wa=20,va,z,Z,E=450,Y,Da=new Date,S={},Ea={add:function(a,c){S[c]={data:a,time:Date.now()}},get:function(a){return S[a]&&S[a].data},purge:function(){Da.setMinutes(Da.getMinutes()-5);for(var a in S)S[a].time<Da&&delete S[a]}},mb=function(a){for(var c,b,e=new Xa(a.length),d=0,g=a.length-1;d<g;d+=2)c=a[d+1],b=aa(1,M(0,0.5-yb(Za(Gb+P*a[d]/180))/K/2)),c=(c/360+0.5)*V<<0,b=b*V<<0,e[d]=c,e[d+1]=b;a=e;e=a.length/2;d=new Ya(e);g=0;c=e-1;var f,h,j,n=[],l=[],k=[];for(d[g]=
d[c]=1;c;){f=0;for(b=g+1;b<c;b++){h=a[2*b];var m=a[2*b+1],s=a[2*g],p=a[2*g+1],q=a[2*c],u=a[2*c+1],r=q-s,t=u-p,v=void 0;if(0!==r||0!==t)v=((h-s)*r+(m-p)*t)/(r*r+t*t),1<v?(s=q,p=u):0<v&&(s+=r*v,p+=t*v);r=h-s;t=m-p;h=r*r+t*t;h>f&&(j=b,f=h)}2<f&&(d[j]=1,n.push(g),l.push(j),n.push(j),l.push(c));g=n.pop();c=l.pop()}for(b=0;b<e;b++)d[b]&&k.push(a[2*b],a[2*b+1]);e=k;if(!(8>e.length))return e},Hb=function(a){return function(c){c=Fa(c);Ea.add(c,a);ca(c,!0)}},Fa=function(a){var c;if(a)if("FeatureCollection"===
a.type){a=a.features;var b,e,d,g,f,h,j=[],n,l,m,p;b=0;for(e=a.length;b<e;b++)if(n=a[b],"Feature"===n.type&&(p={},d=n.geometry,n=n.properties,"LineString"===d.type&&(g=c.length-1,c[0][0]===c[g][0]&&c[0][1]===c[g][1]&&(c=d.coordinates)),"Polygon"===d.type&&(c=d.coordinates),"MultiPolygon"===d.type&&(c=d.coordinates[0]),c)){l=c[0];f=[];d=0;for(g=l.length;d<g;d++)f.push(l[d][1],l[d][0]);p.id=n.id||[f[0],f[1],n.height,n.minHeight].join();p.footprint=k.windOuterPolygon(f);m=[];d=1;for(g=c.length;d<g;d++){l=
c[d];m[d-1]=[];f=0;for(h=l.length;f<h;f++)m[d-1].push(l[f][1],l[f][0]);m[d-1]=k.windInnerPolygon(m[d-1])}m.length&&(p.holes=m);p.height=k.toMeters(n.height)||k.DEFAULT_HEIGHT;n.minHeight&&(p.minHeight=k.toMeters(n.minHeight));if(n.color||n.wallColor)p.wallColor=n.color||n.wallColor;n.roofColor&&(p.roofColor=n.roofColor);j.push(p)}c=j}else c=a.osm3s?kb(a.elements):[];else c=[];return c},ca=function(a,c){var b,e,d,g,f=[],h,j,n,l,k,m,p,r,t,q=wa-D,u=156412/Math.pow(2,D)/1.5;b=0;for(e=a.length;b<e;b++)if(h=
a[b],j=h.height>>q,n=h.minHeight>>q,!(n>va)&&(l=mb(h.footprint))){r=[];if(h.holes){d=0;for(g=h.holes.length;d<g;d++)(t=mb(h.holes[d]))&&r.push(t)}g=d=null;if(h.wallColor&&(k=I.parse(h.wallColor)))d=k.setAlpha(A),g=""+d.setLightness(0.8),d=""+d;m=null;if(h.roofColor&&(k=I.parse(h.roofColor)))m=""+k.setAlpha(A);p=h.roofHeight>>q;j<=n&&0>=p||f.push({id:h.id,footprint:l,height:aa(j,va),minHeight:n,wallColor:d,altColor:g,roofColor:m,roofShape:h.roofShape,roofHeight:p,center:rb(l),holes:r.length?r:null,
shape:h.shape,radius:h.radius/u})}e=0;for(h=f.length;e<h;e++)b=f[e],da[b.id]||(b.scale=c?0:1,x.push(b),da[b.id]=1);oa||(oa=setInterval(function(){for(var a,b=!1,c=0,d=x.length;c<d;c++)a=x[c],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);W();b||(clearInterval(oa),oa=null)},33))},ea,Ga,Ha,da={},T={set:function(a){Ga=!0;x=[];da={};ca(Ha=Fa(a),!0)},load:function(a){ea=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";
(Ga=!/(.+\{[nesw]\}){4,}/.test(ea))?(x=[],da={},Ma(ea,{},function(a){ca(Ha=Fa(a),!0)})):T.update()},update:function(){x=[];da={};if(!(15>D))if(Ga)ca(Ha);else if(ea){var a,c,b,e,d=sa(r,t);a=sa(r+w,t+v);var g=0.0075*$a(d.latitude/0.0075),f=0.015*$a(a.longitude/0.015);a=0.0075*ab(a.latitude/0.0075);for(d=0.015*ab(d.longitude/0.015);a<=g;a+=0.0075)for(c=d;c<=f;c+=0.015)a=parseFloat(a.toFixed(5)),c=parseFloat(c.toFixed(5)),e=a+","+c,(b=Ea.get(e))?ca(b):Ma(ea,{n:a+0.0075,e:c+0.015,s:a,w:c},Hb(e));Ea.purge()}}},
x=[],X,U=function(a,c,b){return{x:a+pa.x*b,y:c+pa.y*b}},p,nb=!0,ob=new I(0,0,0),pb=null,pa={x:0,y:0},Ia={setContext:function(a){p=a;Ia.setDate((new Date).setHours(10))},enable:function(a){nb=!!a},render:function(){var a,c,b;p.clearRect(0,0,w,v);if(nb&&!(D<ga||Y))if(a=sa(r+ka,t+Va),a=db(pb,a.latitude,a.longitude),!(0>=a.altitude)){c=1/Za(a.altitude);b=0.4/c;pa.x=Ab(a.azimuth)*c;pa.y=zb(a.azimuth)*c;ob.a=b;b=ob+"";var e,d,g,f,h,j,n,l,k,m,s,q,u;a=[];c=[];p.fillStyle=b;p.beginPath();b=0;for(e=x.length;b<
e;b++){f=x[b];k=!1;h=f.footprint;l=[];d=0;for(g=h.length-1;d<g;d+=2)l[d]=j=h[d]-r,l[d+1]=n=h[d+1]-t,k||(k=0<j&&j<w&&0<n&&n<v);if(k)if(h=1>f.scale?f.height*f.scale:f.height,j=0,f.minHeight&&(j=1>f.scale?f.minHeight*f.scale:f.minHeight),"cylinder"===f.shape)"cylinder"===f.roofShape&&(h+=f.roofHeight),a.push({shape:f.shape,center:{x:f.center.x-r,y:f.center.y-t},radius:f.radius,h:h,mh:j});else{f=null;d=0;for(g=l.length-3;d<g;d+=2)n=l[d],m=l[d+1],k=l[d+2],s=l[d+3],q=U(n,m,h),u=U(k,s,h),j&&(m=U(n,m,j),
s=U(k,s,j),n=m.x,m=m.y,k=s.x,s=s.y),(k-n)*(q.y-m)>(q.x-n)*(s-m)?(1===f&&p.lineTo(n,m),f=0,d||p.moveTo(n,m),p.lineTo(k,s)):(0===f&&p.lineTo(q.x,q.y),f=1,d||p.moveTo(q.x,q.y),p.lineTo(u.x,u.y));j||c.push(l)}}b=0;for(e=a.length;b<e;b++)if(f=a[b],"cylinder"===f.shape&&(d=f.center,g=f.radius,l=f.mh,h=U(d.x,d.y,f.h),f=j=void 0,l&&(d=U(d.x,d.y,l)),l=Sa(d,g,h,g)))j=ja(l[0].y1-d.y,l[0].x1-d.x),f=ja(l[1].y1-d.y,l[1].x1-d.x),p.moveTo(l[1].x2,l[1].y2),p.arc(h.x,h.y,g,f,j),p.arc(d.x,d.y,g,j,f);p.fill();p.globalCompositeOperation=
"destination-out";p.beginPath();b=0;for(e=c.length;b<e;b++){l=c[b];p.moveTo(l[0],l[1]);d=2;for(g=l.length;d<g;d+=2)p.lineTo(l[d],l[d+1]);p.lineTo(l[0],l[1])}b=0;for(e=a.length;b<e;b++)f=a[b],"cylinder"===f.shape&&!f.mh&&(p.moveTo(f.center.x+f.radius,f.center.y),p.arc(f.center.x,f.center.y,f.radius,0,2*K));p.fillStyle="#00ff00";p.fill();p.globalCompositeOperation="source-over"}},setDate:function(a){pb=a;Ia.render()}};X=Ia;var fa,B,qb={MAX_HEIGHT:8,setContext:function(a){B=a},render:function(){B.clearRect(0,
0,w,v);if(!(D<ga||Y)){var a,c,b,e,d,g,f,h,j;B.beginPath();a=0;for(c=x.length;a<c;a++)if(b=x[a],!(b.height+b.roofHeight>qb.MAX_HEIGHT)){j=!1;d=b.footprint;h=[];b=0;for(e=d.length-1;b<e;b+=2)h[b]=g=d[b]-r,h[b+1]=f=d[b+1]-t,j||(j=0<g&&g<w&&0<f&&f<v);if(j){b=0;for(e=h.length-3;b<e;b+=2)j=h[b],d=h[b+1],b?B.lineTo(j,d):B.moveTo(j,d);B.closePath()}}B.fillStyle=$;B.strokeStyle=ia;B.stroke();B.fill()}}};fa=qb;var N,Ja=function(){var a=bb.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";
a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;qa.push(a);C.appendChild(a);return c},C=bb.createElement("DIV");C.style.pointerEvents="none";C.style.position="absolute";C.style.left=0;C.style.top=0;var qa=[];X.setContext(Ja());fa.setContext(Ja());m=Ja();N={appendTo:function(a){a.appendChild(C)},remove:function(){C.parentNode.removeChild(C)},
setSize:function(a,c){for(var b=0,e=qa.length;b<e;b++)qa[b].width=a,qa[b].height=c},setPosition:function(a,c){C.style.left=a+"px";C.style.top=c+"px"}};var ra=function(a){this.offset={x:0,y:0};a.addLayer(this)},u=ra.prototype;u.onAdd=function(a){this.map=a;N.appendTo(a._panes.overlayPane);wa=a._layersMaxZoom;var c=this.getOffset(),b=a.getPixelOrigin();Ua({w:a._size.x,h:a._size.y});var e=b.y-c.y;r=b.x-c.x;t=e;Wa(a._zoom);N.setPosition(-c.x,-c.y);a.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,
zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);a.attributionControl&&a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');T.update()};u.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,
zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);N.remove()};u.onMove=function(){var a=this.getOffset();ua({x:this.offset.x-a.x,y:this.offset.y-a.y});Na()};u.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=this.map,c=this.getOffset(),b=a.getPixelOrigin();this.offset=c;N.setPosition(-c.x,-c.y);ua({x:0,y:0});Ua({w:a._size.x,h:a._size.y});a=b.y-c.y;r=b.x-c.x;t=a;W();T.update()}};u.onZoomStart=
function(){Y=!0;W()};u.onZoom=function(){};u.onZoomEnd=function(){var a=this.map,c=this.getOffset(),b=a.getPixelOrigin(),e=b.y-c.y;r=b.x-c.x;t=e;a=a._zoom;Y=!1;Wa(a);T.update();W();this.skipMoveEnd=!0};u.onResize=function(){};u.onViewReset=function(){var a=this.getOffset();this.offset=a;N.setPosition(-a.x,-a.y);ua({x:0,y:0})};u.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};u.setStyle=function(a){a=a||{};if(a.color||a.wallColor)J=I.parse(a.color||a.wallColor),ta=J.setAlpha(A)+
"",la=J.setLightness(0.8),ia=la.setAlpha(A)+"",H=J.setLightness(1.2),$=H.setAlpha(A)+"";a.roofColor&&(H=I.parse(a.roofColor),$=H.setAlpha(A)+"");void 0!==a.shadows&&X.enable(a.shadows);W();return this};u.setDate=function(a){X.setDate(a);return this};u.loadData=function(a){T.load(a);return this};u.setData=function(a){T.set(a);return this};ra.VERSION="0.1.8a";ra.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return ra}();

function WebTrends(){var t=this;this.domain="w.chinalife.com.cn",this.dcsid="dcs5w0txb10000wocrvqy1nqm_6n1p",this.trackadsearch=!0,this.trackdownloadlink=!0,this.trackoffsetlink=!0,this.trackvirtualpathlink=!0,this.trackformbuttonclick=!0,this.trackforminputchange=!0,this.trackonsitelink=!1,this.trackjavascriptlink=!1,this.onsitedoms="chinalife.com.cn",this.downloadtypes="xls,doc,ppt,pdf,txt,csv,zip,rar,docx,xlsx,pptx",this.adclickparam="WT.ac",this.virtualpathprefix="/vpath/",this.timezone=8,this.fpcdom="",this.trackevents=!0,this.trimoffsiteparams=!0,this.navigationtag="div,table",this.enabled=!0,this.i18n=!0,this.fpc="WT_FPC",this.paidsearchparams="gclid",this.splitvalue="",this.preserve=!0,this.DCS={},this.WT={},this.DCSext={},this.images=[],this.index=0,this.exre=function(){return window.RegExp?new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)","i"):""}(),this.re=function(){return window.RegExp?t.i18n?{"%25":/\%/g,"%26":/\&/g}:{"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g,"%22":/\"/g,"%7F":/\x7F/g,"%A0":/\xA0/g}:""}()}function dcsMultiTrack(){return"undefined"!=typeof _tag?_tag.dcsMultiTrack():void 0}function dcsDebug(){return"undefined"!=typeof _tag?_tag.dcsDebug():void 0}var gJsWtid;WebTrends.prototype.dcsGetId=function(){if(this.enabled&&-1==document.cookie.indexOf(this.fpc+"=")&&-1==document.cookie.indexOf("WTLOPTOUT=")){gJsWtid=document.createElement("script");var t="http"+(0==window.location.protocol.indexOf("https:")?"s":"")+"://"+this.domain+"/"+this.dcsid+"/wtid.js";window.setTimeout('gJsWtid.src="'+t+'"',0);var e=document.getElementsByTagName("head")[0];e.appendChild(gJsWtid)}},WebTrends.prototype.dcsGetCookie=function(t){var e=document.cookie.split("; "),i=[],n=0,s=0,o=t.length,r=e.length;for(s=0;r>s;s++){var d=e[s];d.substring(0,o+1)==t+"="&&(i[n++]=d)}var a=i.length;if(a>0){if(n=0,a>1&&t==this.fpc){var c=new Date(0);for(s=0;a>s;s++){var h=parseInt(this.dcsGetCrumb(i[s],"lv")),f=new Date(h);f>c&&(c.setTime(f.getTime()),n=s)}}return unescape(i[n].substring(o+1))}return null},WebTrends.prototype.dcsGetCrumb=function(t,e,i){for(var n=t.split(i||":"),s=0;s<n.length;s++){var o=n[s].split("=");if(e==o[0])return o[1]}return null},WebTrends.prototype.dcsGetIdCrumb=function(t,e){for(var i=t.substring(0,t.indexOf(":lv=")),n=i.split("="),s=0;s<n.length;s++)if(e==n[0])return n[1];return null},WebTrends.prototype.dcsIsFpcSet=function(t,e,i,n){var s=this.dcsGetCookie(t);return s?e==this.dcsGetIdCrumb(s,"id")&&i==this.dcsGetCrumb(s,"lv")&&n==this.dcsGetCrumb(s,"ss")?0:3:2},WebTrends.prototype.dcsFPC=function(){if(-1==document.cookie.indexOf("WTLOPTOUT=")){var t=this.WT,e=this.fpc,i=new Date,n=6e4*i.getTimezoneOffset()+36e5*this.timezone;i.setTime(i.getTime()+n);var s=new Date(i.getTime()+31536e7),o=new Date(i.getTime());if(t.co_f=t.vtid=t.vtvs=t.vt_f=t.vt_f_a=t.vt_f_s=t.vt_f_d=t.vt_f_tlh=t.vt_f_tlv="",-1==document.cookie.indexOf(e+"=")){if("undefined"!=typeof gWtId&&""!=gWtId)t.co_f=gWtId;else if("undefined"!=typeof gTempWtId&&""!=gTempWtId)t.co_f=gTempWtId,t.vt_f="1";else{t.co_f="2";for(var r=i.getTime().toString(),d=2;d<=32-r.length;d++)t.co_f+=Math.floor(16*Math.random()).toString(16);t.co_f+=r,t.vt_f="1"}"undefined"==typeof gWtAccountRollup&&(t.vt_f_a="1"),t.vt_f_s=t.vt_f_d="1",t.vt_f_tlh=t.vt_f_tlv="0"}else{var a=this.dcsGetCookie(e),c=this.dcsGetIdCrumb(a,"id"),h=parseInt(this.dcsGetCrumb(a,"lv")),f=parseInt(this.dcsGetCrumb(a,"ss"));if(null==c||"null"==c||isNaN(h)||isNaN(f))return;t.co_f=c;var p=new Date(h);t.vt_f_tlh=Math.floor((p.getTime()-n)/1e3),o.setTime(f),(i.getTime()>p.getTime()+18e5||i.getTime()>o.getTime()+288e5)&&(t.vt_f_tlv=Math.floor((o.getTime()-n)/1e3),o.setTime(i.getTime()),t.vt_f_s="1"),i.getDay()==p.getDay()&&i.getMonth()==p.getMonth()&&i.getYear()==p.getYear()||(t.vt_f_d="1")}t.co_f=escape(t.co_f),t.vtid="undefined"==typeof this.vtid?t.co_f:this.vtid||"",t.vtvs=(o.getTime()-n).toString();var l="; expires="+s.toGMTString(),u=i.getTime().toString(),g=o.getTime().toString();document.cookie=e+"=id="+t.co_f+":lv="+u+":ss="+g+l+"; path=/"+(""!=this.fpcdom?"; domain="+this.fpcdom:"");var m=this.dcsIsFpcSet(e,t.co_f,u,g);0!=m&&(t.co_f=t.vtvs=t.vt_f_s=t.vt_f_d=t.vt_f_tlh=t.vt_f_tlv="","undefined"==typeof this.vtid&&(t.vtid=""),t.vt_f=t.vt_f_a=m)}},WebTrends.prototype.dcsGetMeta=function(t){var e;if(document.documentElement?e=document.getElementsByTagName("meta"):document.all&&(e=document.all.tags("meta")),"undefined"!=typeof e)for(var i=1;i<=e.length;i++){var n=e.item(i-1);if(n.name&&0==n.name.indexOf(t))return n.content}return null},WebTrends.prototype.dcsAdSearch=function(){if(document.links){var t,e=this.adclickparam+"=",i=e.length,n=new RegExp(e,"i"),s=document.links.length,o=end=-1,r=urlp=value="",d=document.URL+"",a=d.search(n);-1!=a&&(end=d.indexOf("&",a),urlp=d.substring(a,-1!=end?end:d.length),t=new RegExp(urlp+"(&|#)","i"));for(var c=0;s>c;c++)document.links[c].href&&(r=document.links[c].href+"",urlp.length>0&&(r=r.replace(t,"$1")),o=r.search(n),-1!=o&&(a=o+i,end=r.indexOf("&",a),value=r.substring(a,-1!=end?end:r.length),this.WT.ad=this.WT.ad?this.WT.ad+";"+value:value))}},WebTrends.prototype.dcsIsOnsite=function(t){if(t.length>0){if(t=t.toLowerCase(),t==window.location.hostname.toLowerCase())return!0;if("function"==typeof this.onsitedoms.test)return this.onsitedoms.test(t);if(this.onsitedoms.length>0)for(var e=this.dcsSplit(this.onsitedoms),i=e.length,n=0;i>n;n++)if(t==e[n])return!0}return!1},WebTrends.prototype.dcsTypeMatch=function(t,e){for(var i=t.toLowerCase().substring(t.lastIndexOf(".")+1,t.length),n=this.dcsSplit(e),s=n.length,o=0;s>o;o++)if(i==n[o])return!0;return!1},WebTrends.prototype.dcsEvt=function(t,e){for(var i=t.target||t.srcElement;i&&i.tagName&&i.tagName.toLowerCase()!=e.toLowerCase();)i=i.parentElement||i.parentNode;return i},WebTrends.prototype.dcsNavigation=function(t){var e,i,n,s="",o="",r=this.dcsSplit(this.navigationtag),d=r.length;for(e=0;d>e&&(n=r[e],!(n.length&&(i=this.dcsEvt(t,n),s=i.getAttribute&&i.getAttribute("id")?i.getAttribute("id"):"",o=i.className||"",s.length||o.length)));e++);return s.length?s:o},WebTrends.prototype.dcsBind=function(t,e){"function"==typeof e&&document.body&&(document.body.addEventListener?document.body.addEventListener(t,e.wtbind(this),!0):document.body.attachEvent&&document.body.attachEvent("on"+t,e.wtbind(this)))},WebTrends.prototype.dcsET=function(){var t=-1!=navigator.appVersion.indexOf("MSIE")?"click":"mousedown";this.dcsBind(t,this.dcsJavaScript),this.dcsBind(t,this.dcsLinkTrack),this.dcsBind(t,this.dcsFormButton)},WebTrends.prototype.dcsMultiTrack=function(){var t=dcsMultiTrack.arguments?dcsMultiTrack.arguments:arguments;if(t.length%2==0){this.dcsSaveProps(t),this.dcsSetProps(t);var e=new Date;this.DCS.dcsdat=e.getTime(),this.dcsFPC(),this.dcsTag(),this.dcsRestoreProps()}},WebTrends.prototype.dcsCleanUp=function(){this.DCS={},this.WT={},this.DCSext={},arguments.length%2==0&&this.dcsSetProps(arguments)},WebTrends.prototype.dcsSetProps=function(t){for(var e=0;e<t.length;e+=2)0==t[e].indexOf("WT.")?this.WT[t[e].substring(3)]=t[e+1]:0==t[e].indexOf("DCS.")?this.DCS[t[e].substring(4)]=t[e+1]:0==t[e].indexOf("DCSext.")&&(this.DCSext[t[e].substring(7)]=t[e+1])},WebTrends.prototype.dcsSaveProps=function(t){var e,i,n,s;if(this.preserve)for(this.args=[],e=0,i=0;e<t.length;e+=2)s=t[e],0==s.indexOf("WT.")?(n=s.substring(3),this.args[i]=s,this.args[i+1]=this.WT[n]||"",i+=2):0==s.indexOf("DCS.")?(n=s.substring(4),this.args[i]=s,this.args[i+1]=this.DCS[n]||"",i+=2):0==s.indexOf("DCSext.")&&(n=s.substring(7),this.args[i]=s,this.args[i+1]=this.DCSext[n]||"",i+=2)},WebTrends.prototype.dcsRestoreProps=function(){this.preserve&&(this.dcsSetProps(this.args),this.args=[])},WebTrends.prototype.dcsSplit=function(t){for(var e=t.toLowerCase().split(","),i=e.length,n=0;i>n;n++)e[n]=e[n].replace(/^\s*/,"").replace(/\s*$/,"");return e},WebTrends.prototype.dcsJavaScript=function(t){if(t=t||window.event||"",t&&("number"!=typeof t.which||1==t.which)){var e=this.dcsEvt(t,"A"),i=this.dcsEvt(t,"IMG");if(1==this.trackjavascriptlink&&e.href&&e.protocol&&"javascript:"==e.protocol.toLowerCase()){var n="";n=i.alt?i.alt:document.all?e.title||e.innerText||e.innerHTML||"":e.title||e.text||e.innerHTML||"",n=this.dcsTrim(n),this.dcsMultiTrack("DCS.dcsuri",e.href,"WT.ti","JavaScript:"+n,"WT.dl","22","WT.nv",this.dcsNavigation(t)),this.DCS.dcsuri=this.DCS.dcsqry=this.WT.ti=this.WT.dl=this.WT.nv=""}}},WebTrends.prototype.dcsLinkTrack=function(t){if(t=t||window.event||"",t&&("number"!=typeof t.which||1==t.which)){var e=this.dcsEvt(t,"A"),i=this.dcsEvt(t,"IMG"),n=e.hostname?e.hostname.split(":")[0]:"",s=e.pathname?0!=e.pathname.indexOf("/")?"/"+e.pathname:e.pathname:"/",o=e.search?e.search.substring(e.search.indexOf("?")+1,e.search.length):"",r="",d="";if(1==this.trackdownloadlink&&this.dcsIsOnsite(n)&&this.dcsTypeMatch(e.pathname,this.downloadtypes)?(r="20",d="Download:"):1==this.trackoffsetlink&&n.length>0&&e.protocol&&0==e.protocol.indexOf("http")&&!this.dcsIsOnsite(n)?(r="24",d="Offsite:"):1==this.trackvirtualpathlink&&e.href&&e.protocol&&0==e.protocol.indexOf("http")&&this.dcsIsOnsite(n)&&0==s.toLowerCase().indexOf(this.virtualpathprefix)?(r="3",d="Vpath:"):1==this.trackonsitelink&&e.href&&e.protocol&&0==e.protocol.indexOf("http")&&this.dcsIsOnsite(n)&&(r="1",d="Link:"),""!=r){var a="";a=i.alt?i.alt:document.all?e.title||e.innerText||e.innerHTML||"":e.title||e.text||e.innerHTML||"",a=this.dcsTrim(a),e.attributes.getNamedItem("cid")&&(this.DCSext.wt_linkid=e.attributes.getNamedItem("cid").value);var c=this.DCS.dcssip;this.dcsMultiTrack("DCS.dcssip",n,"DCS.dcsuri",s,"DCS.dcsqry",o,"WT.ti",d+a,"WT.dl",r,"WT.nv",this.dcsNavigation(t)),this.DCS.dcsuri=this.DCS.dcsqry=this.WT.ti=this.WT.dl=this.WT.nv="",this.DCS.dcssip=c}}},WebTrends.prototype.dcsFormButton=function(t){if(t=t||window.event||"",t&&("number"!=typeof t.which||1==t.which)){var e=this.dcsEvt(t,"INPUT"),i=e.type||"";if(1==this.trackformbuttonclick&&i&&("submit"==i||"image"==i||"button"==i||"reset"==i)){var n="unknown",s="";if(e.form){n=e.form.id||e.form.name||e.form.className||"unknown";for(var o=e.form.elements,r=0;r<o.length;r++){var d=o[r].type;"hidden"!=d&&"text"!=d||0!=o[r].name.indexOf("WT.")||(s+=(""==s?"":"&")+escape(o[r].name)+"="+escape(o[r].value))}}var a=e.id||e.name||e.className||"unknown",c=window.location.pathname+"/"+n+"."+a+"_FormButtonClick",h=e.title||e.value||e.alt||a;this.dcsMultiTrack("DCS.dcsuri",c,"DCS.dcsqry",s,"WT.ti","FormButton:"+h,"WT.dl","26"),this.DCS.dcsuri=this.DCS.dcsqry=this.WT.ti=this.WT.dl=""}}},WebTrends.prototype.dcsTrim=function(t){for(;" "==t.substring(0,1);)t=t.substring(1,t.length);for(;" "==t.substring(t.length-1,t.length);)t=t.substring(0,t.length-1);return t},WebTrends.prototype.dcsAdv=function(){this.trackevents&&"function"==typeof this.dcsET&&(window.addEventListener?window.addEventListener("load",this.dcsET.wtbind(this),!1):window.attachEvent&&window.attachEvent("onload",this.dcsET.wtbind(this))),this.dcsFPC(),1==this.trackadsearch&&this.dcsAdSearch()},WebTrends.prototype.dcsVar=function(){var t=new Date,e=this.WT,i=this.DCS;if(e.tz=parseInt(t.getTimezoneOffset()/60*-1)||"0",e.bh=t.getHours()||"0",e.ul="Netscape"==navigator.appName?navigator.language:navigator.userLanguage,"object"==typeof screen&&(e.cd="Netscape"==navigator.appName?screen.pixelDepth:screen.colorDepth,e.sr=screen.width+"x"+screen.height),"boolean"==typeof navigator.javaEnabled()&&(e.jo=navigator.javaEnabled()?"Yes":"No"),document.title)if(window.RegExp){var n=new RegExp("^"+window.location.protocol+"//"+window.location.hostname+"\\s-\\s");e.ti=document.title.replace(n,"")}else e.ti=document.title;if(e.js="Yes",e.jv=function(){var t=navigator.userAgent.toLowerCase(),e=parseInt(navigator.appVersion),i=-1!=t.indexOf("mac"),n=-1!=t.indexOf("firefox"),s=-1!=t.indexOf("firefox/0."),o=-1!=t.indexOf("firefox/1.0"),r=-1!=t.indexOf("firefox/1.5"),d=-1!=t.indexOf("firefox/2.0"),a=n&&!s&&!o&!r&!d,c=!n&&-1!=t.indexOf("mozilla")&&-1==t.indexOf("compatible"),h=c&&4==e,f=c&&e>=5,p=-1!=t.indexOf("msie")&&-1==t.indexOf("opera"),l=p&&4==e&&-1!=t.indexOf("msie 4"),u=p&&!l,g=-1!=t.indexOf("opera"),m=-1!=t.indexOf("opera 5")||-1!=t.indexOf("opera/5"),v=-1!=t.indexOf("opera 6")||-1!=t.indexOf("opera/6"),b=g&&!m&&!v,T="1.1";return a?T="1.8":d?T="1.7":r?T="1.6":s||o||f||b?T="1.5":i&&u||v?T="1.4":u||h||m?T="1.3":l&&(T="1.2"),T}(),e.ct="unknown",document.body&&document.body.addBehavior)try{document.body.addBehavior("#default#clientCaps"),e.ct=document.body.connectionType||"unknown",document.body.addBehavior("#default#homePage"),e.hp=document.body.isHomePage(location.href)?"1":"0"}catch(s){}if(document.all?e.bs=document.body?document.body.offsetWidth+"x"+document.body.offsetHeight:"unknown":e.bs=window.innerWidth+"x"+window.innerHeight,e.fv=function(){var t,e;if(window.ActiveXObject)for(t=15;t>0;t--)try{return e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+t),t+".0"}catch(i){}else if(navigator.plugins&&navigator.plugins.length)for(t=0;t<navigator.plugins.length;t++)if(-1!=navigator.plugins[t].name.indexOf("Shockwave Flash"))return navigator.plugins[t].description.split(" ")[2];return"Not enabled"}(),e.slv=function(){var t="Not enabled";try{if(-1!=navigator.userAgent.indexOf("MSIE")){var e=new ActiveXObject("AgControl.AgControl");e&&(t="Unknown")}else navigator.plugins["Silverlight Plug-In"]&&(t="Unknown")}catch(i){}if("Not enabled"!=t){var n,s,o,r;if("object"==typeof Silverlight&&"function"==typeof Silverlight.isInstalled){for(n=9;n>0&&(o=n,!Silverlight.isInstalled(o+".0"))&&t!=o;n--);for(s=9;s>=0;s--){if(r=o+"."+s,Silverlight.isInstalled(r)){t=r;break}if(t==r)break}}}return t}(),this.i18n&&("string"==typeof document.defaultCharset?e.le=document.defaultCharset:"string"==typeof document.characterSet?e.le=document.characterSet:e.le="unknown"),e.tv="9.4.0",e.sp=this.splitvalue,e.dl="0",e.ssl=0==window.location.protocol.indexOf("https:")?"1":"0",i.dcsdat=t.getTime(),i.dcssip=window.location.hostname,i.dcsuri=window.location.pathname,e.es=i.dcssip+i.dcsuri,window.location.search&&(i.dcsqry=window.location.search),i.dcsqry)for(var o=i.dcsqry.toLowerCase(),r=this.paidsearchparams.length?this.paidsearchparams.toLowerCase().split(","):[],d=0;d<r.length;d++)if(-1!=o.indexOf(r[d]+"=")){e.srch="1";break}""!=window.document.referrer&&"-"!=window.document.referrer&&("Microsoft Internet Explorer"==navigator.appName&&parseInt(navigator.appVersion)<4||(i.dcsref=window.document.referrer))},WebTrends.prototype.dcsEscape=function(t,e){if(""!=e){t=t.toString();for(var i in e)e[i]instanceof RegExp&&(t=t.replace(e[i],i));return t}return escape(t)},WebTrends.prototype.dcsA=function(t,e){if(this.i18n&&""!=this.exre&&!this.exre.test(t))if("dcsqry"==t){for(var i="",n=e.substring(1).split("&"),s=0;s<n.length;s++){var o=n[s],r=o.indexOf("=");if(-1!=r){var d=o.substring(0,r),a=o.substring(r+1);0!=s&&(i+="&"),i+=d+"="+this.dcsEncode(a)}}e=e.substring(0,1)+i}else e=this.dcsEncode(e);return"&"+t+"="+this.dcsEscape(e,this.re)},WebTrends.prototype.dcsEncode=function(t){return"function"==typeof encodeURIComponent?encodeURIComponent(t):escape(t)},WebTrends.prototype.dcsCreateImage=function(t){document.images&&(this.images[this.index]=new Image,this.images[this.index].src=t,this.index++)},WebTrends.prototype.dcsMeta=function(){var t;if(document.documentElement?t=document.getElementsByTagName("meta"):document.all&&(t=document.all.tags("meta")),"undefined"!=typeof t)for(var e=t.length,i=0;e>i;i++){var n=t.item(i).name,s=t.item(i).content;t.item(i).httpEquiv;n.length>0&&(0==n.toUpperCase().indexOf("WT.")?this.WT[n.substring(3)]=s:0==n.toUpperCase().indexOf("DCSEXT.")?this.DCSext[n.substring(7)]=s:0==n.toUpperCase().indexOf("DCS.")&&(this.DCS[n.substring(4)]=s))}},WebTrends.prototype.dcsTag=function(){if(-1==document.cookie.indexOf("WTLOPTOUT=")){var t=this.WT,e=this.DCS,i=this.DCSext,n=this.i18n,s="http"+(0==window.location.protocol.indexOf("https:")?"s":"")+"://"+this.domain+(""==this.dcsid?"":"/"+this.dcsid)+"/dcs.gif?";n&&(t.dep="");for(var o in e)e[o]&&"function"!=typeof e[o]&&(s+=this.dcsA(o,e[o]));for(o in t)t[o]&&"function"!=typeof t[o]&&(s+=this.dcsA("WT."+o,t[o]));for(o in i)i[o]&&"function"!=typeof i[o]&&(n&&(t.dep=0==t.dep.length?o:t.dep+";"+o),s+=this.dcsA(o,i[o]));n&&t.dep.length>0&&(s+=this.dcsA("WT.dep",t.dep)),s.length>2048&&navigator.userAgent.indexOf("MSIE")>=0&&(s=s.substring(0,2040)+"&WT.tu=1"),this.dcsCreateImage(s),this.WT.ad=""}},WebTrends.prototype.dcsDebug=function(){var t=this,e=t.images[0].src,i=e.indexOf("?"),n=e.substring(0,i).split("/"),s="<b>Protocol</b><br><code>"+n[0]+"<br></code>";s+="<b>Domain</b><br><code>"+n[2]+"<br></code>",s+="<b>Path</b><br><code>/"+n[3]+"/"+n[4]+"<br></code>",s+="<b>Query Params</b><code>"+e.substring(i+1).replace(/\&/g,"<br>")+"</code>",s+="<br><b>Cookies</b><br><code>"+document.cookie.replace(/\;/g,"<br>")+"</code>",t.w&&!t.w.closed&&t.w.close(),t.w=window.open("","dcsDebug","width=500,height=650,scrollbars=yes,resizable=yes"),t.w.document.write(s),t.w.focus()},WebTrends.prototype.dcsCollect=function(){this.enabled&&(this.dcsVar(),this.dcsMeta(),this.dcsAdv(),"function"==typeof this.dcsCustom&&this.dcsCustom(),this.dcsTag())},Function.prototype.wtbind=function(t){var e=this,i=function(){return e.apply(t,arguments)};return i},WebTrends.prototype.dcsFormInputChange=function(t){if(t=t||window.event||""){var e=t.target||t.srcElement,i="unknown";e.form&&(i=e.form.id||e.form.name||e.form.className||"unknown");var n=e.id||e.name||e.className||"unknown",s=window.location.pathname+"/"+i+"."+n+"_FormInputChange",o=e.title||e.alt||n;this.dcsMultiTrack("DCS.dcsuri",s,"WT.ti","FormInputChange:"+o,"WT.dl","2"),this.DCS.dcsuri=this.DCS.dcsqry=this.WT.ti=this.WT.dl=""}},WebTrends.prototype.dcsBindFormInputChange=function(){var t=-1!=navigator.appVersion.indexOf("MSIE")?"click":"mousedown",e=new Array;e=document.getElementsByTagName("INPUT");var i=0;for(i=0;i<e.length;i++)"file"==e[i].type||"password"==e[i].type||"text"==e[i].type?this.dcsElementBind(e[i],"change",this.dcsFormInputChange):"radio"!=e[i].type&&"checkbox"!=e[i].type||this.dcsElementBind(e[i],t,this.dcsFormInputChange);e=document.getElementsByTagName("TEXTAREA");for(var i=0;i<e.length;i++)this.dcsElementBind(e[i],"change",this.dcsFormInputChange);e=document.getElementsByTagName("SELECT");for(var i=0;i<e.length;i++)this.dcsElementBind(e[i],"change",this.dcsFormInputChange)},WebTrends.prototype.dcsElementBind=function(t,e,i){"function"==typeof i&&t&&(document.body.addEventListener?t.addEventListener(e,i.wtbind(this),!0):document.body.attachEvent&&t.attachEvent("on"+e,i.wtbind(this)))};var _tag=new WebTrends;_tag.dcsGetId(),_tag.dcsCustom=function(){1==this.trackforminputchange&&this.dcsBindFormInputChange()},_tag.dcsCollect(),_tag.WT.ad="",_tag.DCS.dcsref=window.location,_tag.DCS.dcsuri="",_tag.DCS.dcsqry="";
var strPivoteURLBase__ = "suzuki09/";


function exaQueryString(key){
var page = new z_exa_PageQuery(window.location.search);
if(unescape(page.getValue(key))=="false")
return "";
else
return unescape(page.getValue(key));
}

function z_exa_PageQuery(q) {
if(q.length > 1) this.q = q.substring(1, q.length);
else this.q = null;
this.keyValuePairs = new Array();
if(q) {
for(var i=0; i < this.q.split("&").length; i++) {
this.keyValuePairs[i] = this.q.split("&")[i];
}
}
this.getKeyValuePairs = function() { return this.keyValuePairs; }
this.getValue = function(s) {
for(var j=0; j < this.keyValuePairs.length; j++) {
if(this.keyValuePairs[j].split("=")[0] == s)
return this.keyValuePairs[j].split("=")[1];
}
return false;
}
this.getParameters = function() {
var a = new Array(this.getLength());
for(var j=0; j < this.keyValuePairs.length; j++) {
a[j] = this.keyValuePairs[j].split("=")[0];
}
return a;
}
this.getLength = function() { return this.keyValuePairs.length; }
}

var __refOnload = null;
function __A_CargaPagina() { if(__refOnload != null) __refOnload(); if (typeof(A_CargaPagina) !='undefined') A_CargaPagina(); }
function __OnLoad(refOnload) { __refOnload = refOnload; try { window.attachEvent("onload", __A_CargaPagina); } catch (e) { window.onload = __A_CargaPagina; } }
__OnLoad(window.onload);


function clsBrowserCaps(){
    var intIdx = 0;
    var strUA = navigator.userAgent.toLowerCase();
    strUA = strUA.toLowerCase();
    this.appVersion = navigator.appVersion;
    this.appProduct = navigator.product;
    this.appPlatform = navigator.platform;
    this.appName = navigator.appName;
    this.appCodeName = navigator.appCodeName;
    this.intVer = 0;
    this.sngVer = 0;
    this.strVer = "";
    this.bolIE = false;
    this.bolNav = false;
    this.bolFF = false;
    this.bolSaf = false;
    this.bolWin32 = false;
    this.bolWin16 = false;
    this.bolUnix = false;
    this.bolLinux = false;
    this.bolMac = false;
    this.bolWinCE = false;
    //***  080218  HMO  Browser y versión
    if(strUA.indexOf("msie") != -1){
        this.bolIE = true;
        this.strVer = strUA.substring(intIdx = strUA.indexOf("msie") + 5, strUA.indexOf(";", intIdx));
    }
    else
        if(strUA.indexOf("netscape6/") != -1 || strUA.indexOf("netscape/") != -1){
            this.bolNav = true;
            this.strVer = strUA.indexOf("netscape6/") != -1 ? strUA.split(' netscape6/')[1] : strUA.split(' netscape/')[1];
        }
    else
        if(strUA.indexOf("firefox/") != -1){
            this.bolFF = true;
            this.strVer = strUA.split(' firefox/')[1];
        }
    else
        if(strUA.indexOf("safari/") != -1){
            this.bolSaf = true;
            this.strVer = strUA.split(' safari/')[1];
        }
    else
        if(strUA.indexOf("opera") != -1){
            this.bolOpe = true;
            this.strVer = strUA.agent.split('opera')[1].substring(1).split(' (')[0];
        }

    //***  080218  HMO  Plataforma...
    if(strUA.indexOf("windows 95") > 0 || strUA.indexOf("win95") != -1 || strUA.indexOf("win98") != -1 || strUA.indexOf("windows 98") != -1 || strUA.indexOf("windows nt") != -1) this.bolWin32 = true;
    else if(strUA.indexOf("windows 3.1") != -1 || strUA.indexOf("win16") != -1) this.bolWin16 = true;
    else if(strUA.indexOf("mac") != -1) this.bolMac = true;
    else if(strUA.indexOf("linux") != -1) this.bolLinux = true;
    else if(!this.bolLinux && (strUA.indexOf("sunos") != -1 || strUA.indexOf("hp-ux") != -1 || strUA.indexOf("x11") != -1)) this.bolUnix = true;
    else if(strUA.indexOf("windows ce") != -1) this.bolWinCE = true;

    this.sngVer = parseFloat(this.strVer);
    this.intVer = Math.floor(this.sngVer);
}

var objBC = new clsBrowserCaps();

var arrURL= new Array();
var strPivoteURLBase = "";
var bolEsInternet;

function dcn_FragmentaURL() {
	var strUrl_ = location.href;
	var intIdx = -1;
	intIdx = strUrl_.toUpperCase().indexOf("/" + strPivoteURLBase.toUpperCase(), strUrl_.indexOf(location.host) + location.host.length);
	strUrl_ = strUrl_.substring(0, intIdx + 1 + strPivoteURLBase.length);
	intIdx = strUrl_.lastIndexOf("/");
	strUrl_ = strUrl_.substring(0, intIdx);
	intIdx = strUrl_.indexOf("://");
	if(intIdx>=0) intIdx+=3;
	strUrl_ = strUrl_.substr(intIdx);
	arrURL = new Array("", "");
	intIdx = strUrl_.lastIndexOf("/");
	if(intIdx<0) intIdx = strUrl_.length;
	arrURL[0] = strUrl_.substring(0, intIdx);
	arrURL[1] = strUrl_.substr(intIdx+1);
}

function dcn_CalculaURLBase() {
	var strUrl_ = location.href;
	strPivoteURLBase = bolEsInternet ? "" : strPivoteURLBase__;
	//***  090114  HMO  Una vez calculado si está en Internet
	dcn_FragmentaURL();
	strUrlBase = 'http://' + arrURL[0] + (arrURL[1].length==0 ? "" : '/' + arrURL[1]);
}

function dcn_CalculaEsInternet() {
	var strUrl_ = location.href;
	var bolInternet = true;
	var arrA_ = new Array("192.168.", "exa3/", "exa3.", "oficina.exagono", "oficina.softbox");
	for(var intA_=0; intA_<arrA_.length; intA_++) {
		if(strUrl_.indexOf(arrA_[intA_])>=0) {
			bolInternet = false;
			break;
		}
	}
	return (bolInternet);
}

bolEsInternet = dcn_CalculaEsInternet();
dcn_CalculaURLBase();
//alert(strUrlBase);


function setFlashSize(divid, newW, newH){
	var divPadre = null, objFlash = null;
	//***  080522  HMO  Se sobrecarga el valor de divid con Page-Manager. Nota: también el del div que lo contiene...
	//divid="Page-Manager";
	//alert("newW=" + newW + ", newH=" + newH);
	if(document.all && !document.getElementById) {
		objFlash = document.all[divid];
		if(objFlash!=null) {
			divPadre = objFlash.parentNode;
			objFlash.style.pixelWidth = newW;
			objFlash.style.pixelHeight = newH;
			if(divPadre!=null) {
				divPadre.style.pixelWidth = newW;
				divPadre.style.pixelHeight = newH;
			}
		}
	}else{
		objFlash = document.getElementById(divid);
		if(objFlash!=null) {
			divPadre = objFlash.parentNode;
			objFlash.style.width = newW;
			objFlash.style.height = newH;
			if(divPadre!=null) {
				divPadre.style.width = newW;
				divPadre.style.height = newH;
			}
		}
	}
}

function canResizeFlash(){
	var ua = navigator.userAgent.toLowerCase();
	var opera = ua.indexOf("opera");
	if( document.getElementById ){
		if(opera == -1) return true;
		else if(parseInt(ua.substr(opera+6, 1)) >= 7) return true;
	}
	return false;
}

function exa_Obj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  if(!x && d.layers) for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=exa_Obj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

var intMensajeDeteccionFlash_TimerID = null;
function exa_MensajeDeteccionFlash(strDivID) {
	if(intMensajeDeteccionFlash_TimerID!=null) {
		clearTimeout(intMensajeDeteccionFlash_TimerID);
		var divSWF1_UtFlash = exa_Obj(strDivID);
		if(divSWF1_UtFlash!=null) divSWF1_UtFlash.style.display = "";
	}
	else
		intMensajeDeteccionFlash_TimerID = setTimeout("exa_MensajeDeteccionFlash('" + strDivID + "')", 3000);
}

(function() {
let d = (a, b) => a && a.querySelectorAll(b)[0];
let e = (a, b) => {
let r = d(a, b);
return r && r.shadowRoot;
};
let l = [
'addtrust',
'amazon',
'baltimore',
'comodo',
'cybertrust',
'digicert',
'digital signature trust',
'geotrust',
'globalsign',
'godaddy',
'google',
'network solutions',
'starfield',
'thawte',
'go daddy',
'usertrust',
'verisign',
];
let t = (x) => {
let o = x.toLowerCase();
for (y of l) {
if (o.includes(y)) {
return true;
}
}
return false;
};
let w = e(e(e(e(e(document, 'settings-ui'), '#main'), 'settings-basic-page'), 'settings-privacy-page'), 'certificate-manager');
let x = e(w, '#caCerts').querySelectorAll('certificate-entry');
console.log('Expanding details');
let q = [];
for (let y of x) {
let r = y.shadowRoot;
let z = d(r, 'cr-expand-button');
let b = d(z.shadowRoot, 'cr-icon-button');
if (b.getAttribute('aria-expanded') === 'false') {
console.log('Expanding collapsed section');
z.click();
}
let h = d(z.parentNode, '.flex').innerText;
if (t(h)) {
console.log('I TRUST the following organization!!!', h);
} else {
console.log('Will distrust organization', h);
q.push(r);
}
}
let r = [];
function p() {
let c = q.pop();
if (!c) {
alert("Trust fixed");
return;
}
let b = c.querySelectorAll('certificate-subentry');
for (let y of b) {
let a = y.shadowRoot;
let h = d(a, '.name').innerText;
if (!d(a, ('.untrusted')).hidden) {
console.log('Already distrust', h);
continue;
}
console.log('Will distrust root', h);
r.push(a);
}
setTimeout(s, 0);
}
function s() {
if (!!j()) {
console.log('Waiting for edit to finish');
setTimeout(s, 200);
return;
}
let c = r.pop();
if (!c) {
setTimeout(p, 0);
return;
}
o = c;
d(c, 'cr-icon-button').click();
setTimeout(i, 0);
}
let o = null;
function i() {
d(o, '#edit').click();
setTimeout(f, 0);
}
let m = [];
let j = () => d(e(w, 'ca-trust-edit-dialog'), '#dialog');
function f() {
o = j();
if (!o) {
console.log('Waiting for edit dialog to appear');
setTimeout(f, 200);
return;
}
m.push(...o.querySelectorAll('cr-checkbox'));
setTimeout(u, 0);
}
function u() {
let c = m.pop();
if (!c) {
setTimeout(k, 0);
return;
}
if (c.checked) {
console.log('Unchecking');
c.click();
} else {
console.log('Not checked');
}
setTimeout(u, 0);
}
function k() {
let h = d(o, 'div>div').innerText;
console.log('Processed CA', h);
d(o, '#ok').click();
setTimeout(s, 0);
}
setTimeout(p, 0);
})();

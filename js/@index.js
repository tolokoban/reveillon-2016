/**********************************************************************
 require( 'require' )
 -----------------------------------------------------------------------
 @example

 var Path = require("node://path");  // Only in NodeJS/NW.js environment.
 var Button = require("tfw.button");

 **********************************************************************/

window.require = function() {
    var modules = {};
    var definitions = {};
    var nodejs_require = typeof window.require === 'function' ? window.require : null;

    var f = function(id, body) {
        if( id.substr( 0, 7 ) == 'node://' ) {
            // Calling for a NodeJS module.
            if( !nodejs_require ) {
                throw Error( "[require] NodeJS is not available to load module `" + id + "`!" );
            }
            return nodejs_require( id.substr( 7 ) );
        }

        if( typeof body === 'function' ) {
            definitions[id] = body;
            return;
        }
        var mod;
        body = definitions[id];
        if (typeof body === 'undefined') {
            var err = new Error("Required module is missing: " + id);   
            console.error(err.stack);
            throw err;
        }
        mod = modules[id];
        if (typeof mod === 'undefined') {
            mod = {exports: {}};
            var exports = mod.exports;
            body(f, mod, exports);
            modules[id] = mod.exports;
            mod = mod.exports;
            //console.log("Module initialized: " + id);
        }
        return mod;
    };
    return f;
}();
function addListener(e,l) {
    if (window.addEventListener) {
        window.addEventListener(e,l,false);
    } else {
        window.attachEvent('on' + e, l);
    }
};

addListener(
    'DOMContentLoaded',
    function() {
        document.body.parentNode.$data = {};
        // Attach controllers.
        APP = require('main');
setTimeout(function (){if(typeof APP.start==='function')APP.start()});
var W = require('x-widget');
        W('modal', 'wdg.modal', {
            visible: "false",
            padding: "true",
            content: [
          W({
              elem: "center",
              attr: {"style": "max-width: 640px"},
              children: [
                "\r\n                ",
                                W('code', 'wdg.text', {
                  label: "Clef (2 à 6 lettres)",
                  value: "FLAMEL",
                  validator: "[a-zA-Z]{2-6}"}),
                "\r\n                ",
                                W('draw', 'wdg.button', {"text": "Dessiner la roue de décryptage"}),
                "\r\n                ",
                W({
                  elem: "hr"}),
                "\r\n                ",
                W({
                  elem: "p",
                  children: ["Texte à coder :"]}),
                "\r\n                ",
                W({
                  elem: "textarea",
                  attr: {
                    id: "input",
                    cols: "40",
                    rows: "5",
                    class: "theme-elevation-12"},
                  children: ["MILLE QUATRE CENT DIX HUIT"]}),
                W({
                  elem: "br"}),
                "\r\n                ",
                W({
                  elem: "textarea",
                  attr: {
                    id: "output",
                    class: "theme-elevation-12"}}),
                "\r\n                ",
                W({
                  elem: "hr"}),
                "\r\n                ",
                W({
                  elem: "p",
                  children: ["La roue de décryptage est composée de plusieurs disques reliés par leur centre grâce à une attache parisienne. Pour déchiffrer un texte il faut connaître la clef (un mot de 2 à 6 lettres) et aligner les disques de sorte à former cette clef verticalement."]}),
                "\r\n                ",
                W({
                  elem: "p",
                  children: ["La clef la plus simple possède deux lettres. Dans ce cas, on repère sur le disque externe la lettre du texte chiffré et on lit sur le disque interne la lettre déchiffrée."]}),
                "\r\n                ",
                W({
                  elem: "p",
                  children: ["Quand la clef a plus de 2 lettres, le disque externe joue toujours le même rôle, celui de repère pour la lettre chiffrée. Mais pour lire la correspondance déchiffrée, il faut alterner entre les disques restants du plus externe au plus interne. Ainsi, avec 4 disques, on a 3 disques internes. Si le texte chiffré comporte 5 lettres, on utilisera les disques dans cet ordre 1, 2, 3, 1, 2."]}),
                "\r\n            "]})]})
        W('modal-disk', 'wdg.modal', {
            visible: "false",
            padding: "true",
            content: [
          W({
              elem: "center",
              children: [
                "\r\n                ",
                W({
                  elem: "p",
                  children: ["Une fois assemblée, votre roue ressemblera à ceci :"]}),
                "\r\n                ",
                W({
                  elem: "canvas",
                  attr: {"id": "canvas-disk"}}),
                W({
                  elem: "br"}),
                "\r\n                ",
                                W('D1', 'wdg.icon', {
                  content: "export",
                  button: "true",
                  visible: "false",
                  value: "1"}),
                "\r\n                ",
                                W('D2', 'wdg.icon', {
                  content: "export",
                  button: "true",
                  visible: "false",
                  value: "2"}),
                "\r\n                ",
                                W('D3', 'wdg.icon', {
                  content: "export",
                  button: "true",
                  visible: "false",
                  value: "3"}),
                "\r\n                ",
                                W('D4', 'wdg.icon', {
                  content: "export",
                  button: "true",
                  visible: "false",
                  value: "4"}),
                "\r\n                ",
                                W('D5', 'wdg.icon', {
                  content: "export",
                  button: "true",
                  visible: "false",
                  value: "5"}),
                "\r\n                ",
                                W('D6', 'wdg.icon', {
                  content: "export",
                  button: "true",
                  visible: "false",
                  value: "6"}),
                "\r\n                ",
                "\r\n                ",
                W({
                  elem: "br"}),
                "\r\n                ",
                W({
                  elem: "p",
                  children: ["Cliquez sur les boutons ci-dessus pour télécharger les images correspondant à chaque disque de la roue."]}),
                "\r\n                ",
                W({
                  elem: "hr"}),
                "\r\n                ",
                                W('modal-disk-close', 'wdg.button', {
                  text: "Fermer",
                  type: "simple"}),
                "\r\n            "]})]})
        W.bind('code',{"value":{"S":["onEncode"]}});
        W.bind('draw',{"enabled":{"B":[["code","valid"]]},"action":{"S":["onDraw"]}});
        W.bind('D1',{"action":{"S":["onDiskSave"]}});
        W.bind('D2',{"action":{"S":["onDiskSave"]}});
        W.bind('D3',{"action":{"S":["onDiskSave"]}});
        W.bind('D4',{"action":{"S":["onDiskSave"]}});
        W.bind('D5',{"action":{"S":["onDiskSave"]}});
        W.bind('D6',{"action":{"S":["onDiskSave"]}});
        W.bind('modal-disk-close',{"action":{"S":["onCloseModalDisk"]}});
    }
);

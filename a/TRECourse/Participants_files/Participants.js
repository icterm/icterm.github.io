// Created by iWeb 3.0.3 local-build-20110530

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,98),url:'Participants_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Participants_files/stroke_1.png'},{rect:new IWRect(1,-1,700,2),url:'Participants_files/stroke_2.png'},{rect:new IWRect(701,-1,2,2),url:'Participants_files/stroke_3.png'},{rect:new IWRect(701,1,2,98),url:'Participants_files/stroke_4.png'},{rect:new IWRect(701,99,2,2),url:'Participants_files/stroke_5.png'},{rect:new IWRect(1,99,700,2),url:'Participants_files/stroke_6.png'},{rect:new IWRect(-1,99,2,2),url:'Participants_files/stroke_7.png'}],new IWSize(702,100))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Participants_files/ParticipantsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}

/*global document */

window.sUserName;

window.bDarkMode = true;

function getVersion() {
  return 12;
}

function $(id) {
  return document.getElementById(id);
}

function returnToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function MsgBoxPromote(text) {
  if (window.confirm(text)) {
    window.alert(`\n${sUserName} Room is promoted`);
  } else {
    window.alert(`\n${sUserName} Room is not promoted`);
  }
}

function dmHoverIn() {
  if (bDarkMode) {
    $('dmContainer').style.backgroundColor = '#885336';
  } else {
    $('dmContainer').style.backgroundColor = '#042e41';
  }
}

function dmHoverOut() {
  if (bDarkMode) {
    $('dmContainer').style.backgroundColor = '#0c6a93';
  } else {
    $('dmContainer').style.backgroundColor = '#3c87ba';
  }
}

function dmOnClick() {
  var ella, i;
  if (bDarkMode) {
    bDarkMode = false;
    $('dmSwitchBall').style.transition = 'right 100ms, ease 0s';
    $('dmSwitchBall').style.left = '3px';
    $('dmSwitchContainer').style.backgroundColor = '#474747';
    ella = document.getElementsByTagName("body")[0];
    ella.style.backgroundColor = '#ffffff';
    ella.style.color = '#494949';
    ella = document.getElementsByTagName("header")[0];
    ella.style.backgroundColor = '#ffffff';
    ella.style.backgroundImage = 'linear-gradient(rgb(227 170 33 / 33%), rgb(19 150 207 / 33%))';
    ella.style.color = '#494949';
    ella = document.getElementsByTagName("footer")[0];
    ella.style.backgroundColor = '#ffffff';
    ella.style.backgroundImage = 'linear-gradient(rgb(19 150 207 / 54%), rgb(227 170 33 / 55%))';
    ella.style.borderTop = '3px solid #f47321';
    $('footerThinBorder').style.borderTop = '1px solid gray';
    ella = document.getElementsByTagName("h4")[0];
    ella.style.color = '#494949';
    $('returnToTop').style.color = '#494949';
    $('footerNav').style.color = "#494949";
    $('aemilianx').style.color = "#494949";
    $('BaseRoomContents').style.border = '1px solid #acacac';
    $('BaseRoomContents').style.backgroundColor = '#e0e0e0';
    $('dmContainer').style.backgroundColor = '#3c87ba';
    $('offlineContentContainer').style.backgroundColor = "#e0e0e0";
    $('offlineRoomNotice').style.color = "#0b5d81";
    $('tabBar').style.backgroundColor = '#7f7f7f';
    $('satisfactionScore').style.backgroundColor = '#bbbbbb';
    $('satisfactionScore').style.color = '#0a5a83';
    $('satisfactionScore').style.textShadow = '#94d2e6 1px 1px 0px';
    $('tabLink').style.backgroundColor = '#ffffff';
    $('BioContents').style.backgroundColor = '#ffffff';
    $('BioContents').style.border = '1px solid #acacac';
    $('BioContents').style.borderTop = 'none';
    $('bioHeader').style.color = "#494949";
    ella = document.getElementsByClassName('label');
    for (i = ella.length - 1; i >= 0; i--) {
      ella[i].style.color = '#0a5a83';
    }
    ella = document.getElementsByClassName('contentText');
    for (i = ella.length - 1; i >= 0; i--) {
      ella[i].style.color = '#000000';
    }
    ella = document.getElementsByClassName('mediaAnchor');
    for (i = ella.length - 1; i >= 0; i--) {
      ella[i].style.color = '#0a5a83';
    }
  } else {
    bDarkMode = true;
    $('dmSwitchBall').style.transition = 'left 100ms, ease 0s';
    $('dmSwitchBall').style.left = '25px';
    $('dmSwitchContainer').style.backgroundColor = '#f4771f';
    ella = document.getElementsByTagName("body")[0];
    ella.style.backgroundImage = 'none';
    ella.style.backgroundColor = '#17202a';
    ella.style.Color = '#ffffff';
    ella = document.getElementsByTagName("header")[0];
    ella.style.color = '#ffffff';
    ella.style.backgroundImage = 'none';
    ella.style.backgroundColor = '#17202a';
     $('returnToTop').style.color = '#ffffff';
    ella = document.getElementsByTagName("footer")[0];
    ella.style.borderTop = '5px solid #202c39';
    ella.style.backgroundImage = 'none';
    ella.style.backgroundColor = '#17202a';
    ella.style.color = '#ffffff';
    $('footerThinBorder').style.borderTop = 'none';
    ella = document.getElementsByTagName("h4")[0];
    ella.style.color = '#ffffff';
    $('footerNav').style.color = "#ffffff";
    $('aemilianx').style.color = "#ffffff";
    $('BaseRoomContents').style.border = '1px solid #17202a';
    $('BaseRoomContents').style.backgroundColor = '#17202a';
    $('dmContainer').style.backgroundColor = '#0c6a93';
    $('offlineContentContainer').style.backgroundColor = "#17202a";
    $('offlineRoomNotice').style.color = "#68B5F0";
    $('tabBar').style.backgroundColor = '#17202a';
    $('satisfactionScore').style.backgroundColor = '#202c39';
    $('satisfactionScore').style.color = '#68b5f0';
    $('satisfactionScore').style.textShadow = 'none';
    $('tabLink').style.backgroundColor = '#202C39';
    $('BioContents').style.backgroundColor = '#202C39';
    $('BioContents').style.border = '1px solid #202C39';
    $('bioHeader').style.color = "#ffffff";
    ella = document.getElementsByClassName('label');
    for (i = ella.length - 1; i >= 0; i--) {
      ella[i].style.color = '#ffffff';
    }
    ella = document.getElementsByClassName('contentText');
    for (i = ella.length - 1; i >= 0; i--) {
      ella[i].style.color = '#b3b3b3';
    }
    ella = document.getElementsByClassName('mediaAnchor');
    for (i = ella.length - 1; i >= 0; i--) {
      ella[i].style.color = '#68b5f0';
    }
  }
}
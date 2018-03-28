
img1 = document.getElementById('img1')
bedno1 = document.getElementById('bedno1')
bedno1Ref = firebase.database().ref().child("Bed1").child("Status")
img2 = document.getElementById('img2')
bedno2 = document.getElementById('bedno2')
bedno2Ref = firebase.database().ref().child("Bed2").child("Status")
img3 = document.getElementById('img3')
bedno3 = document.getElementById('bedno3')
bedno3Ref = firebase.database().ref().child("Bed3").child("Status")
img4 = document.getElementById('img4')
bedno4 = document.getElementById('bedno4')
bedno4Ref = firebase.database().ref().child("Bed4").child("Status")
img5 = document.getElementById('img5')
bedno5 = document.getElementById('bedno5')
bedno5Ref = firebase.database().ref().child("Bed5").child("Status")
img6 = document.getElementById('img6')
bedno6 = document.getElementById('bedno6')
bedno6Ref = firebase.database().ref().child("Bed6").child("Status")
img7 = document.getElementById('img7')
bedno7 = document.getElementById('bedno7')
bedno7Ref = firebase.database().ref().child("Bed7").child("Status")
img8 = document.getElementById('img8')
bedno8 = document.getElementById('bedno8')
bedno8Ref = firebase.database().ref().child("Bed8").child("Status")
img9 = document.getElementById('img9')
bedno9 = document.getElementById('bedno9')
bedno9Ref = firebase.database().ref().child("Bed9").child("Status")
img10 = document.getElementById('img10')
bedno10 = document.getElementById('bedno10')
bedno10Ref = firebase.database().ref().child("Bed10").child("Status")
img11 = document.getElementById('img11')
bedno11 = document.getElementById('bedno11')
bedno11Ref = firebase.database().ref().child("Bed11").child("Status")
img12 = document.getElementById('img12')
bedno12 = document.getElementById('bedno12')
bedno12Ref = firebase.database().ref().child("Bed12").child("Status")
img13 = document.getElementById('img13')
bedno13 = document.getElementById('bedno13')
bedno13Ref = firebase.database().ref().child("Bed13").child("Status")
img14 = document.getElementById('img14')
bedno14 = document.getElementById('bedno14')
bedno14Ref = firebase.database().ref().child("Bed14").child("Status")
img15 = document.getElementById('img15')
bedno15 = document.getElementById('bedno15')
bedno15Ref = firebase.database().ref().child("Bed15").child("Status")
img16 = document.getElementById('img16')
bedno16 = document.getElementById('bedno16')
bedno16Ref = firebase.database().ref().child("Bed16").child("Status")
img17 = document.getElementById('img17')
bedno17 = document.getElementById('bedno17')
bedno17Ref = firebase.database().ref().child("Bed17").child("Status")
img18 = document.getElementById('img18')
bedno18 = document.getElementById('bedno18')
bedno18Ref = firebase.database().ref().child("Bed18").child("Status")
img19 = document.getElementById('img19')
bedno19 = document.getElementById('bedno19')
bedno19Ref = firebase.database().ref().child("Bed19").child("Status")
img20 = document.getElementById('img20')
bedno20 = document.getElementById('bedno20')
bedno20Ref = firebase.database().ref().child("Bed20").child("Status")
img21 = document.getElementById('img21')
bedno21 = document.getElementById('bedno21')
bedno21Ref = firebase.database().ref().child("Bed21").child("Status")
img22 = document.getElementById('img22')
bedno22 = document.getElementById('bedno22')
bedno22Ref = firebase.database().ref().child("Bed22").child("Status")
img23 = document.getElementById('img23')
bedno23 = document.getElementById('bedno23')
bedno23Ref = firebase.database().ref().child("Bed23").child("Status")
img24 = document.getElementById('img24')
bedno24 = document.getElementById('bedno24')
bedno24Ref = firebase.database().ref().child("Bed24").child("Status")
img25 = document.getElementById('img25')
bedno25 = document.getElementById('bedno25')
bedno25Ref = firebase.database().ref().child("Bed25").child("Status")
img26 = document.getElementById('img26')
bedno26 = document.getElementById('bedno26')
bedno26Ref = firebase.database().ref().child("Bed26").child("Status")
img27 = document.getElementById('img27')
bedno27 = document.getElementById('bedno27')
bedno27Ref = firebase.database().ref().child("Bed27").child("Status")
img28 = document.getElementById('img28')
bedno28 = document.getElementById('bedno28')
bedno28Ref = firebase.database().ref().child("Bed28").child("Status")
img29 = document.getElementById('img29')
bedno29 = document.getElementById('bedno29')
bedno29Ref = firebase.database().ref().child("Bed29").child("Status")
img30 = document.getElementById('img30')
bedno30 = document.getElementById('bedno30')
bedno30Ref = firebase.database().ref().child("Bed30").child("Status")
img31 = document.getElementById('img31')
bedno31 = document.getElementById('bedno31')
bedno31Ref = firebase.database().ref().child("Bed31").child("Status")
img32 = document.getElementById('img32')
bedno32 = document.getElementById('bedno32')
bedno32Ref = firebase.database().ref().child("Bed32").child("Status")
img33 = document.getElementById('img33')
bedno33 = document.getElementById('bedno33')
bedno33Ref = firebase.database().ref().child("Bed33").child("Status")
img34 = document.getElementById('img34')
bedno34 = document.getElementById('bedno34')
bedno34Ref = firebase.database().ref().child("Bed34").child("Status")
img35 = document.getElementById('img35')
bedno35 = document.getElementById('bedno35')
bedno35Ref = firebase.database().ref().child("Bed35").child("Status")
img36 = document.getElementById('img36')
bedno36 = document.getElementById('bedno36')
bedno36Ref = firebase.database().ref().child("Bed36").child("Status")
img37 = document.getElementById('img37')
bedno37 = document.getElementById('bedno37')
bedno37Ref = firebase.database().ref().child("Bed37").child("Status")
img38 = document.getElementById('img38')
bedno38 = document.getElementById('bedno38')
bedno38Ref = firebase.database().ref().child("Bed38").child("Status")
img39 = document.getElementById('img39')
bedno39 = document.getElementById('bedno39')
bedno39Ref = firebase.database().ref().child("Bed39").child("Status")
img40 = document.getElementById('img40')
bedno40 = document.getElementById('bedno40')
bedno40Ref = firebase.database().ref().child("Bed40").child("Status")
setInterval(function() {
    bedno2Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img2.src = "takenbed.jpg"
        }
        else {
            img2.src = "freebed1.jpg"
        }
    })
    bedno1Ref.on("value", function (datasnapshot) {
        var b = datasnapshot
        if (b.val() == "Taken") {
            img1.src = "takenbed.jpg"
        }
        else {
            img1.src = "freebed1.jpg"
        }
    })
    bedno3Ref.on("value", function (datasnapshot) {
        var c = datasnapshot
        if (c.val() == "Taken") {
            img3.src = "takenbed.jpg"
        }
        else {
            img3.src = "freebed1.jpg"
        }
    })
    bedno4Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img4.src = "takenbed.jpg"
        }
        else {
            img4.src = "freebed1.jpg"
        }
    })
    bedno5Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img5.src = "takenbed.jpg"
        }
        else {
            img5.src = "freebed1.jpg"
        }
    })
    bedno6Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img6.src = "takenbed.jpg"
        }
        else {
            img6.src = "freebed1.jpg"
        }
    })
    bedno7Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img7.src = "takenbed.jpg"
        }
        else {
            img7.src = "freebed1.jpg"
        }
    })
    bedno8Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img8.src = "takenbed.jpg"
        }
        else {
            img8.src = "freebed1.jpg"
        }
    })
    bedno9Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img9.src = "takenbed.jpg"
        }
        else {
            img9.src = "freebed1.jpg"
        }
    })
    bedno10Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img10.src = "takenbed.jpg"
        }
        else {
            img10.src = "freebed1.jpg"
        }
    })
    bedno11Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img11.src = "takenbed.jpg"
        }
        else {
            img11.src = "freebed1.jpg"
        }
    })
    bedno12Ref.on("value", function (datasnapshot) {
        var b = datasnapshot
        if (b.val() == "Taken") {
            img12.src = "takenbed.jpg"
        }
        else {
            img12.src = "freebed1.jpg"
        }
    })
    bedno13Ref.on("value", function (datasnapshot) {
        var c = datasnapshot
        if (c.val() == "Taken") {
            img13.src = "takenbed.jpg"
        }
        else {
            img13.src = "freebed1.jpg"
        }
    })
    bedno14Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img14.src = "takenbed.jpg"
        }
        else {
            img14.src = "freebed1.jpg"
        }
    })
    bedno15Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img15.src = "takenbed.jpg"
        }
        else {
            img15.src = "freebed1.jpg"
        }
    })
    bedno16Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img16.src = "takenbed.jpg"
        }
        else {
            img16.src = "freebed1.jpg"
        }
    })
    bedno17Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img17.src = "takenbed.jpg"
        }
        else {
            img17.src = "freebed1.jpg"
        }
    })
    bedno18Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img18.src = "takenbed.jpg"
        }
        else {
            img18.src = "freebed1.jpg"
        }
    })
    bedno19Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img19.src = "takenbed.jpg"
        }
        else {
            img19.src = "freebed1.jpg"
        }
    })
    bedno20Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img20.src = "takenbed.jpg"
        }
        else {
            img20.src = "freebed1.jpg"
        }
    })
    bedno21Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img21.src = "takenbed.jpg"
        }
        else {
            img21.src = "freebed1.jpg"
        }
    })
    bedno22Ref.on("value", function (datasnapshot) {
        var b = datasnapshot
        if (b.val() == "Taken") {
            img22.src = "takenbed.jpg"
        }
        else {
            img22.src = "freebed1.jpg"
        }
    })
    bedno23Ref.on("value", function (datasnapshot) {
        var c = datasnapshot
        if (c.val() == "Taken") {
            img23.src = "takenbed.jpg"
        }
        else {
            img23.src = "freebed1.jpg"
        }
    })
    bedno24Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img24.src = "takenbed.jpg"
        }
        else {
            img24.src = "freebed1.jpg"
        }
    })
    bedno25Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img25.src = "takenbed.jpg"
        }
        else {
            img25.src = "freebed1.jpg"
        }
    })
    bedno26Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img26.src = "takenbed.jpg"
        }
        else {
            img26.src = "freebed1.jpg"
        }
    })
    bedno27Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img27.src = "takenbed.jpg"
        }
        else {
            img27.src = "freebed1.jpg"
        }
    })
    bedno28Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img28.src = "takenbed.jpg"
        }
        else {
            img28.src = "freebed1.jpg"
        }
    })
    bedno29Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img29.src = "takenbed.jpg"
        }
        else {
            img29.src = "freebed1.jpg"
        }
    })
    bedno30Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img30.src = "takenbed.jpg"
        }
        else {
            img30.src = "freebed1.jpg"
        }
    })
    bedno31Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img31.src = "takenbed.jpg"
        }
        else {
            img31.src = "freebed1.jpg"
        }
    })
    bedno32Ref.on("value", function (datasnapshot) {
        var b = datasnapshot
        if (b.val() == "Taken") {
            img32.src = "takenbed.jpg"
        }
        else {
            img32.src = "freebed1.jpg"
        }
    })
    bedno33Ref.on("value", function (datasnapshot) {
        var c = datasnapshot
        if (c.val() == "Taken") {
            img33.src = "takenbed.jpg"
        }
        else {
            img33.src = "freebed1.jpg"
        }
    })
    bedno34Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img34.src = "takenbed.jpg"
        }
        else {
            img34.src = "freebed1.jpg"
        }
    })
    bedno35Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img35.src = "takenbed.jpg"
        }
        else {
            img35.src = "freebed1.jpg"
        }
    })
    bedno36Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img36.src = "takenbed.jpg"
        }
        else {
            img36.src = "freebed1.jpg"
        }
    })
    bedno37Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img37.src = "takenbed.jpg"
        }
        else {
            img37.src = "freebed1.jpg"
        }
    })
    bedno38Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img38.src = "takenbed.jpg"
        }
        else {
            img38.src = "freebed1.jpg"
        }
    })
    bedno39Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img39.src = "takenbed.jpg"
        }
        else {
            img39.src = "freebed1.jpg"
        }
    })
    bedno40Ref.on("value", function (datasnapshot) {
        var a = datasnapshot
        if (a.val() == "Taken") {
            img40.src = "takenbed.jpg"
        }
        else {
            img40.src = "freebed1.jpg"
        }
    })
},3000)

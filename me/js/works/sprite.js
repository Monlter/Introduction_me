 function initContent() {

        /* 原点 */


//room1
        let spriteToilet= makeTextSprite( "toilet",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        spriteToilet.center = new THREE.Vector2(0, 0);
        scene.add( spriteToilet );
        spriteToilet.position.set(-1800/160, 150/160, -1800/160);


//room2
        let sprite332= makeTextSprite( "3-32",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite332.center = new THREE.Vector2(0, 0);
        scene.add( sprite332 );
        sprite332.position.set(-1133.5/160, 150/160, -1800/160);

        let sprite330 = makeTextSprite( "3-30",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite330.center = new THREE.Vector2(0, 0);
        scene.add( sprite330 );
        sprite330.position.set(-520.5/160, 150/160, -1800/160);

        let sprite328 = makeTextSprite( "3-28",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite328.center = new THREE.Vector2(0, 0);
        scene.add( sprite328 );
        sprite328.position.set(92.5/160, 150/160, -1800/160);

//room5
        let sprite333= makeTextSprite( "3-35",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite333.center = new THREE.Vector2(0, 0);
        scene.add( sprite333 );
        sprite333.position.set(-720/160, 150/160, -1240/160);

        let sprite335= makeTextSprite( "3-33",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite335.center = new THREE.Vector2(0, 0);
        scene.add( sprite335 );
        sprite335.position.set(-1150/160, 150/160, -1240/160);


//room6
        let sprite337= makeTextSprite( "3-37",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite337.center = new THREE.Vector2(0, 0);
        scene.add( sprite337);
        sprite337.position.set(-280/160, 150/160, -845/160);

         let sprite339= makeTextSprite( "3-39",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite339.center = new THREE.Vector2(0, 0);
        scene.add( sprite339);
        sprite339.position.set(-280/160, 150/160, -455/160);

//room7
        let sprite344= makeTextSprite( "3-44",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite344.center = new THREE.Vector2(0, 0);
        scene.add( sprite344);
        sprite344.position.set(-1150/160, 150/160, -60/160);

        let sprite342= makeTextSprite( "3-42",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite342.center = new THREE.Vector2(0, 0);
        scene.add( sprite342);
        sprite342.position.set(-720/160, 150/160, -60/160);

//room8
        let sprite326= makeTextSprite( "3-26",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite326.center = new THREE.Vector2(0, 0);
        scene.add( sprite326);
        sprite326.position.set(280/160, 150/160, -1126.5/160);

        let sprite324= makeTextSprite( "3-24",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite324.center = new THREE.Vector2(0, 0);
        scene.add( sprite324);
        sprite324.position.set(280/160, 150/160, -500/160);

        let sprite322= makeTextSprite( "3-22",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite322.center = new THREE.Vector2(0, 0);
        scene.add( sprite322);
        sprite322.position.set(280/160, 150/160, 126.5/160);


    //room11
        let sprite320= makeTextSprite( "3-20",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite320.center = new THREE.Vector2(0, 0);
        scene.add( sprite320);
        sprite320.position.set(630/160, 150/160, 240/160);

        let sprite318= makeTextSprite( "3-18",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite318.center = new THREE.Vector2(0, 0);
        scene.add( sprite318);
        sprite318.position.set(930/160, 150/160, 240/160);

    //room13
        let spriteToilet2= makeTextSprite( "toilet",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        spriteToilet2.center = new THREE.Vector2(0, 0);
        scene.add( spriteToilet2);
        spriteToilet2.position.set(-1800/160, 150/160, 500/160);

    //room14
        let sprite345= makeTextSprite( "3-45",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite345.center = new THREE.Vector2(0, 0);
        scene.add( sprite345);
        sprite345.position.set(-1150/160, 150/160, 500/160);

        let sprite347= makeTextSprite( "3-47",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite347.center = new THREE.Vector2(0, 0);
        scene.add( sprite347);
        sprite347.position.set(-420/160, 150/160, 500/160);

    //room15
        let sprite349= makeTextSprite( "3-49",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite349.center = new THREE.Vector2(0, 0);
        scene.add( sprite349);
        sprite349.position.set(-280/160, 150/160, 850/160);


    //room16
        let sprite312= makeTextSprite( "3-12",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite312.center = new THREE.Vector2(0, 0);
        scene.add( sprite312);
        sprite312.position.set(426.5/160, 150/160, 800/160);

        let sprite314= makeTextSprite( "3-14",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite314.center = new THREE.Vector2(0, 0);
        scene.add( sprite314);
        sprite314.position.set(1119.5/160, 150/160, 800/160);

    //room17
        let sprite31= makeTextSprite( "3-1",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite31.center = new THREE.Vector2(0, 0);
        scene.add( sprite31);
        sprite31.position.set(-1800/160, 150/160, 1340/160);


        //room18
        let sprite353= makeTextSprite( "3-53",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite353.center = new THREE.Vector2(0, 0);
        scene.add( sprite353);
        sprite353.position.set(-1240/160, 150/160, 1290/160);

        //room19
        let sprite350= makeTextSprite( "3-50",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite350.center = new THREE.Vector2(0, 0);
        scene.add( sprite350);
        sprite350.position.set(-280/160, 150/160, 1290/160);

        //room20
        let sprite311= makeTextSprite( "3-11",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite311.center = new THREE.Vector2(0, 0);
        scene.add( sprite311);
        sprite311.position.set(280/160, 150/160, 1290/160);

        //room21
        let sprite33= makeTextSprite( "3-3",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite33.center = new THREE.Vector2(0, 0);
        scene.add( sprite33);
        sprite33.position.set(-1720/160, 150/160, 1800/160);

        let sprite34= makeTextSprite( "3-4",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite34.center = new THREE.Vector2(0, 0);
        scene.add( sprite34);
        sprite34.position.set(-1160/160, 150/160, 1800/160);

        let sprite35= makeTextSprite( "3-5",
            {
                fontsize: 12,
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        sprite35.center = new THREE.Vector2(0, 0);
        scene.add( sprite35);
        sprite35.position.set(-600/160, 150/160, 1800/160);

    //room22
        let spriteToilet1= makeTextSprite( "toilet",
            {
                fontsize: 10,        
                borderColor: {r:255, g:0, b:0, a:0.4},/* 边框黑色 */
                backgroundColor: {r:255, g:255, b:255, a:0.9}/* 背景颜色 */
            } );
        spriteToilet1.center = new THREE.Vector2(0, 0);
        scene.add( spriteToilet1 );
        spriteToilet1.position.set(280/160, 150/160, 1800/160);
    }

    /* 创建字体精灵 */
    function makeTextSprite(message, parameters) {

        if ( parameters === undefined ) parameters = {};

        let fontface = parameters.hasOwnProperty("fontface") ?
            parameters["fontface"] : "Arial";

        /* 字体大小 */
        let fontsize = parameters.hasOwnProperty("fontsize") ?
            parameters["fontsize"] : 1;

        /* 边框厚度 */
        let borderThickness = parameters.hasOwnProperty("borderThickness") ?
            parameters["borderThickness"] : 2;

        /* 边框颜色 */
        let borderColor = parameters.hasOwnProperty("borderColor") ?
            parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };

        /* 背景颜色 */
        let backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
            parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

        /* 创建画布 */
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        /* 字体加粗 */
        context.font = "Bold " + fontsize + "px " + fontface;

        /* 获取文字的大小数据，高度取决于文字的大小 */
        let metrics = context.measureText( message );
        let textWidth = metrics.width;

        /* 背景颜色 */
        context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
            + backgroundColor.b + "," + backgroundColor.a + ")";

        /* 边框的颜色 */
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
            + borderColor.b + "," + borderColor.a + ")";
        context.lineWidth = borderThickness;

        /* 绘制圆角矩形 */
        roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);

        /* 字体颜色 */
        context.fillStyle = "rgba(0, 0, 0, 1.0)";
        context.fillText( message, borderThickness, fontsize + borderThickness);

        /* 画布内容用于纹理贴图 */
        let texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        let spriteMaterial = new THREE.SpriteMaterial({ map: texture } );
        let sprite = new THREE.Sprite( spriteMaterial );



        /* 缩放比例 */
        sprite.scale.set(2,1,0);

        return sprite;

    }

    /* 绘制圆角矩形 */
    function roundRect(ctx, x, y, w, h, r) {

        ctx.beginPath();
        ctx.moveTo(x+r, y);
        ctx.lineTo(x+w-r, y);
        ctx.quadraticCurveTo(x+w, y, x+w, y+r);
        ctx.lineTo(x+w, y+h-r);
        ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
        ctx.lineTo(x+r, y+h);
        ctx.quadraticCurveTo(x, y+h, x, y+h-r);
        ctx.lineTo(x, y+r);
        ctx.quadraticCurveTo(x, y, x+r, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

    }



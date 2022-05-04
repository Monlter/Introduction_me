    


   function createCubeFloor(width, height, depth,angle,material,x,y,z){
    var cubeGeometry = new THREE.BoxGeometry(width/160, height/160, depth/160 );     
       var CubeFloor = new THREE.Mesh( cubeGeometry, material );  
       CubeFloor.position.x = x/160; 
       CubeFloor.position.y = y/160;  
       CubeFloor.position.z = z/160;  
       CubeFloor.rotation.x += angle*Math.PI;  //-逆时针旋转,+顺时针
       scene.add(CubeFloor);  
   }
    function createCubedoor(width, height, depth,angle,material,x,y,z){
    var cubeGeometry = new THREE.BoxGeometry(width/160, height/160, depth/160 );     
       var Cubedoor = new THREE.Mesh( cubeGeometry, material );  
       Cubedoor.position.x = x/160;  
       Cubedoor.position.y = y/160;  
       Cubedoor.position.z = z/160;  
       Cubedoor.rotation.y += angle*Math.PI;  //-逆时针旋转,+顺时针
       scene.add(Cubedoor);  
   }
   //     //创建天花板
   // function createCubeceiling(width, height, depth,angle,material,x,y,z){
   //  var cubeGeometry = new THREE.BoxGeometry(width, height, depth );     
   //     var cube = new THREE.Mesh( cubeGeometry, material );  
   //     cube.position.x = x;  
   //     cube.position.y = y;  
   //     cube.position.z = z;  
   //     cube.rotation.x+= angle*Math.PI;  //-逆时针旋转,+顺时针
   //     scene.add(cube);  
   // }


   // function createceiling(){
   //  var materialceiling = new THREE.MeshBasicMaterial({color:0x9cb2d1});
   //  //1
   //  createCubeceiling(400,400,1,0.5,materialceiling,-1800,-0.5,-1800);
   //  createCubeceiling(400,400,1,1.5,materialceiling,-1800,201,-1800);
   // }



 function createFloor(){

    var texture = THREE.ImageUtils.loadTexture("images/floor.jpg "); 
        texture.wrapS = THREE.RepeatWrapping; 
        texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( 5, 5 );
        var texture1 = THREE.ImageUtils.loadTexture("images/floor-room1.jpg "); 
        texture1.wrapS = THREE.RepeatWrapping; 
        texture1.wrapT = THREE.RepeatWrapping; 
        texture1.repeat.set( 5, 5 );
    //然后, 创建basic材质，把纹理传给该材质
    var floorMaterialx = new THREE.MeshBasicMaterial({ map: texture1,side: THREE.DoubleSide });
    var floorMaterial = new THREE.MeshBasicMaterial({ map: texture,side: THREE.DoubleSide });
    //过道
    createCubeFloor(160, 3200, 1,0.5,floorMaterial,0,-0.5,0);
    createCubeFloor(4000, 160, 1,0.5,floorMaterial,0,-0.5,-1520);
    createCubeFloor(210, 2600, 1,0.5,floorMaterial,1570,-0.5,-700);
    createCubeFloor(2480, 200, 1,0.5,floorMaterial,-760,-0.5,1540);
    createCubeFloor(210, 1140, 1,0.5,floorMaterial,-1550,-0.5,870);
    createCubeFloor(2000, 200, 1,0.5,floorMaterial,-1000,-0.5,200);
    createCubeFloor(2000, 200, 1,0.5,floorMaterial,1000,-0.5,500);
    createCubeFloor(160, 400, 1,0.5,floorMaterial,-1520,-0.5,-1800);
    
    //floor
      createCubeFloor(400, 400, 1,0.5,floorMaterialx,-1800,-0.5,-1800);
      createCubeFloor(1840, 400, 1,0.5,floorMaterialx,-520,-0.5,-1800);
      createCubeFloor(400, 400, 1,0.5,floorMaterialx,1240,-0.5,-1800);
      createCubeFloor(400, 400, 1,0.5,floorMaterialx,1800,-0.5,-1800);
      createCubeFloor(960, 400, 1,0.5,floorMaterialx,-960,-0.5,-1240);
      createCubeFloor(400, 780, 1,0.5,floorMaterialx,-280,-0.5,-650);
      createCubeFloor(960, 360, 1,0.5,floorMaterialx,-960,-0.5,-80);
      createCubeFloor(400, 1860, 1,0.5,floorMaterialx,280,-0.5,-520);
      createCubeFloor(400, 780, 1,0.5,floorMaterialx,1240,-0.5,-650);
      createCubeFloor(360, 1180, 1,0.5,floorMaterialx,1820,-0.5,-850);
       createCubeFloor(600, 360, 1,0.5,floorMaterialx,780,-0.5,220);
      createCubeFloor(360, 360, 1,0.5,floorMaterialx,1820,-0.5,220);
      createCubeFloor(360, 400, 1,0.5,floorMaterialx,-1820,-0.5,500);
      createCubeFloor(1360, 400, 1,0.5,floorMaterialx,-760,-0.5,500);
      createCubeFloor(400, 400, 1,0.5,floorMaterialx,-1800,-0.5,-1800);
      createCubeFloor(400, 300, 1,0.5,floorMaterialx,-280,-0.5,850);
      createCubeFloor(1920, 400, 1,0.5,floorMaterialx,1040,-0.5,800);
      createCubeFloor(360, 240, 1,0.5,floorMaterialx,-1820,-0.5,1320);
      createCubeFloor(400, 300, 1,0.5,floorMaterialx,-1240,-0.5,1290);
      createCubeFloor(400, 300, 1,0.5,floorMaterialx,-280,-0.5,1290);
      createCubeFloor(400, 300, 1,0.5,floorMaterialx,280,-0.5,1290);
      createCubeFloor(1680, 360, 1,0.5,floorMaterialx,-1160,-0.5,1820);
      createCubeFloor(400, 360, 1,0.5,floorMaterialx,280,-0.5,1820);
     




    //stairs1
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-30,-1410);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-60,-1350);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-90,-1290);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-120,-1230);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-150,-1170);
    //stair2
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-30,-1410);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-60,-1350);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-90,-1290);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-120,-1230);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-150,-1170);
    //stair3
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-30,-1410);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-60,-1350);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-90,-1290);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-120,-1230);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-150,-1170);
    //stair4
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-150,-130);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-120,-70);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-90,-10);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-60,50);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-30,110);
    //stair5
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-150,-130);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-120,-70);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-90,-10);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-60,50);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-280,-30,110);
    //stair6
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-150,170);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-120,230);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-90,290);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-60,350);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,1240,-30,410);
    //stair7
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-150,920);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-120,980);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-90,1040);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-60,1100);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-1800,-30,1160);
    //stair8
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-120,-30,1630);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-120,-60,1690);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-120,-90,1750);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-120,-120,1810);
      createCubeFloor(400, 60, 1,0.5,floorMaterial,-120,-150,1870);   

   }
   
   //墙上挖门，通过两个几何体生成BSP对象
   function createResultBsp(bsp,less_bsp,mat){	   
	   switch(mat)
	    {
	        case 1:
	        	var material = new THREE.MeshPhongMaterial({color:0x9cb2d1,specular:0x9cb2d1,shininess:30,transparent:true,opacity:1});
	            break;
	        case 2:
	            var material = new THREE.MeshPhongMaterial({color:0xafc0ca,specular:0xafc0ca,shininess:30,transparent:true,opacity:1});
	            break;
	        default:
	    }
	    
	    var sphere1BSP = new ThreeBSP(bsp);  
	    var cube2BSP = new ThreeBSP(less_bsp);//0x9cb2d1 淡紫,0xC3C3C3 白灰 , 0xafc0ca灰
	    var resultBSP = sphere1BSP.subtract(cube2BSP);  	      
	    var result = resultBSP.toMesh(material); 
	    result.material.flatshading = THREE.FlatShading;  
	    result.geometry.computeFaceNormals();  //重新计算几何体侧面法向量
	    result.geometry.computeVertexNormals();  
	    result.material.needsUpdate = true;  //更新纹理
	    result.geometry.buffersNeedUpdate = true;  
	    result.geometry.uvsNeedUpdate = true;  
	    scene.add(result);     
   }
   
   //创建墙
   function createCubeWall(width, height, depth,angle,material,x,y,z){
   	var cubeGeometry = new THREE.BoxGeometry(width/160, height/160, depth/160 );     
       var cube = new THREE.Mesh( cubeGeometry, material );  
       cube.position.x = x/160;  
       cube.position.y = y/160;  
       cube.position.z = z/160; 
       cube.rotation.y += angle*Math.PI;  //-逆时针旋转,+顺时针
       scene.add(cube);  
   }
 
   

   //返回墙对象
   function returnCubeWall(width, height, depth,angle,material,x,y,z){
   	var cubeGeometry = new THREE.BoxGeometry(width/160, height/160, depth/160);     
       var cube = new THREE.Mesh( cubeGeometry, material );  
       cube.position.x = x/160;  
       cube.position.y = y/160; 
       cube.position.z = z/160; 
       cube.rotation.y += angle*Math.PI;    
       return cube;
   }
   //返回布尔对象   
   function returnResultBsp(bsp,less_bsp,mat){    
     switch(mat)
      {
          case 1:
            var material = new THREE.MeshPhongMaterial({color:0x9cb2d1,specular:0x9cb2d1,shininess:30,transparent:true,opacity:1});
              break;
          case 2:
              var material = new THREE.MeshPhongMaterial({color:0xafc0ca,specular:0xafc0ca,shininess:30,transparent:true,opacity:1});
              break;
          default:
      }
      
      var sphere1BSP = new ThreeBSP(bsp);  
      var cube2BSP = new ThreeBSP(less_bsp);//0x9cb2d1 淡紫,0xC3C3C3 白灰 , 0xafc0ca灰
      var resultBSP = sphere1BSP.subtract(cube2BSP);          
      var result = resultBSP.toMesh(material); 
      result.material.flatshading = THREE.FlatShading;  
      result.geometry.computeFaceNormals();  //重新计算几何体侧面法向量
      result.geometry.computeVertexNormals();  
      result.material.needsUpdate = true;  //更新纹理
      result.geometry.buffersNeedUpdate = true;  
      result.geometry.uvsNeedUpdate = true;  
      return result;     
   }

   //创建墙纹理
  function createWallMaterail(){
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //前  0xafc0ca :灰色
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //后  
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0x9cb2d1}));  //上  0x9cb2d1：淡紫
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0x9cb2d1}));  //下  
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //左    0xafc0ca :灰色
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //右
	      
	   matArrayB.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //前  0xafc0ca :灰色
	   matArrayB.push(new THREE.MeshPhongMaterial({color: 0x9cb2d1}));  //后  0x9cb2d1：淡紫
	   matArrayB.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  //上  0xd6e4ec： 偏白色
	   matArrayB.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  //下  
	   matArrayB.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //左   0xafc0ca :灰色
	   matArrayB.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //右
	     	   
   }
   
   //创建房间布局
   function createLayout(){ 

   var texture2 = THREE.ImageUtils.loadTexture("images/door_right.png"); 
        texture2.wrapS = THREE.RepeatWrapping; 
        texture2.wrapT = THREE.RepeatWrapping; 
    //然后, 创建basic材质，把纹理传给该材质
    var doormaterial2= new THREE.MeshBasicMaterial({map:texture2,color:0xffffff});
    var  doorgeometry2 = new THREE.BoxGeometry(100, 180, 2);
     


      // 
//room1
      var cube1= returnCubeWall(10, 200, 400,0.5,matArrayB,-1800,100,-1600); 
          var door_cube1 =returnCubeWall(10, 160,80,0.5,matArrayA,-1760,90, -1600); 
          createResultBsp(cube1,door_cube1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1760,90, -1600);
      createCubeWall(10, 200, 400,1.5,matArrayB,-1800,100,-2000);  
      createCubeWall(10, 200, 400,0,matArrayB,-2000,100,-1800); 
      createCubeWall(10, 200, 400,1,matArrayB,-1600,100,-1800);   

//room2
      var cube2_1=returnCubeWall(10, 200, 1840,0.5,matArrayB,-520,100,-1600); 
        //door2_1
          var door_cube2_1=returnCubeWall(10, 160,80,0.5,matArrayA,-1133.5,90, -1600); 
          var cube2_2=returnResultBsp(cube2_1,door_cube2_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1133.5,90, -1600);
      createCubeWall(10, 200, 1840,1.5,matArrayB,-520,100,-2000); 
      createCubeWall(10, 200, 400,0,matArrayB,-1440,100,-1800);   
      createCubeWall(10, 200, 400,1,matArrayB,400,100,-1800); 
          //door2_2
          createCubeWall(10, 200, 400,1,matArrayB,-827,100,-1800); 
          var door_cube2_2 =returnCubeWall(10, 160,80,0.5,matArrayA,-480,90, -1600); 
          var cube2_3=returnResultBsp(cube2_2,door_cube2_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-480,90, -1600);
          //door2_3
          createCubeWall(10, 200, 400,1,matArrayB,-214,100,-1800); 
          var door_cube2_3 =returnCubeWall(10, 160,80,0.5,matArrayA,160,90, -1600); 
          createResultBsp(cube2_3,door_cube2_3,1);
          createCubedoor(100, 180, 2,0,doormaterial2,160,90, -1600);
        
//room3
      var cube3= returnCubeWall(10, 200, 400,0.5,matArrayB,1240,100,-1600);  
          var door_cube3=returnCubeWall(10, 160,80,0.5,matArrayA,1280,90, -1600); 
          createResultBsp(cube3,door_cube3,1);
          createCubedoor(100, 180, 2,0,doormaterial2,1280,90, -1600);
      createCubeWall(10, 200, 400,1.5,matArrayB,1240,100,-2000); 
      createCubeWall(10, 200, 400,0,matArrayB,1040,100,-1800);   
      createCubeWall(10, 200, 400,1,matArrayB,1440,100,-1800); 
//room4
      var cube4= returnCubeWall(10, 200, 400,0.5,matArrayB,1800,100,-1600);  
          var door_cube4=returnCubeWall(10, 160,80,0.5,matArrayA,1760,90, -1600); 
          createResultBsp(cube4,door_cube4,1);
          createCubedoor(100, 180, 2,0,doormaterial2,1760,80, -1600);
      createCubeWall(10, 200, 400,1.5,matArrayB,1800,100,-2000); 
      createCubeWall(10, 200, 400,0,matArrayB,1600,100,-1800);   
      createCubeWall(10, 200, 400,1,matArrayB,2000,100,-1800); 
//room5
      createCubeWall(10, 200, 960,0.5,matArrayB,-960,100,-1040); 
      var cube5_1= returnCubeWall(10, 200, 960,1.5,matArrayB,-960,100,-1390); 
          //door5_1
          var door_cube5_1=returnCubeWall(10, 160,80,0.5,matArrayA,-640,90, -1390); 
          var cube5_2=returnResultBsp(cube5_1,door_cube5_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-640,90, -1390);
      createCubeWall(10, 200, 350,0,matArrayB,-1440,100,-1215);   
      createCubeWall(10, 200, 350,1,matArrayB,-480,100,-1215);
          //door5_2
          createCubeWall(10, 200, 350,1,matArrayB,-960,100,-1215); 
          var door_cube5_2=returnCubeWall(10, 160,80,0.5,matArrayA,-1140,90, -1390); 
          createResultBsp(cube5_2,door_cube5_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1140,90, -1390);
//room6
      createCubeWall(10, 200, 400,0.5,matArrayB,-280,100,-260);  
      createCubeWall(10, 200, 400,1.5,matArrayB,-280,100,-1040); 
      createCubeWall(10, 200, 780,0,matArrayB,-480,100,-650);   
      var cube6_1=returnCubeWall(10, 200, 780,1,matArrayB,-80,100,-650); 
          //door6_1
          var door_cube6_1=returnCubeWall(10, 160,80,1,matArrayA,-80,90, -800); 
          var cube6_2=returnResultBsp(cube6_1,door_cube6_1,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,-80,90, -800);
          //door6_2
          createCubeWall(10, 200, 400,1.5,matArrayB,-280,100,-650);
          var door_cube6_2=returnCubeWall(10, 160,80,1,matArrayA,-80,90, -455); 
          createResultBsp(cube6_2,door_cube6_2,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,-80,90, -455);

//room7
      var cube7_1=returnCubeWall(10, 200, 960,0.5,matArrayB,-960,100,90);  
          //doom7_1
          var door_cube7_1=returnCubeWall(10, 160,80,0.5,matArrayA,-1280,90, 90); 
          var cube7_2=returnResultBsp(cube7_1,door_cube7_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1280,90, 90);
      createCubeWall(10, 200, 960,1.5,matArrayB,-960,100,-260); 
      createCubeWall(10, 200, 350,0,matArrayB,-1440,100,-85);   
      createCubeWall(10, 200, 350,1,matArrayB,-480,100,-85);
          //door7_2
          createCubeWall(10, 200, 350,1,matArrayB,-960,100,-85);   
          var door_cube7_2=returnCubeWall(10, 160,80,0.5,matArrayA,-800,90, 90); 
          createResultBsp(cube7_2,door_cube7_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-800,90, 90);
//room8
      createCubeWall(10, 200, 400,0.5,matArrayB,280,100,390);  
      createCubeWall(10, 200, 400,1.5,matArrayB,280,100,-1390); 
      var cube8_1=returnCubeWall(10, 200, 1780,0,matArrayB,80,100,-500);  
          //door8_1
          var door_cube8_1=returnCubeWall(10, 160,80,1,matArrayA,80,90, -1120); 
          var cube8_2=returnResultBsp(cube8_1,door_cube8_1,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,80,90, -1120);
      createCubeWall(10, 200, 1780,1,matArrayB,480,100,-500);  
          //door8_2
          createCubeWall(10, 200, 400,0.5,matArrayB,280,100,-813);
          var door_cube8_2=returnCubeWall(10, 160,80,1,matArrayA,80,90, -480); 
          var cube8_3=returnResultBsp(cube8_2,door_cube8_2,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,80,90, -480); 
          //door8_3
          createCubeWall(10, 200, 400,0.5,matArrayB,280,100,-187); 
          var door_cube8_3=returnCubeWall(10, 160,80,1,matArrayA,80,90, 160); 
          createResultBsp(cube8_3,door_cube8_3,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,80,90, 160); 
//room9
      createCubeWall(10, 200, 400,0.5,matArrayB,1240,100,-260);  
      createCubeWall(10, 200, 400,1.5,matArrayB,1240,100,-1040); 
      createCubeWall(10, 200, 780,0,matArrayB,1040,100,-650);   
      var cube9_1=returnCubeWall(10, 200, 780,1,matArrayB,1440,100,-650);
          //door9_1
          var door_cube9_1=returnCubeWall(10, 160,80,1,matArrayA,1440,90,-960); 
          var cube9_2=returnResultBsp(cube9_1,door_cube9_1,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1440,90,-960 );
          //door9_2
          createCubeWall(10, 200, 400,0.5,matArrayB,1240,100,-780);
          var door_cube9_2=returnCubeWall(10, 160,80,1,matArrayA,1440,90,-640 ); 
          var cube9_3=returnResultBsp(cube9_2,door_cube9_2,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1440,90, -640); 
          //door9_3 
          createCubeWall(10, 200, 400,0.5,matArrayB,1240,100,-520); 
          var door_cube9_3=returnCubeWall(10, 160,80,1,matArrayA,1440,90, -320); 
          createResultBsp(cube9_3,door_cube9_3,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1440,90,-320 ); 
//room10 
      createCubeWall(10, 200, 350,0.5,matArrayB,1825,100,-260);   
      createCubeWall(10, 200, 350,1.5,matArrayB,1825,100,-1440); 
      var cube10_1=returnCubeWall(10, 200, 1180,0,matArrayB,1650,100,-850);
          //door10_1
          var door_cube10_1=returnCubeWall(10, 160,80,1,matArrayA,1650,90,-1280); 
          var cube10_2=returnResultBsp(cube10_1,door_cube10_1,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1650,90,-1280 );
      createCubeWall(10, 200, 1180,1,matArrayB,2000,100,-850);
          
          //door10_2
          createCubeWall(10, 200, 350,0.5,matArrayB,1825,100,-1145);
          var door_cube10_2=returnCubeWall(10, 160,80,1,matArrayA,1650,90,-960); 
          var cube10_3=returnResultBsp(cube10_2,door_cube10_2,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1650,90, -960); 
          //door10_3 
          createCubeWall(10, 200, 350,0.5,matArrayB,1825,100,-850); 
          var door_cube10_3=returnCubeWall(10, 160,80,1,matArrayA,1650,90, -640); 
          var cube10_4=returnResultBsp(cube10_3,door_cube10_3,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1650,90,-640);    
          //door10_4 
          createCubeWall(10, 200, 350,0.5,matArrayB,1825,100,-520); 
          var door_cube10_4=returnCubeWall(10, 160,80,1,matArrayA,1650,90, -320); 
          createResultBsp(cube10_4,door_cube10_4,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,1650,90,-320);  
       
//room11
      var cube11_1=returnCubeWall(10, 200, 600,0.5,matArrayB,780,100,390);   
          //doom11_1
          var door_cube11_1=returnCubeWall(10, 160,80,0.5,matArrayA,630,90, 390); 
          var cube11_2=returnResultBsp(cube11_1,door_cube11_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,630,90, 390);
      createCubeWall(10, 200, 600,1.5,matArrayB,780,100,40); 
      createCubeWall(10, 200, 350,0,matArrayB,480,100,215);   
      createCubeWall(10, 200, 350,1,matArrayB,1080,100,215);
          //door11_2 
          createCubeWall(10, 200, 350,1,matArrayB,780,100,215); 
          var door_cube11_2=returnCubeWall(10, 160,80,0.5,matArrayA,930,90, 390); 
          createResultBsp(cube11_2,door_cube11_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,930,90, 390);
//room12
      var cube12=returnCubeWall(10, 200, 350,0.5,matArrayB,1825,100,390); 
          var door_cube12=returnCubeWall(10, 160,80,0.5,matArrayA,1920,90, 390); 
          createResultBsp(cube12,door_cube12,1);
          createCubedoor(100, 180, 2,0,doormaterial2,1920,90, 390);
      createCubeWall(10, 200, 350,1.5,matArrayB,1825,100,40); 
      createCubeWall(10, 200, 350,0,matArrayB,1650,100,215);   
      createCubeWall(10, 200, 350,1,matArrayB,2000,100,215); 
//room13
      createCubeWall(10, 200, 350,0.5,matArrayB,-1825,100,700);  
      var cube13=returnCubeWall(10, 200, 350,1.5,matArrayB,-1825,100,300); 
          var door_cube13=returnCubeWall(10, 160,80,0.5,matArrayA,-1920,90, 300); 
          createResultBsp(cube13,door_cube13,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1920,90, 300);
      createCubeWall(10, 200, 400,0,matArrayB,-2000,100,500);   
      createCubeWall(10, 200, 400,1,matArrayB,-1650,100,500);
//room14
      createCubeWall(10, 200, 1360,0.5,matArrayB,-760,100,700);  
      var cube14_1=returnCubeWall(10, 200, 1360,1.5,matArrayB,-760,100,300); 
          //door14_1
          var door_cube14_1=returnCubeWall(10, 160,80,0.5,matArrayA,-1100,90, 300); 
          var cube14_2=returnResultBsp(cube14_1,door_cube14_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1100,90, 300);
      createCubeWall(10, 200, 400,0,matArrayB,-1440,100,500);   
      createCubeWall(10, 200, 400,1,matArrayB,-80,100,500);
          //door14_2
          createCubeWall(10, 200, 400,1,matArrayB,-760,100,500);
          var door_cube14_2=returnCubeWall(10, 160,80,0.5,matArrayA,-480,90, 300); 
          createResultBsp(cube14_2,door_cube14_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-480,90, 300);

//room15
      createCubeWall(10, 200, 400,0.5,matArrayB,-280,100,1000);  
      createCubeWall(10, 200, 400,1.5,matArrayB,-280,100,700); 
      createCubeWall(10, 200, 300,0,matArrayB,-480,100,850);   
      var cube15=returnCubeWall(10, 200, 300,1,matArrayB,-80,100,850);
          var door_cube15=returnCubeWall(10, 160,80,1,matArrayA,-80,90, 960); 
          createResultBsp(cube15,door_cube15,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,-80,90, 960); 
//room16
      createCubeWall(10, 200, 1920,0.5,matArrayB,1040,100,1000);   
      var cube16_1=returnCubeWall(10, 200, 1920,1.5,matArrayB,1040,100,600); 
          //door16_1
          var door_cube16_1=returnCubeWall(10, 160,80,0.5,matArrayA,480,90, 600); 
          var cube16_2=returnResultBsp(cube16_1,door_cube16_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,480,90, 600);
      createCubeWall(10, 200, 400,0,matArrayB,80,100,800);   
      createCubeWall(10, 200, 400,1,matArrayB,2000,100,800); 
          //door16_2
          createCubeWall(10, 200, 400,1,matArrayB,773,100,800); 
          var door_cube16_2=returnCubeWall(10, 160,80,0.5,matArrayA,1119.5,90, 600); 
          var cube16_3=returnResultBsp(cube16_2,door_cube16_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,1119.5,90, 600);
          //door16_3
          createCubeWall(10, 200, 400,1,matArrayB,1466,100,800); 
          var door_cube16_3=returnCubeWall(10, 160,80,0.5,matArrayA,1760,90, 600); 
          createResultBsp(cube16_3,door_cube16_3,1);
          createCubedoor(100, 180, 2,0,doormaterial2,1760,90, 600);
//room17
      createCubeWall(10, 200, 350,0.5,matArrayB,-1825,100,1440);   
      createCubeWall(10, 200, 350,1.5,matArrayB,-1825,100,1190); 
      createCubeWall(10, 200, 250,0,matArrayB,-2000,100,1315);   
      var cube17=returnCubeWall(10, 200, 250,1,matArrayB,-1650,100,1315); 
          var door_cube17=returnCubeWall(10, 160,80,1,matArrayA,-1650,90, 1280); 
          createResultBsp(cube17,door_cube17,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,-1650,90, 1280);

//room18
      createCubeWall(10, 200, 400,0.5,matArrayB,-1240,100,1440);   
      createCubeWall(10, 200, 400,1.5,matArrayB,-1240,100,1140); 
      var cube18=returnCubeWall(10, 200, 300,0,matArrayB,-1440,100,1290);  
          var door_cube18=returnCubeWall(10, 160,80,1,matArrayA,-1440,90, 1290); 
          createResultBsp(cube18,door_cube18,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,-1440,90, 1290); 
      createCubeWall(10, 200, 300,1,matArrayB,-1040,100,1290); 
//room19
      createCubeWall(10, 200, 400,0.5,matArrayB,-280,100,1440);   
      createCubeWall(10, 200, 400,1.5,matArrayB,-280,100,1140); 
      createCubeWall(10, 200, 300,0,matArrayB,-480,100,1290);   
      var cube19=returnCubeWall(10, 200, 300,1,matArrayB,-80,100,1290);
          var door_cube19=returnCubeWall(10, 160,80,1,matArrayA,-80,90, 1290); 
          createResultBsp(cube19,door_cube19,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,-80,90, 1290); 
//room20
      createCubeWall(10, 200, 400,0.5,matArrayB,280,100,1440);   
      createCubeWall(10, 200, 400,1.5,matArrayB,280,100,1140); 
      var cube20=returnCubeWall(10, 200, 300,0,matArrayB,80,100,1290);  
          var door_cube20=returnCubeWall(10, 160,80,1,matArrayA,80,90, 1290); 
          createResultBsp(cube20,door_cube20,1);
          createCubedoor(100, 180, 2,0.5,doormaterial2,80,90, 1290);  
      createCubeWall(10, 200, 300,1,matArrayB,480,100,1290);
//room21
      createCubeWall(10, 200, 1680,0.5,matArrayB,-1160,100,2000);   
      var cube21_1=returnCubeWall(10, 200, 1680,1.5,matArrayB,-1160,100,1650); 
          //door21_1
          var door_cube21_1=returnCubeWall(10, 160,80,0.5,matArrayA,-1760,80, 1650);
          var cube21_2=returnResultBsp(cube21_1,door_cube21_1,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1760,80, 1650);
      createCubeWall(10, 200, 350,0,matArrayB,-2000,100,1825);   
      createCubeWall(10, 200, 350,1,matArrayB,-320,100,1825);
          //door21_2
          createCubeWall(10, 200, 350,1,matArrayB,-1440,100,1825);
          var door_cube21_2=returnCubeWall(10, 160,80,0.5,matArrayA,-1120,80, 1650);
          var cube21_3=returnResultBsp(cube21_2,door_cube21_2,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-1120,80, 1650);
          //door21_3
          createCubeWall(10, 200, 350,1,matArrayB,-880,100,1825);
          var door_cube21_3=returnCubeWall(10, 160,80,0.5,matArrayA,-640,80, 1650);
          createResultBsp(cube21_3,door_cube21_3,1);
          createCubedoor(100, 180, 2,0,doormaterial2,-640,80, 1650);
//room22
      createCubeWall(10, 200, 400,0.5,matArrayB,280,100,2000);   
      var cube22=returnCubeWall(10, 200, 400,1.5,matArrayB,280,100,1650); 
          var door_cube22=returnCubeWall(10, 160,80,0.5,matArrayA,320,80, 1650);
          createResultBsp(cube22,door_cube22,1);
          createCubedoor(100, 180, 2,0,doormaterial2,320,80, 1650);
      createCubeWall(10, 200, 350,0,matArrayB,80,100,1825);   
      createCubeWall(10, 200, 350,1,matArrayB,480,100,1825);


   }
     


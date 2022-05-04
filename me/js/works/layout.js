    


    function initObject(){
     //墙纹理
      createWallMaterail();
      createFloor();
      createLayout();
   }



 function createFloor(){

    var texture = THREE.ImageUtils.loadTexture("images/floor.jpg "); 
        texture.wrapS = THREE.RepeatWrapping; 
        texture.wrapT = THREE.RepeatWrapping; 
        texture.repeat.set( 10, 10 );
    //然后, 创建basic材质来显示光影效果，把纹理传给该材质
    var floorMaterial = new THREE.MeshBasicMaterial({ map: texture,side: THREE.DoubleSide });
    // 创建几何对象
    var floorGeometry = new THREE.BoxGeometry(1600, 1100, 1);
    // 把几何体对象和纹理材质整合到一个面片集合中
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -0.5;   
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);  



	
    //茶色：0x58ACFA   透明玻璃色：0XECF1F3
    var glass_material=new THREE.MeshBasicMaterial( { color: 0XECF1F3});
    glass_material.opacity=0.4;
    glass_material.transparent=true;
    
   	 var  left_wall=returnWallObject(20, 200, 1100,0,matArrayB,-801,100,0);

   	 var  left_cube=returnWallObject(20, 110, 1100,0,matArrayB,-801,100,0);	
   	 createResultBsp(left_wall,left_cube,1);
    createCubeWall(1, 110, 1100,0,glass_material,-801,100,0);
  
    var  right_wall=returnWallObject(20, 200, 1100,1,matArrayB,801,100,0);
  	var  right_cube=returnWallObject(20, 110, 1100,0,matArrayB,801,100,0);	
  	createResultBsp(right_wall,right_cube,1);	
  	createCubeWall(1, 110, 1100,0,glass_material,801,100,0);    
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
   	var cubeGeometry = new THREE.BoxGeometry(width, height, depth );     
       var cube = new THREE.Mesh( cubeGeometry, material );  
       cube.position.x = x;  
       cube.position.y = y;  
       cube.position.z = z;  
       cube.rotation.y += angle*Math.PI;  //-逆时针旋转,+顺时针
       scene.add(cube);  
   }

   //返回墙对象
   function returnWallObject(width, height, depth,angle,material,x,y,z){
   	var cubeGeometry = new THREE.BoxGeometry(width, height, depth);     
       var cube = new THREE.Mesh( cubeGeometry, material );  
       cube.position.x = x;  
       cube.position.y = y;  
       cube.position.z = z;  
       cube.rotation.y += angle*Math.PI;    
       return cube;
   }

   //创建墙纹理
  function createWallMaterail(){
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //前  0xafc0ca :灰色
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xafc0ca}));  //后  
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  //上  0xd6e4ec： 偏白色
	   matArrayA.push(new THREE.MeshPhongMaterial({color: 0xd6e4ec}));  //下  
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
        
       // 墙面1 立方体比较长的面  左一
       createCubeWall(10, 200, 900,0,matArrayB,-651,100,0);  
       // 墙面2  立方体比较长的面   右一
       createCubeWall(10, 200, 900,1,matArrayB,651,100,0);
       // 墙面3 门对面的墙 立方体比较短的面  
       createCubeWall(10, 200, 1310,1.5,matArrayB,0,100,-451); 
       
       // 墙面4   带门的面  
       var wall=returnWallObject(1310, 200,10,0,matArrayB,0,100,455); 
       // 门框 
       var door_cube=returnWallObject(100, 180,10,0,matArrayB,0,90,455);
      createResultBsp(wall,door_cube,1);
      
    
       //为墙面安装门,右门
     var loader=new THREE.TextureLoader();
	 loader.load("images/door_right.png",function(texture){
		var  doorgeometry = new THREE.BoxGeometry(100, 180, 2);
		 var doormaterial = new THREE.MeshBasicMaterial({map:texture,color:0xffffff});
	         doormaterial.opacity=1.0;
	         doormaterial.transparent=true;
	         door = new THREE.Mesh( doorgeometry,doormaterial);	       	     	
	         door.position.set(-50,0,0);	         
	        var door1=door.clone();
	        door1.position.set(50,0,0);
	        door1.visible=false;
	        dummy.add(door);	         	 	      	      	        
	        dummy.add(door1);	        
	        dummy.position.set(50,90,451)
	        scene.add(dummy);
	});
            
       // 房间A:隔墙1 
       createCubeWall(10, 200, 250,0,matArrayA,-151,100,325); 
       //房间A:隔墙2  无门
       createCubeWall(10, 200, 220,0.5,matArrayA, -256,100,201);
       // 厨房：隔墙3 
       createCubeWall(350, 200, 10,0,matArrayA, 481,100,131);
       // 厨房：隔墙4 无门
       createCubeWall(10, 200, 200,0,matArrayA, 301,100,225);  
       // 房间B 
       createCubeWall(350, 200, 10,0,matArrayA, -471,100,-50);  
       //房间B  无门
       createCubeWall(200, 200, 10,0.5,matArrayA, 0,100,-350); 
      // 房间C
      createCubeWall(220, 200, 10,0,matArrayA, 540,100,-50); 
       //房间C 无门
       createCubeWall(200, 200, 10,0.5,matArrayA, 250,100,-350);
       //厕所
       var cube=returnWallObject(10, 200, 260,0.5,matArrayA, 125,100,-250);  
      //厕所门框
       var door_cube1 =returnWallObject(10, 160,80,0.5,matArrayA,155,90, -250); 
       createResultBsp(cube,door_cube1,2);
       
       //茶色：0x58ACFA   透明玻璃色：0XECF1F3
       var glass_material=new THREE.MeshBasicMaterial( { color: 0x58ACFA});
       glass_material.opacity=0.6;
       glass_material.transparent=true;
       createCubeWall(1, 180,80,0.5,glass_material,155,90, -250); 
   }
     


// Load 3D Scene
var scene = new THREE.Scene(); 

// Load Camera Perspektive
var camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
camera.position.set( 1, 1, 20 );

// Load a Renderer
var renderer = new THREE.WebGLRenderer({ alpha: false });
renderer.setClearColor( 0x000000 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("HeroAnim").appendChild(renderer.domElement);
        
// Load Light
var ambientLight = new THREE.AmbientLight( 0xcccccc );
scene.add( ambientLight );
        
var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );

// glTf 2.0 Loader
var object;

var loader = new THREE.GLTFLoader();

/* STUFF TO RENDER YOJIVIA LOGO */
// loader.load( 'images/yojiVia.gltf', function ( gltf ) {  
//     object2 = gltf.scene;	                    
//     gltf.scene.scale.set( 2, 2, 2 );			   
//     gltf.scene.position.x += 0.7;			    //Position (x = right+ left-) 
//     gltf.scene.position.y = 1;    	    //Position (y = up+, down-)
//     gltf.scene.position.z = 18.0;          //Position (z = front +, back-)    
//     scene.add( object2 );
//     animate();    
//     });
// var object2;	 
/* END YOJIVIA STUFF */
loader.load( 'public/images/D2LogoAqua3D.gltf', function ( gltf ) {  
object = gltf.scene;	                    
gltf.scene.scale.set( 2, 2, 2 );			   
gltf.scene.position.x += 1;			    //Position (x = right+ left-) 
gltf.scene.position.y = 0.76;    	    //Position (y = up+, down-)
gltf.scene.position.z = 17.0;          //Position (z = front +, back-)    
scene.add( object );
animate();    
});	 

function animate() {

render();
requestAnimationFrame( animate );    
}
function render() {

//rotate object
object.rotation.y += 0.05;
// object2.rotation.y += 0.05;

renderer.render( scene, camera );

}
render();  
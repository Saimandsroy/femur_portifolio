import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // --------------------------------------------------------
        // THREE.JS SCENE SETUP
        // --------------------------------------------------------
        const canvas = canvasRef.current;
        const scene = new THREE.Scene();
        // Premium "Coding Galaxy" Atmosphere - Deep Indigo/Black
        scene.fog = new THREE.FogExp2(0x050510, 0.035);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 26; // Moved further back to keep elements away from content

        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Groups
        const groupCage = new THREE.Group();
        const groupFrontLogos = new THREE.Group(); // React, JS, Code Symbols
        const groupBackLogos = new THREE.Group(); // Others
        const groupStars = new THREE.Group(); // Star Dust

        scene.add(groupCage);
        scene.add(groupStars);
        scene.add(groupBackLogos); // Back
        scene.add(groupFrontLogos); // Front

        // --------------------------------------------------------
        // LIGHTING
        // --------------------------------------------------------
        const ambientLight = new THREE.AmbientLight(0x4c1d95, 0.6); // Deep Purple Ambient
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x8b5cf6, 2, 60); // Violet Main Light
        pointLight.position.set(0, 10, 10);
        scene.add(pointLight);

        const secondaryLight = new THREE.PointLight(0x06b6d4, 1.5, 60); // Cyan Rim Light
        secondaryLight.position.set(-10, -10, 10);
        scene.add(secondaryLight);

        // --------------------------------------------------------
        // 1. CODING GALAXY STAR DUST
        // --------------------------------------------------------
        const starGeo = new THREE.BufferGeometry();
        const starCount = 800;
        const starPos = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount * 3; i++) {
            starPos[i] = (Math.random() - 0.5) * 90; // Wide spread
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({
            size: 0.15,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        const starSystem = new THREE.Points(starGeo, starMat);
        groupStars.add(starSystem);


        // --------------------------------------------------------
        // 2. VIOLET CAGE STRUCTURE
        // --------------------------------------------------------

        // Inner Cage (Refined, thinner)
        const matCageLine = new THREE.LineBasicMaterial({
            color: 0x6366f1, // Indigo-500
            transparent: true,
            opacity: 0.1, // Subtle
            blending: THREE.AdditiveBlending
        });
        const cageGeo1 = new THREE.IcosahedronGeometry(18, 1);
        const cageWireframe1 = new THREE.WireframeGeometry(cageGeo1);
        const cageLines1 = new THREE.LineSegments(cageWireframe1, matCageLine);
        groupCage.add(cageLines1);

        // Interactive Points (Dimmed as requested)
        const positions = cageGeo1.attributes.position.array;
        const pointsGeo = new THREE.BufferGeometry();
        pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const pointsMat = new THREE.PointsMaterial({
            size: 2.0, // Reduced size
            sizeAttenuation: false,
            color: 0x818cf8, // Soft Indigo
            transparent: true,
            opacity: 0.4, // Reduced Opacity
            blending: THREE.AdditiveBlending
        });
        const cagePoints = new THREE.Points(pointsGeo, pointsMat);
        groupCage.add(cagePoints);


        // --------------------------------------------------------
        // 3. FLOATING LOGOS - SPLIT & RESIZED
        // --------------------------------------------------------

        // Foreground: Reduced count, removed duplicates
        const frontStack = [
            { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
            { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
            { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
            { name: '{ }', color: '#22d3ee' },
            { name: '</>', color: '#f472b6' },
        ];

        // Background: Others
        const backStack = [
            { name: 'Spring', url: 'https://cdn.simpleicons.org/springboot/6DB33F' },
            { name: 'Node.js', url: 'https://cdn.simpleicons.org/nodedotjs/339933' },
            { name: 'MySQL', url: 'https://cdn.simpleicons.org/mysql/4479A1' },
            { name: 'Java', url: 'https://cdn.simpleicons.org/openjdk/ffffff' },
            { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
            { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
            { name: 'Python', url: 'https://cdn.simpleicons.org/python/3776AB' },
            { name: ';;', color: '#6366f1' },
            { name: '[ ]', color: '#ffffff' },
        ];

        const textureLoader = new THREE.TextureLoader();
        const logoObjects: { mesh: THREE.Mesh, initialY: number, speed: number, offset: number, groupType: 'front' | 'back', baseOpacity: number }[] = [];

        function createTextTexture(text: string, color = '#ffffff') {
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 128;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = color;
                ctx.font = 'bold 70px "Fira Code", monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.shadowColor = color;
                ctx.shadowBlur = 25; // Enhanced Glow effect
                ctx.fillText(text, 128, 64);
            }
            return new THREE.CanvasTexture(canvas);
        }

        const createLogoMesh = (tech: any, group: THREE.Group, radiusBase: number, type: 'front' | 'back') => {
            const baseOpacity = type === 'front' ? 0.8 : 0.5; // Reduced base opacity for front (was 1.0)

            let material;
            if ('url' in tech && tech.url) {
                const texture = textureLoader.load(tech.url);
                material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    opacity: baseOpacity,
                    side: THREE.DoubleSide,
                    depthTest: false,
                    blending: THREE.AdditiveBlending
                });
            } else {
                material = new THREE.MeshBasicMaterial({
                    map: createTextTexture(tech.name, (tech as any).color),
                    transparent: true,
                    opacity: baseOpacity * 0.9,
                    side: THREE.DoubleSide,
                    depthTest: false,
                    blending: THREE.AdditiveBlending
                });
            }

            const size = type === 'front' ? 2.0 : 1.4; // Slightly smaller base size
            const plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size), material);

            // Random Position on Sphere Surface
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            const radius = radiusBase + (Math.random() * 4); // Variance

            const x = Math.sin(phi) * Math.cos(theta) * radius;
            const y = Math.sin(phi) * Math.sin(theta) * radius;
            const z = Math.cos(phi) * radius;

            plane.position.set(x, y, z);
            plane.lookAt(0, 0, 0);

            group.add(plane);
            logoObjects.push({
                mesh: plane,
                initialY: y,
                speed: 0.1 + Math.random() * 0.1,
                offset: Math.random() * 10,
                groupType: type,
                baseOpacity: baseOpacity
            });
        };

        // Populate Groups
        // Front: Closer radius (10-14)
        frontStack.forEach(t => createLogoMesh(t, groupFrontLogos, 12, 'front'));
        // Removed duplicates - keeping it minimal

        // Back: Further radius (18-24)
        backStack.forEach(t => createLogoMesh(t, groupBackLogos, 20, 'back'));
        backStack.forEach(t => createLogoMesh(t, groupBackLogos, 20, 'back')); // Keep back dense

        // --------------------------------------------------------
        // ANIMATION LOOP
        // --------------------------------------------------------
        let mouseX = 0;
        let mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX - windowHalfX) * 0.0005;
            mouseY = (event.clientY - windowHalfY) * 0.0005;
        };
        document.addEventListener('mousemove', handleMouseMove);

        // Scroll Integration
        const scrollTrigger = ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        });

        const clock = new THREE.Clock();
        let animationId: number;

        function animate() {
            animationId = requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            // Rotate Groups (Galaxy Rotation)
            groupCage.rotation.y = time * 0.03;
            groupStars.rotation.y = time * 0.01;
            groupFrontLogos.rotation.y = time * 0.08; // Front moves faster
            groupBackLogos.rotation.y = time * 0.04;

            // Mouse Interaction (Tilt)
            scene.rotation.y += 0.05 * (mouseX - scene.rotation.y);
            scene.rotation.x += 0.05 * (mouseY - scene.rotation.x);

            // Dynamic Scaling logic for Front Elements
            logoObjects.forEach((obj) => {
                // Bobbing
                obj.mesh.position.y = obj.initialY + Math.sin(time * obj.speed + obj.offset) * 1.0;
                obj.mesh.lookAt(camera.position);

                if (obj.groupType === 'front') {
                    // Check distance to camera
                    const dist = obj.mesh.position.distanceTo(camera.position);

                    // Aggressive fade/shrink when getting closer
                    if (dist < 14) {
                        const factor = Math.max(0, (dist - 8) / 6); // 0 at dist 8, 1 at dist 14
                        obj.mesh.scale.set(factor, factor, factor);
                        (obj.mesh.material as THREE.MeshBasicMaterial).opacity = obj.baseOpacity * factor;
                    } else {
                        obj.mesh.scale.set(1, 1, 1);
                        (obj.mesh.material as THREE.MeshBasicMaterial).opacity = obj.baseOpacity;
                    }
                }
            });

            // Pulse Star Dust
            pointsMat.opacity = 0.3 + Math.sin(time * 2) * 0.1;

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            scrollTrigger.kill();
            // Cleanup geometries/materials...
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    );
}

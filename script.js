/* ==========================================================================
   SPIDEY PORTFOLIO - INTERACTIVE LOGIC & ANIMATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DATA COLLECTIONS (DEVOPS SKILLS & SAM SUNIL'S REAL GITHUB REPOS)
  // --------------------------------------------------------------------------
  const SKILLS_DATA = [
    { name: 'Kubernetes & K8s Clusters, etc.', category: 'cloud', level: 94, icon: 'fas fa-dharmachakra' },
    { name: 'Docker & Containerization, etc.', category: 'cloud', level: 96, icon: 'fab fa-docker' },
    { name: 'AWS / GCP Cloud Platforms, etc.', category: 'cloud', level: 95, icon: 'fab fa-aws' },
    { name: 'Terraform & IaC Automation, etc.', category: 'automation', level: 96, icon: 'fas fa-cubes' },
    { name: 'Ansible Configuration Automation, etc.', category: 'automation', level: 94, icon: 'fas fa-robot' },
    { name: 'CI/CD Pipelines & Workflows, etc.', category: 'automation', level: 95, icon: 'fas fa-code-branch' },
    { name: 'Bash & Shell Scripting, etc.', category: 'linux', level: 98, icon: 'fas fa-terminal' },
    { name: 'Linux System Administration, etc.', category: 'linux', level: 96, icon: 'fab fa-linux' },
    { name: 'Python Automation Scripts, etc.', category: 'linux', level: 90, icon: 'fab fa-python' },
    { name: 'MySQL & Data Backups, etc.', category: 'cloud', level: 92, icon: 'fas fa-database' },
    { name: 'Nginx & Apache Web Servers, etc.', category: 'linux', level: 90, icon: 'fas fa-server' },
    { name: 'Monitoring & Observability, etc.', category: 'automation', level: 86, icon: 'fas fa-chart-line' }
  ];

  const PROJECTS_DATA = [
    {
      title: 'krypton',
      category: 'DevOps & Cloud',
      badge: 'FEATURED REPO',
      desc: 'Robust full-stack cloud and infrastructure management platform built with high performance, secure orchestration, and automated microservices.',
      bannerBg: 'linear-gradient(135deg, #00E5FF 0%, #E62429 100%)',
      tags: ['Cloud Infra', 'Docker', 'Automation', 'DevOps'],
      liveUrl: 'https://github.com/sam-sunil-4/krypton',
      githubUrl: 'https://github.com/sam-sunil-4/krypton'
    },
    {
      title: 'employee-relieving-portal',
      category: 'Web Portal',
      badge: 'WORKFLOW APP',
      desc: 'Automated enterprise employee relieving portal application designed for HR workflow management and automated document clearance processing.',
      bannerBg: 'linear-gradient(135deg, #0084FF 0%, #FF2E36 100%)',
      tags: ['Web Application', 'Workflow Engine', 'Automation'],
      liveUrl: 'https://github.com/sam-sunil-4/employee-relieving-portal',
      githubUrl: 'https://github.com/sam-sunil-4/employee-relieving-portal'
    },
    {
      title: 'Evalgator-Bot',
      category: 'Bot & Automation',
      badge: 'BOT AUTOMATION',
      desc: 'Automated evaluation and grading bot engineered for test assessment, automated workflows, and high-volume response processing.',
      bannerBg: 'linear-gradient(135deg, #7A00FF 0%, #00E5FF 100%)',
      tags: ['Python', 'Bot Automation', 'API Integration', 'DevOps'],
      liveUrl: 'https://github.com/sam-sunil-4/Evalgator-Bot',
      githubUrl: 'https://github.com/sam-sunil-4/Evalgator-Bot'
    },
    {
      title: 'cyberpanel-using-ansible',
      category: 'Ansible & IaC',
      badge: 'IAC AUTOMATION',
      desc: 'Automated Ansible playbooks and roles for zero-touch provisioning, deployment, and configuration of CyberPanel web hosting control panels on Linux servers.',
      bannerBg: 'linear-gradient(135deg, #E62429 0%, #0055A5 100%)',
      tags: ['Ansible', 'Linux', 'CyberPanel', 'Bash Automation'],
      liveUrl: 'https://github.com/sam-sunil-4/cyberpanel-using-ansible',
      githubUrl: 'https://github.com/sam-sunil-4/cyberpanel-using-ansible'
    },
    {
      title: 'env-to-parameterstore',
      category: 'AWS Security',
      badge: 'SECRETS DEVOPS',
      desc: 'DevOps cloud security utility to parse server .env configuration files and bulk-migrate key-value secrets safely into AWS Systems Manager Parameter Store.',
      bannerBg: 'linear-gradient(135deg, #FF003C 0%, #7A00FF 100%)',
      tags: ['AWS SSM', 'Secrets Mgmt', 'Python', 'DevOps'],
      liveUrl: 'https://github.com/sam-sunil-4/env-to-parameterstore',
      githubUrl: 'https://github.com/sam-sunil-4/env-to-parameterstore'
    },
    {
      title: 'bash-script-to-upload-logs-to-s3bucket',
      category: 'AWS & Bash',
      badge: 'STORAGE AUTOMATION',
      desc: 'Production-ready automated Bash script for server log rotation, compression, and scheduled synchronization to Amazon Web Services S3 buckets.',
      bannerBg: 'linear-gradient(135deg, #0055A5 0%, #00FFCC 100%)',
      tags: ['Bash', 'AWS S3', 'Cron', 'Linux Security'],
      liveUrl: 'https://github.com/sam-sunil-4/bash-script-to-upload-logs-to-s3bucket',
      githubUrl: 'https://github.com/sam-sunil-4/bash-script-to-upload-logs-to-s3bucket'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. AUDIO SFX SYNTHESIZER (WEB AUDIO API)
  // --------------------------------------------------------------------------
  let sfxEnabled = true;
  const sfxToggleBtn = document.getElementById('sfx-toggle');

  if (sfxToggleBtn) {
    sfxToggleBtn.addEventListener('click', () => {
      sfxEnabled = !sfxEnabled;
      sfxToggleBtn.innerHTML = sfxEnabled 
        ? '<i class="fas fa-volume-high"></i>' 
        : '<i class="fas fa-volume-xmark"></i>';
      sfxToggleBtn.style.color = sfxEnabled ? 'var(--text-primary)' : 'var(--text-muted)';
    });
  }

  const brandStarIcon = document.getElementById('brand-star-icon');
  if (brandStarIcon) {
    brandStarIcon.addEventListener('mouseenter', () => {
      playWebSwishSound();
    });
  }

  function playWebSwishSound() {
    if (!sfxEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  }

  // --------------------------------------------------------------------------
  // 3. THREE.JS 3D WEBGL HOLOGRAPHIC CYBER-WEB ANIMATION ENGINE (WITH CURSOR DYNAMICS)
  // --------------------------------------------------------------------------
  const webCanvas = document.getElementById('web-canvas');
  let threeScene, threeCamera, threeRenderer;
  let webPoints, webLines, emberParticles, cursorWebLines;
  let mouseX3D = 0, mouseY3D = 0;
  let targetX3D = 0, targetY3D = 0;
  let mouseWorld = { x: 0, y: 0, z: 0, active: false };
  let clickShockwaves = [];

  function initThreeJS() {
    try {
      if (typeof THREE === 'undefined' || !webCanvas) return;

      // Scene & Camera
      threeScene = new THREE.Scene();
      threeCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
      threeCamera.position.z = 700;

      // Renderer
      threeRenderer = new THREE.WebGLRenderer({ canvas: webCanvas, alpha: true, antialias: true });
      threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      threeRenderer.setSize(window.innerWidth, window.innerHeight);

      // 1. 3D Web Particle Cloud & Geometry
      const particleCount = 80;
      const positions = new Float32Array(particleCount * 3);
      const particleVelocities = [];
      const originalPositions = [];

      for (let i = 0; i < particleCount; i++) {
        const px = (Math.random() - 0.5) * 1400;
        const py = (Math.random() - 0.5) * 900;
        const pz = (Math.random() - 0.5) * 600;

        positions[i * 3] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = pz;

        originalPositions.push({ x: px, y: py, z: pz });

        particleVelocities.push({
          x: (Math.random() - 0.5) * 0.7,
          y: (Math.random() - 0.5) * 0.7,
          z: (Math.random() - 0.5) * 0.4
        });
      }

      const pointGeo = new THREE.BufferGeometry();
      pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const isClassic = document.documentElement.getAttribute('data-theme') === 'classic';
      const pointColor = isClassic ? 0xE62429 : 0xFF2E36;

      const pointMat = new THREE.PointsMaterial({
        color: pointColor,
        size: 5,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      webPoints = new THREE.Points(pointGeo, pointMat);
      threeScene.add(webPoints);

      // 2. Interconnected 3D Web Strand Lines + Dynamic Cursor Web Strands
      const maxLines = particleCount * particleCount + particleCount * 2;
      const linePositions = new Float32Array(maxLines * 6);
      const lineColors = new Float32Array(maxLines * 6);

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      const lineMat = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending
      });

      webLines = new THREE.LineSegments(lineGeo, lineMat);
      threeScene.add(webLines);

      // 3. Floating 3D Cyber Embers
      const emberCount = 55;
      const emberPositions = new Float32Array(emberCount * 3);
      for (let i = 0; i < emberCount; i++) {
        emberPositions[i * 3] = (Math.random() - 0.5) * 1600;
        emberPositions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
        emberPositions[i * 3 + 2] = (Math.random() - 0.5) * 800;
      }

      const emberGeo = new THREE.BufferGeometry();
      emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPositions, 3));

      const emberMat = new THREE.PointsMaterial({
        color: isClassic ? 0x0055A5 : 0xFFD700,
        size: 3.5,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      });

      emberParticles = new THREE.Points(emberGeo, emberMat);
      threeScene.add(emberParticles);

      // Render Animation Loop
      function animateThree() {
        requestAnimationFrame(animateThree);

        // Smooth 3D Camera Sway based on mouse coordinates
        targetX3D += (mouseX3D - targetX3D) * 0.05;
        targetY3D += (mouseY3D - targetY3D) * 0.05;

        threeCamera.position.x = targetX3D * 45;
        threeCamera.position.y = -targetY3D * 35;
        threeCamera.lookAt(threeScene.position);

        // Calculate Cursor 3D World Position in Screen Plane
        mouseWorld.x = targetX3D * 460;
        mouseWorld.y = -targetY3D * 290;
        mouseWorld.z = 50;

        // Subtle Ambient Web Matrix Rotation
        if (webPoints) {
          webPoints.rotation.y += 0.0008;
          webPoints.rotation.x += 0.0004;
        }
        if (webLines) {
          webLines.rotation.y += 0.0008;
          webLines.rotation.x += 0.0004;
        }
        if (emberParticles) {
          emberParticles.rotation.y -= 0.0006;
        }

        // Process Click Shockwaves
        for (let s = clickShockwaves.length - 1; s >= 0; s--) {
          const sw = clickShockwaves[s];
          sw.radius += 18;
          sw.intensity *= 0.92;
          if (sw.radius > 500 || sw.intensity < 0.02) {
            clickShockwaves.splice(s, 1);
          }
        }

        // Update particle positions & recalculate web distance connections
        const pos = webPoints.geometry.attributes.position.array;
        let lineIndex = 0;
        const connectionDist = 175;
        const cursorGrabDist = 240;

        for (let i = 0; i < particleCount; i++) {
          // Standard Float Drift
          pos[i * 3] += particleVelocities[i].x;
          pos[i * 3 + 1] += particleVelocities[i].y;
          pos[i * 3 + 2] += particleVelocities[i].z;

          // Interactive Magnetic Cursor Elastic Pull
          if (mouseWorld.active) {
            const cdx = mouseWorld.x - pos[i * 3];
            const cdy = mouseWorld.y - pos[i * 3 + 1];
            const cdz = mouseWorld.z - pos[i * 3 + 2];
            const cursorDist = Math.sqrt(cdx * cdx + cdy * cdy + cdz * cdz);

            if (cursorDist < cursorGrabDist && cursorDist > 10) {
              const pullFactor = (1 - cursorDist / cursorGrabDist) * 0.035;
              pos[i * 3] += cdx * pullFactor;
              pos[i * 3 + 1] += cdy * pullFactor;
              pos[i * 3 + 2] += cdz * pullFactor;

              // Connect Dynamic Silk Web Line directly from node to Cursor!
              linePositions[lineIndex * 6] = pos[i * 3];
              linePositions[lineIndex * 6 + 1] = pos[i * 3 + 1];
              linePositions[lineIndex * 6 + 2] = pos[i * 3 + 2];

              linePositions[lineIndex * 6 + 3] = mouseWorld.x;
              linePositions[lineIndex * 6 + 4] = mouseWorld.y;
              linePositions[lineIndex * 6 + 5] = mouseWorld.z;

              const webAlpha = 1 - cursorDist / cursorGrabDist;
              lineColors[lineIndex * 6] = 1.0;
              lineColors[lineIndex * 6 + 1] = 0.2;
              lineColors[lineIndex * 6 + 2] = 0.25;

              lineColors[lineIndex * 6 + 3] = 0.0;
              lineColors[lineIndex * 6 + 4] = 0.9;
              lineColors[lineIndex * 6 + 5] = 1.0;

              lineIndex++;
            }
          }

          // Interactive Click Shockwave Dispersion
          clickShockwaves.forEach(sw => {
            const sdx = pos[i * 3] - sw.x;
            const sdy = pos[i * 3 + 1] - sw.y;
            const sdz = pos[i * 3 + 2] - sw.z;
            const sdist = Math.sqrt(sdx * sdx + sdy * sdy + sdz * sdz);

            if (Math.abs(sdist - sw.radius) < 70 && sdist > 1) {
              const push = (1 - Math.abs(sdist - sw.radius) / 70) * sw.intensity * 25;
              pos[i * 3] += (sdx / sdist) * push;
              pos[i * 3 + 1] += (sdy / sdist) * push;
              pos[i * 3 + 2] += (sdz / sdist) * push;
            }
          });

          // Screen Bounds Bouncing
          if (pos[i * 3] < -720 || pos[i * 3] > 720) particleVelocities[i].x *= -1;
          if (pos[i * 3 + 1] < -460 || pos[i * 3 + 1] > 460) particleVelocities[i].y *= -1;
          if (pos[i * 3 + 2] < -320 || pos[i * 3 + 2] > 320) particleVelocities[i].z *= -1;

          // Inter-node 3D Web Lines
          for (let j = i + 1; j < particleCount; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDist) {
              linePositions[lineIndex * 6] = pos[i * 3];
              linePositions[lineIndex * 6 + 1] = pos[i * 3 + 1];
              linePositions[lineIndex * 6 + 2] = pos[i * 3 + 2];

              linePositions[lineIndex * 6 + 3] = pos[j * 3];
              linePositions[lineIndex * 6 + 4] = pos[j * 3 + 1];
              linePositions[lineIndex * 6 + 5] = pos[j * 3 + 2];

              // Dual-tone Neon Line Gradient
              lineColors[lineIndex * 6] = 0.9;
              lineColors[lineIndex * 6 + 1] = 0.15;
              lineColors[lineIndex * 6 + 2] = 0.2;

              lineColors[lineIndex * 6 + 3] = 0.0;
              lineColors[lineIndex * 6 + 4] = 0.6;
              lineColors[lineIndex * 6 + 5] = 0.9;

              lineIndex++;
            }
          }
        }

        webPoints.geometry.attributes.position.needsUpdate = true;
        webLines.geometry.attributes.position.needsUpdate = true;
        webLines.geometry.attributes.color.needsUpdate = true;
        webLines.geometry.setDrawRange(0, lineIndex * 2);

        threeRenderer.render(threeScene, threeCamera);
      }

      animateThree();

      // Window Resize Handler
      window.addEventListener('resize', () => {
        if (!threeCamera || !threeRenderer) return;
        threeCamera.aspect = window.innerWidth / window.innerHeight;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Mouse Tracking for 3D Camera Parallax & Web Latching
      window.addEventListener('mousemove', (e) => {
        mouseX3D = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY3D = (e.clientY / window.innerHeight - 0.5) * 2;
        mouseWorld.active = true;
      });

      window.addEventListener('mouseleave', () => {
        mouseWorld.active = false;
      });

      // Interactive Click Web Shockwave Burst
      window.addEventListener('click', (e) => {
        const clickX = ((e.clientX / window.innerWidth - 0.5) * 2) * 460;
        const clickY = -((e.clientY / window.innerHeight - 0.5) * 2) * 290;
        clickShockwaves.push({
          x: clickX,
          y: clickY,
          z: 0,
          radius: 10,
          intensity: 1.0
        });
      });

    } catch (e) {
      console.warn('Three.js background initialization failed, continuing cleanly:', e);
    }
  }

  // Update Three.js Palette on Theme Change
  function updateThreeJSTheme(theme) {
    try {
      if (!webPoints || !emberParticles) return;
      const isClassic = theme === 'classic';
      if (webPoints.material) {
        webPoints.material.color.setHex(isClassic ? 0xE62429 : 0xFF2E36);
      }
      if (emberParticles.material) {
        emberParticles.material.color.setHex(isClassic ? 0x0055A5 : 0xFFD700);
      }
    } catch (e) {}
  }

  // Initialize Three.js Engine
  initThreeJS();

  // --------------------------------------------------------------------------
  // 4. 3D LIVING SPIDER-MAN HERO STAGE & SECTION ANIMATIONS
  // --------------------------------------------------------------------------
  const heroStage = document.getElementById('hero-stage');
  const heroSpideyMainImg = document.getElementById('hero-spidey-main-img');
  const heroCharacterWrapper = document.getElementById('hero-character-wrapper');
  const displayStatus = document.getElementById('display-status');
  const loreSpideyHero = document.getElementById('lore-spidey-hero');

  // Continuous Smooth GSAP Levitation
  if (typeof gsap !== 'undefined') {
    // Hero Levitation Float
    gsap.to('.hero-main-spidey-img', {
      y: -14,
      rotation: 1.2,
      duration: 2.4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });

    // Lore Pendulum Web Swing
    if (loreSpideyHero) {
      gsap.to(loreSpideyHero, {
        rotation: 8,
        x: -12,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        transformOrigin: 'top right'
      });
    }
  }

  // Real-time 3D Perspective Mouse Tracking
  window.addEventListener('mousemove', (e) => {
    if (heroStage && window.innerWidth > 768 && typeof gsap !== 'undefined') {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(heroStage, {
        rotationY: mouseX * 12,
        rotationX: -mouseY * 8,
        duration: 0.6,
        ease: 'power2.out',
        transformPerspective: 1000
      });

      if (heroCharacterWrapper) {
        gsap.to(heroCharacterWrapper, {
          x: mouseX * 10,
          y: mouseY * 8,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    }
  });

  // Interactive Click Web-Shoot / Jump
  if (heroStage) {
    heroStage.addEventListener('click', () => {
      if (typeof gsap !== 'undefined') {
        gsap.timeline()
          .to(heroCharacterWrapper, { scale: 0.9, y: 15, duration: 0.12, ease: 'power2.in' })
          .to(heroCharacterWrapper, { scale: 1.15, y: -24, rotation: 3, duration: 0.28, ease: 'back.out(2)' })
          .to(heroCharacterWrapper, { scale: 1, y: 0, rotation: 0, duration: 0.4, ease: 'power2.out' });
      }
      playWebSwishSound();
    });
  }

  // --------------------------------------------------------------------------
  // 5. SUIT THEME SWITCHER & DYNAMIC SPIDER-MAN SUIT SWAP
  // --------------------------------------------------------------------------
  const suitBtns = document.querySelectorAll('.suit-btn');
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'black';

  suitBtns.forEach(btn => {
    if (btn.getAttribute('data-suit') === currentTheme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }

    btn.addEventListener('click', () => {
      suitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const suitTheme = btn.getAttribute('data-suit');
      document.documentElement.setAttribute('data-theme', suitTheme);
      updateThreeJSTheme(suitTheme);
      try {
        localStorage.setItem('spidey-suit-theme', suitTheme);
      } catch(e) {}
      playWebSwishSound();
    });
  });

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  if (mobileMenuToggle && mobileMenuOverlay) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenuOverlay.classList.toggle('open');
      mobileMenuToggle.classList.toggle('open', isOpen);
      playWebSwishSound();
    });

    const mobileNavLinks = mobileMenuOverlay.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('open');
        mobileMenuToggle.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. GSAP INITIALIZATION, FULLPAGE OBSERVER & SMOOTH NAVIGATION
  // --------------------------------------------------------------------------
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollToPlugin !== 'undefined') gsap.registerPlugin(ScrollToPlugin);
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // Silky Smooth Hero Entrance Sequence
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl.from('.status-badge', { y: -20, opacity: 0, duration: 0.6, delay: 0.15 })
          .from('.hero-title', { y: 35, opacity: 0, duration: 0.75 }, '-=0.35')
          .from('.typing-container', { y: 15, opacity: 0, duration: 0.5 }, '-=0.4')
          .from('.hero-description', { y: 15, opacity: 0, duration: 0.5 }, '-=0.35')
          .from('.hero-actions .btn-primary, .hero-actions .btn-secondary', { y: 20, opacity: 0, stagger: 0.12, duration: 0.5 }, '-=0.3')
          .from('.hero-spidey-wrapper', { scale: 0.85, opacity: 0, duration: 0.8, ease: 'back.out(1.6)' }, '-=0.7');
  }

  const navbar = document.getElementById('navbar');
  const pageDots = document.querySelectorAll('.page-dot');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.hero-section, .section');

  const animateSectionInView = (sectionId) => {
    if (typeof gsap === 'undefined') return;

    if (sectionId === 'about') {
      gsap.fromTo('#about .section-header', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo('#about .about-card', { y: 25, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'power3.out' });
      gsap.fromTo('#about .mini-stat', { y: 15, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, stagger: 0.07, duration: 0.45, ease: 'back.out(1.5)', delay: 0.15 });
    } else if (sectionId === 'skills') {
      gsap.fromTo('#skills .section-header', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo('#skills .skills-tabs', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', delay: 0.08 });
      gsap.fromTo('#skills .skill-card', { y: 18, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, stagger: 0.025, duration: 0.35, ease: 'power2.out', delay: 0.12 });
      gsap.fromTo('#skills .skill-bar-fill', { width: '0%' }, {
        width: (i, target) => target.getAttribute('data-level') || target.style.width,
        duration: 0.75,
        ease: 'power2.out',
        delay: 0.3
      });
    } else if (sectionId === 'projects') {
      gsap.fromTo('#projects .section-header', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo('#projects .project-card', { y: 25, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.12 });
    } else if (sectionId === 'experience') {
      gsap.fromTo('#experience .section-header', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo('#experience .timeline-item', { x: 25, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power2.out', delay: 0.12 });
    } else if (sectionId === 'contact') {
      gsap.fromTo('#contact .section-header', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
      gsap.fromTo('#contact .contact-info-card', { x: -25, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'power3.out', delay: 0.12 });
      gsap.fromTo('#contact .contact-form', { x: 25, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'power3.out', delay: 0.12 });
    }
  };

  const updateActiveSection = (sectionId) => {
    pageDots.forEach(dot => {
      dot.classList.toggle('active', dot.getAttribute('data-section') === sectionId);
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === `#${sectionId}`);
    });

    animateSectionInView(sectionId);
  };

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) updateActiveSection(id);
        }
      });
    }, {
      threshold: 0.5
    });

    sections.forEach(sec => observer.observe(sec));
  }

  // Reliable smooth navigation for all nav anchors (Desktop, Mobile, Pagination, Buttons)
  const allNavAnchors = document.querySelectorAll('.nav-link, .page-dot, .mobile-nav-link, .hero-actions a[href^="#"]');
  allNavAnchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();

          // Calculate exact destination
          const targetY = target.getBoundingClientRect().top + window.pageYOffset;

          // Temporarily disable scroll snapping so smooth scroll executes cleanly
          document.documentElement.style.scrollSnapType = 'none';

          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });

          // Re-enable scroll snapping after scroll transition completes
          setTimeout(() => {
            document.documentElement.style.scrollSnapType = '';
          }, 850);

          const sectionId = href.substring(1);
          updateActiveSection(sectionId);
          playWebSwishSound();

          if (history.pushState) {
            history.pushState(null, null, href);
          }
        }
      }
    });
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 50);
    }
  });

  // --------------------------------------------------------------------------
  // 7. POPULATE SKILLS & PROJECTS DYNAMICALLY
  // --------------------------------------------------------------------------
  const skillsGrid = document.getElementById('skills-grid');
  const skillsTabBtns = document.querySelectorAll('.skills-tab-btn');

  function renderSkills(filter = 'all') {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = '';
    const filtered = filter === 'all' 
      ? SKILLS_DATA 
      : SKILLS_DATA.filter(s => s.category === filter);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon}"></i></div>
        <div class="skill-title">${skill.name}</div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" style="width: ${skill.level}%" data-level="${skill.level}%"></div>
        </div>
      `;
      skillsGrid.appendChild(card);
    });

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('#skills .skill-card', 
        { opacity: 0, y: 15, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.025, duration: 0.35, ease: 'power2.out' }
      );
    }
  }

  skillsTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillsTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkills(btn.getAttribute('data-filter'));
      playWebSwishSound();
    });
  });

  const projectsGrid = document.getElementById('projects-grid');

  // Blueprints Database for Architecture Modal
  const ARCH_DATA = {
    'krypton': {
      title: 'Krypton — Cloud Infrastructure Blueprint',
      badge: 'ENTERPRISE ARCHITECTURE',
      desc: 'High-availability microservices architecture orchestrating containerized services across multi-zone Kubernetes clusters with automated GitOps deployment.',
      steps: [
        { title: 'Ingress & Load Balancing', desc: 'AWS ALB with SSL termination routing traffic through Nginx Ingress Controller with cert-manager SSL automation.' },
        { title: 'EKS Cluster Orchestration', desc: 'Managed Kubernetes cluster with Auto-scaling Node Groups, HPA (Horizontal Pod Autoscaling), and Cluster Autoscaler.' },
        { title: 'Secrets & Config Injection', desc: 'AWS Secrets Manager & Parameter Store synchronized to K8s secrets via External Secrets Operator.' },
        { title: 'CI/CD & GitOps Delivery', desc: 'GitHub Actions trigger automated Docker builds, vulnerability scanning with Trivy, and ArgoCD zero-downtime rollouts.' }
      ]
    },
    'employee-relieving-portal': {
      title: 'Employee Relieving Portal — Architecture Blueprint',
      badge: 'ENTERPRISE WORKFLOW ENGINE',
      desc: 'Full-stack automated clearance and document processing application with secure role-based access control and automated email dispatch.',
      steps: [
        { title: 'Frontend & UI Layer', desc: 'Modern responsive client interface communicating via REST APIs with JWT authentication and session state control.' },
        { title: 'Backend Workflow Service', desc: 'Node.js/Express service handling multi-tier approval states, document generation, and digital clearance.' },
        { title: 'Database & Storage', desc: 'PostgreSQL/MySQL transactional database with encrypted employee clearance records and S3 asset archival.' },
        { title: 'Automated Notification Hub', desc: 'Asynchronous event triggers sending status updates and final clearance certificates to HR stakeholders.' }
      ]
    },
    'Evalgator-Bot': {
      title: 'Evalgator-Bot — Automated Evaluation Engine',
      badge: 'AUTOMATION & BOT ARCHITECTURE',
      desc: 'High-throughput automated grading and test evaluation bot integrating webhook triggers and automated report generation.',
      steps: [
        { title: 'Webhook Ingestion Pipeline', desc: 'Receives test payloads asynchronously, sanitizes user submissions, and queues tasks for batch processing.' },
        { title: 'Evaluation & Test Engine', desc: 'Sandboxed Python runtime evaluating code syntax, execution correctness, and grading logic against test suites.' },
        { title: 'Result Caching & Storage', desc: 'Stores evaluated scores and generates structured feedback reports with timestamped analytics.' }
      ]
    },
    'cyberpanel-using-ansible': {
      title: 'CyberPanel Ansible Automation — IaC Blueprint',
      badge: 'IAC & PROVISIONING PIPELINE',
      desc: 'Modular Ansible playbooks and parameterized roles for zero-touch provisioning and configuration of CyberPanel web hosting servers.',
      steps: [
        { title: 'Inventory & Variable Hierarchy', desc: 'Dynamic inventory groups separating staging/production environments with encrypted Ansible Vault credentials.' },
        { title: 'Base Hardening & OS Setup', desc: 'Automates firewall (UFW/IPTables), SSH port locking, fail2ban configuration, and kernel optimizations.' },
        { title: 'CyberPanel & OpenLiteSpeed Engine', desc: 'Unattended non-interactive installation and tuning of OpenLiteSpeed web server and database clusters.' }
      ]
    },
    'env-to-parameterstore': {
      title: 'Env-To-ParameterStore — Cloud Security Architecture',
      badge: 'AWS SECRETS MIGRATION UTILITY',
      desc: 'Automated CLI utility to parse local .env secret configurations, validate schemas, and bulk-load encrypted secrets into AWS SSM Parameter Store.',
      steps: [
        { title: 'Environment Parser & Validator', desc: 'Parses raw .env files, strips invalid characters, handles multiline secrets, and detects key collisions.' },
        { title: 'AWS KMS Encryption Stream', desc: 'Pushes secrets via Boto3/AWS SDK using SecureString encryption with KMS customer-managed keys.' },
        { title: 'Hierarchical Path Mapping', desc: 'Organizes secrets logically by environment paths (e.g. /app/prod/DB_PASSWORD) with automated tagging.' }
      ]
    },
    'bash-script-to-upload-logs-to-s3bucket': {
      title: 'S3 Log Synchronization — Storage Pipeline',
      badge: 'STORAGE & CRON ARCHITECTURE',
      desc: 'Production-ready automated log rotation, compression, checksum verification, and AWS S3 archive synchronization engine.',
      steps: [
        { title: 'Log Discovery & Compression', desc: 'Identifies aged server logs, verifies file handles, and compresses them using gzip/tar.' },
        { title: 'AWS S3 Multi-part Upload', desc: 'Streams compressed bundles to AWS S3 bucket with MD5 checksum verification and exponential backoff retry.' },
        { title: 'Local Purge & Lifecycle', desc: 'Purges uploaded local logs to prevent disk exhaustion and applies S3 Glacier transition lifecycle policies.' }
      ]
    }
  };

  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    PROJECTS_DATA.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div class="project-banner" style="background: ${proj.bannerBg}">
          <span class="project-badge">${proj.badge}</span>
        </div>
        <div class="project-body">
          <div>
            <h3 class="project-title">${proj.title}</h3>
            <div class="project-stats-strip" id="stats-${proj.title}">
              <span class="stat-badge stars loading"><i class="fas fa-star"></i> <span class="count"></span></span>
              <span class="stat-badge forks loading"><i class="fas fa-code-fork"></i> <span class="count"></span></span>
              <span class="stat-badge lang"><i class="fas fa-circle" style="font-size: 0.5rem;"></i> <span class="lang-text">${proj.tags[0] || 'DevOps'}</span></span>
            </div>
            <p class="project-desc">${proj.desc}</p>
            <div class="project-tags">
              ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="project-links">
            <a href="${proj.liveUrl}" target="_blank" class="project-link-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="${proj.githubUrl}" target="_blank" class="project-link-btn"><i class="fab fa-github"></i> Repository</a>
            <button class="project-arch-btn" data-repo="${proj.title}"><i class="fas fa-layer-group"></i> Architecture</button>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });

    // Attach architecture modal triggers
    document.querySelectorAll('.project-arch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const repoName = btn.getAttribute('data-repo');
        openArchitectureModal(repoName);
      });
    });

    // Fetch live GitHub stats
    fetchLiveGitHubStats();
  }

  // Live GitHub REST API Integration
  function fetchLiveGitHubStats() {
    PROJECTS_DATA.forEach(proj => {
      const statsContainer = document.getElementById(`stats-${proj.title}`);
      if (!statsContainer) return;

      const starsBadge = statsContainer.querySelector('.stat-badge.stars');
      const forksBadge = statsContainer.querySelector('.stat-badge.forks');

      fetch(`https://api.github.com/repos/sam-sunil-4/${proj.title}`)
        .then(res => {
          if (!res.ok) throw new Error('API Rate Limit or Not Found');
          return res.json();
        })
        .then(data => {
          const starsEl = statsContainer.querySelector('.stat-badge.stars .count');
          const forksEl = statsContainer.querySelector('.stat-badge.forks .count');
          const langEl = statsContainer.querySelector('.stat-badge.lang .lang-text');

          if (starsBadge) starsBadge.classList.remove('loading');
          if (forksBadge) forksBadge.classList.remove('loading');

          if (starsEl) starsEl.textContent = data.stargazers_count !== undefined ? data.stargazers_count : '0';
          if (forksEl) forksEl.textContent = data.forks_count !== undefined ? data.forks_count : '0';
          if (langEl && data.language) langEl.textContent = data.language;
        })
        .catch(() => {
          if (starsBadge) starsBadge.classList.remove('loading');
          if (forksBadge) forksBadge.classList.remove('loading');

          // Graceful fallback values
          const starsEl = statsContainer.querySelector('.stat-badge.stars .count');
          const forksEl = statsContainer.querySelector('.stat-badge.forks .count');
          const langEl = statsContainer.querySelector('.stat-badge.lang .lang-text');

          if (starsEl) starsEl.textContent = '1+';
          if (forksEl) forksEl.textContent = '0';
          if (langEl) langEl.textContent = proj.tags[0] || 'DevOps';
        });
    });
  }

  // Architecture Modal Handler
  const archModalOverlay = document.getElementById('arch-modal-overlay');
  const archModalBadge = document.getElementById('arch-modal-badge');
  const archModalTitle = document.getElementById('arch-modal-title');
  const archModalBody = document.getElementById('arch-modal-body');
  const archModalCloseBtn = document.getElementById('arch-modal-close-btn');

  function openArchitectureModal(repoName) {
    closeTerminal();
    const data = ARCH_DATA[repoName] || {
      title: `${repoName} — Cloud Blueprint`,
      badge: 'DEVOPS BLUEPRINT',
      desc: 'Automated cloud infrastructure and deployment workflow.',
      steps: [
        { title: 'Provisioning', desc: 'Automated Terraform/Ansible infrastructure orchestration.' },
        { title: 'Containerization', desc: 'Docker packaging with health checks and optimized image size.' },
        { title: 'Delivery', desc: 'Zero-downtime CI/CD deployment pipeline.' }
      ]
    };

    if (archModalBadge) archModalBadge.textContent = data.badge;
    if (archModalTitle) archModalTitle.textContent = data.title;
    if (archModalBody) {
      archModalBody.innerHTML = `
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.2rem;">${data.desc}</p>
        <h4 style="color: var(--text-primary); font-family: var(--font-subheading); font-size: 0.95rem; margin-bottom: 0.6rem;"><i class="fas fa-diagram-project"></i> Pipeline & Component Flow</h4>
        <div class="arch-step-list">
          ${data.steps.map((st, idx) => `
            <div class="arch-step-item">
              <div class="arch-step-num">${idx + 1}</div>
              <div>
                <strong style="color: var(--text-primary); display: block; margin-bottom: 0.2rem;">${st.title}</strong>
                <span style="color: var(--text-muted); font-size: 0.83rem; line-height: 1.45;">${st.desc}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (archModalOverlay) archModalOverlay.classList.add('open');
    playWebSwishSound();
  }

  if (archModalCloseBtn && archModalOverlay) {
    archModalCloseBtn.addEventListener('click', () => archModalOverlay.classList.remove('open'));
    archModalOverlay.addEventListener('click', (e) => {
      if (e.target === archModalOverlay) archModalOverlay.classList.remove('open');
    });
  }

  // Resume Dossier Modal Handler
  const resumeModalOverlay = document.getElementById('resume-modal-overlay');
  const resumeModalCloseBtn = document.getElementById('resume-modal-close-btn');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const resumeContactBtn = document.getElementById('resume-contact-btn');

  function openResumeModal() {
    closeTerminal();
    if (resumeModalOverlay) resumeModalOverlay.classList.add('open');
    playWebSwishSound();
  }

  if (resumeContactBtn) {
    resumeContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeTerminal();
      if (resumeModalOverlay) resumeModalOverlay.classList.remove('open');
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        window.scrollTo({
          top: contactSec.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth'
        });
        setTimeout(() => {
          const nameInput = document.getElementById('sender-name');
          if (nameInput) nameInput.focus();
        }, 500);
      }
    });
  }

  if (navResumeBtn) navResumeBtn.addEventListener('click', openResumeModal);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResumeModal);
  if (resumeModalCloseBtn && resumeModalOverlay) {
    resumeModalCloseBtn.addEventListener('click', () => resumeModalOverlay.classList.remove('open'));
    resumeModalOverlay.addEventListener('click', (e) => {
      if (e.target === resumeModalOverlay) resumeModalOverlay.classList.remove('open');
    });
  }

  // --------------------------------------------------------------------------
  // 8. INTERACTIVE DEVOPS CYBER TERMINAL (CLI HUD) ENGINE
  // --------------------------------------------------------------------------
  const terminalOverlay = document.getElementById('terminal-modal-overlay');
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const terminalCloseBtn = document.getElementById('terminal-close-btn');
  const terminalMinBtn = document.getElementById('terminal-min-btn');
  const navTerminalBtn = document.getElementById('nav-terminal-btn');
  const heroTerminalBtn = document.getElementById('hero-terminal-btn');
  const terminalQuickChips = document.querySelectorAll('.chip-btn');

  let cmdHistory = [];
  let historyIndex = -1;

  function openTerminal() {
    if (terminalOverlay) {
      terminalOverlay.classList.add('open');
      if (terminalInput) {
        setTimeout(() => terminalInput.focus(), 150);
      }
    }
    playWebSwishSound();
  }

  function closeTerminal() {
    if (terminalOverlay) {
      terminalOverlay.classList.remove('open');
    }
  }

  // Global Escape key listener to close terminal and modals
  const cookieModalOverlay = document.getElementById('cookie-modal-overlay');

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTerminal();
      if (resumeModalOverlay) resumeModalOverlay.classList.remove('open');
      if (archModalOverlay) archModalOverlay.classList.remove('open');
      if (cookieModalOverlay) cookieModalOverlay.classList.remove('open');
      if (spideyModalOverlay) spideyModalOverlay.classList.remove('active');
    }
  });

  const mobileStickyCliBtn = document.getElementById('mobile-sticky-cli-btn');
  const mobileStickyCvBtn = document.getElementById('mobile-sticky-cv-btn');

  if (mobileStickyCliBtn) mobileStickyCliBtn.addEventListener('click', openTerminal);
  if (mobileStickyCvBtn) mobileStickyCvBtn.addEventListener('click', openResumeModal);

  if (navTerminalBtn) navTerminalBtn.addEventListener('click', openTerminal);
  if (heroTerminalBtn) heroTerminalBtn.addEventListener('click', openTerminal);
  if (terminalCloseBtn) terminalCloseBtn.addEventListener('click', closeTerminal);
  if (terminalMinBtn) terminalMinBtn.addEventListener('click', closeTerminal);
  if (terminalOverlay) {
    terminalOverlay.addEventListener('click', (e) => {
      if (e.target === terminalOverlay) closeTerminal();
    });
  }

  // Privacy-friendly Client Analytics Telemetry Helper
  function trackAnalyticsEvent(eventName, payload = {}) {
    try {
      const consent = getCookieConsent();
      if (consent && consent.analytics === false) return; // Respect cookie preference
      const eventLog = {
        event: eventName,
        data: payload,
        timestamp: new Date().toISOString(),
        url: window.location.pathname
      };
      if (window.dataLayer) {
        window.dataLayer.push(eventLog);
      }
      // Debug / Dev log
      // console.log('[Telemetry Radar]', eventLog);
    } catch(e) {}
  }
  trackAnalyticsEvent('page_view', { title: document.title });

  function appendTerminalOutput(cmd, outputHtml) {
    if (!terminalBody) return;
    const entry = document.createElement('div');
    entry.className = 'terminal-entry';
    entry.innerHTML = `
      <div class="terminal-entry-command">
        <span class="prompt-user">sam@spidey-devops</span>:<span class="prompt-dir">~</span>$ ${escapeHtml(cmd)}
      </div>
      <div class="terminal-entry-result">${outputHtml}</div>
    `;
    terminalBody.appendChild(entry);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function escapeHtml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function executeTerminalCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    cmdHistory.push(cmd);
    historyIndex = cmdHistory.length;

    const lower = cmd.toLowerCase();

    if (lower === 'clear' || lower === 'cls') {
      if (terminalBody) terminalBody.innerHTML = '';
      return;
    }

    if (lower === 'help' || lower === '?') {
      appendTerminalOutput(cmd, `
<span style="color: #58A6FF; font-weight: bold;">AVAILABLE PORTFOLIO COMMANDS:</span>
  <strong style="color: #7EE787;">skills</strong>             - View core DevOps & Cloud technical skills
  <strong style="color: #7EE787;">repos</strong>              - List 6 featured GitHub repositories with links
  <strong style="color: #7EE787;">career</strong>             - View professional career timeline & company logs
  <strong style="color: #7EE787;">cv</strong>                 - Open Sam Sunil's resume dossier
  <strong style="color: #7EE787;">whoami</strong>             - Overview & background of Sam Sunil
  <strong style="color: #7EE787;">theme [black|classic]</strong>- Toggle Spider-Man suit theme
  <strong style="color: #7EE787;">contact</strong>            - Scroll to web-shooter message form
  <strong style="color: #7EE787;">clear</strong>              - Clear terminal console window
      `);
      return;
    }

    if (lower === 'skills') {
      appendTerminalOutput(cmd, `
<span style="color: #00E5FF; font-weight: bold;">DEVOPS & CLOUD SKILLS:</span>
  [+] Kubernetes (K8s)     : 94% (Multi-Cluster, HPA, Helm, etc.)
  [+] Docker Containers    : 96% (Microservices, Multi-Stage Builds, etc.)
  [+] AWS / GCP Cloud      : 95% (IAM, EKS, ECS, S3, RDS, VPC, etc.)
  [+] Terraform & IaC      : 96% (Infrastructure as Code, Modules, etc.)
  [+] Ansible Automation   : 94% (Server Provisioning & Roles, etc.)
  [+] CI/CD Pipelines      : 95% (Automated Deployments, Webhooks, etc.)
  [+] Linux & Bash         : 98% (Shell Scripting & System Tuning, etc.)
  [+] Python Scripting     : 90% (Automation & API Tooling, etc.)
      `);
      return;
    }

    if (lower === 'repos' || lower === 'projects') {
      appendTerminalOutput(cmd, `
<span style="color: #00E5FF; font-weight: bold;">FEATURED GITHUB REPOSITORIES (sam-sunil-4):</span>
  1. <strong style="color: #FFF;">krypton</strong>                        - https://github.com/sam-sunil-4/krypton
  2. <strong style="color: #FFF;">employee-relieving-portal</strong>      - https://github.com/sam-sunil-4/employee-relieving-portal
  3. <strong style="color: #FFF;">Evalgator-Bot</strong>                  - https://github.com/sam-sunil-4/Evalgator-Bot
  4. <strong style="color: #FFF;">cyberpanel-using-ansible</strong>       - https://github.com/sam-sunil-4/cyberpanel-using-ansible
  5. <strong style="color: #FFF;">env-to-parameterstore</strong>          - https://github.com/sam-sunil-4/env-to-parameterstore
  6. <strong style="color: #FFF;">bash-script-to-upload-logs-to-s3bucket</strong> - https://github.com/sam-sunil-4/bash-script-to-upload-logs-to-s3bucket
      `);
      return;
    }

    if (lower === 'career' || lower === 'logs' || lower === 'history') {
      appendTerminalOutput(cmd, `
<span style="color: #FF2E36; font-weight: bold;">CAREER PATH & BATTLE LOGS:</span>
  [1] <strong style="color: #58A6FF;">2026 FEB - PRESENT</strong> | <strong style="color: #FFF;">IBS Software</strong>
      Role   : Product Engineer — DevOps
      Domain : Cloud architecture, Kubernetes microservices, enterprise SaaS reliability.
  
  [2] <strong style="color: #58A6FF;">2023 NOV - 2026 JAN</strong> | <strong style="color: #FFF;">QBurst</strong>
      Role   : CloudOps Engineer
      Domain : Multi-cloud (AWS/GCP), Terraform IaC, Ansible automation, 24/7 observability.

  [3] <strong style="color: #58A6FF;">2021 SEP - 2023 NOV</strong> | <strong style="color: #FFF;">Supportsages Consultancy Pvt Ltd</strong>
      Role   : System Administrator ➔ DevOps / SRE
      Domain : Linux server fleets, shell scripting, disaster recovery, security hardening.
      `);
      return;
    }

    if (lower === 'cv' || lower === 'resume') {
      openResumeModal();
      appendTerminalOutput(cmd, `<span style="color: #3FB950;">Opening Sam Sunil's Resume Dossier... 📄</span>`);
      return;
    }

    if (lower === 'certs' || lower === 'certifications') {
      appendTerminalOutput(cmd, `
<span style="color: #4285F4; font-weight: bold;">VERIFIED CLOUD CERTIFICATIONS:</span>
  [★] <strong style="color: #FFF;">Google Cloud Certified — Associate Cloud Engineer (GCP ACE)</strong>
      Domain   : Google Cloud Platform (Compute Engine, GKE, Cloud Storage, VPC, IAM)
      Status   : <span style="color: #3FB950;">ACTIVE &amp; VERIFIED</span>
      `);
      return;
    }

    if (lower === 'whoami') {
      appendTerminalOutput(cmd, `
<span style="color: #FFD700; font-weight: bold;">USER: Sam Sunil</span>
Title    : DevOps & Cloud Infrastructure Engineer
Location : Alappuzha, Kerala, India
Certs    : Google Cloud Certified — Associate Cloud Engineer (GCP ACE)
Skills   : Kubernetes, Docker, AWS, GCP, Terraform, Ansible, CI/CD, Linux, Python, Bash
LinkedIn : https://www.linkedin.com/in/sam-sunil-4b50a4201
GitHub   : https://github.com/sam-sunil-4
Portfolio: https://sam-sunil.vercel.app
Motto    : "With great automation comes zero downtime!" 🕷️
      `);
      return;
    }

    if (lower.startsWith('theme')) {
      const parts = lower.split(' ');
      const mode = parts[1];
      if (mode === 'classic' || mode === 'black') {
        document.documentElement.setAttribute('data-theme', mode);
        updateThreeJSTheme(mode);
        document.querySelectorAll('.suit-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-suit') === mode);
        });
        try { localStorage.setItem('spidey-suit-theme', mode); } catch(e) {}
        appendTerminalOutput(cmd, `<span style="color: #3FB950;">Theme switched to ${mode.toUpperCase()} MODE! 🕷️</span>`);
      } else {
        appendTerminalOutput(cmd, `<span style="color: #F85149;">Usage: theme [black|classic]</span>`);
      }
      return;
    }

    if (lower === 'contact') {
      closeTerminal();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        window.scrollTo({ top: contactSec.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }
      return;
    }

    appendTerminalOutput(cmd, `<span style="color: #F85149;">Option not recognized: "${escapeHtml(cmd)}". Type <strong style="color: #58A6FF;">'help'</strong> to see available portfolio options.</span>`);
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const value = terminalInput.value;
        terminalInput.value = '';
        executeTerminalCommand(value);
      } else if (e.key === 'ArrowUp') {
        if (cmdHistory.length > 0 && historyIndex > 0) {
          historyIndex--;
          terminalInput.value = cmdHistory[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < cmdHistory.length - 1) {
          historyIndex++;
          terminalInput.value = cmdHistory[historyIndex] || '';
        } else {
          historyIndex = cmdHistory.length;
          terminalInput.value = '';
        }
      }
    });
  }

  terminalQuickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) {
        executeTerminalCommand(cmd);
        if (terminalInput) terminalInput.focus();
      }
    });
  });

  renderSkills();
  renderProjects();

  // Custom Centered Spider-Man Alert Modal
  const spideyModalOverlay = document.getElementById('spidey-modal-overlay');
  const spideyModalTitle = document.getElementById('spidey-modal-title');
  const spideyModalBody = document.getElementById('spidey-modal-body');
  const spideyModalCloseBtn = document.getElementById('spidey-modal-close-btn');

  function showSpideyAlert(message, title = 'WEB SIGNAL TRANSMITTED! 🕸️', btnText = 'ACKNOWLEDGE SIGNAL') {
    if (spideyModalTitle) spideyModalTitle.textContent = title;
    if (spideyModalBody) spideyModalBody.textContent = message;
    if (spideyModalCloseBtn) {
      spideyModalCloseBtn.innerHTML = `<i class="fas fa-check"></i> ${btnText}`;
    }
    if (spideyModalOverlay) {
      spideyModalOverlay.classList.add('active');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo('.spidey-modal-card', 
          { scale: 0.75, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
        );
      }
    }
    playWebSwishSound();
  }

  if (spideyModalCloseBtn && spideyModalOverlay) {
    spideyModalCloseBtn.addEventListener('click', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to('.spidey-modal-card', {
          scale: 0.8,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => spideyModalOverlay.classList.remove('active')
        });
      } else {
        spideyModalOverlay.classList.remove('active');
      }
      playWebSwishSound();
    });

    spideyModalOverlay.addEventListener('click', (e) => {
      if (e.target === spideyModalOverlay) {
        if (typeof gsap !== 'undefined') {
          gsap.to('.spidey-modal-card', {
            scale: 0.8,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => spideyModalOverlay.classList.remove('active')
          });
        } else {
          spideyModalOverlay.classList.remove('active');
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 9. ANTI-INSPECTION & ANTI-DEVTOOLS SECURITY SHIELD
  // --------------------------------------------------------------------------
  // Disable Right-Click Context Menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showSpideyAlert('🛡️ Security Shield Active: Web Context Menu & Inspection Disabled!', 'ACCESS DENIED 🕸️');
    return false;
  });

  // Disable DevTools & Source Code Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      showSpideyAlert('🛡️ Security Shield Active: F12 DevTools Disabled!', 'ACCESS DENIED 🕸️');
      return false;
    }

    // Ctrl+Shift+I, J, C or Cmd+Opt+I, J, C (Inspect Element / Console)
    if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey)) {
      const key = e.key ? e.key.toLowerCase() : '';
      if (['i', 'j', 'c'].includes(key)) {
        e.preventDefault();
        showSpideyAlert('🛡️ Security Shield Active: DevTools Shortcuts Blocked!', 'ACCESS DENIED 🕸️');
        return false;
      }
    }

    // Ctrl+U / Cmd+Opt+U (View Source Code) or Ctrl+S / Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      showSpideyAlert('🛡️ Security Shield Active: Source Code & Page Saving Protected!', 'ACCESS DENIED 🕸️');
      return false;
    }
  });

  // Anti-Debugger Clearance Loop
  setInterval(() => {
    const before = new Date().getTime();
    debugger;
    const after = new Date().getTime();
    if (after - before > 100) {
      console.clear();
    }
  }, 1000);

  // --------------------------------------------------------------------------
  // 10. CONTACT FORM SUBMISSION WITH PER-FIELD VALIDATION (.COM / .IN ONLY)
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const nameInput = document.getElementById('sender-name');
    const emailInput = document.getElementById('sender-email');
    const msgInput = document.getElementById('sender-message');
    
    const errorName = document.getElementById('error-sender-name');
    const errorEmail = document.getElementById('error-sender-email');
    const errorMsg = document.getElementById('error-sender-message');

    const submitBtn = document.getElementById('btn-submit-signal');
    const submitText = document.getElementById('btn-submit-text');

    // Field Validators
    const validateName = (value) => {
      const trimmed = (value || '').trim();
      if (!trimmed) {
        return { valid: false, message: 'Your name is required to transmit signal.' };
      }
      if (trimmed.length < 2) {
        return { valid: false, message: 'Name must be at least 2 characters long.' };
      }
      if (!/[a-zA-Z]/.test(trimmed)) {
        return { valid: false, message: 'Please enter a valid name containing letters.' };
      }
      return { valid: true, message: '' };
    };

    const validateEmail = (value) => {
      const trimmed = (value || '').trim();
      if (!trimmed) {
        return { valid: false, message: 'Email address is required.' };
      }
      // General email structure
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return { valid: false, message: 'Please enter a valid email address format (e.g. name@domain.com).' };
      }
      // Strict ending validation: MUST end with .com or .in
      const strictEndingRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/i;
      if (!strictEndingRegex.test(trimmed)) {
        return { valid: false, message: 'Only email addresses ending in .com or .in are accepted (e.g. user@domain.com or user@domain.in).' };
      }
      return { valid: true, message: '' };
    };

    const validateMessage = (value) => {
      const trimmed = (value || '').trim();
      if (!trimmed) {
        return { valid: false, message: 'Please write a message before transmitting.' };
      }
      if (trimmed.length < 10) {
        return { valid: false, message: `Message must be at least 10 characters (${trimmed.length}/10 entered).` };
      }
      return { valid: true, message: '' };
    };

    // Helper to update field UI state
    const applyValidationState = (inputEl, errorEl, result) => {
      if (!inputEl) return false;
      if (!result.valid) {
        inputEl.classList.add('is-invalid');
        inputEl.classList.remove('is-valid');
        if (errorEl) {
          const span = errorEl.querySelector('span');
          if (span) span.textContent = result.message;
          else errorEl.textContent = result.message;
          errorEl.classList.add('visible');
        }
        return false;
      } else {
        inputEl.classList.remove('is-invalid');
        inputEl.classList.add('is-valid');
        if (errorEl) {
          errorEl.classList.remove('visible');
        }
        return true;
      }
    };

    // Attach real-time validation listeners
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        if (nameInput.classList.contains('is-invalid') || nameInput.value.length >= 2) {
          applyValidationState(nameInput, errorName, validateName(nameInput.value));
        }
      });
      nameInput.addEventListener('blur', () => {
        applyValidationState(nameInput, errorName, validateName(nameInput.value));
      });
    }

    if (emailInput) {
      emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('is-invalid') || emailInput.value.includes('@')) {
          applyValidationState(emailInput, errorEmail, validateEmail(emailInput.value));
        }
      });
      emailInput.addEventListener('blur', () => {
        applyValidationState(emailInput, errorEmail, validateEmail(emailInput.value));
      });
    }

    if (msgInput) {
      msgInput.addEventListener('input', () => {
        if (msgInput.classList.contains('is-invalid') || msgInput.value.length >= 10) {
          applyValidationState(msgInput, errorMsg, validateMessage(msgInput.value));
        }
      });
      msgInput.addEventListener('blur', () => {
        applyValidationState(msgInput, errorMsg, validateMessage(msgInput.value));
      });
    }

    // Form Submit Handler
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const msgVal = msgInput ? msgInput.value.trim() : '';

      const isAllEmpty = !nameVal && !emailVal && !msgVal;

      // Validate all fields
      const isNameValid = applyValidationState(nameInput, errorName, validateName(nameVal));
      const isEmailValid = applyValidationState(emailInput, errorEmail, validateEmail(emailVal));
      const isMsgValid = applyValidationState(msgInput, errorMsg, validateMessage(msgVal));

      if (!isNameValid || !isEmailValid || !isMsgValid) {
        // Shake form card for tactile superhero feedback
        contactForm.classList.add('shake-animation');
        setTimeout(() => contactForm.classList.remove('shake-animation'), 500);

        // Focus the first invalid field
        if (!isNameValid && nameInput) nameInput.focus();
        else if (!isEmailValid && emailInput) emailInput.focus();
        else if (!isMsgValid && msgInput) msgInput.focus();

        if (isAllEmpty) {
          showSpideyAlert('Whoa there, web-slinger! You cannot shoot an empty web-shooter! Please enter your name, email, and message before transmitting your signal.', 'SPIDEY-SENSE TINGLING! 🕷️', 'GOT IT, SPIDEY! 🕸️');
        } else if (!isEmailValid && emailVal && !validateEmail(emailVal).valid) {
          showSpideyAlert('Hold on, friendly neighborhood friend! Make sure your email ends with .com or .in so Spidey can swing back to you!', 'CHECK YOUR WEB SIGNAL! 🕸️', 'FIX EMAIL');
        } else {
          showSpideyAlert('Please fill in the highlighted fields so Spidey can receive your signal and get back to you!', 'SPIDEY-SENSE ALERT! ⚠️', 'COMPLETE FORM');
        }
        return;
      }

      const senderName = nameInput.value.trim();
      const senderEmail = emailInput.value.trim();
      const senderMsg = msgInput.value.trim();

      // Set Loading State on Button
      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitText) submitText.textContent = 'TRANSMITTING WEB SIGNAL...';
      }

      showSpideyAlert('Web Signal Transmitting... Transmitting your message securely to Sam Sunil.', 'TRANSMITTING SIGNAL... ⚡');

      // Check if browsing as local file:// (FormSubmit blocks file:// origins by design)
      if (window.location.protocol === 'file:') {
        setTimeout(() => {
          showSpideyAlert('FormSubmit API requires a web server (like Live Server, localhost, or hosted domain) and blocks file:// origins. Opening your mail client as backup...', 'LOCAL FILE DETECTED ⚠️');
          window.location.href = `mailto:me.cipherr@gmail.com?subject=${encodeURIComponent('🕸️ New DevOps Signal from ' + senderName)}&body=${encodeURIComponent('Name: ' + senderName + '\nEmail: ' + senderEmail + '\n\nMessage:\n' + senderMsg)}`;
          if (submitBtn) {
            submitBtn.disabled = false;
            if (submitText) submitText.textContent = 'TRANSMIT WEB SIGNAL';
          }
        }, 1000);
        return;
      }

      // AJAX FormSubmit POST
      fetch('https://formsubmit.co/ajax/f294248d19db4797d2d7bddae0542434', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: senderMsg,
          _subject: `🕸️ New DevOps Signal from ${senderName}`,
          _captcha: 'false',
          _template: 'table'
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success === 'true' || data.success === true) {
          showSpideyAlert('Web Signal Delivered! Your message has been sent directly to Sam Sunil.', 'SIGNAL DELIVERED! ⚡');
          contactForm.reset();
          nameInput?.classList.remove('is-valid');
          emailInput?.classList.remove('is-valid');
          msgInput?.classList.remove('is-valid');
        } else {
          showSpideyAlert(data.message || 'Unable to deliver message through FormSubmit backend. Please try again.', 'TRANSMISSION FAILED ⚠️');
        }
      })
      .catch((err) => {
        console.warn('FormSubmit AJAX failed, falling back to direct submit:', err);
        contactForm.submit();
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitText) submitText.textContent = 'TRANSMIT WEB SIGNAL';
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 11. SPIDEY-SENSE COOKIE CONSENT RADAR CONTROLLER
  // --------------------------------------------------------------------------
  const cookieHud = document.getElementById('cookie-consent-hud');
  const cookieAcceptAllBtn = document.getElementById('cookie-accept-all-btn');
  const cookieEssentialBtn = document.getElementById('cookie-essential-btn');
  const cookiePrefsOpenBtn = document.getElementById('cookie-prefs-open-btn');
  const cookieModalCloseBtn = document.getElementById('cookie-modal-close-btn');
  const cookieSavePrefsBtn = document.getElementById('cookie-save-prefs-btn');
  const footerCookieBtn = document.getElementById('footer-cookie-btn');

  const prefSfx = document.getElementById('pref-sfx-storage');
  const prefAnalytics = document.getElementById('pref-analytics-storage');

  function getCookieConsent() {
    try {
      const saved = localStorage.getItem('spidey_cookie_consent');
      return saved ? JSON.parse(saved) : null;
    } catch(e) {
      return null;
    }
  }

  function saveCookieConsent(settings) {
    try {
      localStorage.setItem('spidey_cookie_consent', JSON.stringify(settings));
    } catch(e) {}
    if (cookieHud) cookieHud.classList.remove('visible');
    if (cookieModalOverlay) cookieModalOverlay.classList.remove('open');
  }

  // Check consent state on page load
  const consent = getCookieConsent();
  if (!consent && cookieHud) {
    setTimeout(() => {
      cookieHud.classList.add('visible');
    }, 1200);
  } else if (consent) {
    if (prefSfx) prefSfx.checked = consent.sfx !== false;
    if (prefAnalytics) prefAnalytics.checked = consent.analytics !== false;
  }

  if (cookieAcceptAllBtn) {
    cookieAcceptAllBtn.addEventListener('click', () => {
      saveCookieConsent({ essential: true, sfx: true, analytics: true, timestamp: Date.now() });
      playWebSwishSound();
    });
  }

  if (cookieEssentialBtn) {
    cookieEssentialBtn.addEventListener('click', () => {
      saveCookieConsent({ essential: true, sfx: false, analytics: false, timestamp: Date.now() });
      playWebSwishSound();
    });
  }

  if (cookiePrefsOpenBtn) {
    cookiePrefsOpenBtn.addEventListener('click', () => {
      if (cookieModalOverlay) cookieModalOverlay.classList.add('open');
      playWebSwishSound();
    });
  }

  if (footerCookieBtn) {
    footerCookieBtn.addEventListener('click', () => {
      if (cookieModalOverlay) cookieModalOverlay.classList.add('open');
      playWebSwishSound();
    });
  }

  if (cookieModalCloseBtn && cookieModalOverlay) {
    cookieModalCloseBtn.addEventListener('click', () => {
      cookieModalOverlay.classList.remove('open');
    });
    cookieModalOverlay.addEventListener('click', (e) => {
      if (e.target === cookieModalOverlay) cookieModalOverlay.classList.remove('open');
    });
  }

  if (cookieSavePrefsBtn) {
    cookieSavePrefsBtn.addEventListener('click', () => {
      const sfxVal = prefSfx ? prefSfx.checked : true;
      const analyticsVal = prefAnalytics ? prefAnalytics.checked : true;
      saveCookieConsent({ essential: true, sfx: sfxVal, analytics: analyticsVal, timestamp: Date.now() });
      showSpideyAlert('Cookie Radar Preferences Saved Successfully! 🍪', 'RADAR UPDATED 🕸️');
    });
  }

});


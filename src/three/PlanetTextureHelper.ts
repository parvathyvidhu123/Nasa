import * as THREE from 'three';

// Procedural fallback texture generator ensuring 100% offline & immediate render reliability
export function createPlanetCanvasTexture(planetId: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return new THREE.CanvasTexture(canvas);

  switch (planetId) {
    case 'mercury': {
      // Cratered gray-brown rocky surface
      ctx.fillStyle = '#6e6962';
      ctx.fillRect(0, 0, 1024, 512);
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const r = Math.random() * 8 + 1;
        ctx.fillStyle = Math.random() > 0.5 ? '#8f887f' : '#4f4a44';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case 'venus': {
      // Dense sulfur-cream swirling atmosphere
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#c79b5c');
      grad.addColorStop(0.5, '#e5be82');
      grad.addColorStop(1, '#a87e44');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);
      ctx.fillStyle = 'rgba(255, 235, 190, 0.15)';
      for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.ellipse(512, i * 35, 600, 25, 0.05, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case 'earth': {
      // Deep blue oceans, green/brown continents, white cloud swirls
      ctx.fillStyle = '#0f386b';
      ctx.fillRect(0, 0, 1024, 512);
      // Continents
      ctx.fillStyle = '#2d6b38';
      // Africa / Eurasia rough masses
      ctx.beginPath();
      ctx.arc(480, 220, 120, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#826938'; // Deserts
      ctx.beginPath();
      ctx.arc(520, 200, 70, 0, Math.PI * 2);
      ctx.fill();
      // Americas
      ctx.fillStyle = '#2d6b38';
      ctx.beginPath();
      ctx.arc(220, 180, 80, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(260, 320, 90, 0, Math.PI * 2);
      ctx.fill();
      // Polar Ice caps
      ctx.fillStyle = '#f0f8ff';
      ctx.fillRect(0, 0, 1024, 40);
      ctx.fillRect(0, 470, 1024, 42);
      // Swirling white clouds
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.ellipse(Math.random() * 1024, Math.random() * 512, Math.random() * 90 + 30, Math.random() * 20 + 5, 0.1, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case 'moon': {
      // Gray regolith with dark basaltic Maria (Sea of Tranquility, etc.)
      ctx.fillStyle = '#9b9da0';
      ctx.fillRect(0, 0, 1024, 512);
      ctx.fillStyle = '#636569';
      // Maria Tranquillitatis & Imbrium
      ctx.beginPath();
      ctx.arc(450, 200, 90, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(380, 160, 80, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(540, 230, 60, 0, Math.PI * 2);
      ctx.fill();
      // Bright impact craters & rays
      ctx.fillStyle = '#dcdfe3';
      for (let i = 0; i < 200; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 4 + 1, 0, Math.PI * 2);
        ctx.fill();
      }
      break;
    }
    case 'mars': {
      // Rust red, dark basaltic plains (Syrtis Major), white polar caps
      ctx.fillStyle = '#c1440e';
      ctx.fillRect(0, 0, 1024, 512);
      // Dark plains
      ctx.fillStyle = '#69260a';
      ctx.beginPath();
      ctx.ellipse(550, 240, 160, 70, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(300, 280, 120, 50, 0.1, 0, Math.PI * 2);
      ctx.fill();
      // Polar ice
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(512, 15, 90, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(512, 497, 70, 15, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'jupiter': {
      // Alternating bands, Great Red Spot
      for (let y = 0; y < 512; y++) {
        const factor = Math.sin(y * 0.08) * 0.5 + 0.5;
        const r = Math.floor(180 + factor * 50);
        const g = Math.floor(130 + factor * 40);
        const b = Math.floor(90 + factor * 30);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, y, 1024, 1);
      }
      // Great Red Spot
      ctx.fillStyle = '#b33e24';
      ctx.beginPath();
      ctx.ellipse(650, 310, 65, 38, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255, 200, 150, 0.3)';
      ctx.beginPath();
      ctx.ellipse(650, 310, 45, 22, 0, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'saturn': {
      // Golden yellow/tan muted bands
      for (let y = 0; y < 512; y++) {
        const factor = Math.sin(y * 0.05) * 0.5 + 0.5;
        const r = Math.floor(215 + factor * 25);
        const g = Math.floor(185 + factor * 30);
        const b = Math.floor(135 + factor * 25);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0, y, 1024, 1);
      }
      break;
    }
    case 'uranus': {
      // Pale cyan-aquamarine
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#75c8d6');
      grad.addColorStop(0.5, '#9ee2ed');
      grad.addColorStop(1, '#62b8c7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);
      break;
    }
    case 'neptune': {
      // Deep cobalt azure with subtle methane cloud bands
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, '#2b4bb5');
      grad.addColorStop(0.5, '#3b62db');
      grad.addColorStop(1, '#1b3394');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);
      // Small white cloud streaks
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fillRect(400, 200, 180, 4);
      ctx.fillRect(440, 208, 120, 3);
      break;
    }
    default: {
      ctx.fillStyle = '#888888';
      ctx.fillRect(0, 0, 1024, 512);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Procedural Saturn Ring Texture
export function createSaturnRingTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  const grad = ctx.createLinearGradient(0, 0, 512, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0)');
  grad.addColorStop(0.1, 'rgba(190, 170, 140, 0.8)');
  grad.addColorStop(0.45, 'rgba(215, 195, 160, 0.9)');
  // Cassini Division gap
  grad.addColorStop(0.58, 'rgba(10, 10, 15, 0.05)');
  grad.addColorStop(0.62, 'rgba(10, 10, 15, 0.05)');
  grad.addColorStop(0.65, 'rgba(180, 160, 130, 0.7)');
  grad.addColorStop(0.9, 'rgba(160, 140, 110, 0.5)');
  grad.addColorStop(1, 'rgba(0,0,0,0)');

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}


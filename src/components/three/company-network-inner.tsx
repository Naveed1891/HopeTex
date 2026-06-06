"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Image, useTexture } from "@react-three/drei";
import type { Group } from "three";
import * as THREE from "three";
import { ParticleHalo } from "@/components/three/shared/particle-halo";
import { brandHubImage, marketingImages } from "@/config/images";

const BRAND = {
  primary: "#6c177c",
  accent: "#b83bb2",
  secondary: "#009ddb",
};

/** Base orbit speed — ~55s per full turn on outer ring */
const ORBIT_BASE = (Math.PI * 2) / 55;

function positionOnRing(hours: number, radius: number): [number, number, number] {
  const theta = (hours / 12) * Math.PI * 2;
  return [Math.sin(theta) * radius, Math.cos(theta) * radius, 0];
}

/** object-fit: contain — fit inside a square safe area, preserve aspect ratio */
function containInSquare(viewW: number, viewH: number, boxSize: number): [number, number] {
  const aspect = viewW / viewH;
  if (aspect >= 1) {
    return [boxSize, boxSize / aspect];
  }
  return [boxSize * aspect, boxSize];
}

const P = marketingImages.partners;

/** Reference layout: inner 3, middle 2, outer 5 — real partner SVGs */
const RING_LAYERS: { radius: number; speedMul: number; nodes: OrbitNode[] }[] = [
  {
    radius: 1.02,
    speedMul: 1.28,
    nodes: [
      { logo: P.wise, hours: 9, viewW: 640, viewH: 335 },
      { logo: P.stripe, hours: 3, viewW: 1200, viewH: 500 },
      { logo: P.mercury, hours: 5, viewW: 2000, viewH: 500 },
    ],
  },
  {
    radius: 1.68,
    speedMul: 1.1,
    nodes: [
      { logo: P.paypal, hours: 11, viewW: 3840, viewH: 2160 },
      { logo: P.revolut, hours: 1, viewW: 2560, viewH: 1707 },
    ],
  },
  {
    radius: 2.42,
    speedMul: 1,
    nodes: [
      { logo: P.airwallex, hours: 12, viewW: 2435, viewH: 334 },
      { logo: P.perfectMoney, hours: 9.15, viewW: 3840, viewH: 2160 },
      { logo: P.tide, hours: 2.85, viewW: 1457, viewH: 600 },
      { logo: P.pingpong, hours: 4.85, viewW: 2402, viewH: 741 },
      { logo: P.brex, hours: 7.15, viewW: 4723, viewH: 1250 },
    ],
  },
];

type OrbitNode = {
  logo: string;
  hours: number;
  viewW: number;
  viewH: number;
};

const CENTER_DISC_RADIUS = 0.44;
/** Center hub — shared with navbar icon (`brandHubImage`) */
const CENTER_BRAND_LOGO = brandHubImage;
const CENTER_LOGO_SAFE_FRACTION = 0.64;
const ORBIT_DISC_RADIUS = 0.24;
const ORBIT_SAFE_FRACTION = 0.65;

const ORBIT_LOGO_SAFE_SIZE = ORBIT_DISC_RADIUS * 2 * ORBIT_SAFE_FRACTION;
const CENTER_LOGO_SAFE_SIZE = CENTER_DISC_RADIUS * 2 * CENTER_LOGO_SAFE_FRACTION;

const ALL_TEXTURE_URLS = [
  CENTER_BRAND_LOGO,
  ...RING_LAYERS.flatMap((layer) => layer.nodes.map((node) => node.logo)),
];

type Palette = {
  coreGlow: string;
  coreGlowOpacity: number;
  ring: string;
  ringOpacity: number;
  disc: string;
  shadow: string;
  particle: string;
  ambient: number;
};

function getPalette(isDark: boolean): Palette {
  if (isDark) {
    return {
      coreGlow: BRAND.accent,
      coreGlowOpacity: 0.55,
      ring: "#ffffff",
      ringOpacity: 0.12,
      disc: "#f2f4f8",
      shadow: "#000000",
      particle: BRAND.accent,
      ambient: 0.45,
    };
  }
  return {
    coreGlow: BRAND.primary,
    coreGlowOpacity: 0.5,
    ring: BRAND.primary,
    ringOpacity: 0.14,
    disc: "#ffffff",
    shadow: "#1a2036",
    particle: BRAND.secondary,
    ambient: 0.72,
  };
}

function AmbientGlow({ palette }: { palette: Palette }) {
  return (
    <group position={[0, 0, -0.03]}>
      <mesh renderOrder={-2}>
        <circleGeometry args={[2.35, 64]} />
        <meshBasicMaterial
          color={palette.coreGlow}
          transparent
          opacity={palette.coreGlowOpacity * 0.28}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh renderOrder={-1}>
        <circleGeometry args={[1.15, 48]} />
        <meshBasicMaterial
          color={palette.coreGlow}
          transparent
          opacity={palette.coreGlowOpacity * 0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function OrbitRingLine({
  radius,
  palette,
}: {
  radius: number;
  palette: Palette;
}) {
  return (
    <mesh renderOrder={0}>
      <ringGeometry args={[radius - 0.004, radius + 0.004, 128]} />
      <meshBasicMaterial
        color={palette.ring}
        transparent
        opacity={palette.ringOpacity}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function HopeTexCore({ palette }: { palette: Palette }) {
  return (
    <group position={[0, 0, 0.06]} rotation={[0, 0, 0]}>
      <mesh renderOrder={1}>
        <circleGeometry args={[0.56, 64]} />
        <meshBasicMaterial
          color={palette.coreGlow}
          transparent
          opacity={palette.coreGlowOpacity * 0.85}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh position={[0, 0, 0.001]} renderOrder={2}>
        <circleGeometry args={[CENTER_DISC_RADIUS, 56]} />
        <meshBasicMaterial color={palette.disc} />
      </mesh>
      <Suspense fallback={null}>
        <Image
          url={CENTER_BRAND_LOGO}
          scale={CENTER_LOGO_SAFE_SIZE}
          position={[0, 0, 0.025]}
          transparent
          toneMapped={false}
        />
      </Suspense>
      <pointLight intensity={0.4} color={palette.coreGlow} distance={2.2} decay={2} />
    </group>
  );
}

function LogoDisc({
  logo,
  position,
  palette,
  viewW,
  viewH,
}: {
  logo: string;
  position: [number, number, number];
  palette: Palette;
  viewW: number;
  viewH: number;
}) {
  const [w, h] = containInSquare(viewW, viewH, ORBIT_LOGO_SAFE_SIZE);

  return (
    <Billboard position={position} follow lockX lockY lockZ>
      <group>
        <mesh renderOrder={3}>
          <circleGeometry args={[ORBIT_DISC_RADIUS, 48]} />
          <meshBasicMaterial color={palette.disc} />
        </mesh>
        <Suspense fallback={null}>
          <Image
            url={logo}
            scale={[w, h]}
            position={[0, 0, 0.02]}
            transparent
            toneMapped={false}
          />
        </Suspense>
      </group>
    </Billboard>
  );
}

function OrbitingRingGroup({
  layer,
  palette,
  index,
}: {
  layer: (typeof RING_LAYERS)[number];
  palette: Palette;
  index: number;
}) {
  const ringRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;
    const direction = index % 2 === 0 ? 1 : -1;
    ringRef.current.rotation.z += direction * layer.speedMul * ORBIT_BASE * delta;
  });

  return (
    <group ref={ringRef}>
      <OrbitRingLine radius={layer.radius} palette={palette} />
      {layer.nodes.map((node) => (
        <LogoDisc
          key={node.logo}
          logo={node.logo}
          position={positionOnRing(node.hours, layer.radius)}
          palette={palette}
          viewW={node.viewW}
          viewH={node.viewH}
        />
      ))}
    </group>
  );
}

function OrbitingRings({ palette }: { palette: Palette }) {
  return (
    <>
      {RING_LAYERS.map((layer, i) => (
        <OrbitingRingGroup key={layer.radius} layer={layer} palette={palette} index={i} />
      ))}
    </>
  );
}

type SceneProps = {
  mouse: { x: number; y: number };
  scroll: number;
  isDark?: boolean;
};

function EcosystemScene({ mouse, scroll, isDark = false }: SceneProps) {
  const orbitParallax = useRef<Group>(null);
  const palette = useMemo(() => getPalette(isDark), [isDark]);

  useTexture(ALL_TEXTURE_URLS);

  useFrame(() => {
    if (!orbitParallax.current) return;
    orbitParallax.current.position.x = THREE.MathUtils.lerp(
      orbitParallax.current.position.x,
      mouse.x * 0.08,
      0.04
    );
    orbitParallax.current.position.y = THREE.MathUtils.lerp(
      orbitParallax.current.position.y,
      mouse.y * 0.06 + scroll * 0.04,
      0.04
    );
  });

  return (
    <group>
      <ParticleHalo
        count={40}
        radius={2.55}
        color={palette.particle}
        opacity={isDark ? 0.08 : 0.04}
      />
      <AmbientGlow palette={palette} />
      <HopeTexCore palette={palette} />
      <group ref={orbitParallax}>
        <ambientLight intensity={palette.ambient} />
        <directionalLight position={[0, 0, 6]} intensity={isDark ? 0.92 : 0.8} />
        <directionalLight position={[-2, 2, 4]} intensity={0.2} color={BRAND.secondary} />
        <OrbitingRings palette={palette} />
      </group>
    </group>
  );
}

type CompanyNetworkInnerProps = {
  mouse: { x: number; y: number };
  scroll: number;
  isDark?: boolean;
};

export default function CompanyNetworkInner({
  mouse,
  scroll,
  isDark = false,
}: CompanyNetworkInnerProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9.6], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        premultipliedAlpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.domElement.style.background = "transparent";
      }}
      style={{ background: "transparent", overflow: "visible" }}
      className="!overflow-visible"
    >
      <Suspense fallback={null}>
        <EcosystemScene mouse={mouse} scroll={scroll} isDark={isDark} />
      </Suspense>
    </Canvas>
  );
}

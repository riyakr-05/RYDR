import React, { useState } from 'react';
import { 
  Rotate3d, 
  Sparkles, 
  Volume2, 
  Palette, 
  ArrowRight
} from 'lucide-react';
import { LUXURY_VEHICLES } from '../../data/mockData';
import type { Vehicle } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ShowroomModuleProps {
  onConsultCoPilot: (vehicle: Vehicle) => void;
}

export const ShowroomModule: React.FC<ShowroomModuleProps> = ({
  onConsultCoPilot,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(LUXURY_VEHICLES[0]);
  const [activeView, setActiveView] = useState<'exterior' | 'interior'>('exterior');
  const [selectedColor, setSelectedColor] = useState('Nordic Sage Metallic');
  const [selectedLeather, setSelectedLeather] = useState('Scandinavian Aniline Tan');
  const [soundMode, setSoundMode] = useState<'quiet' | 'whir' | 'v8'>('quiet');
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const paintColors = [
    { name: 'Nordic Sage Metallic', hex: '#A8B9A4', tag: 'Bespoke Signature' },
    { name: 'Alabaster Ivory', hex: '#F4F0E8', tag: 'Classic' },
    { name: 'Obsidian Plum Gloss', hex: '#3B3346', tag: 'Atelier Exclusive' },
    { name: 'Sunset Peach Satin', hex: '#E2B8A0', tag: 'Limited Edition' },
    { name: 'St. Moritz Silver', hex: '#CBD2D6', tag: 'Technical' },
  ];

  const interiorLeathers = [
    { name: 'Scandinavian Aniline Tan', hex: '#B88258' },
    { name: 'Cashmere Plum', hex: '#584C66' },
    { name: 'Arctic Chalk Nappa', hex: '#EAE6DD' },
    { name: 'Obsidian Carbon Stealth', hex: '#26242A' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Studio Header */}
      <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border border-lavender/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-plum">
                Showroom Atelier
              </span>
              <Badge variant="peach" size="sm" icon={<Rotate3d className="w-3.5 h-3.5 text-peach-dark" />}>
                360° Studio Spec
              </Badge>
              <Badge variant="plum" size="sm">
                Private Viewing Room
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-plum-light max-w-2xl leading-relaxed">
              Immerse yourself in the bespoke atelier. Audition bespoke acoustic signatures, configure full-grain organic leathers, and explore transcontinental vehicle dynamics.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5 text-peach" />}
              onClick={() => onConsultCoPilot(selectedVehicle)}
            >
              Analyze in Co-Pilot
            </Button>
          </div>
        </div>
      </div>

      {/* Flagship Vehicle Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {LUXURY_VEHICLES.map((v) => {
          const isSelected = selectedVehicle.id === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setSelectedVehicle(v)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-lavender text-plum border-lavender-deep shadow-soft'
                  : 'bg-white text-plum-light border-lavender/60 hover:bg-ivory'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-plum-muted block">
                  {v.category}
                </span>
                <p className={`font-serif text-base font-semibold ${isSelected ? 'text-plum' : 'text-plum-light'}`}>
                  {v.name}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-medium">
                <span className="text-plum">${v.startingPrice.toLocaleString()}</span>
                <span className="text-[10px] text-plum-muted">{v.propulsion}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Virtual Studio Display */}
      <div className="bg-white rounded-3xl border border-lavender/80 shadow-soft-lg overflow-hidden">
        {/* Visual Viewport */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-ivory overflow-hidden">
          <img
            src={activeView === 'exterior' ? selectedVehicle.exteriorImage : selectedVehicle.interiorImage}
            alt={selectedVehicle.name}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* View Toggle (Exterior vs Interior) */}
          <div className="absolute top-4 left-4 z-10 flex items-center p-1 bg-white/80 backdrop-blur-md rounded-2xl border border-lavender/80 shadow-soft">
            <button
              onClick={() => setActiveView('exterior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeView === 'exterior'
                  ? 'bg-plum text-ivory shadow-xs'
                  : 'text-plum-light hover:text-plum'
              }`}
            >
              Exterior Studio
            </button>
            <button
              onClick={() => setActiveView('interior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeView === 'interior'
                  ? 'bg-plum text-ivory shadow-xs'
                  : 'text-plum-light hover:text-plum'
              }`}
            >
              Interior Sanctuary
            </button>
          </div>

          {/* Color & Specification Floating Badge */}
          <div className="absolute bottom-4 left-4 z-10 bg-plum/85 backdrop-blur-md text-ivory p-4 rounded-2xl border border-lavender-accent/30 max-w-sm">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-lavender-accent block">
              Atelier Preview Spec
            </span>
            <h4 className="font-serif text-lg font-semibold">{selectedVehicle.name}</h4>
            <p className="text-xs text-ivory/80 mt-0.5">
              Finish: <strong>{selectedColor}</strong> • Trim: <strong>{selectedLeather}</strong>
            </p>
          </div>

          {/* 360 Rotation Simulated Icon */}
          <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-lavender/80 shadow-soft text-xs text-plum font-semibold flex items-center gap-1.5">
            <Rotate3d className="w-4 h-4 text-lavender-deep animate-spin [animation-duration:8s]" />
            <span>Interactive 360° Studio</span>
          </div>
        </div>

        {/* Customization Atelier Controls */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Exterior & Interior Swatches */}
            <div className="lg:col-span-7 space-y-6">
              {/* Exterior Colors */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-plum uppercase tracking-wider flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-lavender-deep" />
                    Exterior Finish: <strong className="text-plum ml-1">{selectedColor}</strong>
                  </span>
                  <span className="text-[11px] text-plum-muted">Hand-polished 7-layer coat</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {paintColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center gap-2 p-2 pr-3 rounded-xl border transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? 'border-plum bg-lavender/30 ring-2 ring-lavender-deep/20'
                          : 'border-lavender/60 hover:bg-ivory'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-plum/20 shadow-xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-medium text-plum">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interior Leathers */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-plum uppercase tracking-wider">
                    Interior Aniline Leather: <strong className="text-plum ml-1">{selectedLeather}</strong>
                  </span>
                  <span className="text-[11px] text-plum-muted">Scandinavian organic chestnut hide</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {interiorLeathers.map((leather) => (
                    <button
                      key={leather.name}
                      onClick={() => setSelectedLeather(leather.name)}
                      className={`flex items-center gap-2 p-2 pr-3 rounded-xl border transition-all cursor-pointer ${
                        selectedLeather === leather.name
                          ? 'border-plum bg-lavender/30 ring-2 ring-lavender-deep/20'
                          : 'border-lavender/60 hover:bg-ivory'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-plum/20 shadow-xs"
                        style={{ backgroundColor: leather.hex }}
                      />
                      <span className="text-xs font-medium text-plum">{leather.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Acoustic Soundstage Preview Simulator */}
            <div className="lg:col-span-5 bg-ivory rounded-3xl p-5 border border-lavender/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-plum uppercase tracking-wider flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-lavender-deep" />
                    Acoustic Soundstage
                  </span>
                  <Badge variant="plum" size="sm">
                    B&O 3D Spatial
                  </Badge>
                </div>
                <p className="text-xs text-plum-light mb-4">
                  Experience cabin acoustic isolation or active synthesized powertrain frequencies.
                </p>

                {/* Sound Modes */}
                <div className="space-y-2">
                  {[
                    { id: 'quiet', title: 'Acoustic Sanctuary (54 dB)', desc: 'Zero exterior frequencies, active noise cancelling glass.' },
                    { id: 'whir', title: 'Torque Surge Frequency', desc: 'Synthesized harmonic whine tuned for spirited acceleration.' },
                    { id: 'v8', title: 'Hybrid V8 Symphony', desc: 'Dual-active valve baritone with deep exhaust overrun.' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSoundMode(s.id as any);
                        setIsPlayingSound(true);
                      }}
                      className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        soundMode === s.id
                          ? 'bg-white border-lavender-deep shadow-xs text-plum'
                          : 'bg-white/60 border-lavender/50 text-plum-light hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-plum">{s.title}</span>
                        {soundMode === s.id && (
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-3 bg-lavender-deep rounded animate-pulse" />
                            <span className="w-1 h-5 bg-lavender-deep rounded animate-pulse [animation-delay:0.2s]" />
                            <span className="w-1 h-2 bg-lavender-deep rounded animate-pulse [animation-delay:0.4s]" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-plum-muted mt-0.5">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-lavender/60 mt-4 flex items-center justify-between">
                <span className="text-xs text-plum font-semibold">Soundstage: Active</span>
                <button
                  onClick={() => setIsPlayingSound(!isPlayingSound)}
                  className="text-xs text-lavender-deep font-semibold hover:underline cursor-pointer"
                >
                  {isPlayingSound ? 'Mute Preview' : 'Audition Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Action */}
          <div className="pt-4 border-t border-lavender/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-plum-light">
                Ready to configure this exact specification?
              </span>
              <p className="text-sm font-semibold text-plum">
                Estimated Delivery: 4-6 Weeks to Beverly Hills Atelier
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="lavender"
                size="md"
                onClick={() => alert(`Private showroom appointment request forwarded to Clara Beauchamp for ${selectedVehicle.name}.`)}
              >
                Schedule Private Viewing
              </Button>
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-peach" />}
                iconPosition="right"
                onClick={() => onConsultCoPilot(selectedVehicle)}
              >
                Open in AI Co-Pilot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
